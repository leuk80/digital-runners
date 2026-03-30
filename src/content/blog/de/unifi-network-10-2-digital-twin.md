---
title: "UniFi Network 10.2: Digital Twin, Time Machine und Device Supervisor"
description: "UniFi Network 10.2 bringt eine digitale Rack-Ansicht, eine Zeitreise-Funktion für Switch-Ports, automatisches Power-Cycling unresponsiver Geräte und verschlüsseltes offenes WLAN."
pubDate: 2026-03-25
lang: de
tags: ["UniFi", "Network", "Digital Twin", "Device Supervisor", "Firmware", "WiFi", "STP"]
author: "Digital Runners"
---

## Was ist neu in Network 10.2?

Mitte März hat Ubiquiti UniFi Network 10.2 veröffentlicht. Das Update bringt einige Funktionen, auf die vor allem Admins in grösseren Installationen gewartet haben: eine physische Rack-Darstellung der Infrastruktur, eine Zeitachse für Switch-Ports, automatisches Neustarten von ausgefallenen Geräten und verschlüsseltes offenes WLAN. Dazu kommen noch Verbesserungen bei STP, Firmware-Rollbacks und WireGuard VPN.

## Time Machine für Switches

Im Port Manager gibt es jetzt eine 24-Stunden-Timeline, die zeigt, wann welcher Port aktiv war, wann ein Gerät verbunden wurde und wann etwas ausgefallen ist. Das Ganze sieht aus wie die Aufnahme-Zeitleiste in [UniFi Protect](/de/blog/unifi-protect-vs-consumer) und funktioniert auch ähnlich: Man scrollt zurück und sieht auf einen Blick, was wann passiert ist.

Wer schon mal nachts einen Switch-Port-Ausfall debuggen musste und am nächsten Morgen keine Ahnung hatte, wann genau das Problem angefangen hat, wird das zu schätzen wissen. VLAN-Änderungen tauchen allerdings noch nicht auf der Timeline auf, das fehlt noch.

## Infrastructure Topology und Digital Twin

Unter einem neuen Tab namens "Infrastructure" gibt es jetzt eine Darstellung, die das physische Rack-Setup abbildet. Man sieht die WAN-Verbindung, das Gateway und alle Downstream-Geräte als digitalen Zwilling. Klickt man auf eine Verbindung, bekommt man Gesundheitsmetriken und Traffic-Daten.

Das Digital-Twin-Panel zeigt gleichzeitig Firmware-Versionen, CPU-Last, RAM-Auslastung, Stromverbrauch und [PoE](/de/blog/flex-mini-2-5g-switch)-Budgets aller sichtbaren Geräte an. Man kann Geräte in benannte Gruppen organisieren, etwa "Core" und "Access Layer". Für Installationen mit mehreren Switches und einem strukturierten Rack-Aufbau ist das deutlich übersichtlicher als die bisherige flache Geräteliste.

## Device Supervisor

Der Device Supervisor überwacht den Heartbeat angeschlossener UniFi-Geräte und startet sie automatisch per PoE-Power-Cycle neu, wenn sie für eine definierte Zeit nicht mehr antworten. Das funktioniert über den PoE-Port am Switch: Gerät antwortet nicht mehr, Switch schaltet den Port kurz ab und wieder ein.

Man kann pro Gerät einstellen, wie lange gewartet werden soll, bevor ein automatischer Neustart ausgelöst wird. Wichtig zu wissen: In der EU und UK funktioniert das nur über PoE-Ports. Die PDU-Integration für steckdosenbetriebene Geräte ist dort noch nicht verfügbar.

Wer Access Points oder Kameras an schwer zugänglichen Stellen montiert hat, spart sich damit den Weg zum Gerät oder das manuelle Abschalten im Dashboard.

## Enhanced Open (OWE)

Offene WLAN-Netzwerke können jetzt verschlüsselt werden, ohne dass ein Passwort nötig ist. Es gibt drei Modi: klassisch offen (unverschlüsselt), Enhanced Open (alles verschlüsselt via OWE) und Enhanced Open mit Transition Mode. Der Transition Mode verschlüsselt für kompatible Geräte und fällt bei älteren Geräten auf unverschlüsselt zurück.

Für [Gäste-WLANs](/de/blog/vlans-fuer-kmu) in Hotels, Cafés oder Büros ist das ein sinnvoller Zwischenschritt. Der Traffic zwischen Client und Access Point wird auf WPA3-Niveau verschlüsselt, ohne dass jemand ein Passwort eintippen muss.

## STP Edge Mode und BPDU Guard

Zwei Ergänzungen für das Spanning Tree Protocol: Edge Mode beschleunigt Ports, an denen Endgeräte hängen (PCs, Drucker, IP-Telefone), indem die STP-Verhandlung übersprungen wird. Der Port geht sofort in den Forwarding-Zustand, statt die üblichen 30 Sekunden zu warten.

BPDU Guard arbeitet zusammen mit Edge Mode. Wenn an einem Edge-Port unerwartet BPDU-Pakete ankommen (zum Beispiel weil jemand einen unautorisierten Switch angeschlossen hat), wird der Port sofort deaktiviert. Er bleibt gesperrt, bis man ihn manuell wieder freigibt. Das schützt vor Schleifen und unautorisierter Netzwerkerweiterung.

## One-Click Firmware Revert

Firmware-Rollbacks gehen jetzt mit einem Klick direkt aus dem Dashboard, ohne SSH. Das gilt sowohl für die Network-Applikation als auch für einzelne Geräte. Während des Rollbacks wird automatisch ein Support-File erstellt, falls man den Fall an den Ubiquiti-Support eskalieren muss.

## IPv6 WireGuard VPN

WireGuard-VPN-Server unterstützen jetzt IPv6-Adressen. Bisher war nur IPv4 möglich. Damit lassen sich Dual-Stack- und reine IPv6-Netzwerke jetzt auch per WireGuard anbinden. Voraussetzung ist UniFi OS 5.1.

## Fazit

Network 10.2 ist ein solides Release mit ein paar Funktionen, die lange gefehlt haben. Die Time Machine und der Digital Twin machen das Troubleshooting bei Switch-Problemen deutlich einfacher. Der Device Supervisor nimmt manuelles Power-Cycling ab. Und Enhanced Open war überfällig für alle, die offene Gäste-WLANs betreiben.

Das Update läuft auf allen UniFi Cloud Gateways, einschliesslich der UDM-Reihe.

---

*Haben Sie Fragen zu Netzwerkmanagement? [Kontaktieren Sie uns](/de/kontakt) für eine kostenlose Erstberatung.*
