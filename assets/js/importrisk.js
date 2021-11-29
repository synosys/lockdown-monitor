(function(){
	
console.log(Object.keys(window))
	
var xr = [0,0.1]
var bar_opacity = 0.6
var N_max_countries = 50
var N_airports = 7		

var epistate = epistate_omicron;
var datadir = "/data/import_risk/2021/"
var current_cases_file = "/data/current_cases.json"

var contcolor = d3.scaleOrdinal()
			.domain(continents)
			.range(continentcolors);
	
var regcolor =  d3.scaleOrdinal().domain(regions)
			.range(regioncolors);		


var margin = {top: 20, right: 50, bottom: 80, left: 140},	
    width = 600 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

var legmargin = {top: 760, right: 10, bottom: 10, left: 10},	
    legwidth = 600 - legmargin.left - legmargin.right

var insetmargin = {top: 320, right: 160, bottom: 130, left: 280},	
    insetwidth = 600 - insetmargin.left - insetmargin.right,
    insetheight = 700 - insetmargin.top - insetmargin.bottom;


var display_countries = d3.selectAll("#ir_countries-display").append("svg")
	.attr("width",width + margin.left + margin.right)
	.attr("height",height + margin.top + margin.bottom)
	//.style("border","1px solid black")
	.attr("class","explorable_display")	

console.log(display_countries)

var loading = display_countries.append("text").text("Loading ...")
	.attr("transform","translate("+(width/2+margin.left)+","+(height/2+margin.top)+")")
	.style("text-anchor","middle")
	.style("font-size",36)
	.style("opacity",1)
		
var plot_countries = display_countries.append("g")
    		.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var plot_legend = display_countries.append("g")
    		.attr("transform","translate(" + legmargin.left + "," + legmargin.top + ")");

var plot_inset = display_countries.append("g")
    		.attr("transform","translate(" + insetmargin.left + "," + insetmargin.top + ")");

var y = d3.scaleBand().range([height, 0]).padding(0.1);
var x = d3.scaleLinear().domain(xr).range([0, width]);
var xl = d3.scaleLinear().domain([0,continents.length]).range([0, legwidth]);
var c = d3.scaleLinear().range(["grey","darkred"])
var ss = d3.scaleLinear().range([2,10])

var y_inset = d3.scaleBand().range([insetheight, 0]).padding(0.5);
var x_inset = d3.scaleLinear().range([0, insetwidth]);

var fo = d3.format(".3f");
var foo = d3.format(".0f");
var legend = plot_legend.selectAll(".legend").data(continents).enter()
			.append("g")
			.attr("class","legend")
			.attr("transform",function(d,i){
				return "translate("+xl(i)+","+5+")"
			})

legend.append("rect").attr("width",10)
			.attr("height",10)
			.style("fill",function(d){return contcolor(d)})
			.style("opacity",bar_opacity)

legend.append("text").text(function(d){return d}).attr("transform","translate(20,10)")


var countries_with_cases;
	
var import_risk_world;

var master_data_queue = d3.queue();

master_data_queue.defer(d3.json,current_cases_file)

Object.keys(epistate).forEach(function(r){
		master_data_queue.defer(d3.json,datadir+"airports_"+r+"_wan_hierarchy.json")
})
	
console.log(epistate)

master_data_queue.awaitAll(function(error,files){
	
		loading.transition().style("opacity",0).remove()
		
		current_cases = files[0];
		countries_with_cases = current_cases["countries"];
	
		ss.domain(d3.extent(countries_with_cases
			.filter(function(x){return x.name!="China" && x.name!="Others"}),function(c){return c.confirmed_cases}))

		countries = []
		
		files.shift()

		import_risk_world = integrate_import_risk_world(epistate,files)
		world=JSON.parse(JSON.stringify(import_risk_world));
	
		world.children.forEach(function(continent){
			var continent_name=continent.name;
			continent.children.forEach(function(region){
				region.children.forEach(function(country){
					countries.push({"country":country.name,
									ir:country.import_probability,
									airports:country.children,
									continent_name:continent_name})
				})
			})
		})
		gam = countries.filter(function(d){return d.country=="South Africa" | d.country=="Botswana"})
		d3.selectAll("#ir_china_total").text(foo(100*(gam[0].ir+gam[1].ir)))
		d3.selectAll("#ir_rest").text(foo(100*(1-(gam[0].ir+gam[1].ir))))

		data = countries.filter(function(d){return d.country!="South Africa" & d.country!="Botswana"})

		data.sort(function(a,b){ return b.ir - a.ir})

		data.forEach(function(d,i){
			//console.log(i+" "+d.country+":"+d.ir)
		})


		data=data.slice(0,N_max_countries)
		data=data.reverse();

		y.domain(data.map(function(d) { return d.country; }));
	
		var barbase = plot_countries.selectAll(".barbase")
	     	.data(data)
	   		.enter().append("g")
			.attr("transform",function(d){
	 			return "translate("+(x(xr[0]))+","+y(d.country)+")"
	 	   	})
		   	.attr("class", "barbase")
			.style("opacity",bar_opacity)
			.on("mouseover", handleMouseOver)
	        .on("mouseout", handleMouseOut);
	
		barbase.append("rect")
	   	  	.attr("width", function(d) {return x(d.ir); } )
			.attr("y", 0 )
			.attr("height", y.bandwidth())	
			.style("fill",function(d){
				 return contcolor(d.continent_name)
			 })
	
		barbase.append("text")
			 .text(function(d){return fo(100*d.ir) + "%"})
			 .attr("transform",function(d){
			 	return "translate("+(x(d.ir)+5)+","+(y.bandwidth()-3)+")"
			 })
			 .style("font-size",y.bandwidth())
		
		/*
		barbase.append("circle")
			 .attr("r",function(d){
				 var x = cases_in_country(d.country);
				 return x>0 ? ss(x) :0 })
			 .attr("transform",function(d){return "translate("+(x(xr[1]))+","+y.bandwidth()/2+")"})
			.style("fill","darkred")
	
		barbase.append("text").text(function(d){
		 var x = cases_in_country(d.country);
		 return x>0 ? x :""
		})
			 .attr("transform",function(d){return "translate("+(x(xr[1])+35)+","+3*y.bandwidth()/4+")"})
			.style("text-anchor","end")
			.style("font-weight","bold")
			.style("fill","darkred")
			.style("font-size",10)
		*/

		var airports=data[19].airports;
		airports.sort(function(a,b){ return b.import_probability - a.import_probability})
	
		plot_inset.selectAll(".insettitle").data([data[19]]).enter()
			.append("text").attr("class","insettitle")
			.text(function(d){return "top airports in " + d.country})
			.attr("transform","translate(20,-10)")
			.style("font-size",14)
	
		var lmax=airports.length
	
		if (airports.length > N_airports) {
			airports=airports.slice(0,N_airports)		
		} else {
			ll = airports.length
			for (i=ll;i<N_airports;i++){
				airports.push({iata:i,import_probability:0})
			}
		} 
	
		airports=airports.reverse();
	
		y_inset.domain(airports.map(function(d) { return d.iata; }));
		x_inset.domain([0,d3.max(airports,function(d){return d.import_probability})])	 

		c.domain(d3.extent(airports,function(d){return d.import_probability}))
	
	 	var insetbarbase = plot_inset.selectAll(".insetbarbase")
				.data(airports)
	    		.enter().append("g")
	 			.attr("transform",function(d){
	  				return "translate("+(x_inset(0))+","+y_inset(d.iata)+")"
	  	   		})
	 	   		.attr("class", "insetbarbase")
 			
   		 
		insetbarbase.append("rect")
		   	  	.attr("width", function(d) {return x_inset(d.import_probability); } )
				.attr("y", 0 )
				.attr("height", y_inset.bandwidth())	
				.style("fill",function(d){
					 return c(d.import_probability)
				 })
			 
		insetbarbase.append("text")
		   		 .text(function(d,i){return i<N_airports-lmax ? "": fo(100*d.import_probability) + "%"})
		   		 .attr("transform",function(d){
		   		 	return "translate("+(x_inset(d.import_probability)+5)+","+(y_inset.bandwidth()-3)+")"
		   		 })
		   		 .style("font-size",0.8*y.bandwidth())
				 .attr("class","irnumber")

		insetbarbase.append("text")
		   		 .text(function(d,i){return i<N_airports-lmax ? "": d.airport_name})
		   		 .attr("transform",function(d){
		   		 	return "translate("+(10)+","+(-5)+")"
		   		 })
		   		 .style("font-size",10)
				 .attr("class","airname")
	
	   plot_countries.append("g")
	         .attr("transform", "translate(0," + height + ")")
	         .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format(".2%")));

	   plot_countries.append("g")
	         .call(d3.axisLeft(y))
			 .selectAll("text")
			 .attr("class","no_cases")
   

	 plot_inset.append("g").attr("class","insetxaxis")
	         .attr("transform", "translate(0," + insetheight + ")")
	         .call(d3.axisBottom(x_inset).ticks(3).tickFormat(d3.format(".2%")));


	plot_inset.append("g").attr("class","insetyaxis").call(
		d3.axisLeft(y_inset).tickFormat(function(d,i){return i<N_airports-lmax ?  "" : d}));
		
})
	
		

function cases_in_country(country){
				res = false;
			 	countries_with_cases.forEach(function(c){		
			 		if(country==c.name) {
						
						res=c.confirmed_cases}			
			 	})
return res
}



function update_inset(d,i){
	airports = d.airports.slice();
	
	airports.sort(function(a,b){ return b.import_probability - a.import_probability})
	
	plot_inset.selectAll(".insettitle").data([d])
		.text(function(d){return "top airports in " + d.country})
		.attr("transform","translate(20,-10)")
		.style("font-size",14)
	
	var lmax=airports.length
	
		
	if (airports.length > N_airports) {
		airports=airports.slice(0,N_airports)		
	} else {
		var ll = airports.length
		for (i=ll;i<N_airports;i++){
			airports.push({iata:i,import_probability:0})
		}
	} 
	
	airports=airports.reverse();
	
	y_inset.domain(airports.map(function(d) { return d.iata; }));
	x_inset.domain([0,d3.max(airports,function(d){return d.import_probability})])	 

	d3.selectAll(".insetxaxis").call(d3.axisBottom(x_inset).ticks(3).tickFormat(d3.format(".2%")));
    d3.selectAll(".insetyaxis").call(d3.axisLeft(y_inset).tickFormat(function(d,i){return i<N_airports-lmax ?  "" : d}));

	c.domain(d3.extent(airports,function(d){return d.import_probability}))
	
	plot_inset.selectAll(".insetbarbase")
			.data(airports)
 			.attr("transform",function(d){
  				return "translate("+(x_inset(0))+","+y_inset(d.iata)+")"
  	   		})
 			   		 
	plot_inset.selectAll("rect").data(airports).transition()
	   	  	.attr("width", function(d) {return x_inset(d.import_probability); } )
			.attr("y", 0 )
			.attr("height", y_inset.bandwidth())	
			.style("fill",function(d){
				 return c(d.import_probability)
			 })
			 
	plot_inset.selectAll(".irnumber").data(airports)
	   		 .text(function(d,i){
				 console.log(lmax)
				 return i<N_airports-lmax ? "" : fo(100*d.import_probability) + "%"})
	   		 .attr("transform",function(d){
	   		 	return "translate("+(x_inset(d.import_probability)+5)+","+(y_inset.bandwidth()-5)+")"
	   		 })

	plot_inset.selectAll(".airname").data(airports)
	   		 .text(function(d,i){return i<N_airports-lmax ? "": d.airport_name})
	   		 .attr("transform",function(d){
	   		 	return "translate("+(10)+","+(-5)+")"
	   		 })
		
	
}

function handleMouseOver(d, i) {  // Add interactivity

            // Use D3 to select element, change color and size
            d3.select(this).style("opacity",1);
			d3.select(this).select("rect").style("stroke","black").style("stroke-width","0.5")
			d3.select(this).select("text").style("font-weight","bold")
			
			update_inset(d,i)
			
            
          }

function handleMouseOut(d, i) {
	            d3.select(this).style("opacity",bar_opacity);
				d3.select(this).select("rect").style("stroke","none")
				d3.select(this).select("text").style("font-weight","normal")
 }


})()