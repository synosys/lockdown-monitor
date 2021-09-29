+++

# Hero widget.
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 20  # Order that this section will appear.

title= ""

[design]
# Choose how many columns the section has. Valid values: 1 or 2.
columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "#E9F2FA"

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
  text_color_light = false

+++

<div class="contacts-title col-md-12">
  <h2>Kontakte</h2>
</div>

<div class="contacts" class="col-md-12">
<iframe id="contact-iframe" class="contact-monitor" frameborder="0" width="100%" height="450px" src="https://rocs.hu-berlin.de/viz/contactindex-monitor/?lang=de"></iframe>
</div>

<div class="contacts-title col-md-12">
  <p style='font-size: medium'>Die Grafik zeigt die durchschnittliche Anzahl an Kontakten, die eine Person in Deutschland pro Tag hat, berechnet aus Mobilfunksignalen - mehr zur Methodik <a href="/de/data-info/contacts">hier</a>.</p>

  <p style='font-size: medium'>Die Daten selbst sind <a href="https://rocs.hu-berlin.de/viz/contactindex-monitor/contactindex-data/data/">hier</a> verfügbar.</p>

  <p style='font-size: medium'><i>Hinweis zur Bedienung</i>: Durch <b>Klicken</b> und Ziehen kann ein Zeitbereich ausgewählt werden; ein <b>Doppelklick</b> setzt die Grafik zurück.</p>
</div>
