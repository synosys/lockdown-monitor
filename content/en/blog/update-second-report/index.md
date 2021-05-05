+++
date = "2020-10-27"
title = "Update: Improvement of mobility calculation"
slug = "update-calculation"
+++

We've improved the calculation of the mobility change: Until now, the mobility in 2020 was compared to **March 2019**. This worked well in spring, but especially in summer the seasonal changes in mobility patterns were not reflected well with this method.

From now on the mobility in 2020 is compared to the **corresponding month in 2019**. Specifically, we compare each day in 2020 with the **average** number of trips on the corresponding weekday for this month in 2019. For example, the number of trips on Monday, October 26th is compared to the average number of trips on all mondays in October 2019.

The new calculation is now shown in the [Mobility Monitor]({{< ref "/monitor/index.md" >}}) and the plots on [current mobility]({{< ref "/blog/current/index.md" >}}).

The following plot shows the difference between the calculation methods. One can see that the old comparison to March 2019 especially overestimates the seasonally higher mobility in summer 2020.

{{<snippet "/content/en/blog/update-second-report/trips_change_difference_static_dynamic.en.html" >}}
