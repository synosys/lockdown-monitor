var continents = [
	"Africa",
	"Americas",
	"Asia",
	"Europe",
	"Oceania"];
	
var regions = [
			"Eastern Africa","Middle Africa","Northern Africa","Southern Africa","Western Africa",
			"Caribbean","Central America","South America","Northern America",
			"Central Asia","Eastern Asia","Southern Asia","South-Eastern Asia","Western Asia",
			"Eastern Europe","Northern Europe","Southern Europe","Western Europe",
			"Australia and New Zealand","Melanesia","Micronesia","Polynesia"
			];
			
var continentcolors = ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"]

var regioncolors =	['rgb(239,243,255)','rgb(189,215,231)','rgb(107,174,214)','rgb(49,130,189)','rgb(8,81,156)',
		'rgb(237,248,233)','rgb(186,228,179)','rgb(116,196,118)','rgb(35,139,69)',
		'rgb(243,239,255)','rgb(215,189,231)','rgb(174,107,214)','rgb(130,49,189)','rgb(81,8,156)',
		'rgb(254,237,222)','rgb(253,190,133)','rgb(253,141,60)','rgb(217,71,1)',
		'rgb(242,240,247)','rgb(203,201,226)','rgb(158,154,200)','rgb(106,81,163)']	

confirmed_cases_country = ["Russia","Italy","India","Philippines","United Arab Emirates","Finland","Ivory Coast","Sri Lanka","Germany","Thailand","Hong Kong","Australia","France","Malaysia","Singapore","Taiwan","Japan","Macau","South Korea","USA","Vietnam","Canada","Cambodia","United Kingdom","Sweden","Spain"]

	
epistate_feb_4 = {
				"HGH": 528,
			    "CAN": 382,
			    "CGO": 347,
			    "CSX": 330,
				"KHN": 233,
			    "HFE": 234,
			    "CKG": 205,
			    "TAO": 176,
			    "CTU": 175,
			    "NKG": 166,
			    "PVG": 118,
			    "PEK": 115,
			    "FOC": 101,
			    "NNG": 85,
			    "KMG": 76,
			    "TYN": 87,
			    "HRB": 57,
			    "HAK": 48,
			    "SHE": 44,
			    "XIY": 38,
			    "TSN": 32,
			    "LHW": 29,
			    "INC": 20,
			    "HET": 20,
			    "URC": 17,
			    "KWE": 14,
			    "CGQ": 13
}

epistate_feb_10 ={"CAN":1350,"CGO":1272,"HGH":1206,"CSX":1018,"HFE":990,"KHN":935,"TAO":758,"NKG":631,"CKG":576,"CTU":538,"HRB":480,"PEK":414,"PVG":337,"PKX":318,"FOC":296,"NNG":252,"TYN":245,"KMG":174,"HAK":168,"KWE":146,"TSN":136,"XIY":133,"SHE":122,"CGQ":93,"LHW":91,"URC":76,"HET":75,"INC":74,"XNN":18,"LXA":1,"ICN":4335,"FCO":2036,"THR":1501}

var epistate = epistate_feb_10;

var epistate_omicron = {
 'CPT': 233974.0,
 'JNB': 485861.0,
 'HLA': 37611.0,
 'PLZ': 33999.0,
 'ELS': 25912.0,
 'BFN': 10151.0,
 'DUR': 141155.0,
 'GRJ': 37430.0,
 'GBE': 6941.0
}

var datadir = "/corona/data/import_risk/2019/"
var current_cases_file = "/corona/data/current_cases.json"


	


function integrate_import_risk_world(epistate,worlds){
	
	var roots = [];

	Object.keys(epistate).forEach(function(d){
			roots.push({root:d,cases:epistate[d]})
	})

	var NN = d3.sum(roots,function(x){return x.cases})
	roots.forEach(function(x){ x.cases=x.cases /NN;})
	
	var import_risk_world = JSON.parse(JSON.stringify(worlds[0][0]));
	
	import_risk_world.children.forEach(function(continent){
		continent.import_probability = 0
		continent.children.forEach(function(region){
			region.import_probability = 0
			region.children.forEach(function(country){
				country.import_probability = 0
				country.children.forEach(function(airport){
					airport.import_probability = 0
				})
			})
		})
	})		
			
	worlds.forEach(function(sets,index){		
		
		let world=sets[0];
		world.children.forEach(function(continent,i){
			import_risk_world.children[i].import_probability += continent.import_probability * roots[index].cases;
			continent.children.forEach(function(region,j){
				import_risk_world.children[i].children[j].import_probability  
					+= region.import_probability * roots[index].cases;
				region.children.forEach(function(country,k){
					import_risk_world.children[i].children[j].children[k].import_probability  
						+= country.import_probability * roots[index].cases;
					country.children.forEach(function(airport,l){
						import_risk_world.children[i].children[j].children[k]
							.children[l].import_probability  
							+= airport.import_probability * roots[index].cases;
					})
				})
			})
		})		
	})
	return import_risk_world
} 



