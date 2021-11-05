+++
date = "2021-10-12"
title = "COVID-19's Impact on Air Travel"
slug = "air-traffic-pandemic"
draft = false
authors = ["adrian", "frank"]
+++

In early 2020, COVID travel restrictions and high uncertainty led to an unprecedented disruption of air travel. Over a year later, daily mobility in Germany has largely returned to pre-pandemic levels, but air travel has remained deeply affected. In the blogpost, we take a look at how the pandemic has reshaped air travel in and around Germany.

## Germany’s Air-Traffic Volume Compared to to Other Countries

The pandemic has had varying effects on national air-traffic networks. China’s air-traffic network recovered quickly after the first wave. In the US, traffic recovered slowly but steadily.

In Germany and most other European countries, air traffic initially recovered slightly in Mid 2020, but was then reduced again in response to the second wave in winter 2020/2021.

{{<snippet "/content/en/reports/wan/seats_countries.svg" >}}

_This plot shows the aggregated air-traffic of <mark style="background-color: #bd1550; opacity: 1; color: #fff">Germany</mark> in comparison to the <mark style="background-color: #666; opacity: 1; color: #fff">USA</mark>, <mark style="background-color: #bbb; opacity: 1; color: #000">China</mark> and the <mark style="background-color: #888; opacity: 1; color: #fff">UK</mark>. The traffic is shown in relation to the (mostly) pre-pandemic level of January 2020._

The differences in network recovery are surprising in some cases. China is still largely isolated from the world, so how can it be recovering so well? Like the U.S., China is a large country with plenty of domestic air traffic. Conversely, small countries have mostly international air traffic networks. To get a more detailed picture of the pandemic’s effect, it’s helpful to separate recovery into two categories: domestic and international.

{{<snippet "/content/en/reports/wan/domestic_international_china_us.svg" >}}

_This plot shows the <mark style="background-color: #490a3d; opacity: 1; color: #fff">domestic</mark> and <mark style="background-color: #bd1550; opacity: 1; color: #fff">international</mark> travel volume of China and the USA. The volumes are stacked, so yes, there is very little international travel with China._

In China, domestic traffic recovered quickly while international traffic ceased almost completly. In the U.S., both international and domestic travel recovered slowly but steadily.

In Germany, most travel is international travel rather than domestic. During the pandemic, both forms of travel were reduced. However, international travel recovered more than domestic travel, which is still at very low level.

{{<snippet "/content/en/reports/wan/domestic_international_germany.svg" >}}

_This plot shows the <mark style="background-color: #490a3d; opacity: 1; color: #fff">domestic</mark> and <mark style="background-color: #bd1550; opacity: 1; color: #fff">international</mark> travel volume of Germany._

It is possible that domestic business travel, which contributed much to domestic air travel in Germany, has been replaced by conference calls. But that is only speculation. It is unclear if domestic air-traffic in Germany will ever return to pre-pandemic levels.

## Primary Destinations

Now we know that international travel is dominating German air-travel, let's look at where people are traveling.

{{<snippet "/content/en/reports/wan/destinations.svg" >}}

_This plot shows the Top 5 destinations of German air-traffic each month. Most are in <mark style="background-color: #bd1550; opacity: 1; color: #fff">Europe:</mark> Spain (**ES**), Great Britain (**GB**), Italy (**IT**), Austria (**AT**), Rumania (**RO**), Poland (**PL**), Greece (**GR**), Portugal (**PT**) and the Netherlands (**NL**).
Two are in <mark style="background-color: seagreen; opacity: 1; color: #fff">Asia:</mark> Turkey (**TR**) and United Arab Emirates (**AE**) and one is in the
<mark style="background-color: dodgerblue; opacity: 1; color: #fff">Americas:</mark> the USA (**US**)._

We can see that the top destinations were in constant flux during the Covid epidemic, driven by changing travel restrictions and COVID incidences in the different countries.

In the first lockdown, non-European countries disappeared from the Top 5 destinations completely. In the second lockdown we see some unusual entries like Portugal and Saudi Arabia, that were open to tourism at the time. Summer months were dominated by Mediterranean destinations like, Spain, Greece and Turkey.

We can see the shift to the Mediterranean on these maps:

{{<snippet "/content/en/reports/wan/maps_destinations.svg" >}}

_This plot shows the flight volume to European destinations. A darker shade indicates a higher volume of traffic. Grey countries received no flights or are excluded from the map (only Germany)._

Flight volume is low for all Northern and Eastern European countries, but up above pre-pandemic levels in Southern Europe. Part of this will be due to normal seasonal travel patterns and tourism. We also see evidence of the complete travel ban to Belarus in 2021, which is not pandemic related.

## Conclusion

While mobility on the ground in Germany has recovered to pre-pandmic levels, as can be seen in our [Mobility Monitor]({{< ref "/mobility-monitor/index.md" >}}), air traffic remains severely affected by the pandemic. While recovery was driven by rebounding domestic travel in some countries, there is persistent reduction of domestic flights in Germany.

Has the pandemic disruption caused a permanent change in how Germans travel domestically? In light of the political debate over short-distance air travel this seems a distinct possibility. This finding will also have consequences for scientists and how they should evaluate mobility data during a pandemic.

_The commercial data source we use in this analysis, the [OAG](https://www.oag.com/), provides us with seat-capacity data calculated as: number-of-flights × seats-per-airplane. Before the pandemic, flights were almost always booked close to full capacity. During the pandemic, restrictions have sometimes limited the capacity of flights, and rapidly falling demand forced airlines to fly with only a handful passengers in some cases. We expect this data to slightly overestimate the actual number of passengers, especially during the first wave._
