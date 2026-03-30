---
title: "UniFi AirWire: WiFi 7 Client mit echtem STR MLO im Test"
description: "Der UniFi AirWire ist Ubiquitis erster externer WiFi-7-Client mit echtem STR MLO. Er verbindet sich gleichzeitig auf 5 GHz und 6 GHz und liefert in Tests deutlich höhere Geschwindigkeiten als das eingebaute WLAN eines MacBook."
pubDate: 2026-03-20
lang: de
tags: ["UniFi", "AirWire", "WiFi 7", "MLO", "STR", "Ubiquiti", "WLAN"]
author: "Digital Runners"
---

## Was ist der AirWire?

Ubiquiti hat mit dem AirWire ein ziemlich ungewöhnliches Produkt vorgestellt: einen externen WiFi-7-Client, der per USB-C an den Rechner angeschlossen wird. Das Gerät verbindet sich gleichzeitig über 5 GHz und 6 GHz mit dem Access Point und aggregiert die beiden Bänder. Das ist echtes STR MLO (Simultaneous Transmit and Receive Multi-Link Operation), nicht das EMLSR, das aktuelle Laptops und Smartphones verwenden.

Bei EMLSR sind zwar auch mehrere Bänder aktiv, aber nur eines sendet und empfängt gleichzeitig. Die anderen Bänder hören nur zu. Der AirWire macht das anders: Beide Funkmodule arbeiten parallel, was in der Praxis spürbar mehr Durchsatz und niedrigere Latenz bringt.

## Hardware und Design

Der AirWire ist kein kleiner USB-Stick. Das Gehäuse misst 117 x 117 x 42,5 mm und wiegt 537 g. Das ist nötig, weil zwei separate Funkmodule, eine Richtantenne und die Kühlung untergebracht werden müssen.

Auf der Vorderseite sitzt ein kleines LCM-Display, das anzeigt, mit welchen Bändern der AirWire gerade verbunden ist. Oben lässt sich eine Antenne ausklappen, die man in Richtung Access Point ausrichten sollte. Auf der Rückseite gibt es zwei USB-C-Anschlüsse: einen für Daten und einen für zusätzliche Stromversorgung, falls der Rechner nicht genug Leistung liefert.

Am Rechner erscheint der AirWire als 5-GbE-Netzwerkadapter über USB 3.2 Gen 2. Der maximale Stromverbrauch liegt bei 18 Watt.

## Technische Daten

Die wichtigsten Eckdaten:

- WiFi 7, 4 Spatial Streams (2x2 auf 5 GHz + 2x2 auf 6 GHz)
- Maximale Datenrate: 5,8 Gbit/s auf 6 GHz (320 MHz), 4,3 Gbit/s auf 5 GHz (240 MHz)
- Antennengewinn: 11 dBi auf beiden Bändern
- Sendeleistung: 25 dBm auf 5 GHz, 20 dBm auf 6 GHz
- Kein 2,4-GHz-Support
- USB-C mit Power Delivery (5/9/12V)
- Abwärtskompatibel zu WiFi 6 und WiFi 5

## Einrichtung im UniFi Network

Die Einrichtung ist unkompliziert. In der [UniFi Network App](/de/blog/unifi-network-10-1-wifi-doctor) erscheint der AirWire als neues Gerät mit dem Status "Pending Adoption". Einmal adoptiert, taucht er in der Geräteliste auf.

Unter den WLAN-Einstellungen sollte man prüfen, ob "Mesh eMlo" aktiviert ist (steht aktuell noch unter Labs). Wer einen WiFi-7-Access-Point mit 320 MHz auf 6 GHz hat, sollte auch das aktivieren. In der AirWire-Übersicht sieht man dann beide Verbindungen: 80 MHz auf 5 GHz und 320 MHz auf 6 GHz.

Man kann in den Einstellungen den Mesh Parent festlegen, also welcher Access Point als Gegenstelle dienen soll. Ausserdem lässt sich das native VLAN konfigurieren.

## Speedtest-Ergebnisse

Mactelecom Networks hat den AirWire an einem Mac Mini getestet, der normalerweise über das eingebaute WLAN verbunden ist. Als Gegenstelle diente ein [E7 Access Point](/de/blog/e7-campus-enterprise-wifi-7) mit 10-GbE-Anbindung. Hier die Ergebnisse im Vergleich:

**Im Keller (ca. 5 Meter zum AP):**

| Test | Eingebautes WLAN | AirWire |
|------|-----------------|---------|
| Speedtest Download | 768 Mbit/s | 2.547 Mbit/s |
| Speedtest Upload | 790 Mbit/s | 1.939 Mbit/s |
| OpenSpeedTest Download | 757 Mbit/s | 2.771 Mbit/s |
| OpenSpeedTest Upload | 853 Mbit/s | 3.247 Mbit/s |

**Erdgeschoss (ein Stockwerk über dem AP):**

| Test | Eingebautes WLAN | AirWire |
|------|-----------------|---------|
| Speedtest Download | 445 Mbit/s | 2.999 Mbit/s |
| Speedtest Upload | 268 Mbit/s | 1.340 Mbit/s |
| OpenSpeedTest Download | 462 Mbit/s | 1.788 Mbit/s |
| OpenSpeedTest Upload | 177 Mbit/s | 1.323 Mbit/s |

**Obergeschoss (zwei Stockwerke über dem AP):**

| Test | Eingebautes WLAN | AirWire |
|------|-----------------|---------|
| Speedtest Download | 569 Mbit/s | 1.963 Mbit/s |
| Speedtest Upload | 97 Mbit/s | 1.200 Mbit/s |
| OpenSpeedTest Download | 393 Mbit/s | 2.160 Mbit/s |
| OpenSpeedTest Upload | 93 Mbit/s | 1.583 Mbit/s |

Die Unterschiede sind teilweise enorm, besonders beim Upload über mehrere Stockwerke. Im Obergeschoss liefert der AirWire beim Upload über 15-mal so viel Durchsatz wie das eingebaute WLAN.

## Temperatur

Bei den Temperaturen zeigte der AirWire Werte um die 47 bis 48 °C (ca. 117 °F). Laut Mactelecom Networks fühlt sich das Gehäuse beim Anfassen nicht besonders heiss an.

## Für wen ist der AirWire gedacht?

Der AirWire ist ein Nischenprodukt. Er kostet 199 Dollar und ist grösser als ein normaler WLAN-Adapter. Aber für bestimmte Szenarien ist er sinnvoll: Wenn man einen stationären Rechner hat, der kein Ethernet-Kabel bekommen kann, und trotzdem hohen Durchsatz braucht (etwa für Videobearbeitung ab einem NAS), dann kann der AirWire eine Alternative zur Kabelverlegung sein. Das Kabel zu verlegen würde in vielen Fällen ohnehin mehr als 199 Dollar kosten.

Man braucht dafür allerdings einen UniFi Access Point. Und für das volle STR MLO muss es ein WiFi-7-Modell sein, also ein [U7 oder E7](/de/blog/wifi-7-u7-pro-migration). Ältere Access Points werden unterstützt, liefern aber kein MLO.

## Fazit

Der AirWire löst ein konkretes Problem: Aktuelle WiFi-7-Clients nutzen das Potenzial des Standards nicht aus, weil sie nur EMLSR können. Mit dem AirWire bekommt man echtes STR MLO auf der Client-Seite, und die Testergebnisse zeigen, dass sich das in der Praxis deutlich bemerkbar macht. Wer schon in UniFi WiFi 7 investiert hat und an einem Standort mehr WLAN-Leistung braucht als das eingebaute Notebook-WLAN liefert, bekommt hier eine brauchbare Lösung.

---

*Haben Sie Fragen zu WiFi 7? [Kontaktieren Sie uns](/de/kontakt) für eine kostenlose Erstberatung.*
