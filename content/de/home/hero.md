+++
# Hero widget.
widget = "hero"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

title = "Mobilität und Covid-19"

# Hero image (optional). Enter filename of an image in the `static/media/` folder.
#hero-media = "pnas_117_52_coverthumb.jpg"

[design.background]
# Apply a background color, gradient, or image.
#   Uncomment (by removing `#`) an option to apply it.
#   Choose a light or dark text color by setting `text_color_light`.
#   Any HTML color name or Hex value is valid.

# Background color.
# color = "navy"

# Background gradient.
gradient_start = "#4bb4e3"
gradient_end = "#2b94c3"

# Background image.
image = "hero-bg-pnas-networks.jpg"  # Name of image in `static/media/`.
image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
# image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
# image_position = "center"  # Options include `left`, `center` (default), or `right`.
# image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

# Text color (true=light or false=dark).
text_color_light = true

# Call to action links (optional).
#   Display link(s) by specifying a URL and label below. Icon is optional for `[cta]`.
#   Remove a link/note by deleting a cta/note block.

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["40px", "0", "80px", "0"]


+++

{{< rawhtml >}}

<div style="display:block; text-align:left; font-size: large; margin-bottom: 40px; max-width: 390px;">
  <p>
  Wir beobachten und analysieren die <b>Mobilität</b> und <b>Kontakte</b> in Deutschland während der Covid-19 Pandemie. 
  </p>

  <p><a href="/de/mobility-monitor/" class="btn btn-light button-cta" role="button">zum Mobilitäts-Monitor</a></p>

  <p><a href="/de/contact-index/" class="btn btn-light button-cta" role="button">zum Kontakte-Monitor</a></p>

</div>
{{< /rawhtml >}}
