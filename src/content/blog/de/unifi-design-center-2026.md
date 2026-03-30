---
title: "UniFi Design Center 2026: Netzwerkplanung mit Grundriss, Heatmap und Stückliste"
description: "Das UniFi Design Center ist ein kostenloses Planungstool von Ubiquiti. Mit dem Update 2026 kommen High Availability, Shadow Mode und MC-LAG in die Netzwerkplanung. Ein Überblick über die Funktionen."
pubDate: 2026-03-14
lang: de
tags: ["UniFi", "Design Center", "Netzwerkplanung", "WiFi", "Heatmap", "High Availability", "Shadow Mode"]
author: "Digital Runners"
---

## Was ist das UniFi Design Center?

Das UniFi Design Center ist ein kostenloses, browserbasiertes Tool unter design.ui.com. Damit lassen sich Netzwerkinstallationen planen, bevor man Geräte kauft oder Kabel verlegt. Man lädt einen Grundriss hoch, zeichnet Wände ein, platziert Access Points, Kameras und Switches und bekommt eine Einschätzung der WLAN-Abdeckung, der Kabelwege und der benötigten Hardware.

Das Tool richtet sich an Installateure und IT-Verantwortliche, die vor einer Neuinstallation oder Erweiterung wissen wollen, wie viele APs sie brauchen und wo sie hinkommen. Für Heimnetzwerke ist es überdimensioniert, aber bei Büros, Lagerhallen oder Mehrfamilienhäusern spart es Zeit und Fehlkäufe.

## Projektassistent

Beim Erstellen eines neuen Projekts startet ein Assistent, der die Grundkonfiguration abfragt: Soll WiFi eingeplant werden? Welche Produktlinie (z.B. Enterprise E7)? Braucht es Kameras oder Zutrittskontrolle? Basierend auf den Antworten schlägt das Tool eine erste Geräteliste vor, inklusive Gateway und Switch.

Das ist ein brauchbarer Startpunkt, gerade wenn man die Ubiquiti-Produktpalette nicht auswendig kennt. Man kann danach alles anpassen, aber die erste Zusammenstellung gibt eine Richtung vor.

## Grundriss und Wandmaterialien

Der Grundriss wird als Bild (PNG, JPEG) oder PDF hochgeladen. Danach muss man den Massstab setzen, indem man eine bekannte Strecke im Plan markiert und die Länge eingibt. Ohne diesen Schritt stimmen die Entfernungsangaben und die WLAN-Simulation nicht.

Anschliessend zeichnet man die Wände ein. Das Tool unterscheidet verschiedene Materialien: Trockenbauwände, Beton, Glas (Einfach- und Doppelverglasung), Ziegelstein. Jedes Material hat einen eigenen Dämpfungswert, der beeinflusst, wie stark das WLAN-Signal beim Durchgang abgeschwächt wird. Betonwände schlucken mehr als Trockenbauwände, Glasfenster weniger als gemauerte Wände.

Das Einzeichnen der Wände braucht etwas Geduld. Bei einem Grundriss mit vielen Räumen und Fenstern sitzt man schon mal eine halbe Stunde daran. Aber die Genauigkeit der späteren WLAN-Heatmap hängt direkt davon ab, wie sorgfältig man hier arbeitet.

## WLAN-Simulation und Heatmap

Sobald die Wände stehen und die Access Points platziert sind, generiert das Design Center eine Heatmap. Die zeigt farbcodiert die Signalstärke in dBm: Grün ist gut, Gelb geht noch, Rot ist problematisch.

Man kann zwischen verschiedenen Frequenzbändern umschalten (2.4 GHz, 5 GHz, 6 GHz), die Sendeleistung und Kanalbreite anpassen und den Endgerätetyp wählen, von WiFi 7 bis WiFi 4. Je nach Einstellung ändert sich die Heatmap. Ein WiFi-7-Client mit Multi-Link Operation sieht die Welt anders als ein älteres Smartphone auf 2.4 GHz.

Wenn man den Mauszeiger über den Grundriss bewegt, zeigt das Tool in Echtzeit die geschätzte Signalstärke und den Abstand zum nächsten AP an. Bei mehreren APs sieht man auch, wo ein Client voraussichtlich roamen würde. Das hilft bei der Feinabstimmung der AP-Positionen, bevor man Löcher bohrt.

## Kameras und Zutrittskontrolle

Neben WLAN lässt sich auch die Kameraplanung im Design Center abbilden. Man wählt ein Kameramodell (z.B. G5 Bullet, G5 Turret Ultra) und platziert es auf dem Grundriss. Das Tool zeigt den Blickwinkel und den abgedeckten Bereich an. So erkennt man auf einen Blick, ob es tote Winkel gibt.

Für die Zutrittskontrolle funktioniert es ähnlich: Enterprise Access Hubs platzieren, dann die Reader (G3 Reader Pro, Reader Flex) an den Türen positionieren. Die G3 Reader Pro haben eine eingebaute Kamera, deren Erfassungsbereich ebenfalls angezeigt wird.

## Datendosen und Verkabelung

Seit den letzten Updates lassen sich auch RJ45-Datendosen im Grundriss einzeichnen. Man platziert sie dort, wo Endgeräte angeschlossen werden sollen, und verbindet sie über das Kabel-Werkzeug mit dem nächsten Switch oder Patchpanel.

Dazu kommt ein Kabelwege-Tool, mit dem sich die physischen Kabeltrassen durch Wände und Decken planen lassen. Jedes Kabel zeigt die berechnete Länge an. Das ist nützlich für die Materialkalkulation: Man weiss vor der Bestellung, wie viele Meter Cat6a man braucht.

Ausserdem gibt es seit kurzem die Möglichkeit, kabelgebundene Client-Geräte (PCs, Drucker, IP-Telefone) auf dem Grundriss zu platzieren. Das hilft bei der Port-Planung an den Switches.

## Netzwerk-Rack

Das Design Center kann auch ein virtuelles Netzwerk-Rack abbilden. Man wählt die Rack-Grösse und bestückt es mit Geräten: Gateway, Switches, Patch-Panels, USV. Die Geräte werden in der Rack-Ansicht so dargestellt, wie sie später tatsächlich eingebaut werden.

Das Rack wird dabei mit dem Grundriss verknüpft. Die Kabelverbindungen zwischen Rack-Geräten und platzierten Kameras, APs oder Datendosen werden automatisch in die Topologie übernommen.

## Neu 2026: High Availability und MC-LAG

Das Update vom Februar 2026 bringt zwei Funktionen, die für grössere Installationen relevant sind.

Shadow Mode lässt sich jetzt im Design Center abbilden. Man platziert zwei identische Gateways (etwa zwei UDM Pro Max) und verbindet sie miteinander. Das Tool stellt sie als Stack dar und zeigt die Hochverfügbarkeits-Konfiguration in der Topologieansicht. Allerdings funktioniert das aktuell nur, wenn man die Geräte auf dem Grundriss platziert. Im Rack selbst wird die Shadow-Mode-Verbindung noch nicht visualisiert.

MC-LAG funktioniert nach dem gleichen Prinzip: Zwei identische Switches verbinden, und das Design Center stellt sie als zusammengehörigen Stack dar. Das ist bei Installationen mit redundanten Switching-Ebenen hilfreich, weil man die Ausfallsicherheit schon in der Planungsphase berücksichtigen kann.

Zusätzlich gibt es jetzt WAN-Switches, die sich automatisch mit dem Internet-Knoten in der Topologie verbinden und Verbindungen zu bis zu zwei Gateways unterstützen.

## Stückliste und Export

Wenn die Planung steht, generiert das Design Center eine Stückliste (Bill of Materials) mit allen platzierten Geräten und den geschätzten Kosten. Die Liste lässt sich exportieren, ebenso der gesamte Plan als PDF oder HTML. Seit Ende 2025 gibt es auch einen integrierten Checkout, über den man die Geräte direkt bei Ubiquiti bestellen kann.

Für Angebote an Kunden ist das praktisch: Man exportiert den Plan mit Heatmap und Stückliste und hat eine professionelle Dokumentation, die zeigt, warum man genau diese Geräte an genau diesen Positionen vorschlägt.

## Fazit

Das UniFi Design Center hat sich von einem simplen Heatmap-Tool zu einer umfassenden Netzwerkplanungssoftware entwickelt. Die WLAN-Simulation, Kameraplanung, Verkabelung und Rack-Konfiguration in einem kostenlosen Tool zu haben, ist ungewöhnlich. Vergleichbare Software von Ekahau oder iBwave kostet vierstellig pro Jahr.

Die Genauigkeit der WLAN-Heatmap hängt stark davon ab, wie genau man die Wandmaterialien und den Massstab eingibt. Wer hier abkürzt, bekommt optimistische Ergebnisse. Wer sich die Zeit nimmt, bekommt eine brauchbare Vorab-Einschätzung, die den Aufwand der manuellen Vermessung vor Ort reduziert.
