---
title: "UniFi Network 10.2: Digital Twin, Time Machine und Device Supervisor"
description: "UniFi Network 10.2 bringt eine Digital-Twin-Topologieansicht, eine Time Machine für Switch-Ports, den neuen Device Supervisor für automatische Gerätewiederherstellung und Enhanced Open (OWE) für offene WLANs."
pubDate: 2026-03-13
lang: de
tags: ["UniFi", "Network", "Digital Twin", "Time Machine", "Device Supervisor", "OWE", "Firmware"]
author: "Digital Runners"
---

## Was ist neu in Network 10.2?

Ubiquiti hat Anfang März UniFi Network 10.2 veröffentlicht (Version 10.2.78, aktuell im Early Access). Nach dem eher wartungsorientierten 10.1-Update legt 10.2 bei der Netzwerkvisualisierung und der automatischen Fehlerbehebung nach. Die wichtigsten Neuerungen: eine Digital-Twin-Ansicht der Infrastruktur, eine Time Machine für Switch-Ports, ein Device Supervisor für automatische Geräteneustarts und Enhanced Open (OWE) für offene WLANs.

---

## Digital Twin Topology

Die bisherige Topologieansicht in UniFi zeigte die logische Vernetzung der Geräte. Mit Network 10.2 kommt eine neue Ebene dazu: der Digital Twin. Diese Ansicht bildet die physische Rack-Umgebung ab und zeigt, wie Geräte tatsächlich verbaut und verkabelt sind.

Das ist vor allem bei grösseren Installationen mit mehreren Racks und Dutzenden Switches nützlich. Statt sich durch einzelne Geräteseiten zu klicken, sieht man auf einen Blick, welches Gerät wo sitzt und wie die physische Verkabelung aussieht. Die Ansicht betont die wichtigsten Verbindungen und Geräte, statt alles gleichwertig darzustellen.

Für kleinere Setups mit einem Switch und ein paar APs bringt das wenig. Wer aber regelmässig vor einem Rack steht und überlegen muss, welches Kabel wohin führt, bekommt hier eine brauchbare Übersicht.

---

## Time Machine im Port Manager

Die Time Machine ist eine der praktischeren Neuerungen. Im Port Manager lässt sich jetzt die Historie jedes einzelnen Switch-Ports nachverfolgen: Wann hat sich der Status geändert? Wann ging ein Port down? Wann kam ein neues Gerät dran?

Das Interface orientiert sich am Timeline-Design aus UniFi Protect. Man wählt einen Port aus und sieht eine Zeitleiste mit allen Statusänderungen. Jeder Eintrag zeigt den genauen Zeitpunkt und was passiert ist.

In der Praxis löst das ein konkretes Problem: Wenn morgens ein Gerät offline ist, musste man bisher raten, wann und warum der Port ausgefallen ist. Jetzt lässt sich das auf die Minute genau nachvollziehen. Das spart Zeit bei der Fehlersuche, besonders wenn man nicht rund um die Uhr vor dem Dashboard sitzt.

---

## Device Supervisor

Der Device Supervisor überwacht angeschlossene Geräte und greift automatisch ein, wenn etwas hängt. Das funktioniert sowohl für PoE-betriebene Geräte als auch für Geräte mit eigener Stromversorgung.

Bei PoE-Geräten (etwa APs oder Kameras) kann der Supervisor einen PoE-Neustart auslösen, wenn das Gerät nicht mehr reagiert. Bei Geräten mit eigener Stromversorgung prüft er den Status und meldet Ausfälle.

Wer schon mal nachts eine hängende Kamera per PoE-Neustart wiederbelebt hat, weiss, warum das nützlich ist. Der Supervisor erledigt das automatisch und protokolliert den Vorgang. Das reduziert Vor-Ort-Einsätze, gerade bei Installationen, die über mehrere Standorte verteilt sind.

---

## Enhanced Open (OWE)

UniFi-WLANs unterstützen jetzt Enhanced Open, auch bekannt als Opportunistic Wireless Encryption (OWE). Das ist ein Standard, der offene WLANs ohne Passwort verschlüsselt.

Klassische offene WLANs (etwa in Hotels, Cafés oder Gäste-Netzwerken) senden den gesamten Datenverkehr unverschlüsselt. Jeder im gleichen Netzwerk kann mitlesen. OWE ändert das: Die Verbindung wird automatisch verschlüsselt, ohne dass der Nutzer ein Passwort eingeben muss. Der Schutz entspricht ungefähr dem von WPA3, allerdings ohne Authentifizierung.

Zusätzlich bietet OWE Schutz gegen Deauthentication-Angriffe, bei denen ein Angreifer Clients gezielt aus dem WLAN wirft. Das war bei offenen Netzwerken bisher ein bekanntes Problem.

Voraussetzung ist, dass die Endgeräte OWE unterstützen. Die meisten aktuellen Betriebssysteme (Windows 11, macOS, iOS, Android ab Version 10) können das. Ältere Geräte verbinden sich weiterhin unverschlüsselt.

---

## STP Edge und BPDU Guard

Zwei kleinere Ergänzungen betreffen die Switch-Konfiguration. STP Edge Mode markiert Ports, an denen Endgeräte statt Switches hängen. Diese Ports wechseln sofort in den Forwarding-State, statt die üblichen STP-Konvergenzzeiten abzuwarten. Das beschleunigt die Verbindung beim Einstecken eines Geräts.

BPDU Guard schützt vor unerwarteten Topologieänderungen. Wenn an einem als Edge markierten Port plötzlich ein Switch angeschlossen wird (und BPDUs sendet), wird der Port automatisch deaktiviert. Das verhindert Loops und ungewollte Netzwerkänderungen.

Beide Funktionen sind in Unternehmensumgebungen Standard und waren in UniFi bisher nur eingeschränkt konfigurierbar.

---

## Firmware Rollback

Network 10.2 bringt eine vereinfachte Möglichkeit, Firmware auf Geräten zurückzurollen. Falls ein Update Probleme verursacht, lässt sich die vorherige Version wiederherstellen, ohne das Gerät manuell per SSH zurücksetzen zu müssen.

---

## Fazit

Network 10.2 ist ein grösseres Update als 10.1. Die Digital-Twin-Ansicht und die Time Machine verbessern die Übersicht und Fehlersuche bei komplexeren Installationen spürbar. Der Device Supervisor automatisiert etwas, das viele Admins bisher manuell erledigt haben. Und OWE schliesst eine Lücke bei offenen WLANs, die schon länger überfällig war.

Das Update ist aktuell im Early Access verfügbar. Wer es produktiv einsetzen will, sollte wie immer zuerst an einem Teststandort prüfen, ob alles sauber läuft.
