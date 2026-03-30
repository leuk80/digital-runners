---
title: "UniFi G6 Entry: Videoklingel mit Gesichtserkennung, Nummernschilderkennung und Zutrittskontrolle"
description: "Die UniFi G6 Entry ist Ubiquitis erste Türklingel mit integrierter Gesichtserkennung und Nummernschilderkennung. Sie funktioniert gleichzeitig als UniFi Protect Kamera und als UniFi Access Reader mit NFC, Face Unlock und Apple/Google Wallet."
pubDate: 2026-03-23
lang: de
tags: ["UniFi", "G6 Entry", "Türklingel", "Doorbell", "Gesichtserkennung", "LPR", "UniFi Access", "UniFi Protect", "Zutrittskontrolle", "Ubiquiti"]
author: "Digital Runners"
---

## Mehr als eine Klingel

Ubiquiti hat mit der G6 Entry eine Türklingel vorgestellt, die deutlich mehr kann als nur klingeln und ein Kamerabild liefern. Das Gerät vereint drei Funktionen in einem Gehäuse: Videoklingel, Überwachungskamera und Zutrittskontrollleser. Wer bereits [UniFi Protect](/de/blog/unifi-protect-vs-consumer) und [UniFi Access](/de/blog/unifi-access-zutrittskontrolle) im Einsatz hat, bekommt damit ein Gerät, das sich nahtlos in beide Systeme einfügt.

Das Besondere an der G6 Entry ist die Kombination aus Gesichtserkennung und Nummernschilderkennung (License Plate Recognition, kurz LPR) mit einem eingebauten Access Reader. Man kann also die Haustür nicht nur per App oder NFC-Karte öffnen, sondern auch per Gesicht. Das funktioniert direkt über UniFi Access, ohne dass ein separater Kartenleser an der Tür nötig wäre.

## Kamera und Bildqualität

Die G6 Entry hat einen 5-MP-Sensor mit einem Sichtfeld von 180° diagonal (100° horizontal, 135° vertikal). Das ist ein weiter Blickwinkel, der den gesamten Eingangsbereich abdeckt. Für Nachtaufnahmen sorgt eine IR-Beleuchtung mit einer Reichweite von 5 Metern.

Die Kamera wird wie jede andere UniFi Protect Kamera in der Protect App verwaltet. Aufnahmen landen auf dem lokalen NVR (Network Video Recorder), also auf dem Cloud Gateway, Dream Machine oder einer UNVR. Es gibt kein Cloud-Abo und keine monatlichen Gebühren, was Ubiquiti von den meisten Konkurrenten unterscheidet.

## AI-Erkennung im Detail

Im Inneren arbeitet ein Quad-Core-Prozessor, der die AI-Erkennungen lokal auf dem Gerät ausführt. Die G6 Entry erkennt Personen, Fahrzeuge und Tiere. Dazu kommt die Gesichtserkennung, die in UniFi Protect bekannte Gesichter identifizieren und benennen kann.

Die Nummernschilderkennung ist für Auffahrten und Garageneinfahrten gedacht. In Kombination mit UniFi Access lässt sich damit eine automatische Toröffnung realisieren: Erkennt die Kamera ein hinterlegtes Nummernschild, kann das Tor oder die Schranke automatisch geöffnet werden.

## Zutrittskontrolle mit UniFi Access

Der eingebaute Access Reader unterstützt mehrere Methoden, um die Tür zu öffnen:

- NFC-Karten und Schlüsselanhänger
- Apple Wallet und Google Wallet
- Face Unlock (Gesichtserkennung)
- Mobile Unlock (über die UniFi Access App)
- TouchPass

Damit die Zutrittskontrollfunktionen nutzbar sind, braucht man allerdings einen UniFi Access Hub. Das ist die zentrale Steuereinheit, die den Türöffner ansteuert und die Access-Logik verwaltet. Ausserdem müssen sowohl UniFi Protect als auch UniFi Access auf der Konsole installiert sein.

Wer die G6 Entry nur als Videoklingel mit Protect nutzen will, braucht den Access Hub nicht. Die Kamerafunktionen und die Gegensprechanlage funktionieren auch ohne Access.

## Wetterfest und robust

Die G6 Entry ist mit IP55 gegen Staub und Strahlwasser geschützt und hält mit IK07 auch leichte mechanische Stösse aus. Die Stromversorgung läuft über PoE+ (802.3at), was die Installation vereinfacht, weil nur ein einziges Netzwerkkabel zur Tür gelegt werden muss. Strom und Daten kommen über dasselbe Kabel.

## Drei Modelle im Vergleich

Ubiquiti bietet aktuell drei Türklingeln an, die sich in Funktionsumfang und Preis unterscheiden:

- **Doorbell Lite** (ca. 99 USD): Kompakte PoE-Klingel mit Kamera und Gegensprechanlage. Keine Access-Funktion, kein NFC-Reader. Für alle, die nur ein Kamerabild und eine Benachrichtigung wollen.

- **G6 Entry**: Der Mittelweg. 5-MP-Kamera mit AI-Erkennung, Gesichtserkennung, LPR und eingebautem Access Reader. Kein Touchscreen, aber alle relevanten Zugangsmethoden inklusive NFC und Face Unlock.

- **G6 Pro Entry**: Das Topmodell mit 12-MP-Sensor, 3-Zoll-Touchscreen, konfigurierbar über den Interface Designer, und allen Funktionen der G6 Entry in einem Premium-Gehäuse.

## Für wen lohnt sich die G6 Entry?

Die G6 Entry richtet sich an Nutzer, die bereits im UniFi-Ökosystem unterwegs sind und ihre Zutrittskontrolle in ein einziges System integrieren wollen. Wer schon UniFi Protect für die Videoüberwachung und vielleicht auch UniFi Access für Türschlösser verwendet, bekommt mit der G6 Entry ein Gerät, das beides an der Haustür vereint.

Der grosse Pluspunkt gegenüber Ring, Google Nest und Co.: Es gibt kein Abo. Alle Aufnahmen bleiben lokal auf dem eigenen NVR. Die AI-Erkennung läuft auf dem Gerät selbst. Und es gibt keinen Cloud-Zwang, bei dem Dritte potenziell auf die Videodaten zugreifen könnten.

Wer UniFi Access noch nicht nutzt, sollte allerdings bedenken, dass die Zugangsfunktionen einen Access Hub voraussetzen. Das ist eine zusätzliche Investition, die sich vor allem lohnt, wenn man mehrere Türen oder Zugänge verwalten möchte.

---

*Haben Sie Fragen zu Videoklingeln und Zutrittskontrolle? [Kontaktieren Sie uns](/de/kontakt) für eine kostenlose Erstberatung.*
