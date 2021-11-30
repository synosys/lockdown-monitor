(function(){
	
var xr = [0,0.03]
var bar_opacity = 1
var N_airports = 40	
var epistate = epistate_omicron;
var datadir = "/data/import_risk/2021/"
//var current_cases_file = "/data/current_cases.json"	

var contcolor = d3.scaleOrdinal()
			.domain(continents)
			.range(continentcolors);
	
var regcolor =  d3.scaleOrdinal().domain(regions)
			.range(regioncolors);		

var margin = {top: 20, right: 30, bottom: 80, left: 180},	
		    width = 600 - margin.left - margin.right,
		    height = 700 - margin.top - margin.bottom;

var legmargin = {top: 660, right: 10, bottom: 10, left: 10},	
    legwidth = 600 - legmargin.left - legmargin.right

var display_countries = d3.selectAll("#ir_other_airports-display").append("svg")
	.attr("width",width + margin.left + margin.right)
	.attr("height",height + margin.top + margin.bottom)
//	.style("border","1px solid black")
	.attr("class","explorable_display")
	.style("overflow","visible")	
	
var plot_countries = display_countries.append("g")
    		.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var plot_legend = display_countries.append("g")
    		.attr("transform","translate(" + legmargin.left + "," + legmargin.top + ")");

var y = d3.scaleBand().range([height, 0]).padding(0.1);
var x = d3.scaleLinear().domain(xr).range([0, width]);
var c = d3.scaleLinear().range(["blanchedAlmond","darkred"])
var xl = d3.scaleLinear().domain([0,continents.length]).range([0, legwidth]);

var fo = d3.format(".3f");

var legend = plot_legend.selectAll(".legend").data(continents).enter()
			.append("g")
			.attr("class","legend")
			.attr("transform",function(d,i){
				return "translate("+xl(i)+","+5+")"
			})

legend.append("rect").attr("width",10).attr("height",10).style("fill",function(d){return contcolor(d)})
			.style("opacity",bar_opacity)
legend.append("text").text(function(d){return d}).attr("transform","translate(20,10)")

var	airports = []

var Q = d3.queue();

//Q.defer(d3.json,current_cases_file)

Object.keys(epistate).forEach(function(r){
					Q.defer(d3.json,datadir+"airports_"+r+"_wan_hierarchy.json")
})

Q.awaitAll(function(error,files){
		
					//current_cases = files[0];
					//countries_with_cases = current_cases["countries"];
					countries = []
		
					//files.shift()

					import_risk_world = integrate_import_risk_world(epistate,files)
					world=JSON.parse(JSON.stringify(import_risk_world));
		
					world.children.forEach(function(continent){
						var continent_name=continent.name;
						continent.children.forEach(function(region){
							region.children.forEach(function(country){
								country.children.forEach(function(airport){
									if(country.name!="South Africa" & country.name!="Botswana")
										{
											airports.push(airport)
										}
								})
							})
						})
					})
					
					airports.forEach(function(d){
						d.airport_name = d.airport_name.replace("Airport","")
						d.airport_name = d.airport_name.replace("International","")	
						d.airport_name = d.airport_name.replace("Apt","")	
						d.airport_name = d.airport_name.replace("Arpt","")
						d.airport_name = d.airport_name.replace("Intl","")
						d.airport_name = d.airport_name.trim()
					})
					data = airports;
					
					data.sort(function(a,b){ return b.import_probability - a.import_probability})
					data=data.slice(0,N_airports)
					data=data.reverse();
	
					c.domain([0,d3.max(data,function(d){return d.import_probability})])
	
					y.domain(data.map(function(d) { return d.iata + " ("+d.airport_name+")"; }));
	
					var barbase = plot_countries.selectAll(".barbase")
				     	.data(data)
				   		.enter().append("g")
						.attr("transform",function(d){
				 			return "translate("+(x(xr[0]))+","+y(d.iata + " ("+d.airport_name+")")+")"
				 	   	})
					   	.attr("class", "barbase")
						.style("opacity",bar_opacity)
	
					barbase.append("rect")
				   	  	.attr("width", function(d) {return x(d.import_probability); } )
						.attr("y", 0 )
						.attr("height", y.bandwidth())	
						.style("fill",function(d){
							return contcolor(d.continent_name)
						 })
	
					barbase.append("text")
						 .text(function(d){
			
							 return fo(100*d.import_probability) + "%"})
						 .attr("transform",function(d){
						 	return "translate("+(x(d.import_probability)+5)+","+(y.bandwidth()-3)+")"
						 })
						 .style("font-size",y.bandwidth())
	
	
				   plot_countries.append("g")
				         .attr("transform", "translate(0," + height + ")")
				         .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format(".2%")));

				   plot_countries.append("g")
				         .call(d3.axisLeft(y))
});
					
})()