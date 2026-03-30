---
title: "UniFi Access Bolt Lock: Neues Fail-Secure und Fail-Safe Türschloss für professionelle Zutrittskontrolle"
description: "Ubiquiti erweitert das UniFi Access Sortiment um zwei neue Bolt Locks. Die elektromagnetischen Riegelschlösser gibt es als Fail-Secure und Fail-Safe Variante für Holz- und Metalltüren. Preis ab 89 Euro."
pubDate: 2026-03-23
lang: de
tags: ["UniFi", "UniFi Access", "Bolt Lock", "Zutrittskontrolle", "Türschloss", "Fail-Secure", "Fail-Safe", "Ubiquiti"]
author: "Digital Runners"
---

## Neue Schlösser für UniFi Access

Ubiquiti hat zwei neue Bolt Locks für das UniFi Access System vorgestellt. Die beiden elektromagnetischen Riegelschlösser ergänzen das bestehende Angebot an Strike Locks und Electric Locks und bieten eine weitere Möglichkeit, Türen in das UniFi-Zutrittskontrollsystem einzubinden.

Ein Bolt Lock arbeitet mit einem Solenoid, der einen Metallriegel elektromagnetisch ausfährt oder zurückzieht. Sobald ein Signal vom UniFi Access Hub kommt, wird der Riegel eingezogen und die Tür lässt sich öffnen. Ohne Signal bleibt der Riegel in seiner Ruheposition. Welche Ruheposition das ist, hängt davon ab, ob man die Fail-Secure oder die Fail-Safe Variante wählt.

## Fail-Secure vs. Fail-Safe: Der entscheidende Unterschied

Die beiden Modelle unterscheiden sich in ihrem Verhalten bei Stromausfall, und genau hier liegt die wichtigste Entscheidung bei der Planung:

**Fail-Secure (UACC-Lock-Bolt-Secure):** Bei Stromausfall bleibt die Tür verriegelt. Der Riegel wird nur aktiv zurückgezogen, wenn Strom anliegt. Diese Variante eignet sich für Bereiche, in denen Sicherheit Vorrang hat, etwa Serverräume, Lagerräume mit wertvollem Inventar oder andere Bereiche mit eingeschränktem Zugang.

**Fail-Safe (UACC-Lock-Bolt-Safe):** Bei Stromausfall wird die Tür automatisch entriegelt. Der Riegel wird durch dauerhaften Stromfluss in der verriegelten Position gehalten. Fällt der Strom aus, zieht sich der Riegel zurück und die Tür kann geöffnet werden. Diese Variante ist vorgeschrieben für Fluchtwege und Notausgänge, weil sie sicherstellt, dass Personen das Gebäude jederzeit verlassen können.

## Technische Daten

Beide Modelle teilen sich das gleiche Gehäusedesign und die gleichen Abmessungen:

- Gehäuse: 132 x 30 x 42 mm, Aluminiumlegierung
- Türrahmenplatte: 82 x 32 x 3 mm
- Türplatte: 204 x 33 x 3 mm
- Gewicht Gehäuse: 350 g
- Geeignet für Einzel-Holz- und Metalltüren
- Integrierter Türpositionssensor

Beim Stromverbrauch gibt es Unterschiede zwischen den beiden Varianten. Das Fail-Secure Modell verbraucht im Standby etwa 12 mA und im aktiven Betrieb rund 600 mA. Das Fail-Safe Modell benötigt im Standby etwa 110 mA und dynamisch bis zu 1000 mA, weil es dauerhaft Strom braucht, um den Riegel in der verriegelten Position zu halten.

## Installation und Montage

Die Bolt Locks werden in den Türrahmen eingelassen. Je nach Material des Rahmens (Holz oder Metall) und Grösse des Schlosses stellt Ubiquiti vier verschiedene Installationsschablonen bereit.

Für verschiedene Türtypen und Öffnungsrichtungen gibt es passende Montageoptionen:

- Bündig im Rahmen versenkbar (Standard bei Holzrahmen)
- L-Halterung für nach aussen öffnende Türen mit schmalem Rahmen
- U-Halterung für nach aussen öffnende Glastüren
- LZ-Halterung für nach innen öffnende Türen

Die Verkabelung erfolgt zum UniFi Access Hub, der bis zu 150 Meter entfernt sein kann (bei 18-AWG-Kabel). Der Hub steuert das Schloss und verwaltet die gesamte Zugangslogik.

## Einbindung ins UniFi Access System

Die Bolt Locks sind Teil des UniFi Access Ökosystems und werden über den Access Hub gesteuert. Für den Betrieb braucht man mindestens:

- Eine UniFi Konsole (Cloud Gateway, Dream Machine oder vergleichbar) mit installierter UniFi Access Anwendung
- Einen UniFi Access Hub als Steuereinheit
- Einen UniFi Access Reader (z. B. Access Reader G2, G6 Entry oder Retrofit Reader) als Eingabegerät

Die Türöffnung kann dann über verschiedene Methoden erfolgen: NFC-Karten, Apple Wallet, Google Wallet, Gesichtserkennung, Mobile Unlock über die App, PIN-Code oder TouchPass. Welche Methoden verfügbar sind, hängt vom eingesetzten Reader ab.

Die Kommunikation zwischen Hub und Reader ist mit 128-Bit-NaCl-Verschlüsselung gesichert. Für erhöhte Sicherheit lässt sich eine Zwei-Faktor-Authentifizierung aktivieren, bei der zwei verschiedene Methoden innerhalb eines konfigurierbaren Zeitfensters bestätigt werden müssen.

## Preise und Verfügbarkeit

Beide Bolt Lock Modelle sind im Ubiquiti Store gelistet:

- **Fail-Secure Bolt Lock (UACC-Lock-Bolt-Secure):** 89 EUR (exkl. MwSt.) / 99 USD
- **Fail-Safe Bolt Lock (UACC-Lock-Bolt-Safe):** 99 USD

Damit liegen die Bolt Locks preislich im gleichen Bereich wie die bestehenden Strike Locks. Wer bereits einen Access Hub und Reader im Einsatz hat, muss nur das passende Schloss dazukaufen.

## Bolt Lock, Strike Lock oder Electric Lock?

Mit den neuen Bolt Locks bietet Ubiquiti nun drei verschiedene Schlosstypen für UniFi Access an. Die Wahl hängt von der Einbausituation und den Anforderungen ab:

**Bolt Lock** eignet sich am besten für Türen, bei denen der Riegel in den Türrahmen einfährt und dort einrastet. Typisch für Innen- und Aussentüren in Bürogebäuden, Serverräumen oder Lagern.

**Strike Lock (Türöffner)** ersetzt den klassischen mechanischen Türöffner und wird in den Rahmen eingebaut. Gut geeignet für Standardtüren mit vorhandenem Schloss, das um eine elektronische Freigabe ergänzt werden soll.

**Electric Lock** ist ein Einsteckschloss mit integriertem Riegel und Falle. Bietet die höchste mechanische Sicherheit, erfordert aber eine Fräsung in der Tür selbst.

## Fazit

Die neuen Bolt Locks schliessen eine Lücke im UniFi Access Sortiment. Für alle, die ihre Zutrittskontrolle mit Ubiquiti aufbauen oder erweitern, gibt es jetzt eine weitere Schlossart, die sich je nach Tür und Sicherheitsanforderung flexibel einsetzen lässt. Mit rund 89 bis 99 Euro pro Schloss bleibt der Einstieg bezahlbar, vorausgesetzt man hat die nötige Infrastruktur aus Konsole, Access Hub und Reader bereits im Einsatz.
