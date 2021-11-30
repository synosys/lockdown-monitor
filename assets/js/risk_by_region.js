(function(){

	var xr = [0,0.02]
	var bar_opacity = 1
	var N_max_countries = 10
	var N_airports = 10		
		
	var epistate = epistate_omicron;
	var datadir = "/data/import_risk/2021/"
	var current_cases_file = "/data/current_cases.json"	

	var contcolor = d3.scaleOrdinal()
				.domain(continents)
				.range(continentcolors);
		
	var regcolor =  d3.scaleOrdinal().domain(regions)
				.range(regioncolors);		


	var margin = {top: 20, right: 50, bottom: 30, left: 140},	
	    width = 600 - margin.left - margin.right,
	    height = 250 - margin.top - margin.bottom;
		


	var y = d3.scaleBand().range([height, 0]).padding(0.1);
	var x = d3.scaleLinear().domain(xr).range([0, width]);

	var fo = d3.format(".3f");

	//var countries_with_cases;
	var countries = []

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
						countries.push({"country":country.name,
										ir:country.import_probability,
										airports:country.children,
										continent_name:continent_name})
					})
				})
			})
			
			continents = world.children;
			
			continents.forEach(function(cont){
				var lcont= cont.name.toLowerCase()	
				if (lcont=="oceania"){
					y.range([0.5*height,0])
				} else {
					y.range([height,0])
				}
				console.log("#ir_"+lcont+"-display")
				var display_countries = d3.selectAll("#ir_"+lcont+"-display").append("svg")
					.attr("width",width + margin.left + margin.right)
					.attr("height",(lcont=="oceania" ? 0.5*height : height) + margin.top + margin.bottom)
					.attr("class","explorable_display")	

				var plot_countries = display_countries.append("g")
					.attr("transform","translate(" + margin.left + "," + margin.top + ")");

					
				cdata = countries.filter(function(d){return d.country!="South Africa" & d.country!="Botswana" && d.continent_name==cont.name})
				cdata.sort(function(a,b){ return b.ir - a.ir})
				cdata=cdata.slice(0,N_max_countries)
				cdata=cdata.reverse();
		
				y.domain(cdata.map(function(d) { return d.country; }));
			
				var barbase = plot_countries.selectAll(".barbase")
			     	.data(cdata)
			   		.enter().append("g")
					.attr("transform",function(d){
			 			return "translate("+(x(xr[0]))+","+y(d.country)+")"
			 	   	})
				   	.attr("class", "barbase")
					.style("opacity",bar_opacity)
		
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
		
		
			   plot_countries.append("g")
			         .attr("transform", "translate(0," + (lcont=="oceania" ? 0.5*height : height) + ")")
			         .call(d3.axisBottom(x).ticks(3).tickFormat(d3.format(".2%")));

			   plot_countries.append("g")
			         .call(d3.axisLeft(y))
					 .selectAll("text")
					 .attr("class","no_cases")

			})		
	})	
					

	function cases_in_country(country){
					res = false;
				 	countries_with_cases.forEach(function(c){		
				 		if(country==c.name) {
							
							res=true}			
				 	})
	return res
	}
	function FindByKey(array, key, value) {
	 	for (var i = 0; i < array.length; i++) {
	 		if (array[i][key] === value) {
	 			return array[i];
	 		}
	 	}
	 	return null;
	 }

})()