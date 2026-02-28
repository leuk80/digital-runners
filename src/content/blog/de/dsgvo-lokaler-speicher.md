---
title: "DSGVO und Netzwerk: Warum lokaler Speicher Cloud-Lösungen überlegen ist"
description: "Cloud-Dienste sind bequem – aber aus Datenschutzsicht birgt die unkritische Nutzung erhebliche Risiken. Warum lokaler Speicher mit UniFi Drive die bessere Wahl für Unternehmen ist."
pubDate: 2026-02-24
lang: de
tags: ["DSGVO", "Datenschutz", "UniFi Drive"]
author: "Digital Runners"
---

«Alles in der Cloud» klingt modern und praktisch – und für viele Anwendungen ist es das auch. Doch wenn es um Unternehmensdaten geht, die dem Schweizer Datenschutzgesetz (revDSG) oder der europäischen Datenschutz-Grundverordnung (DSGVO) unterliegen, lohnt sich ein genauerer Blick. Nicht alles, was in der Cloud liegt, liegt dort sicher und rechtskonform.

## Das Problem mit Cloud-Speicherdiensten

### Serverstandort und Datenhoheit

Wenn Sie Daten bei einem Cloud-Anbieter speichern, liegen diese physisch auf Servern – irgendwo auf der Welt. Viele populäre Cloud-Dienste (Google Drive, Microsoft OneDrive, Dropbox) betreiben ihre Infrastruktur primär in den USA. Das bedeutet: Ihre Daten unterliegen möglicherweise dem US-amerikanischen **CLOUD Act**, der US-Behörden unter bestimmten Umständen Zugriff auf gespeicherte Daten erlaubt – auch ohne Ihr Wissen.

Für Schweizer Unternehmen, die personenbezogene Daten ihrer Kunden, Mandanten oder Patienten verarbeiten, ist das keine theoretische Überlegung, sondern ein reales Compliance-Risiko.

### Abhängigkeit vom Anbieter

Cloud-Dienste können ihre Preise ändern, Funktionen entfernen oder im schlimmsten Fall ihren Betrieb einstellen. Wer seine gesamten Unternehmensdaten bei einem Drittanbieter lagert, gibt einen Teil der Kontrolle ab. Was passiert mit Ihren Daten, wenn der Anbieter das Produkt einstellt oder von einem anderen Unternehmen übernommen wird?

### Sicherheitslücken durch externe Angriffsflächen

Cloud-Dienste sind attraktive Ziele für Cyberkriminelle. Grosse Anbieter werden regelmässig attackiert – und selbst bei guter Sicherheitsarchitektur lässt sich ein Restrisiko nicht ausschliessen. Wer lokale Netzwerkspeicher betreibt, reduziert die Angriffsfläche erheblich: Ein System, das nicht direkt aus dem Internet erreichbar ist, kann nicht direkt aus dem Internet angegriffen werden.

## Was sagen DSGVO und revDSG?

Sowohl die DSGVO als auch das revidierte Schweizer Datenschutzgesetz verlangen, dass:

1. **Personenbezogene Daten nur für den angegebenen Zweck gespeichert werden**
2. **Die Speicherung sicher und vor unbefugtem Zugriff geschützt ist**
3. **Drittanbieter (Auftragsverarbeiter) vertraglich an die gleichen Datenschutzstandards gebunden sind**
4. **Bei Drittlandübermittlungen angemessene Schutzmechanismen bestehen**

Letzterer Punkt ist bei US-Cloud-Diensten besonders heikel. Das EU-Recht kennt zwar den **Privacy Shield** (mittlerweile durch Data Privacy Framework ersetzt), dessen Stabilität jedoch immer wieder in Frage gestellt wird.

**Lokaler Speicher umgeht dieses Problem vollständig**: Daten, die das Gebäude nicht verlassen, unterliegen nur der nationalen Rechtsprechung.

## UniFi Drive: Lokaler NAS im UniFi-Ökosystem

**UniFi Drive** (UNAS – UniFi Network Attached Storage) ist Ubiquitis Antwort auf den Bedarf nach lokaler, verwaltbarer Speicherinfrastruktur. Das Besondere: Es wird direkt im UniFi Controller administriert – dieselbe Oberfläche, die Sie für Ihr Netzwerk, Ihre Kameras und Ihre Zutrittskontrolle nutzen.

### Was UniFi Drive bietet

- **Lokaler Dateispeicher**: Gemeinsame Netzwerkordner für das gesamte Team (SMB/NFS-Protokoll), kompatibel mit Windows, macOS und Linux
- **Backup-Ziel**: UniFi Drive lässt sich als lokales Backup-Ziel für Workstations und Server konfigurieren
- **Speichererweiterung für UniFi Protect**: Kameraaufzeichnungen können direkt auf UniFi Drive gespeichert werden – mehr Speicher ohne NVR-Upgrade
- **RAID-Konfiguration**: Für Datensicherheit sorgen redundante Festplatten (RAID 1, 5, 6), sodass ein Festplattenausfall keinen Datenverlust bedeutet
- **Verwaltung im UniFi Controller**: Kein separates NAS-Betriebssystem, keine zusätzliche Verwaltungsoberfläche lernen

### Das UNAS Pro – die aktuelle Hardware

Der **UNAS Pro** von Ubiquiti bietet 7 Festplatten-Bays für 3,5"-HDDs oder 2,5"-SSDs, zwei 10GbE-Netzwerkports für schnelle Übertragungsraten und ist auf dauerhaften Betrieb in einem Serverrack oder als Desktop ausgelegt.

## Hybride Ansätze: Lokal und Cloud kombinieren

Lokaler Speicher bedeutet nicht, komplett auf Cloud-Dienste verzichten zu müssen. Ein sinnvoller hybrider Ansatz sieht so aus:

1. **Sensible Daten** (Kundendaten, Verträge, Patientenakten, Buchhaltung) → lokal auf UniFi Drive
2. **Kollaborationstools** (Projektmanagement, Kommunikation) → Cloud-Dienste mit EU-Serverstandort
3. **Backups** → lokales NAS + verschlüsseltes Off-Site-Backup in einem Schweizer Rechenzentrum

Dieses Modell maximiert die Kontrolle über kritische Daten, ohne auf die Vorteile moderner Cloud-Zusammenarbeit zu verzichten.

## Fazit

«Cloud first» ist keine Strategie, die für alle Daten gilt. Wer personenbezogene Daten verarbeitet und dabei DSGVO- oder revDSG-konform bleiben will, sollte kritisch prüfen, wo welche Daten gespeichert werden. Lokaler Speicher mit UniFi Drive bietet maximale Datenkontrolle, DSGVO-konforme Datenhaltung und nahtlose Integration in die bestehende UniFi-Infrastruktur – ohne die Komplexität eines separaten NAS-Systems.

---

*Wir beraten Schweizer Unternehmen zu datenschutzkonformer Netzwerkinfrastruktur und richten UniFi Drive ein. [Kontaktieren Sie uns](/de/kontakt) für ein Gespräch.*
