+++
date = "2021-03-03"
title = "Verkehr zwischen angrenzenden Stadt- und Landkreisen"
slug = "traffic-grid"
draft = false
+++

Im letzten Bericht haben wir die Mobilitätsdaten aus der Perspektive eines Kreises betrachtet.
Wir haben dabei festgestellt, dass der Großteil des Verkehres innerhalb eines Stadt- oder Landkreises bleibt und nur sehr wenig Verkehr (\~5%) über angrenzende Kreise hinausgeht.

Die Mobilität zu angrenzenden Kreisen kann aber sehr heterogen sein. Bespielsweise verlassen den Landkreis Havelland mehr als 80% aller Bewegungen in Richtung Berlin, und nur wenig Verkehr geht in die anderen 5 Nachbarkreise.

In der folgenden interaktiven Grafik kann man den Verkehr zwischen Stadt- und Landkreisen selbst erkunden.

Jede Linie zeigt den Verkehr zwischen zwei angrenzenden Kreisen. Da der Verkehr mit weiter entfernten Kreisen nur einen geringen Anteil an der gesamten Mobilität ausmacht (aber die Darstellung sehr unübersichtlich wird) werden diese Linien nicht angezeigt, was aber auch so einen guten Überblick über den Großteil der Mobilität bietet.

Die Dicke der Verbindungen zeigt die durchschnittliche Anzahl an Bewegungen zwischen zwei Kreisen pro Tag in jeder Kalenderwoche. Die Richtung der Bewegungen zwischen den beiden Kreisen wird nicht unterschieden, da über einen längeren Zeitraum etwa gleich viele Menschen in beide Richtungen pendeln.

*Hinweise zur Bedienung:* Ein Klick auf einen Kreis zoomt näher heran und zeigt den zeitlichen Verlauf des Verkehrs. Durch die Auswahl **Nah- und Fernverkehrbalken** kann man den Nahverkehr (innerhalb eines Kreises, schwarz) und Fernverkehr (mit nicht angrenzenden Kreisen, weiß) ein- oder ausblenden. Durch Abwählen der Option **alle Links anzeigen** kann man nur die Verbindungen des ausgewählten Kreises anzeigen.

{{< iframe "https://observablehq.com/embed/@adrianzachariae/traffic-lattice-germany-deutsch?cells=viewof+values_new%2Cmap" "752px" >}}

Wie schon beim letzten Report beruht diese Grafik auf einem [Observablehq Notebook](https://observablehq.com/@adrianzachariae/traffic-lattice-germany) und kann dort auch geforked und modifiziert werden. 


