+++

widget = "blank" 
headless = false  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 10  # Order that this section will appear.
slug = "data-info/contacts"

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

# Contacts and the pandemic

{{< rawhtml >}}

<div style="height: 20px"></div>
{{< /rawhtml >}}

How a pandemic develops depends on many factors: the biology of the pathogen, its susceptibility to external influences such as humidity and temperature, the success of vaccination campaigns, but most of all it is determined by contacts between individuals: **transmissions occur primarily when people have contact with each other.**

The **number of contacts** thus gives us an insight into the course of the pandemic. Fewer contacts make it more difficult for the pathogen to spread through the population, whereas more contacts promote rapid spread.

In the [Contacts Monitor](/en/contact-index), we show the number of contacts in Germany over time. In the following, we explain how these contacts are measured from GPS data of cell phones.

The data shown in the monitor is available [here](https://rocs.hu-berlin.de/viz/contactindex-monitor/contactindex-data/data/).

## What kind of data is analyzed?

The analyses here are based on GPS trajectories of people living in Germany. However, what we receive from our cooperation partner is only the **average number of contacts per day** as well as their **variance** (in the section "What is a contact?" below, we explain how these observables relate to GPS trajectories). We do **not have access to the GPS location data** on which these measures are calculated.

The GPS location data is collected by the German company [NET CHECK](https://www.netcheck.de/) using cell phones. This type of data is [commercially available](https://datarade.ai/data-categories/gps-location-data). Such data is used, for example, by public transportation companies to measure traffic or by mobile network operators to improve cellular networks.

The GPS data is transmitted from the individual devices via a software development kit (SDK). This SDK is primarily used to evaluate the quality of mobile networks. It is installed on around **1.2 million devices** in Germany, where all users have given their consent to collect such data for statistical purposes. Each device transmits up to **several hundred locations** per day. Of all these devices, about **600,000 are active** every day.

The data does **not contain any personal information** such as age or gender and, most importantly, all **users have consented to data collection** (by opting-in according to the [Terms of Use](https://www.netcheck.de/datenschutz/) of the SDK). All processing of raw GPS data is done at NET CHECK. We only receive information on the statistics that are shown here (such as the average contacts).

## What is a contact (and a contact-network)?

{{< rawhtml >}}
<img class="special-img-class" style="width:400px; display:block; margin-left:auto; margin-right:auto; margin-top:40px; margin-bottom:30px;" src="F1_reference_small.jpeg" />
{{< /rawhtml >}}

Each measured GPS location is assigned to an **area ("tile") of 8x8 square meters**. If two devices are on the same tile **within 2 minutes**, this event is defined as a **contact** between the two devices. If two devices meet more than once (for example, if a couple meets at home both in the morning and in the evening), the contact is still counted only once per day. Contacts are also not weighted by how much time the people spent near each other.

Each contact can be considered a **connection** between two devices in a network. NET CHECK aggregates these contacts to create a **contact network** for each day. In the network, all devices are connected to each other that had a contact on that day (where we assume that each device corresponds to one person).

## How do we compute the mean contact number and its variation?

{{< rawhtml >}}
<img class="special-img-class" style="width:100%; display:block; margin-left:auto; margin-right:auto; margin-top:40px; margin-bottom:30px;" src="Kontakt_Index Computation_simple_en_small.jpeg" />
{{< /rawhtml >}}

The number of contacts between people influences the spread of an the disease. The measured contacts therefore give us an **insight into the course of the pandemic**.

The **mean number of contacts** indicates how many other people on average can potentially be infected by a single infected person.

The standard deviation of the number of contacts measures **how much the contacts vary**. A large variation means that there are individuals with a large number of contacts that could lead to **"super-spreader" events**.

It should be noted that the distribution of the number of contacts has a lower bound at zero. This means that a person can have many more contacts than the average number of contacts, but not much less (see simplified distribution above). Thus, a wide distribution means that there are especially many people with _more_ contacts than average, not fewer contacts.

The contact network we measure here is of course only a sample. Not every person in Germany is represented in the data, and the measured network is therefore only a small section of the complete network. However, we use concepts from network theory to derive the mean and variance of the contacts of the complete unknown contact network from the sample. Details can be found in the following publication: [Rüdiger et al.](https://www.pnas.org/content/118/31/e2026731118).
