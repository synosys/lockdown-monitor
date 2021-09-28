+++

# Hero widget.
widget = "hero"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 16  # Order that this section will appear.

title= "Über das Projekt"

hero_media = ""

[design]
  columns = 2

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  color = "darkgrey"

  # Background gradient.
  # gradient_start = "#4bb4e3"
  # gradient_end = "#2b94c3"

  # Background image.
  image = "hero-bg-pnas-networks.jpg"  # Name of image in `static/media/`.
  image_darken = 0.3  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  # image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

  # Text color (true=light or false=dark).
  text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["40px", "0", "50px", "20px"]

+++

{{< rawhtml >}}

<div style="display:block; text-align:left;">

  <div style="font-size: large; margin-top: 30px;">
  <p>
  Im <i>Covid-19 Mobility Project</i> untersuchen wir Bewegungsströme, die aus anonymisierten <a href="/de/data-info/">Mobilfunkdaten</a>
  gewonnen werden.
  <p>
  An der Mobilität können wir messen wie die Bevölkerung auf die Pandemie reagiert, wie verschiedene Maßnahmen wirken, und mit Hilfe von Computermodellen abschätzen wie sich das auf den Pandemieverlauf auswirkt.
  </p>
  <p>
  Im <a href="/de/mobility-monitor/">Mobility Monitor</a> kann man die Mobilität selbst erkunden.
  <br>
  Tiefgehendere Analysen finden sich in unseren <a href="/de/reports/">Reports</a>.
  </p>
  Zu unserer Arbeit ist auch folgende Publikation erschienen:
  </p>
  </div>
  <p style="font-size: medium; margin-left:20px">
  Schlosser, F., Maier, B. F., Jack, O., Hinrichs, D., Zachariae, A., & Brockmann, D. (2021).<br>
  <i>COVID-19 lockdown induces disease-mitigating structural changes in mobility networks.</i><br>
  Proceedings of the National Academy of Sciences of the United States of America, 117(52), 32883–32890.<br>
  <a href="https://doi.org/10.1073/PNAS.2012326117">https://doi.org/10.1073/PNAS.2012326117</a>   
  </p>
  
</div>
{{< /rawhtml >}}
