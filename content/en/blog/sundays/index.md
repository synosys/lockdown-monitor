+++
date = "2021-05-18"
title = 'Mobility on Sundays and the Influence of Temperature'
slug = "sunday"
draft = false
+++

In this report, we take a look at mobility on weekends and show how it depends on temperature.

Human mobility patterns are dominated primarily by daily commuting. Prior to the COVID-19 pandemic, the mornings on work days were typically the busiest time of the week. On weekends, the number of movements is significantly smaller, especially on Sundays. 

This pattern has not fundamentally changed during the pandemic, although the morning peaks have become somewhat weaker.

{{<snippet "/content/en/blog/sundays/week_2020n2021.svg">}}

As a consequence, if you add up the mobility over the week or look at 7-day moving averages, as we often do, the data will predominatly describe the weekday traffic and work commutes. 
Many of these weekday movements are probably essential or at least difficult to avoid. In contrast, mobility on Sundays most likely contains a higher ratio "voluntary" trips, and is an interesting way to detect changes in movement behavior that are otherwise overshadowed by work traffic.

This report and its figures are based on an [observablehq notebook](https://observablehq.com/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?ui=classic).

## Sunday Activity and Temperature

What is interesting about Sunday mobility is that it is clearly correlated with temperature. For this purpose, we have looked at the number of movements on Sundays in the last few months, which is compared to the daily maximum temperature on the x-axis. The individual Sundays are connected with a line, which allows you to follow the dates chronologically. 

*You can select different cities and time frames.*

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?cells=viewof+sel_daily2021_city%2Csundays_daily_2021" "605px" >}}

As you can clearly see, mobility on Sunday is higher on weekends with higher temperatures and better weather. This effect is particularly noticeable when the weather is significantly better than on the previous weekend, for example on February 21 or recently on May 9. 

Overall, mobility on Sundays has steadily increased in 2021, along with rising temperatures. 

Now let's compare the recent months to the Sundays of 2019 and 2020!

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?cells=viewof+sel_daily_city%2Cviewof+sel_daily_endmonth%2Csundays_daily" "653px" >}}

Let’s look at the first months of each year, from January to May. We see that 2021 mobility falls right between the high mobility levels of pre-pandemic Sundays in 2019 and early 2020, and the extremely low mobility levels due to the first lockdown in March/April of 2020. 

Even though January and February 2021 have relatively low mobility, comparable to April 2020, the correlation with temperature suggests that the cold weather was at least partially responsible for these low values.

As temperatures rose, mobility clearly increased in 2020, especially in Munich. Since rising temperatures and falling incidence coincided during the increase, it is difficult to say which factor was most influential here.

In summer 2020, many Sundays in Hamburg and Munich reached values that are quite comparable to summer values from 2019. In Berlin, however, the discrepancy is stronger. This could be partially due to the absence of tourism and the continued strict restrictions on nightlife.

## Change in Temperature is Driving Mobility During Lockdown

It seems reasonable that rising temperatures would have a larger impact on mobility after a period of poor weather. Indeed, this seems to be the case according to our data. If we look at temperature not as an absolute number but in terms of difference (specifically: the difference between the chosen day’s temperature and average temperature of the previous 14 days) we seen an even stronger clearer correlation with weather:

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?cells=viewof+sel_dailydiff_city%2Cviewof+sel_dailydiff_year%2Cviewof+sel_dailydiff_endmonth%2Csundays_daily_diff" "703px" >}}

However, that strong effect is not present before the pandemic nor during the summer of 2020. 
It appears that lockdowns synchronized Sunday-mobility-levels and weather, at least during winter months.


## Weekend Mobility at Different Times of the Day

We will now look a bit closer at specific times during the weekends. We can spot a number of different patterns here, as well as larger discrepancies between the cities. 

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?cells=viewof+sel_hourly_city%2Cviewof+sel_hourly_endmonth%2Cviewof+sel_hourly_weekday%2Cviewof+sel_hourly_selections%2Csundays_hourly" "765px" >}}

During Sunday afternoons, mobility was suppressed during the first lockdown weekend in 2020, but rebounded strongly during that summer, regulary reaching prepandemic levels – at least in Hamburg and Munich. On days with good weather this remains true even during the second lockdown in winter 2020/2021. Especially in Munich, the number of trips in 2021 stayed well above those at the beginning of the first lockdown. 

In contrast, Sunday and Saturday evening activity, throughout the pandemic, has remained significantly lower than its 2019 levels. Some of coldest nights of 2021 even surpass the lowest activity levels of the first lockdown.

## Conclusion

Overall, Sunday mobility is quite variable and changed a lot over the course of the pandemic. Weather was a big influence here. Particularly during lockdowns, good weather had a big impact on behavior, much more so than before the pandemic. 

It is likely that a lot of additional movements due to high temperature correspond to relatively safe outdoor contacts. It's unclear if these event actually contribute much to spreading events. They are certainly an important driving factor of mobility during the pandemic and should be considered when interpreting mobility data. 


