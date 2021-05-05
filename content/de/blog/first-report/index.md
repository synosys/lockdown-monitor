+++
date = "2020-04-05"
title = "Mobilität in Deutschland"
slug = "first-report-general-mobility"
+++

Social Distancing beschäftigt derzeit ganz Deutschland, und die Straßen fühlen sich deutlich leerer an als sonst. Aber stimmt dieser Eindruck? Bleiben Leute tatsächlich mehr Zuhause?

Mit Mobilitätsdaten können wir tagesaktuell messen, wie sich Menschen bewegen, und ob sie in den letzen Wochen ihr Verhalten verändert haben. Dazu nutzen wir anonymisierte und aggregierte Bewegungsströme, die aus Mobilfunkdaten gewonnen werden.

In unseren Datensätzen sehen wir, wieviele Leute sich innerhalb und zwischen Landkreisen in Deutschland bewegen. Wir wissen dabei nur **wie viele** Personen sich bewegen, aber nicht **wer** sich bewegt: Wir können keine Individuen unterscheiden, und kennen auch keine persönlichen Informationen wie Alter oder Geschlecht. Mehr Details zu den Datensätzen finden sich auf der Unterseite [Daten]({{< ref "/methods/index.md" >}}).

# Mobilitäts-Trends in Deutschland

Bewegen sich die Menschen in Deutschland also weniger als üblich? Die kurze Antwort lautet: **Ja**

{{<snippet "/content/de/blog/first-report/trips_total.de.html" >}}

Im März 2020 beobachten wir eine deutliche Abnahme der deutschlandweiten Mobilität. Während wir Anfang März an einem typischen Werktag etwa 190 Millionen Bewegungen erfassen, sinkt diese Zahl bis Ende März auf etwa 120 Millionen Bewegungen.

{{<snippet "/content/de/blog/first-report/trips_change.de.html" >}}

Wenn wir die Anzahl an Bewegungen mit einer durchschnittlichen Woche aus dem März 2019 vergleichen sehen wir klar die Abweichung zum Normalzustand. Ab der zweiten Märzwoche sinkt die Mobilität sichtbar unter das normale Niveau.

Die stärkste Abnahme der Mobilität geschieht in der dritten Märzwoche, vom 15. bis 22. März. Zu dieser Zeit treten viele Maßnahmen in Kraft, die die Mobilität in Deutschland einschränken, unter anderem:

- **12. März**: Bundeskanzlerin Merkel ruft Deutsche dazu auf [soziale Kontakte wenn möglich zu vermeiden](https://www.bundesregierung.de/breg-de/themen/coronavirus/mpk-1730444) und empfiehlt erneut die Absage von Großveranstaltungen mit 1000+ Personen.
- **14. März** (und umliegende Tag): Verstärkte Maßnahmen zur Einschränkung öffentlicher Aktivitäten treten in vielen Bundesländern in Kraft, beispielsweise die [Schließung von Schulen und Kindergärten](https://www.tagesschau.de/inland/corona-schulschliessungen-101.html).
- **18. März**: [Ansprache der Bundeskanzlerin zur Krise](https://www.bundesregierung.de/breg-de/themen/coronavirus/ansprache-der-kanzlerin-1732108) und Inkrafttreten von Grenzschließungen.
- **20. März**: Bayern [verhängt Ausgangsbeschränkungen](https://www.nordkurier.de/politik-und-wirtschaft/bayern-verhaengt-ausgangssperre-2038792303.html).

Diese und andere Maßnahmen, gepaart mit dem Social Distancing, das Einzelpersonen und Unternehmen umsetzen, führen zu dem starken Abfall der Mobilität in der dritten Märzwoche.

Die konkrete Wirkung von Einzelmaßnahmen ist schwer vom allgemeinen Trend zu unterscheiden, aber einige Maßnahmen sind klarer zu erkennen: Die strengen Ausgangsbeschränkungen in Bayern, die am 20. März verkündet wurden, führten zu einer starken Verringerung der Mobilität an den folgenden Tagen. Dieser regionale Effekt ist gut im [Mobility Monitor]({{< ref "/monitor/index.md" >}}) sichtbar wenn man diese Tage auswählt.

Die aktuellsten Zahlen aus der ersten Aprilwoche zeigen einen sehr leichten Anstieg der Mobilität. Es bleibt zu beobachten ob sich dieser Trend fortsetzt.

# Regionale Unterschiede

Die Verringerung der Mobilität unterscheidet sich zwischen Regionen in Deutschland: Manche Gegenden sind stärker von Covid-19 betroffen, Maßnahmen werden regional unterschiedlich umgesetzt, und somit unterscheidet sich das Ausmaß an Social Distancing lokal.

Die folgenden Karten zeigen die wochenweise Änderung der Mobilität, wobei wir die Wochen aus März 2020 mit einer Durchschnittswoche aus März 2019 vergleichen.

Die Karten zeigen für jedes Gebiet die Änderung in der Anzahl an allen Bewegungen, die in diesem Gebiet starten. Die Daten sind somit die gleichen wie im [Mobility Monitor]({{< ref "/monitor/index.md" >}}) tagesweise zu sehen, nur dass wir hier ganze Wochen zusammenfassen.

{{<snippet "/content/de/blog/first-report/map_change.11.de.html" >}}

In der **Kalenderwoche 11** sehen wir wenig Änderung in der Mobilität. Die Gesamtmobilität beginnt zu sinken, aber liegt bisher nur **-2.2%** unter dem Normalniveau. Auf der Karte sind bisher kaum regionale Unterschiede erkennbar.

{{<snippet "/content/de/blog/first-report/map_change.12.de.html" >}}

**Woche 12** ist die Woche in der die meisten Maßnahmen Wirkung zeigen. Die Mobilität sinkt sichtbar auf **-25.8%** unter dem üblichen Niveau.

Man erkennt auch einen deutlichen Unterschied zwischen westlichen und östlichen Bundesländern: Im Westen und Süden Deutschlands, wo die meisten Covid-19 Fälle auftreten, sinkt die Mobilität stärker ab als im Osten.

{{<snippet "/content/de/blog/first-report/map_change.13.de.html" >}}

In **Woche 13** ist die deutschlandweite Mobilität auf **-39.0%** unter das Normalniveau gesunken, und pendelt sich auf diesem Stand ein.

In dieser Woche sind regionale Unterschiede klar erkennbar:

- Grenzregionen sind stärker betroffen.
- In Großstädten und Stadtgebieten fällt die Mobilität stärker als im ländlichen Raum.
- In Bayern ist die Mobilität durch die stärkeren Ausgangsbeschränkungen insgesamt niedrig.

Diese und mehr regionale Unterschiede lassen sich im [Mobility Monitor]({{< ref "/monitor/index.md" >}}) gut selbst erkunden.

# Fokus Großstätdte

Wie auf den Karten zu sehen ist nimmt die Mobilität in Großstädten stärker ab als in ländlichen Gebieten: In fast allen der 20 größten Städte in Deutschland liegt die Abnahme der Mobilität deutlich über dem bundesweiten Durchschnitt.

{{<snippet "/content/de/blog/first-report/trips_change_cities.de.html" >}}

# Bewegung über lange Distanzen

Viele der Social Distancing-Maßnahmen zielen darauf ab, unnötige Reisen über lange Distanzen zu vermeiden: Urlaubsreisen, Arbeitsreisen oder Besuche von weit entfernten Freunden und Familienmitgliedern.

Um zu testen, ob Reisen über lange Distanzen tatsächlich besonders stark abgenommen haben, betrachten wir den Unterschied zwischen Reisen **innerhalb** und **zwischen** Gebieten.

{{<snippet "/content/de/blog/first-report/trips_change_within_out.de.html" >}}

Aus den Bewegungsströmen sehen wir dass Reisen **zwischen** Gebieten stärker abgenommen haben als Reisen **innerhalb** von Gebieten, nämlich um bis zu **-70%** unter den Normalniveau.

# Zusammenfassung

Unsere erste Analyse zeigt, dass sich die Mobilität in Deutschland in der Mitte des März 2020 grundlegend verändert hat. Insgesamt sehen wir ein Absinken der Mobilität auf einen stabilen Wert von etwa **-40%** unter dem Normalniveau.

In unseren nächsten Berichten werden wir verschiedene Aspekte der Mobilität näher beleuchten, beispielsweise:

- Wie unterscheidet sich die Mobilitätsänderung regional? Gibt es Zusammenhänge mit Covid-19-Fallzahlen?
- Welche Arten von Reisen haben sich am stärksten verändert?
- Gibt es strukturelle Unterschiede im deutschen Mobilitäts-Netzwerk, verglichen mit dem Normalniveau?

Zusätzlich zu Detail-Analysen werden wir weiter beobachten, wie sich die Mobilität in Deutschland in den nächsten Wochen entwickelt, und Berichte dazu auf dieser Seite veröffentlichen.
