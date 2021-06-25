+++

# Hero widget.
widget = "hero"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear.

title= "Research on Complex Systems"
hero_media = "rki.png"

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
image = "rki-pic.jpeg"  # Name of image in `static/media/`.
image_darken = 0.5 # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
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
  Our research focuses on the dynamics of infectious diseases.
  </p>
  <p>
  We develop integrative, computational and network models, numerical methods and application-oriented computer simulations of complex contagion phenomena and disease spread.
  </p>
  In this context, we try to improve our understanding and predict the dynamics of infectious diseases using methods from dynamical systems theory, complexity theory, complex network science, game theory and theoretical physics in a transdisciplinary approach.
  </p>
  <p>
  You can find more information about our work on our <a href="https://rocs.hu-berlin.de/">website</a>.
  </p>
  </div>
</div>
{{< /rawhtml >}}
