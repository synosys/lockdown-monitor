+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear.

title= ""

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"

  # Background gradient.
  # gradient_start = "#4bb4e3"
  # gradient_end = "#2b94c3"

  # Background image.
  # image = "rki-pic.jpeg"  # Name of image in `static/media/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  # image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

  # Text color (true=light or false=dark).
  # text_color_light = true

+++

# What kind of mobility data are we analyzing?

{{< rawhtml >}}
<img class="special-img-class" style="width:400px; display:block; margin-left:auto; margin-right:auto;" src="network_teralytics.png" />
{{< /rawhtml >}}

We're analyzing **mobility flows** in Germany, which are gathered from mobile phone data. Our data contains the trips that take place between areas. These areas are on the level of counties in Germany (Landkreise).

The data only contains the **number of trips** within and between areas. Deducing the movement of a single individual from this is not possible.

A trip can start and end in the same area, but we don't know _where_ within the area it took place. All movements in an given timeframe are then summed up, for example daily.

It is not possible to identify single individuals from these aggregated numbers. The data also does **not contain any personal information** such as age or gender.

## Where is the data from?

Mobility flows of this kind are collected by many mobile phone providers. We use data from the german Telekom, which is distributed by the company [T-Systems](https://www.t-systems.com/en/en), as well as data from Telefónica, which is analyzed and aggregated by the company [Teralytics](https://www.teralytics.net/). This kind of data is commercially available and is used, for example, by public transportation companies, for predicting traffic or to improve road infrastructure.

Here's how the data is generated: The mobile phone provider registers which devices are connected to certain cell towers. This raw data is then being aggregated to mobility flows. All personal information is stripped from the spatial information at this point. Preserving anonimity is the primary goal in this process. T-Systems developed its anonymization procedure in collaboration with the Federal Commissioner for Data Protection and Freedom of Information ([BfDI](https://www.bfdi.bund.de/EN/Home/home_node.html). At Telefónica, the basis for providing this information is the data anonymization platform DAP, which was developed in collaboration with the BfDI (see further information on [anonymization at Telefónica](https://www.telefonica.de/dap.html)).

## What is a movement?

A movement is registered by the mobile phone provider when an individual switches cell tower areas, and ends when the person becomes stationary again. The start- and end-tower can be the same.

The movement is then attributed to the corresponding spatial aggregation area, for example the county (Landkreis), and added to all other movements counted in a time frame. If the total number of movements between two areas fall below a certain threshold, the movements are not included in the data to ensure the anonymity of individuals.

## How do we compute the change in mobility?

In our analysis and the dashboard, we show the deviation in mobility from a "normal" baseline. For this, we count all movements and compare them to the number we would expect in a usual, comparable timeframe.

As a comparable timeframe for March 2020 we use the number of movements in an averaged week from March 2019. When comparing single days, we always compare it to the corresponding weekday from the averaged week. **Update:** The live mobility monitor and the current plots now compares the mobility of the _current_ month from 2019, not necessarily March 2019. More details can be found [here]({{< ref "/reports/update-second-report" >}}).

Mathematically speaking: If we assume that \\(N_i^{(t)}\\) is the number of movements in an area \\(i\\) in a timeframe \\(t\\), and \\(t^\*\\) is a comparable timeframe with normal mobility, the change in mobility \\(\Delta n\\) can be calculated as:

\\[\Delta n=(N_i^{(t)} / N_i^{(t^\*)})-1\\]
