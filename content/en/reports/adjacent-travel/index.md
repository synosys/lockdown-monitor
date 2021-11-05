+++
date = "2021-02-04"
title = 'Traffic in the Pandemic by Distance'
slug = "adjacent-travel"
draft = false
authors = ["adrian"]
+++

In past reports we have shown repeatedly that the change in mobility during the pandemic affects local and long-distance traffic differently.
Recently, there has been increased interest in traffic-by-distance, as actual and proposed policies like the "15-km rule" have targeted long-distance travel to limit the spread from COVID-19 hotspots to neighboring areas and beyond.
This report explores how much traffic remains local, how much crosses borders, and how drastic regional differences are.

We will divide all traffic into three categories based on distance:

1. Inner trips: Traffic within one Landkreis (LK)
2. Adjacent trips: Traffic between adjacent LKs
3. Long-distance trips: Traffic between non-adjacent LKs

We consciously chose to display these results based on LKs (a German administrative subdivision) instead of geographical distance. While LKs are historical entities that can differ greatly in both geographical size and population count, they are also easily comprehensible and translate better to concrete policy decisions.

This report and its figures are based on an [observablehq notebook](https://observablehq.com/@adrianzachariae/traffic-in-the-pandemic-by-distance).

## Nation-Wide Curve

First, let's look at the national average. We see at one glance the decrease in mobility during the first lockdown and the more severe decrease caused by the combination of the second lockdown and the holiday season. Lately, the mobility is slightly increasing again.

We can also see that the **majority of all traffic is inner traffic (around 70%), and very little is long-distance traffic (5-7%)**. This is true before and during all stages of the pandemic.

The traffic during lockdowns and social distancing does not only shrink but also changes in composition. Long distance travel is reduced even more than short-distance travel, likely because short-distance travel includes more essential trips like going for groceries or essential commutes.

_This is a stacked bar chart so the bars do not overlap, they are stacked on top of each other. You can toggle to normalize the data to 100% using the Normalize checkbox, to focus on the composition of each week._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-in-the-pandemic-by-distance?cells=viewof+cb_norm_nationwide%2Cbar_plot_nationwide" "550px" >}}

## How do Landkreise differ?

If you want to look at an LK in more detail: The visualization above allows you to explore the mobility profile of each LK. We see that the differences in composition can be huge. In densely populated areas of Germany with small LKs, much more traffic will cross at least one border.

On the other side, most of Germany reacted with similar changes to lockdowns and social distancing. Biggest exception: The heightened activity in holiday destinations on the coast and in alpine regions in summer.

_Hover over the map to highlight each LK and its neighbors and see its mobility profile on the right._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-in-the-pandemic-by-distance?cells=lk_map_n_plot" "550px" >}}

Alternatively you can explore the mobility in different Landkreise in this plot that mirrors the nationwide curve plot and allows you to switch to a normalized view.

_Select an LK using the Landkreis selector and toggle tonormalize the data to 100% using the Normalize checkbox, to focus on the composition of each week._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-in-the-pandemic-by-distance?cells=viewof+cb_norm_state%2Cviewof+sel_LK%2Cbar_plot_lk" "560px" >}}

Finally, let's focus on long-distance travel exclusively. Of course, LKs with a higher population count have much more far-distance traffic (right). If we look at the relative amount of long-distance travel, geographically small and densely populated cities are more likely to have traffic crossing two LK borders.

_You can change the date using the dropdown menu._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-in-the-pandemic-by-distance?cells=viewof+sel_date%2Cchoropleth_longdistance" "600px">}}

## How much traffic crosses the average LK border per day?

Because the LKs are very different, the out-going traffic is, too. For many LK borders only < 5k trips per day cross its borders, but some see a 5-digit number. Note that during the first lockdown, the far-end tail of the distribution was much more reduced than it is now.

_You can select a specific time using the Date selector, I recommend looking at 2020-04-05 to see the effect of the first lockdown._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-in-the-pandemic-by-distance?cells=viewof+sel_date_hist%2Chistogramm_borders" "540px">}}
