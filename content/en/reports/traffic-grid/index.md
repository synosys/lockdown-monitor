+++
date = "2021-03-03"
title = 'Traffic Between Adjacent Counties'
slug = "traffic-grid"
draft = false
authors = ["adrian"]
+++

In the most recent report we explored the mobility data from the perspective of a county (Stadt- or Landkreis), a small German administrative subdivision.
We discovered that the majority of all traffic stays within one county, and only very little traffic (\~5%) goes further than the directly adjacent counties.

The traffic to adjacent counties can be very heterogeneous though. For example, in the county Havelland, which is next to Berlin, >80% of all departing traffic goes solely to Berlin, with only little traffic to the other 5 adjacent counties

In the following interactive graphic you can explore the traffic between counties yourself.

Each line shows the traffic between two adjacent counties. We do not show lines between non-adjacent counties, as it makes the visualization hard to read because there are so many. However, because the inner- and adjacent travel accounts for most of the traffic in a county, you will get a fairly complete picture of the overall traffic.

The width of each link shows the average number of trips between two counties per day for each calendar week. We do not distinguish the direction of travel, as over a longer period roughly the same amount of people travel in either directions.

_Some tips on using the map:_ The map can be panned and zoomed. Clicking a county zooms on it and shows the traffic for this county over time. The selection **inner traffic bars** allows one to only show traffic to adjacent counties, and hide traffic within the county (black) or with non-adjacent counties (white) from the bar plot. To hide all links in the network other that from the selected LK, uncheck the **whole lattice** check-box.

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-lattice-germany?cells=viewof+values_new%2Cmap" "752px" >}}

This figure is based on an [observablehq notebook](https://observablehq.com/@adrianzachariae/traffic-lattice-germany) and can be explored on that platform as well as here and additionally be forked and modified.
