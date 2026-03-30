---
title: "UniFi Dream Router 5G Max: Cloud Gateway mit 5G, WiFi 7 und 10G SFP+"
description: "Der UDR 5G Max ist Ubiquitis erster Dream Router mit eingebautem 5G-Modem, WiFi 7 und einem 10G-SFP+-Port. Für wen sich das Gerät eignet und was es von anderen Cloud Gateways unterscheidet."
pubDate: 2026-03-27
lang: de
tags: ["UniFi", "UDR 5G Max", "Dream Router", "5G", "WiFi 7", "Cloud Gateway", "Ubiquiti", "SFP+"]
author: "Digital Runners"
---

## Internet ohne Kabel

Ubiquiti hat mit dem Dream Router 5G Max ein Cloud Gateway vorgestellt, das kein kabelgebundenes Internet mehr braucht. Das Gerät hat ein eingebautes 5G-Modem und kann damit direkt über das Mobilfunknetz online gehen. Man steckt eine SIM-Karte rein, und der Router verbindet sich mit dem nächsten 5G-Mast. Das funktioniert als primärer Internetzugang oder als Failover, falls die Glasfaser mal ausfällt.

Bisher brauchte man für 5G-Failover bei UniFi einen separaten USB-Dongle oder einen externen LTE-Router. Das war immer eine Bastellösung. Der UDR 5G Max macht das überflüssig, weil alles in einem Gehäuse steckt.

Der Preis liegt bei 499 US-Dollar im Ubiquiti Store.

## Was drin steckt

Das 5G-Modem schafft bis zu 3.4 Gbit/s im Downstream und 560 Mbit/s im Upstream auf NSA-Netzen (Non-Standalone). Auf SA-Netzen (Standalone 5G) sind es 1.8 Gbit/s runter und 650 Mbit/s rauf. Das sind theoretische Maximalwerte, die in der Praxis vom Standort, der Netzabdeckung und dem Anbieter abhängen. In Deutschland, Österreich und der Schweiz dürfte man im Alltag eher mit 200 bis 800 Mbit/s rechnen, was für die meisten Anwendungen mehr als genug ist.

Das Gerät hat zwei Nano-SIM-Slots und unterstützt zusätzlich eSIM. Wer zwei SIM-Karten von verschiedenen Anbietern einsteckt, bekommt automatisches Failover zwischen den Mobilfunkverbindungen. In den USA sind AT&T und T-Mobile zertifiziert, Verizon soll folgen. Für Europa muss man die Kompatibilität mit dem eigenen Anbieter prüfen.

## WiFi 7 und Anschlüsse

Der Router funkt WiFi 7 (BE10700) auf drei Bändern: 2.4 GHz mit 688 Mbit/s, 5 GHz mit 4.3 Gbit/s und 6 GHz mit 5.7 Gbit/s. Das ist dieselbe Klasse wie ein U7 Pro Access Point, verpackt in einem zylindrischen Gehäuse, das auf dem Schreibtisch steht.

Bei den kabelgebundenen Ports gibt es einen 10G-SFP+-Port und vier 2.5-GbE-RJ45-Ports. Einer der RJ45-Ports liefert PoE, womit sich zum Beispiel ein Access Point oder eine Kamera direkt vom Router mit Strom versorgen lässt, ohne separaten PoE-Switch. Das ist praktisch für kleine Standorte, wo man nicht extra einen Switch hinstellen will.

Für lokalen Speicher gibt es einen SD-Karten-Slot. Darüber lassen sich Protect-Aufnahmen lokal speichern, ähnlich wie beim normalen Dream Router.

Das Gehäuse misst 110 x 110 x 250 mm und hat die typische zylindrische Form der Dream-Router-Reihe.

## UniFi OS und Apps

Wie jedes Cloud Gateway läuft der UDR 5G Max mit UniFi OS. Das heisst: Network, Protect, Access und die anderen UniFi-Anwendungen laufen direkt auf dem Gerät. Wer bereits UniFi-Hardware im Einsatz hat, verwaltet alles über das gewohnte Dashboard.

Das Gerät funktioniert auch als kleiner NVR (Network Video Recorder) für UniFi Protect. Ein paar Kameras lassen sich über den SD-Karten-Slot aufzeichnen, aber wer mehr als drei oder vier Kameras betreibt, braucht einen dedizierten UNVR oder UNAS.

## 5G als Backup oder Hauptanschluss

Der spannendste Anwendungsfall ist wahrscheinlich nicht der Heimgebrauch, sondern Standorte, an denen kein Glasfaseranschluss verfügbar ist. Baustellen, Pop-up-Stores, temporäre Büros, ländliche Standorte. Man stellt den Router hin, steckt eine SIM-Karte rein und hat innerhalb von Minuten ein vollwertiges UniFi-Netzwerk mit Internet.

Für Standorte mit bestehendem Kabelanschluss macht das Gerät als Failover-Lösung Sinn. Fällt die Leitung aus, springt das 5G-Modem ein. Das passiert automatisch und wird in der UniFi-App angezeigt.

Ubiquiti bietet neben dem UDR 5G Max auch zwei separate 5G-Modems an: den UniFi 5G Max (U5G-Max) für den Innenbereich zu 399 Dollar und den UniFi 5G Max Outdoor (U5G-Max-Outdoor) für Ausseninstallationen zu 459 Dollar. Die lassen sich an bestehende Cloud Gateways anschliessen, wenn man kein neues Gateway braucht, aber trotzdem 5G-Failover haben will.

## Einordnung

499 Dollar für einen Router mit eingebautem 5G-Modem, WiFi 7 und 10G SFP+ ist kein Schnäppchen, aber auch nicht übertrieben, wenn man bedenkt, was vergleichbare Geräte von Cradlepoint oder Peplink kosten. Die laufen schnell in den vierstelligen Bereich.

Wer bereits ein Dream Machine Pro oder ein Enterprise Gateway betreibt und damit zufrieden ist, braucht den UDR 5G Max nicht. Das Gerät richtet sich an Leute, die entweder kein Kabelinternet haben oder eine einfache Failover-Lösung wollen, ohne an der bestehenden Infrastruktur zu basteln.

Wer den Router bestellen will: Er ist im Ubiquiti Store verfügbar, aber erfahrungsgemäss schnell vergriffen. Restock-Benachrichtigung einschalten lohnt sich.
