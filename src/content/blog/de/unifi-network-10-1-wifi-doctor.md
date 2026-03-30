---
title: "UniFi Network 10.1: WiFi Doctor, Roaming-Visualisierung und verbesserter Shadow Mode"
description: "UniFi Network 10.1 bringt einen WiFi Doctor zur automatischen Netzwerk-Optimierung, eine visuelle Roaming-Karte für Clients und ein verbessertes Shadow-Mode-Setup für Gateway-Redundanz."
pubDate: 2026-03-11
lang: de
tags: ["UniFi", "Network", "WiFi", "Shadow Mode", "Roaming", "Firmware"]
author: "Digital Runners"
---

## Was steckt in Network 10.1?

Ubiquiti hat Anfang Februar UniFi Network 10.1 veröffentlicht (Version 10.1.83, aktuell als Release Candidate). Das Update konzentriert sich auf drei Bereiche: automatische WLAN-Optimierung, bessere Sichtbarkeit beim Client-Roaming und ein überarbeitetes Setup für die Gateway-Hochverfügbarkeit.

## WiFi Doctor

Auf dem Dashboard gibt es jetzt einen neuen Bereich namens "WiFi Doctor". Der prüft das WLAN-Setup automatisch und zeigt, wo Optimierungsbedarf besteht. Konkret geht es um vier Punkte: die 2.4-GHz-Kanäle für IoT-Geräte, aktuelle Firmware auf allen APs, die Roaming-Konfiguration auf 5 GHz und 6 GHz, sowie die kabelgebundene AP-Anbindung.

Wenn alles passt, stehen vier grüne Haken. Wenn nicht, zeigt der WiFi Doctor, was angepasst werden muss. Das ist vor allem nützlich, wenn man mehrere Standorte betreut und nicht jedes Mal alle Einstellungen manuell durchgehen will.

## Roaming-Visualisierung

Unter "Air View" gibt es einen neuen Bereich für Connectivity Insights. Dort lassen sich Roaming-Events einzelner Clients nachverfolgen: Zwischen welchen Access Points ist ein Gerät gewechselt? War der Übergang erfolgreich oder ist etwas schiefgelaufen?

Dazu kommt eine Roaming-Karte, die visuell darstellt, wie sich Clients zwischen APs bewegen. In kleinen Setups mit zwei APs sieht man wenig, aber bei grösseren Installationen mit zehn oder mehr APs wird das schnell nützlich. Man kann mehrere Clients gleichzeitig auswählen und nach Hersteller, SSID, Quell-AP und Ziel-AP filtern.

Wer regelmässig mit WLAN-Problemen in grösseren Büros oder Lagerhallen zu tun hat, bekommt hier ein Werkzeug, das die Fehlersuche deutlich beschleunigt.

## Shadow Mode Setup

Für alle, die zwei Gateways im Einsatz haben (etwa zwei UDM Pro Max), gibt es ein verbessertes Shadow-Mode-Setup. In den Einstellungen taucht jetzt ein geführter Assistent auf, der Schritt für Schritt durch die Verkabelung und Konfiguration beider Gateways führt.

Shadow Mode basiert auf VRRP und sorgt dafür, dass bei einem Gateway-Ausfall das zweite Gerät automatisch übernimmt. Die Einrichtung war bisher nicht besonders intuitiv. Mit dem neuen Assistenten prüft das System, ob die Konfiguration korrekt synchronisiert ist und ob der Failover tatsächlich funktioniert, statt sich darauf zu verlassen, dass schon alles stimmen wird.

Unter dem gleichen Menüpunkt finden sich auch die Einstellungen für MC-LAG und Switch Stacking, wobei die Stack-Switches noch nicht erhältlich sind.

## Audit Log

Neu gibt es ein Audit Log unter dem Logging-Bereich. Dort wird protokolliert, welcher Admin welche Konfigurationsänderung vorgenommen hat. Zu jedem Eintrag sieht man das Gerät (PC, Mac, iPhone), die Quell-IP, die Kategorie der Änderung und eine Beschreibung, was genau geändert wurde.

Für Teams, in denen mehrere Personen Zugriff auf die UniFi-Verwaltung haben, ist das praktisch. Wenn plötzlich etwas nicht mehr funktioniert, lässt sich nachvollziehen, wer was wann angepasst hat.

## Weitere Neuerungen

Network 10.1 bringt noch ein paar zusätzliche Verbesserungen mit. Device Tags erlauben es, Geräte zu gruppieren und schnell nach bestimmten Kategorien zu filtern (etwa alle Switches, an denen Kameras hängen). Bei den Clients gibt es neue Quick Actions mit einem Ping-Test und der Möglichkeit, Apps für bestimmte Geräte zu blockieren. VPN-Server und -Clients unterstützen jetzt konfigurierbare MTU/MSS-Werte. Und wer Starlink im Einsatz hat, sieht auf dem Dashboard neu den Firmware-Status und Obstruktions-Details, sofern der Starlink direkt am UniFi-Gateway angeschlossen ist.

## Fazit

Network 10.1 ist kein spektakuläres Feature-Update, aber ein solides. Der WiFi Doctor spart Zeit bei der Konfigurationsprüfung, die Roaming-Visualisierung hilft bei der Fehlersuche in grösseren Installationen, und der verbesserte Shadow Mode macht Hochverfügbarkeit zugänglicher. Das Audit Log war überfällig.

Das Update ist aktuell als Release Candidate verfügbar. Wer es testen will, muss in den Einstellungen auf den Release-Candidate-Kanal wechseln.
