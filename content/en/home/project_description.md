+++

# Hero widget.
widget = "hero"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 18  # Order that this section will appear.

title= "About the project"

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
  In the <i>Covid-19 Mobility Project</i>, we study movement flows obtained from anonymized <a href="/data-info/">mobile phone data</a>.
  <p>
  By looking at mobility we can measure how the population reacts to the pandemic, what the effects of different measures are, and use computer models to estimate how this will affect the pandemic.
  </p>
  <p>
  You can explore mobility for yourself in the <a href="/mobility-monitor/">Mobility Monitor</a>
  <br>
  More in-depth analyses can be found in our <a href="/reports/">Reports</a>.
  </p>
  Our results are featured in the following publication:
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
