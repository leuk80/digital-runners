---
title: "UniFi Travel Router: Das kleine Ding, das Reisenden das Netzwerk-Leben leichter macht"
description: "Wer schon mal in einem Hotel oder Airbnb sass und sich mit dem dortigen WLAN herumgeschlagen hat, kennt das Problem. Captive Portals, die nicht richtig funktionieren. Jedes Gerät muss sich einzeln anmelden. Von Sicherheit wollen wir gar nicht erst anfangen. Ubiquiti hat genau dafür jetzt eine Lösung herausgebracht: den **UniFi Travel Router (UTR)**.

Ich habe mir das Gerät genauer angeschaut und teile hier meine Eindrücke."
pubDate: 2026-03-10
lang: de
tags: ["Unifi", "Ubiquiti", "WLAN", "Travel", "Router", "VPN", "Wireless", "Wireguard", "Teleport"]
author: "Digital Runners"
---

## Was ist der UTR eigentlich?

Der UniFi Travel Router ist ein ultra-kompakter Router, der gerade mal 89 Gramm wiegt und etwa so gross ist wie eine Kreditkarte — nur etwas dicker. Er passt problemlos in die Hosentasche oder die Laptop-Tasche. Das Gehäuse besteht aus Polycarbonat, kein schweres Metall-Ungetüm also.

Die Idee dahinter ist simpel: Man steckt den UTR an eine USB-C Stromquelle an, und innerhalb weniger Minuten hat man sein eigenes privates Netzwerk. Was den UTR von anderen Travel Routern unterscheidet: Wer zuhause bereits ein UniFi-Setup betreibt, kann den UTR an das Heimnetzwerk binden. Die eigene SSID, die Firewall-Regeln — alles kommt mit auf die Reise. Die Geräte verbinden sich automatisch, genau wie zuhause.

## Anschlüsse und Design

Am UTR findet man zwei USB-C Ports (einer für Strom, einer fürs Tethering mit dem Handy), zwei Gigabit Ethernet Ports (WAN und LAN, versteckt hinter einem kleinen Deckel), ein 1.14-Zoll Status-Display, das den aktuellen Verbindungsstatus anzeigt, sowie eine Öffnung für ein Lanyard.

Der Stromverbrauch liegt bei lächerlich tiefen 5 Watt. Das heisst, man kann den UTR am USB-Port des Hotelbetts betreiben oder an einer Powerbank. Kein spezielles Netzteil nötig.

Was fehlt: kein integrierter Akku und kein SIM- oder eSIM-Slot. Wer Mobilfunk nutzen will, muss sein Handy per USB-C anstecken und Tethering aktivieren.

## Setup: Überraschend unkompliziert

Die Einrichtung geht erstaunlich schnell. UTR anstecken, die UniFi App auf dem Handy öffnen, der Router wird per Bluetooth erkannt. Ein paar Taps, und man bindet den UTR an das Heimnetzwerk. Das war es eigentlich schon.

Wenn man irgendwo ankommt, steckt man den UTR ein, wählt in der App das lokale WLAN aus (oder steckt ein Ethernet-Kabel ein), und falls das WLAN ein Captive Portal hat, loggt man sich über die App ein. Danach sind alle Geräte hinter dem UTR und teilen sich die eine Anmeldung. Praktisch, besonders in Hotels, die die Anzahl verbundener Geräte pro Zimmer einschränken.

## Teleport: Das Heimnetzwerk immer dabei

Das ist für mich der spannendste Teil. Mit Teleport (basierend auf WireGuard VPN) verbindet sich der UTR automatisch mit dem UniFi Cloud Gateway zuhause. Ab diesem Moment ist man quasi im Heimnetzwerk, egal wo man gerade sitzt. Die Geräte sehen die gleichen Ressourcen, die gleichen Firewall-Regeln gelten, und der gesamte Traffic läuft verschlüsselt über den Heim-Router.

Das bedeutet auch: Man muss nicht auf jedem einzelnen Gerät einen VPN-Client installieren. Smart-TVs, Drucker, ältere Geräte, die keinen VPN-Client unterstützen — alles profitiert automatisch davon, sobald es mit dem UTR verbunden ist.

Ein Reviewer hat sogar gezeigt, wie er mit dem UTR und einer G6 Instant Kamera das Videomaterial über den Teleport-Tunnel zurück auf seinen UNVR zuhause geschickt hat. Inklusive Erkennungen und Backup. Wer viel reist und zuhause ein UniFi Protect Setup betreibt, kann das tatsächlich gebrauchen.

## Und die Performance?

Hier muss man ehrlich sein: Der UTR nutzt WiFi 5 (802.11ac). Kein WiFi 6, kein WiFi 7. Das merkt man. In den Tests verschiedener Reviewer zeigen sich folgende Werte:

- Über WLAN-Uplink: etwa 100–250 Mbit/s
- Über Ethernet-WAN: etwa 300–400 Mbit/s
- Direkt am LAN-Port: etwa 500–600 Mbit/s (mit Teleport-Tunnel)

Für Hotel-WLAN, das meistens ohnehin nicht schneller als 50–100 Mbit/s ist, reicht das locker. Aber wer zuhause Gigabit oder mehr hat und diese Geschwindigkeit auch unterwegs erwartet, wird enttäuscht sein. Der UTR ist kein Speed-Wunder, sondern ein Komfort- und Sicherheits-Gerät.

Für 5 bis 10 Geräte im Hotelzimmer oder in einem Coworking Space ist er aber mehr als ausreichend.

## Was mir gefällt

Die Grösse und das Gewicht. 89 Gramm — das vergisst man im Rucksack. Das Teleport-Feature ist schlicht genial, wenn man bereits UniFi zuhause hat. Der tiefe Stromverbrauch erlaubt den Betrieb am USB-Port des Laptops oder an einer Powerbank. Strom und Tethering laufen über separate USB-C Ports, was bei manchen Konkurrenzprodukten ein Problem ist. Und der UTR funktioniert auch ohne UniFi-Konto als Standalone-Router mit WireGuard VPN.

## Was besser sein könnte

WiFi 5 ist mittlerweile etwas in die Jahre gekommen. WiFi 6 wäre schön gewesen. Kein integrierter Akku bedeutet, dass man immer ein Kabel oder eine Powerbank dabei haben muss. Kein SIM/eSIM-Slot — für ein echtes "immer online"-Travel-Setup braucht man weiterhin das Handy. Der Screen ist nicht touch-fähig, alles läuft über die App. Nicht tragisch, aber der Bildschirm könnte mehr. Und die Ethernet-Ports sind 1 GbE statt 2.5 GbE.

## Für wen ist der UTR?

Wenn man kein UniFi-Netzwerk zuhause hat, ist der UTR eine nette, aber nicht zwingende Anschaffung. Er funktioniert zwar auch standalone, aber das grosse Plus ist die Integration ins bestehende UniFi-Ökosystem.

Wer aber bereits ein UniFi Cloud Gateway zuhause stehen hat und regelmässig reist, für den ist der UTR eigentlich ein No-Brainer. Für 70 Euro (EU Store) bzw. 79 Dollar (US Store) bekommt man einen Router, der sich so nahtlos ins eigene Setup einfügt, dass es sich fast wie Magie anfühlt.

Feldtechniker, IT-Fachleute, die beim Kunden vor Ort arbeiten, Remote Worker, die zwischen Cafés und Hotels pendeln, oder einfach Leute, die auf Reisen nicht auf ihr gewohntes Netzwerk verzichten möchten — genau für diese Zielgruppe ist das Gerät gemacht.

## Fazit

Der UniFi Travel Router ist keine Wunderwaffe. Die WiFi-5-Spezifikationen sind nicht mehr auf dem neusten Stand, und ohne Akku und SIM-Slot fehlen ihm ein paar Features, die andere Travel Router bieten. Aber was er macht, macht er richtig gut: Er bringt das eigene UniFi-Netzwerk mit, überallhin. Das Setup ist innerhalb von Minuten erledigt, die Teleport-VPN-Verbindung läuft zuverlässig, und das Gerät ist so klein und leicht, dass es wirklich keine Ausrede gibt, es nicht dabei zu haben.

Ich bin gespannt auf eine mögliche "Pro"-Version mit WiFi 7, eSIM und Akku. Aber bis dahin erfüllt der UTR seinen Zweck — und das zu einem fairen Preis.
