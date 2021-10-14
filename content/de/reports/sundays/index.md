+++
date = "2021-05-18"
title = 'Mobilität an Sonntagen und der Einfluss von Temperatur'
slug = "sunday"
draft = false
authors = ["adrian"]
+++

In diesem Report schauen wir uns die Mobilität an Wochenenden an und zeigen wie die Mobilität von der Temperatur abhängt. Dabei haben wir spannende Zusammenhänge entdeckt.

Menschliche Bewegungmuster sind vor allem vom Berufsverkehr dominiert. Vor der COVID-19 Pandemie war der Morgen an Arbeitstagen die verkehrsreichte Zeit der Woche. An Wochenenden ist die Anzahl der Bewegungen meist deutlich keiner - besonders an Sonntagen.

Dieses Muster hat sich auch während der Pandemie nicht grundlegend geändert, auch wenn die morgendlichen Spitzen etwas schwächer geworden sind.

{{<snippet "/content/de/reports/sundays/week_2020n2021.de.svg" "90%">}}

Wenn man die Mobilität über die Woche zusammenrechnet oder den 7-Tage-Mittelwert berechnet, wie wir das an anderen Stellen oft tun, spiegelt das also vor allem den Verkehr an Arbeitstagen wieder. Viele dieser Bewegungen sind vermutlich essentiell oder zumindest schwer zu vermeiden.

Daher ist die Mobilität an Sonntagen, die mehr freiwillige Bewegungen enthält, potentiell ein interessante Möglichkeit um "freiwillige" Änderungen im Bewegungsverhalten zu erkennen, die sich nicht aus den wöchentlichen Durchschnittswerten ableiten lassen.

Dieser Report und die verwendeten Grafiken wurden auf observablehq.com entwickelt und [sind dort verfügbar](https://observablehq.com/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic?ui=classic).

## Aktivität an Sonntagen und die Temperatur

Besonders interessant an der Sonntags-Mobilität ist, dass diese deutlich mit der Temperatur korreliert. Dazu haben wir uns die Anzahl an Bewegungen an Sonntagen in den letzten Monaten angesehen und sie in den folgenden Grafiken mit der Tageshöchsttemperatur verglichen. Die einzelnen Sonntage sind mit einer Line verbunden, so dass man dem zeitlichen Verlauf folgen kann.

_Über die Auswahl können verschiedene Städten und Zeitrahmen gewählt werden._

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic-german-fig?cells=viewof+sel_daily2021_city%2Csundays_daily_2021" "605px" >}}

Wie man eindeutig sieht ist an Wochenenden mit höheren Temperaturen und besserem Wetter auch die Mobilität am Sonntag klar erhöht. Besonders sieht man den Effekt wenn das Wetter deutlich besser ist als am Wochenende davor, z.B. am 21. Februar oder kürzlich am 9. Mai.

Insgesamt hat die Mobilität während des Jahres 2021 stetig zugenommen, zusammen mit den steigenden Temperaturen.

Als Nächstes vergleichen wir 2021 mit den Vorjahren 2019 und 2020!

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic-german-fig?cells=viewof+sel_daily_city%2Cviewof+sel_daily_endmonth%2Csundays_daily" "653px" >}}

Wir betrachten dazu zuerst die ersten Monate jeden Jahres. Man sieht, dass die Mobilität in den Vor-Pandemie Zeiten 2019 und Anfang 2020 relativ hoch war, und am niedrigsten am Anfang des ersten Lockdowns 2020. Die Werte für 2021 fallen genau zwischen die beiden Extreme.

Auch wenn der Januar und Februar in 2021 vergleichbar niedrige Mobilitätswerte haben - vergleichbar mit April 2020 - liegt es nahe, dass das kalte Wetter zumindest teilweise für diese niedrigen Werte verantwortlich war.

Mit steigenden Temperaturen nahm in 2020 dann auch die Mobilität stark zu, besonders in München. Da während des Anstiegs die steigenden Temperaturen und fallende Inzidenz zusammenfallen, lässt sich schwer sagen welcher Faktor hier am einflussreichsten war.

Im Sommer 2020 erreichten viele Sonntage in Hamburg und München Werte, die recht vergleichbar sind mit Sommerwerten aus 2019. In Berlin sind die Unterschiede hingegen etwas stärker. Das könnte am Ausbleiben von Tourismus und den weiterhin strengen Beschränkungen für das Nachtleben liegen.

## Wetterwechsel wirken sich stark auf die Mobilität im Lockdown aus

Es scheint logisch, dass gutes Wetter einen stärkeren Einfluss auf die Mobilität haben könnte wenn das Wetter in den Wochen davor eher schlecht war. Das scheint auch laut unseren Daten der Fall zu sein. Wenn wir nicht die absolute Temperatur betrachten, sondern die Differenz zur Durchschnittstemperatur der 14 Tage davor, sehen wir eine noch deutlichere Korrelation:

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic-german-fig?cells=viewof+sel_dailydiff_city%2Cviewof+sel_dailydiff_year%2Cviewof+sel_dailydiff_endmonth%2Csundays_daily_diff" "703px" >}}

Allerdings scheint es, dass dieser Effekt nur im den Wintermonaten mit strengem Lockdown auftritt, nicht jedoch im Sommer 2020 und auch nicht im Jahr 2019, nicht einmal im Winter. Der Lockdown scheint hier die Wetteränderungen und die Sonntagsmobilität zu synchronisieren.

## Wochenendmobilität zu verschiedenen Tageszeiten

Als nächstes schauen wir uns die Mobilität zu unterschiedlichen Tageszeiten an. Es gibt hier eine Reihe an Mustern und Unterschieden zwischen den Städten zu entdecken.

{{< iframe "https://observablehq.com/embed/@adrianzachariae/weekend-mobility-in-germany-during-the-pandemic-german-fig?cells=viewof+sel_hourly_city%2Cviewof+sel_hourly_endmonth%2Cviewof+sel_hourly_weekday%2Cviewof+sel_hourly_selections%2Csundays_hourly" "765px" >}}

Die Mobilität an Sonntagnachmittagen war während des ersten Lockdowns noch stark verringert, hat sich dann aber im Sommer 2020 schnell erholt und erreichte oft vergleichbare Werte wie in 2019. An Sonntagen mit gutem Wetter war das selbst im zweiten Lockdown in 2021 der Fall. Gerade in München bleiben die Werte in 2021 deutlich über denen der ersten beiden Sonntage des ersten Lockdowns.

An Sonntag- und Samstag-Abenden hingegen bleiben die Werte deutlich niedriger und erholen sich wenig im Sommer. Einig der kalten Nächte im zweiten Lockdown haben sogar weniger Bewegungen als im ersten Lockdown.

## Zusammenfassung

Insgesamt ist die Mobilität an Sonntagen sehr variabel und hat sich während der Pandemie stark verändert. Wetter ist zu einem großen Einflussfaktor geworden, besonders während der strengen Lockdowns im Winter und Frühling.

Viele der Kontakte, die durch die zusätzlichen Bewegungen durch gutes Wetter verursacht wurden, waren vermutlich relativ ungefährliche Begegnungen unter freiem Himmel. Es ist daher unklar inwieweit sie zu zusätzlichen Infektionen geführt haben.

Der Einfluss des Wetters auf die Mobilität ist aber klar und sollte berücksichtigt werden wenn man die Mobilität während der Lockdowns interpretiert.
