---
title: "UniFi Drive 4.0: Microsoft 365 und iPhone-Fotos lokal sichern"
description: "Mit UniFi Drive 4.0 lassen sich Microsoft 365 OneDrive-Daten und iPhone-Fotos automatisch auf dem eigenen UNAS sichern. Was das Update bringt und wo die Grenzen liegen."
pubDate: 2026-03-10
lang: de
tags: ["UniFi", "UNAS", "Backup", "Microsoft 365", "NAS", "iPhone", "Cloud"]
author: "Digital Runners"
---

## Was ist neu?

Ubiquiti hat Mitte Februar UniFi Drive 4.0 veröffentlicht (Version 4.0.12). Das Update macht aus der bisherigen NAS-Software eine Backup-Plattform. Die wichtigsten Neuerungen: Microsoft 365 OneDrive lässt sich jetzt lokal sichern, iPhones können Fotos automatisch auf dem UNAS ablegen, und ein Laufwerks-Monitoring warnt vor ausfallenden Festplatten.

Wer ein UNAS-Gerät im Einsatz hat, bekommt das Update über UniFi OS 4.4.11 oder neuer.

## Microsoft 365 OneDrive sichern

Ab sofort lassen sich Microsoft 365 OneDrive-Daten lokal auf dem UNAS sichern. Konkret geht es um Geschäfts- und Schulkonten, die über Microsoft Entra ID verwaltet werden. Private OneDrive-Konten (also persönliche outlook.com-Abos) werden aktuell nicht unterstützt.

Die Idee dahinter: Cloud-Daten liegen bei Microsoft, aber du hast keine Kontrolle darüber, was bei einem Ransomware-Angriff, einer versehentlichen Löschung oder einem kompromittierten Konto passiert. Mit Drive 4.0 wird eine lokale Kopie der OneDrive-Daten auf deiner eigenen Hardware gespeichert. Multi-Version-Backups sind möglich, sodass sich Dateien von einem bestimmten Zeitpunkt wiederherstellen lassen.

Wichtig: Aktuell beschränkt sich der Microsoft-365-Support auf OneDrive. SharePoint und Exchange sind geplant, aber noch nicht verfügbar. Die Wiederherstellung läuft bisher nur über den Administrator. Eine Self-Service-Option für Endbenutzer fehlt noch.

## iPhone-Fotos und Videos automatisch sichern

iPhones und iPads können ihre Fotos und Videos jetzt automatisch auf dem UNAS ablegen. Dafür wird die kostenlose UniFi Endpoint App benötigt. Keine zusätzlichen Lizenzen, keine Abokosten.

Im Hintergrund kopiert die App die Bilder direkt auf das persönliche Laufwerk im UNAS. Keine iCloud, kein Google Photos, keine Drittanbieter. Die Daten bleiben im eigenen Netzwerk.

Ein Haken gibt es: Apple schränkt Hintergrundprozesse ein. Die App muss gelegentlich manuell geöffnet werden, damit die Synchronisation weiterläuft. Wer das vergisst, hat Lücken im Backup.

## Laufwerks-Monitoring mit Health Monitor

Der neue Health Monitor zeigt den Zustand von HDDs und SSDs in Echtzeit. S.M.A.R.T.-Daten werden ausgewertet, Temperaturen überwacht und Fehler gemeldet, bevor ein Laufwerk komplett ausfällt.

Dazu kommen erweiterte Audit-Logs. Jede Dateioperation wird protokolliert: Uploads, Downloads, Kopien, Verschiebungen in den Papierkorb und endgültiges Löschen. Für Unternehmen, die Nachvollziehbarkeit brauchen, ist das ein nützliches Feature.

## Welche Hardware wird benötigt?

UniFi Drive 4.0 läuft auf den UNAS-Geräten von Ubiquiti. Aktuell verfügbar sind:

- UNAS Pro (7 Einschübe, SFP+, ca. 499 Dollar)
- UNAS Pro 8 (8 Einschübe, SFP+ und RJ45, ca. 799 Dollar)

Angekündigt sind zusätzlich das UNAS 4 (ca. 379 Dollar) und das UNAS Pro 4 (ca. 499 Dollar) mit NVMe-Caching.

Wichtig zu wissen: Für den Remote-Zugriff über die UniFi Endpoint App braucht man ein UniFi Cloud Gateway im Netzwerk (zum Beispiel UDM Pro, Dream Router 7 oder Cloud Gateway Max). Das UNAS allein reicht dafür nicht.

## Wo liegen die Grenzen?

Drive 4.0 kann mehr als vorher, ist aber kein Synology-Ersatz. Ein paar Einschränkungen:

Der Microsoft-365-Backup deckt nur OneDrive ab. Wer SharePoint oder Exchange sichern muss, braucht weiterhin eine andere Lösung. Docker oder Container laufen auf dem UNAS nicht. Wer VMs oder eigene Apps auf seinem NAS betreiben will, ist bei Synology oder QNAP besser aufgehoben. Die UNAS-Hardware läuft auf ARM-Prozessoren ohne ECC-RAM. Für File-Sharing und Backups reicht das, aber Bit-Rot-Schutz wie bei BTRFS oder ZFS mit ECC gibt es nicht.

Wer allerdings schon ein UniFi-Netzwerk betreibt, bekommt mit Drive 4.0 eine Backup-Lösung, die direkt in die bestehende Verwaltung integriert ist. Kein separates Admin-Interface, keine zusätzlichen Lizenzen.

## Fazit

Mit Drive 4.0 wird das UNAS deutlich nützlicher als noch vor einem halben Jahr. Gerade für kleine Büros und KMU, die OneDrive-Daten und iPhone-Fotos ohne Cloud-Abo sichern wollen, passt das gut.

Wer allerdings Container, VMs oder eine vollständige M365-Abdeckung braucht, kommt mit Drive 4.0 allein nicht weit. Dann bleibt ein Synology oder QNAP die sicherere Wahl.
