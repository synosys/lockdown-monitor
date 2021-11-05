+++
date = "2020-10-27"
title = "Update: Verbesserung der Berechnung"
slug = "update-calculation"
authors = ["frank"]
+++

Wir haben die Methodik zur Berechnung der Mobilitätsänderung verbessert: Bisher wurde die Mobilität aus 2020 mit dem **März 2019** verglichen. Das funktionierte im Frühjahr gut, aber spätestens seit dem Sommer kann man davon ausgehen dass saisonale Änderungen der Mobilität so nicht optimal berücksichtigt werden.

Ab jetzt wird die Mobilität aus 2020 mit dem **entsprechenden Monat aus 2019** verglichen. Genauer gesagt vergleichen wir jeden Tag aus 2020 mit dem _durchschnittlichen_ Wochentag aus diesem Monat aus 2019. Beispielsweise wird die Anzahl an Bewegungen am Montag, dem 26. Oktober, mit der durchschnittlichen Anzahl an Bewegungen an allen Montagen im Oktober 2019 verglichen.

Die neue Berechnung ist ab jetzt im [Mobility Monitor]({{< ref "/mobility-monitor/index.md" >}}) zur Mobilität zu sehen.

Die folgende Grafik zeigt die Unterschiede zwischen den beiden Berechnungsmethoden. Man sieht, dass durch den alten Vergleich mit März 2019 besonders die saisonal höhere Bewegung im Sommer überschätzt wird.

{{<snippet "/content/de/reports/update-second-report/trips_change_difference_static_dynamic.de.html" >}}
