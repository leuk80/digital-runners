---
title: "Ubiquiti am MWC 2026: EFG Core, SuperLink HA, Fingerprint Reader und mehr"
description: "Ubiquiti hat am Mobile World Congress in Barcelona neue Hardware gezeigt. Die spannendsten Ankündigungen im Überblick: EFG Core, SuperLink HA mit Thread-Support, Enterprise NAS und der Retro Reader Fingerprint."
pubDate: 2026-03-10
lang: de
tags: "UniFi"", "MWC", "Enterprise", "SuperLink", "Access", "Thread", "Smart Home"
author: "Digital Runners"
---

## Ubiquiti am MWC 2026

Ubiquiti war diese Woche am Mobile World Congress in Barcelona mit einem Stand vertreten und hat dort einige neue Produkte gezeigt. Nicht alles davon ist offiziell angekündigt, einiges tauchte zuerst auf Reddit auf, als Besucher Fotos vom Messestand geteilt haben. Hier die Zusammenfassung der interessantesten Neuheiten.

---

## Enterprise Fortress Gateway Core

Der bestehende Enterprise Fortress Gateway (EFG) ist mit rund 2'000 Dollar und einem Rack-Format nicht gerade etwas für kleinere Setups. Am MWC war nun ein Gerät zu sehen, das als "Enterprise Fortress Gateway Core" bezeichnet wird.

Details sind noch dünn. Was man vom Messestand weiss: Es handelt sich um eine kompaktere Version des EFG, gedacht für Umgebungen, die die Enterprise-Security-Features brauchen, aber nicht das volle 25G-Rack-Gerät. Das bestehende EFG bietet 12.5 Gbps IDS/IPS, NeXT AI Inspection (SSL/TLS Deep Packet Inspection) und Shadow Mode HA. Ob der Core all das in kleiner mitbringt oder ob Ubiquiti bei bestimmten Features abspeckt, ist noch unklar.

Für Firmen, die bisher zwischen dem UDM Pro Max und dem EFG hängengeblieben sind, könnte der Core genau die Lücke füllen.

---

## Enterprise NAS / NVR

Auf Fotos vom Ubiquiti-Rack am Stand war ein neues Gerät sichtbar, das entweder ein Enterprise NAS oder ein überarbeiteter NVR ist. Das Gehäuse hat ein Lüftungsgitter oben, einen leicht veränderten Frontrahmen und 16 Einschübe. Darunter waren weitere Einheiten sichtbar, möglicherweise Erweiterungsmodule.

Das wäre ein logischer Schritt. Wer Protect mit vielen Kameras betreibt und gleichzeitig Netzwerkspeicher braucht, musste bisher auf Drittanbieter-NAS-Systeme ausweichen. Ein integriertes Enterprise-NAS, das direkt in die UniFi-Verwaltung eingebunden ist, würde das deutlich vereinfachen.

Ob das Gerät eigenständig funktioniert oder ob es eine Console wie den UDM Pro Max voraussetzt, ist noch nicht bekannt. Auch Preise fehlen bisher komplett.

---

## SuperLink HA mit Thread-Support

Das ist vermutlich die Ankündigung, die bei Smart-Home-Nutzern für die meiste Aufregung sorgt. Am MWC war ein Gerät mit der Bezeichnung "SuperLink HA" zu sehen. Laut den sichtbaren Beschreibungen am Stand ist es ein SuperLink-Gateway und gleichzeitig ein Thread Border Router.

Was das konkret heisst: Das Gerät verbindet die bestehende SuperLink-Welt (proprietäre Langstrecken-Funkverbindung für Protect-Sensoren, bis 2 km Reichweite) mit dem offenen Thread-Protokoll. Thread ist der Funkstandard hinter Matter, dem neuen Smart-Home-Standard, den Apple, Google und Amazon gemeinsam vorantreiben.

Dazu kommt LTE-Konnektivität als Fallback und ein eingebauter Akku für Stromausfälle. Das Gerät richtet sich damit klar an Installationen, die auch bei Strom- und Internetausfall weiter funken sollen.

Wer bisher ein UniFi-Netzwerk betreibt und Thread-Geräte nutzen wollte, brauchte dafür einen separaten Thread Border Router (etwa von Apple, Google oder als OpenThread-Eigenbau). Mit dem SuperLink HA würde das direkt ins UniFi-Ökosystem wandern. Preise und Verfügbarkeit sind noch nicht bekannt.

---

## Protect Alarm Hub

Ebenfalls am Stand zu sehen: ein Protect Alarm Hub. Die Beschreibung spricht von einer 32-Zonen-Alarmzentrale für kabelgebundene Einbruchsensoren. Stromversorgung über PoE++, dazu optional Batterie-Backup.

Das ist relevant für alle, die eine klassische Einbruchmeldeanlage in ein UniFi-Protect-Setup integrieren wollen. Bisher war Protect primär kamerabasiert, mit den SuperLink-Sensoren kamen Umgebungssensoren dazu. Der Alarm Hub erweitert das um verdrahtete Alarmsensorik, wie sie in professionellen Sicherheitsinstallationen Standard ist.

Ob das Gerät auch mit bestehenden Drittanbieter-Sensoren kompatibel ist oder nur mit UniFi-eigenen Komponenten funktioniert, ist noch offen.

---

## Retro Reader Fingerprint

UniFi Access bietet seit einer Weile Zutrittskontrolle per NFC und PIN. Am MWC war ein neuer Leser zu sehen, der Fingerabdruck-Erkennung nachrüstet: der Retro Reader Fingerprint.

Der Name "Retro" bezieht sich auf "Retrofit". Es geht darum, bestehende Türinstallationen um biometrische Zutrittskontrolle zu ergänzen, ohne die komplette Hardware tauschen zu müssen. Der Leser läuft über PoE, braucht also keine separate Stromverkabelung.

Zwei-Faktor-Authentifizierung wird damit möglich: NFC-Karte plus Fingerabdruck, oder PIN plus Fingerabdruck. Für Büros, Serverräume oder andere gesicherte Bereiche ist das ein sinnvolles Upgrade. Cody von Mactelecom Networks hat in seinem Video erwähnt, dass er die biometrische Zutrittskontrolle als persönliches Highlight der Messe sieht.

---

## Einordnung

Ubiquiti baut das UniFi-Ökosystem in mehrere Richtungen gleichzeitig aus: Enterprise-Security (EFG Core), Speicher (NAS/NVR), Smart Home und IoT (SuperLink HA mit Thread), klassische Sicherheit (Alarm Hub) und Zutrittskontrolle (Fingerprint Reader). Keines dieser Produkte hat bisher ein offizielles Datenblatt oder einen Preis. Es sind Prototypen und Vorankündigungen vom Messestand.

Sobald Ubiquiti offizielle Spezifikationen veröffentlicht, aktualisieren wir die Details hier auf Digital Runners. Bei Fragen zu deinem UniFi-Setup oder zur Planung mit den kommenden Produkten: melde dich bei uns.


