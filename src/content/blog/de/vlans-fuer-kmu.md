---
title: "VLANs einfach erklärt: Netzwerksegmentierung für Schweizer KMU"
description: "Was ist ein VLAN, warum braucht mein Unternehmen das, und wie setzt man es mit UniFi um? Eine praxisnahe Erklärung ohne IT-Fachjargon."
pubDate: 2026-02-10
lang: de
tags: ["VLAN", "Netzwerksicherheit", "KMU"]
author: "Digital Runners"
---

Der Begriff «VLAN» begegnet einem in der IT regelmässig – aber was steckt wirklich dahinter, und warum ist Netzwerksegmentierung für Schweizer KMU so wichtig? Dieser Artikel erklärt es verständlich, ohne in unnötigem Fachjargon zu versinken.

## Was ist ein VLAN?

VLAN steht für **Virtual Local Area Network** – zu Deutsch: virtuelles lokales Netzwerk. Die Idee ist simpel: Auf einer physischen Netzwerkinfrastruktur (Switches, Access Points, Kabel) werden mehrere logisch getrennte Netzwerke betrieben, als wären es separate physische Netze.

Stellen Sie sich ein Mehrfamilienhaus vor: Alle Wohnungen teilen sich dasselbe Gebäude, aber jede Wohnung hat eine eigene verschlossene Tür. Ein VLAN funktioniert ähnlich – verschiedene Netzwerkteilnehmer nutzen dieselbe Hardware, können aber nicht ohne weiteres miteinander kommunizieren.

## Warum braucht mein Unternehmen VLANs?

### Sicherheit durch Trennung

Das wichtigste Argument für VLANs ist die **Netzwerksicherheit**. In einem flachen Netzwerk ohne Segmentierung kann prinzipiell jedes Gerät mit jedem anderen kommunizieren. Ein infiziertes Gerät – etwa ein Laptop mit Malware oder ein kompromittiertes IoT-Gerät – kann sich im gesamten Netzwerk ausbreiten.

Mit VLANs begrenzen Sie den möglichen Schaden: Ein Angreifer, der sich Zugang zum Gästenetz verschafft, kommt nicht an Ihre Geschäftsdaten heran.

### Compliance und Datenschutz

Das Schweizer Datenschutzgesetz (revDSG) und die DSGVO verlangen, dass personenbezogene Daten angemessen geschützt werden. VLANs sind ein wichtiger Baustein, um Datentrennung technisch nachweisbar umzusetzen – zum Beispiel zwischen Patientendaten in einer Arztpraxis und dem Gästenetz.

### Performance-Optimierung

Ein weiterer Vorteil: VLANs reduzieren den sogenannten **Broadcast-Traffic**. In grossen Netzwerken ohne Segmentierung sendet jedes Gerät regelmässig Broadcast-Pakete an alle anderen – das kann bei vielen Geräten die Netzwerkperformance spürbar beeinträchtigen. VLANs begrenzen diesen Traffic auf das jeweilige Segment.

## Typische VLAN-Strukturen für KMU

### Büro / Bürokomplex

```
VLAN 10 – Mitarbeitende (Laptops, Desktops)
VLAN 20 – Gäste / Kunden (separates WLAN ohne Zugang zum internen Netz)
VLAN 30 – Drucker und Bürogeräte
VLAN 40 – IoT / Smarte Geräte (Displays, Kameras, Türsysteme)
VLAN 50 – Server und NAS
```

### Arztpraxis / Gesundheitswesen

```
VLAN 10 – Medizinische Workstations (Praxissoftware, PACS)
VLAN 20 – Personal (allgemeine Nutzung)
VLAN 30 – Patienten-WLAN (Captive Portal)
VLAN 40 – Medizinische Geräte (IoT, getrennt aus Sicherheitsgründen)
```

### Hotel

```
VLAN 10 – Hotelsoftware / PMS (Property Management System)
VLAN 20 – Personal (intern)
VLAN 30 – Gäste (mit Voucher-System oder Portal)
VLAN 40 – Kassen / POS-Systeme
VLAN 50 – Überwachungskameras
```

## VLANs mit UniFi einrichten

Mit UniFi ist die Konfiguration von VLANs intuitiv und über den **UniFi Network Controller** zentral verwaltbar. Für jedes VLAN definiert man:

1. **VLAN-ID**: Eine Zahl zwischen 2 und 4094, die das Netzwerksegment eindeutig identifiziert
2. **IP-Subnetz**: Zum Beispiel 192.168.10.0/24 für VLAN 10, 192.168.20.0/24 für VLAN 20
3. **DHCP-Server**: Jedes VLAN erhält seinen eigenen DHCP-Bereich (optional)
4. **Firewall-Regeln**: Welche VLANs dürfen miteinander kommunizieren, welche nicht?

UniFi-Switches taggen den Datenverkehr automatisch auf den entsprechenden Ports, und die Access Points unterstützen mehrere SSIDs – eine pro VLAN. Mitarbeitende verbinden sich mit dem internen WLAN, Gäste mit dem Gäste-WLAN, Kameras kommunizieren im IoT-VLAN.

## Häufige Fragen

**«Merken meine Mitarbeitenden etwas von den VLANs?»**
Nein. Aus Nutzersicht ändert sich nichts – man verbindet sich wie gewohnt mit dem WLAN oder steckt das Kabel ein. Die Segmentierung läuft im Hintergrund ab.

**«Brauche ich teure Hardware dafür?»**
Nicht unbedingt. UniFi-Switches und Access Points unterstützen VLAN-Tagging bereits in der Einstiegsklasse. Die Hardware, die Sie sowieso für ein professionelles Netzwerk einsetzen würden, kann VLANs in der Regel problemlos verarbeiten.

**«Was kostet die Einrichtung?»**
Das hängt von der Komplexität Ihrer Infrastruktur ab. Für ein kleines Büro ist eine sinnvolle VLAN-Struktur schnell konfiguriert – für grössere Umgebungen mit vielen Standorten ist mehr Planung nötig.

## Fazit

VLANs sind kein Luxus für Grossunternehmen – sie sind ein sinnvoller Sicherheitsmechanismus für jedes Unternehmen, das seine Daten schützen will. Mit UniFi lassen sich auch komplexere Netzwerkstrukturen zentral und übersichtlich verwalten, ohne dass Sie eine eigene IT-Abteilung benötigen.

---

*Wir planen und richten VLANs für KMU jeder Grösse ein. [Kontaktieren Sie uns](/de/kontakt) für eine kostenlose Erstberatung.*
