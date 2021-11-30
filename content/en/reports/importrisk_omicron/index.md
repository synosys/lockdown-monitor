+++
title = "Omicron - Import Risk"
slug = "importrisk_omicron"
date = "2021-11-29"
authors = ["adrian", "pascal", "frank", "benjamin", "dirk"]
+++

Omicron, the new variant of concern, was first detected in South Africa and Botswana on November 2021. Up until the date of this report (30.11.2021), according to GISAID it was reported in **11 other countries: Canada, Spain, Belgium, Netherlands, Germany, Italy, Austria, Czech Republic, Israel, Hong Kong (China) and Australia.**

Some countries, such as Israel, have already stopped all incoming flights from South Africa, Botswana and their neighboring countries. However, many of the countries where Omicron was detected don’t have direct flight connections to South Africa or Botswana, such as Hong Kong (China), Spain, or Canada. This is because of connecting flights, and it is therefore not straightforward to estimate how likely a country imports the new variant.

{{< rawhtml >}}
<img class="special-img-class" style="width:100%" src="omicron_directLinks_wan.png" />
{{< /rawhtml >}}
_Highlighted are the 30 countries with direct flight connection to South Africa and Botswana (grey and red) and countries in which omicron was already detected (grey hatched, data up until 30.11.2021). The inset in the Pacific is a zoom on Europe. Note that countries with omicron reports do not necessarily have direct flight connections._

## Relative import risk

We estimate the **import risk probability** based on the world aviation network from August 2021 (i.e. 3 month prior).  The world aviation network contains the number of passengers along all flight connections around the globe. By looking at these passenger numbers, we can estimate how likely it is that the virus spreads to another area: The busier a flight route, the more probable it is that an infected passenger travels this route.

{{< rawhtml >}}
<img class="special-img-class" style="width:40%" src="wan2.png" />
{{< /rawhtml >}}

However, we only have data on _direct_ flight connections. We don’t know which travellers have layovers or use multiple connecting flights before they exit at their destination. We have to take this into account to understand how the virus travels to countries without direct flight connections to South Africa or Botswana (for more details see [Import Risk methods]({{< ref "/methods-import_risk" >}})).

We use a **probabilistic method** to estimate how many travellers exit the airport after one flight, and how many use multiple connecting flights to reach their destination (see [Import Risk methods]({{< ref "/methods-import_risk" >}})). Using these probabilistic concepts, we calculate the _relative import risk_ to other airports.

The import risk tells us how likely an infected passenger from South Africa or Botswana travels to each country and exits the airport there. For example, an import risk of 0.9% in Germany means that out of 1000 such individuals, 9 are expected to have Germany as their final destination.


{{< interactive id="ir_countries" >}}

Current import risk for the Omicron variant estimates for the top 50 countries (excluding South Africa and Botswana) at highest risk of importation. **Hover over a country** to display in the inset the relative import risk of the top airports in the selected country. The national import risk is the cumulative import risk of all airports in that country. A more extensive explanation of the analysis is provided in the [Import Risk methods]({{< ref "/methods-import_risk" >}}).
{{< /interactive >}}


The countries with the highest import risk are  mostly African countries (for some of them, the actual import risk will be even higher because we do not consider road traffic). The USA also scores highly, followed by many middle Eastern and European countries.
Among the 50 countries with the highest import risk are 7 of the 11 countries where the omicron was reported so far. Only China, Israel, the Czech Republic and the  Netherlands are not among those.
However, the detection of the variant also depends on how strong the specific country is testing and how many of the test samples are sequenced. Also, our analysis is based on the aviation network from 3 months ago, and during the corona pandemic the network is changing strongly on a monthly basis (especially international connections to China). Lastly, our probabilistic methodology does not consider historic ties between countries. For example, if a passenger travels to the hub airport of Amsterdam Schiphol, our method will assume that many travelers  continue to other locations, but more passengers than estimated might actually stay due to the country’s historic links to South Africa. 

## European import risk

The charts below depict the import risk for Europe, not by country but by airport.
We see that the major airports like London Heathrow and Paris Charles de Gaulle have the highest risk. In Germany, Frankfurt is the most at risk airport followed by first Munich and then Berlin. Many destinations in Southern Europe and around the Mediterranean rank very high, which might be partially due to the high percentage of holiday traffic at the time when the airport network was measured (August 2021).
Again, the Amsterdam airport is only in 13th place, even though it is the European airport with most passengers coming directly from South Africa (~16.000 in August 2021). This is because Amsterdam is a hub and the method therefore assumes many connecting flights.


{{< interactive id="ir_europe_airports" >}}
{{< /interactive >}}

