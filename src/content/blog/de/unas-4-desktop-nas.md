---
title: "UniFi UNAS 4: Desktop-NAS mit vier Einschüben und NVMe-Cache"
description: "Der UNAS 4 bringt vier Festplatteneinschübe, NVMe-SSD-Cache und 2.5-Gigabit-Ethernet in ein kompaktes Gehäuse. Für wen sich das Gerät lohnt und wo die Grenzen liegen."
pubDate: 2026-03-24
lang: de
tags: ["UniFi", "UNAS", "NAS", "Speicher", "Backup", "RAID"]
author: "Digital Runners"
---

## Vier Einschübe, ein Ziel

Ubiquiti hat den UNAS 4 veröffentlicht, das neue Desktop-NAS mit vier SATA-Einschüben. Der Vorgänger UNAS 2 bot zwei Einschübe, was für einfache Backups reichte, aber bei RAID-Konfigurationen schnell an seine Grenzen kam. Mit vier Einschüben sind jetzt RAID 5, RAID 6 und RAID 10 möglich. Wer seine Daten redundant speichern will, hat damit deutlich mehr Spielraum.

Das Gerät kostet 379 US-Dollar und richtet sich an Home-Labs, kleine Büros und alle, die bereits UniFi-Hardware im Einsatz haben.

## Hardware im Detail

Im UNAS 4 arbeitet derselbe Quad-Core ARM Cortex-A55 mit 1.7 GHz wie im UNAS 2, dazu 4 GB RAM. Die Rechenleistung reicht für Dateifreigaben und Backups, aber wer Transcodierung oder aufwendige Anwendungen erwartet, ist hier falsch. Das ist ein Datenspeicher, keine Workstation.

Was den UNAS 4 vom UNAS 2 unterscheidet, sind neben den vier SATA-Einschüben zwei M.2-NVMe-Slots. Die lassen sich als SSD-Cache nutzen, um häufig abgerufene Dateien schneller auszuliefern. In einem Büro mit zehn Leuten, die regelmässig auf dieselben Projektordner zugreifen, macht das einen spürbaren Unterschied.

An Anschlüssen gibt es einen 2.5-GbE-RJ45-Port, USB-C mit 5 Gbit/s und Bluetooth 4.1. Das Gerät lässt sich über PoE+++ mit Strom versorgen, was ein separates Netzteil überflüssig macht, sofern ein passender PoE-Switch vorhanden ist. Vorne sitzt ein kleines 1.47-Zoll-Display, das den Status anzeigt.

## Festplatten einbauen: von unten

Die Einschübe sitzen an der Unterseite des Gehäuses. Zum Einsetzen oder Tauschen einer Festplatte muss das Gerät umgedreht werden. Bei einem Desktop-NAS, das in der Regel einmal eingerichtet und dann stehen gelassen wird, ist das kein grosses Problem. Im laufenden Betrieb mal eben eine Platte wechseln ist aber umständlicher als bei einem NAS mit Fronteinschüben.

Unterstützt werden 2.5-Zoll- und 3.5-Zoll-SATA-Laufwerke. SSDs funktionieren in den SATA-Einschüben ebenfalls, wobei die NVMe-Slots für den Cache in der Regel die bessere Wahl sind.

## Software: UniFi Drive

Der UNAS 4 läuft mit [UniFi Drive](/de/blog/unifi-drive-4-backup), Ubiquitis eigener NAS-Software. Keine Lizenzkosten, keine Abos. Die Verwaltung erfolgt über das bekannte UniFi-Dashboard. Wer bereits Switches, Access Points oder Kameras über UniFi verwaltet, findet sich sofort zurecht.

An Features bietet Drive 4.0 unter anderem: persönliche und geteilte Laufwerke, Snapshots, Dateiverschlüsselung, Time-Machine-Backups für Macs, Share-Links zum Teilen einzelner Dateien, und Cloud-Backup auf Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2 oder Wasabi.

Seit Version 4.0 lassen sich ausserdem Microsoft-365-OneDrive-Daten lokal sichern und iPhones können Fotos automatisch auf das NAS übertragen.

## UNAS 4 vs. UNAS 2 vs. UNAS Pro 4

Der UNAS 2 kostet 199 Dollar und hat zwei SATA-Einschübe ohne NVMe-Slots. Reicht für ein einfaches Backup oder als persönlicher Dateispeicher. RAID-Optionen sind auf RAID 1 (Spiegelung) beschränkt.

Der UNAS 4 verdoppelt die Einschübe und bringt NVMe-Cache mit. Damit sind RAID 5 und RAID 6 möglich, was bei vier Platten deutlich mehr Sicherheit und Kapazität bietet.

Der UNAS Pro 4 liegt bei 499 Dollar und zielt auf den Rack-Einbau. Er bietet 10-GbE-SFP+-Anschlüsse statt 2.5 GbE, unterstützt Hot-Spare-Konfigurationen und eignet sich für Umgebungen, in denen höherer Durchsatz gefragt ist. Wer kein 10-Gigabit-Netzwerk betreibt, zahlt den Aufpreis allerdings ohne spürbaren Vorteil.

## Für wen lohnt sich der UNAS 4?

Wer bereits ein UniFi-Netzwerk mit 2.5-Gigabit-Switches betreibt und lokalen Speicher für Backups, Dateifreigaben oder [Protect-Aufnahmen](/de/blog/unifi-protect-vs-consumer) braucht, bekommt mit dem UNAS 4 ein Gerät, das sich nahtlos einfügt. Installation und Verwaltung laufen über dasselbe Dashboard wie der Rest der Infrastruktur.

Wer nur zwei Platten braucht, fährt mit dem UNAS 2 günstiger. Wer 10-Gigabit-Netzwerk hat oder Rack-Montage braucht, greift zum UNAS Pro 4. Der UNAS 4 sitzt genau dazwischen: mehr Speicher und Redundanz als der Kleine, ohne den Aufpreis der Pro-Variante.

Ein Punkt noch: Das Gerät ist aktuell nur in Weiss erhältlich und im Ubiquiti Store häufig ausverkauft. Wer einen haben will, sollte die Restock-Benachrichtigung aktivieren.

---

*Haben Sie Fragen zu NAS und lokalem Speicher? [Kontaktieren Sie uns](/de/kontakt) für eine kostenlose Erstberatung.*
