+++
date = "2021-02-04"
title = 'Verkehr in der Pandemie nach Distanz'
slug = "adjacent-travel"
draft = false
+++

In vorherigen Reporten haben wir mehrfach gezeigt, dass kurze und lange Bewegungen unterschiedlich stark von den Lockdowns beeinflusst wurden.
Seit verschiedene vorgeschlagene wie umgesetzte Corona-Maßnahmen (z. B. die "15-km Regel") gezielt Langstreckenbewegungen einschränken sollen, ist das Interesse an der Zusammensetzung der Mobilität nach Entfernung stark gestiegen.
In diesem Report erkunden wir wie viele der Bewegungen in Deutschland lokal stattfinden, wie viel Fernreisen ausmachen und wie stark regionale Unterschiede sind.

Hierzu nehmen wir folgende Einteilung der Mobilität vor:

1. Interne  Mobilität: Verkehr innerhalb eines Landkreises (LK)
2. Benachbarte Mobilität: Verkehr zwischen benachbarten LKen
3. Fernreise Mobilität: Verkehr zwischen nicht benachbarten LKen

Wir haben uns bewusst für diese Einteilung auf Grundlage von Landkreisen entschieden, anstelle einer Analyse für feiner aufgelöste geographische Distanzen. Auch wenn LKe historisch wuchsen und sich in Fläche und Populationszahl stark unterscheiden können, liegt der Vorteil dieser Einteilung in der intuitiven Verständlichkeit und der besseren direkten Vergleichbarkeit mit politischen Entscheidungen.

Dieser Report und die verwendeten Grafiken wurden auf observablehq.com entwickelt und [sind dort verfügbar](https://observablehq.com/@adrianzachariae/traffic-in-the-pandemic-by-distance).


## Deutschlandweite Mobilität


Als erstes werden wir uns dem deutschlandweiten Durchschnitt widmen!
Wir sehen sofort die beiden großen Einbrüche in der Gesammtmobilität, einmal während des ersten Lockdown und einmal als Resultat der kombinierten Effeke der Weihnachtsferien und des zweiten 'starken' Lockdowns. Die neuesten Werte nach dem Jahreswechsel steigen wieder etwas an.

Wir sehen auch, **dass der Großteil der Bewegungen innerhalb eines LKs bleibt (ungefähr 70%) und nur ein kleiner Teil Fernreisen sind (5-7%)**.
Das gilt sowohl für die Zeit vor der Pandemie und bleibt auch während der restlichen Zeit des letzten Jahres so.

Es gibt aber dennoch Veränderungen in der Zusammensetzung. Es gilt: Je weitere Entfernungen wir uns anschauen, desto stärker ist die Abnahme während der Lockdowns - vermutlich weil ein größerer Anteil der kurzen Bewegungen essentielle Gründe hat, z. B. der Lebensmitteleinkauf.

*Die Säulen in diesem Säulendiagramm sind gestapelt, sie überlappen also nicht. Mit dem __Prozent__ Schalter lassen sich die Säulen auf 100% normieren.*

{{< iframe "https://observablehq.com/embed/@adrianzachariae/verkehr-in-der-pandemie-nach-distanz?cells=viewof+cb_norm_nationwide%2Cbar_plot_nationwide" "550px" >}}

## Wie unterscheiden sich die einzelnen Landkreise?

Die folgende Grafik erlaubt es, sich die Mobilitätsprofile der einzelnen LKe genauer anzusehen. Die Unterschiede können gewaltig ausfallen!
In dicht besiedelten Teilen Deutschlands mit vielen kleinen LKs fließt natürlich mehr Verkehr über die Grenzen als in sehr großen LKs (groß bzgl. der Fläche).

Allerdings gibt es auch viele Gemeinsamkeiten, denn generell wurde in den meisten LKen sehr ähnlich auf die Pandemie reagiert. Es gibt natürlich auch Abweichungen. Die Größte: Es gab deutlich mehr Sommeraktivität in Urlaubsgebieten an der Küste und in den Alpen.

*Sie können in der Karte links jeden LK auswählen um seine Nachbarn und rechts das Bewegungsprofil zu sehen.*


{{< iframe "https://observablehq.com/embed/@adrianzachariae/verkehr-in-der-pandemie-nach-distanz?cells=lk_map_n_plot" "550px" >}}

Alternativ erlaubt es diese Grafik, jeden LK aus einer Liste auszuwählen und bietet die gleiche Funktionalität der deutschlandweiten Kurve oben, einschließlich der Option, sich die Prozentwerte anzeigen zu lassen.

*Wählen Sie einen Landkreis mithilfe der __Landkreis__-Auswahl und wechseln Sie zu einer normalisierten Ansicht mit der __Prozent__ Checkbox.*

{{< iframe "https://observablehq.com/embed/@adrianzachariae/verkehr-in-der-pandemie-nach-distanz?cells=viewof+cb_norm_state%2Cviewof+sel_LK%2Cbar_plot_lk" "560px" >}}

Da Unterschiede in Fernreisen besonders groß sind, haben wir diese hier noch mal übersichtlicher als Karte dargestellt.
Natürlich haben Landkreise mit sehr großen Populationen (z. B. Berlin) viel größere absolute Fernreisebewegungen (rechts).
Allerdings sind nicht alle dieser Landkreise auch mit einem großen prozentualen Anteil an Fernreisen assoziiert. Relativ gesehen haben die (in der Fläche) kleinen Städte mit großer Bevölkerungsdichte einen größeren Anteil an Bewegungen über zwei Landkreisgrenzen (links).

*Sie können das Datum mithilfe der __Datum__-Auswahl ändern.*

{{< iframe "https://observablehq.com/embed/@adrianzachariae/verkehr-in-der-pandemie-nach-distanz?cells=viewof+sel_date%2Cchoropleth_longdistance" "600px">}}

## Wie viel Verkehr verlässt ein typischen Landkreis pro Tag?

Da die Landkreise sich so stark unterscheiden, ist auch der Verkehr über die Landesgrenze extrem unterschiedlich. Viele Landkreisgrenzen sehen weniger als 5.000 Passagen (in eine Richtung), allerdings gibt es einzelne Grenzen mit über 100.000 Bewegungen. Gerade diese hochfrequentierten Grenzen waren jedoch stark von dem ersten Lockdown betroffen, während sich die wenig frequentierten Grenzen nicht so stark geändert haben.

*Sie können das Datum mithilfe der __Datum__-Auswahl ändern. Wenn sie den Einfluss des ersten Lockdowns sehen wollen empfehlen wir das Datum `2020-04-05`.*

{{< iframe "https://observablehq.com/embed/@adrianzachariae/verkehr-in-der-pandemie-nach-distanz?cells=viewof+sel_date_hist%2Chistogramm_borders" "540px">}}

