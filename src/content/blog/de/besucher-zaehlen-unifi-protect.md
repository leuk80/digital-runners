---
title: "Besucher zählen mit UniFi Protect: People-Counting für Läden"
description: "So baust du ein skalierbares People-Counting-System mit UniFi Protect, AI Port und Line Crossing für deine Filialen."
pubDate: 2026-01-29
lang: de
tags: ["UniFi Protect", "People Counting", "Retail", "AI Port", "Besucherzählung"]
author: "Digital Runners"
draft: true
---


### Besucher zählen mit UniFi Protect: So baust du dir ein skalierbares People‑Counting‑System für deine Läden

Wer seine Läden professionell steuert, braucht mehr als nur Bauchgefühl:
Wie viele Menschen kommen täglich in welchen Store? Zu welchen Zeiten ist am meisten los? Und wie verhält sich die Besucherfrequenz im Verhältnis zu Umsatz, Wetter oder Marketingmaßnahmen?

Klassische People‑Counting‑Lösungen sind oft teuer, proprietär und erfordern Spezialhardware. Wenn du ohnehin bereits auf UniFi setzt oder ohnehin ein Kamera‑System brauchst, kannst du mit **UniFi Protect** heute ein erstaunlich leistungsfähiges Besucherzählungs‑Setup aufbauen – inklusive:

- **Personenzählung pro Eingang** über virtuelle Linien (Line Crossing / Line Cross Counting)
- **IN/OUT‑Richtung** zur Ermittlung von Netto‑Besuchern oder Belegung
- **Zentrale Auswertung** über Webhooks, Home Assistant oder eigene Backends

Dieser Beitrag zeigt im Detail:

1. Wie People‑Counting mit UniFi Protect grundsätzlich funktioniert
2. Wie du **non‑AI‑Kameras** mit einem **UniFi AI Port** „aufrüstest“
3. Welche **Architektur** sich für mehrere Läden anbietet
4. Wie viel **Zeitaufwand** dich das initiale Setup pro Eingang realistisch kostet

***

## 1. Warum UniFi Protect für Besucherzählung spannend ist

UniFi Protect ist in erster Linie eine Videoüberwachungs‑Plattform, hat aber in den letzten Releases massiv AI‑Funktionen ausgebaut:

- Objekterkennung (Person, Fahrzeug, Tier)
- Gesichtserkennung und Nummernschilderkennung auf unterstützter Hardware
- **Line Crossing** und **Line Cross Counting**, um das Überqueren virtueller Linien zu erkennen und zu zählen

Damit lässt sich ein typisches Retail‑Szenario abbilden:

- Kamera über dem Eingang
- Virtuelle Linie direkt an der Türschwelle
- UniFi Protect erkennt: „Eine Person überschreitet diese Linie von außen nach innen“ und erhöht einen Zähler.

Der Clou: Das funktioniert nicht nur mit den neuesten AI‑Kameras, sondern dank **UniFi AI Port** auch mit älteren UniFi‑Kameras und sogar ONVIF‑Kameras von Drittherstellern.

***

## 2. Funktionsprinzip: People‑Counting mit Line Crossing

### 2.1. Virtuelle Linie statt spezieller 3D‑Sensoren

UniFi Protect nutzt keine dedizierten 3D‑People‑Counting‑Sensoren, sondern:

- Das Kamerabild
- AI‑Modelle, die **Personen** erkennen (Objektklasse „Person“)
- Eine oder mehrere virtuelle Linien im Bild (Crossing Lines)

Immer wenn eine erkannte Person diese Linie in einer bestimmten Richtung überquert, wird ein Event erzeugt:

- **Richtung A→B**: z.B. „Eingang“
- **Richtung B→A**: z.B. „Ausgang“

Mit der Funktion **Line Cross Counting** wird zusätzlich ein Zähler geführt, der diese Ereignisse summiert.

### 2.2. Was ist möglich, was nicht?

**Gut geeignet für:**

- Besucherzahlen pro Tag / Woche / Monat
- Vergleich von Filialen
- Peak‑Zeiten (Stunden‑ oder Halbstunden‑Buckets)
- Grobe Belegungs‑Trends (IN minus OUT)

**Grenzen:**

- In sehr dichtem Gedränge oder bei Personen, die sich gegenseitig verdecken, kann die Zählgenauigkeit leiden.
- Starke Reflexionen, Gegenlicht oder schlechte Nachtsicht verschlechtern die Erkennung.
- Die integrierte Zählfunktion in Protect bietet nur eine begrenzte Historie und (Stand heute) keinen vollwertigen CSV‑Export – für ernsthafte BI‑Reports braucht man daher Webhooks oder API‑Integrationen.

Für viele Retail‑Use‑Cases ist diese Genauigkeit aber bereits absolut ausreichend – insbesondere im Vergleich zum Aufwand dedizierter Zählsysteme.

***

## 3. AI auch für alte Kameras: UniFi AI Port

Nicht jeder möchte alle Kameras gegen die neueste G6/AI‑Serie austauschen. Hier kommt der **UniFi AI Port** ins Spiel.

### 3.1. Was der AI Port macht

Der UniFi AI Port ist ein kleines Netzwerkgerät, das Videostreams analysiert und **AI‑Funktionen zu ansonsten „dummen“ Kameras hinzufügt**:

- Unterstützt **G3/G4/G5‑UniFi‑Kameras** und **ONVIF‑Kameras** von Drittanbietern
- Bringt AI‑Funktionen wie Personenerkennung, Kennzeichenerkennung, Gesichtserkennung an diese Kameras
- Schaltet für diese Kameras in Protect **Line Crossing** und **Line Cross Counting** frei

In der Funktionsmatrix von Ubiquiti gilt zusammengefasst:

- **G6 / AI‑Kameras**: AI + Line Crossing + Line Cross Counting „out of the box“
- **G5/G4/G3 / ONVIF**: AI, Line Crossing & Line Cross Counting **über AI Port**
- **PTZ‑Kameras**: Line Crossing / Counting derzeit nicht verfügbar

Neuere Protect‑Versionen erlauben zudem, mehrere Kameras an einem AI Port zu betreiben (Kapazität hängt von Auflösung und Framerate ab).

### 3.2. Ergebnis für dein Projekt

Damit kannst du:

- Bestehende UniFi‑Installationen „aufwerten“, ohne flächendeckend neue AI‑Kameras zu kaufen
- Auch hochwertige ONVIF‑Kameras im Außenbereich (z.B. bereits vorhandene Dome/Bullet‑Cams) für Besucherzählung nutzen
- Schrittweise migrieren: erst AI Ports nachrüsten, später ggf. auf native AI‑Kameras umstellen

Gerade bei vielen Filialen mit bestehender Kamera‑Infrastruktur ist das wirtschaftlich attraktiv.

***

## 4. Architektur für ein Filialnetz

### 4.1. Variante A: Zentrale UniFi‑Instanz

- Eine zentrale UniFi‑OS‑Appliance (z.B. UNVR‑Pro, Cloud Gateway Pro) in der Zentrale
- Alle Filialen als eigene **Sites** in UniFi
- Kameras/AI‑Ports in den Filialen melden sich per VPN/SD‑WAN bei der Zentrale an

**Vorteile:**

- Einheitliche Konfiguration und Updates
- Zentrales Management & Monitoring
- Einfaches, zentrales Alarm- und Webhook‑Setup

**Nachteile:**

- Standortvernetzung zwingend erforderlich
- Abhängigkeit von der Zentrale bei Verbindungsausfällen

### 4.2. Variante B: Pro Filiale eigener NVR, zentraler Analytics‑Server

- In jeder Filiale z.B. ein UNVR oder UDM SE mit Protect
- Jede Instanz schickt **Webhooks** an einen zentralen Analytics‑Server
- Die Unabhängigkeit der Filiale bleibt erhalten, nur ein ausgehender HTTPS‑Kanal ist nötig

**Vorteile:**

- Lokale Resilienz (Stores funktionieren bei Zentralausfall weiter)
- Kein dauerhafter VPN‑Tunnel erforderlich
- Trennung der Mandanten (wichtig bei komplexen Organisationsstrukturen)

Für ein wachsendes Retail‑Netz ist Variante B oft angenehmer, insbesondere wenn bereits lokale UniFi‑Infrastruktur existiert.

***

## 5. Schritt für Schritt: Ein Eingang in UniFi Protect

Angenommen, die **Hardware ist fertig installiert**: Kamera montiert, verkabelt, AI Port (falls benötigt) angeschlossen und UniFi Protect läuft.

### 5.1. Kamera & AI Port in Protect adoptieren

1. UniFi Protect öffnen, Geräteübersicht
2. Kamera(n) und AI Port werden unter „Unadopted“ angezeigt
3. Beide adoptieren und Firmware ggf. aktualisieren
4. Für non‑AI‑Kameras: In den AI‑Port‑Einstellungen die Kamera mit dem Port verknüpfen

**Zeitbedarf:** ca. 5–10 Minuten pro Kamera (sofern das Netzwerk sauber konfiguriert ist).

### 5.2. Blickfeld und Position prüfen

1. Live‑View der Eingangskamera öffnen
2. Sicherstellen, dass der Bereich der Tür komplett sichtbar ist
3. Darauf achten, dass Kunden die Tür **nicht diagonal** am Bildrand passieren, sondern möglichst senkrecht zur geplanten Linie
4. Nachtmodus testen (Lichtverhältnisse, IR‑Reflexionen etc.)

**Zeitbedarf:** 5–10 Minuten pro Kamera (einmalige Feinjustierung).

### 5.3. Line Crossing / Line Cross Counting konfigurieren

1. In Protect: Kamera → Einstellungen (Zahnrad) → Reiter **Recording / Aufzeichnung**
2. Abschnitt **Crossing Line / Linienüberquerung** aktivieren
3. Linie ins Bild zeichnen:
 - Quer über die Türschwelle
 - So, dass niemand „drum herum“ kann
4. Erkennungsobjekt wählen:
 - Nur **Person**, keine Fahrzeuge/Tiere für dieses Szenario
5. Richtung definieren:
 - A→B = „EINGANG“
 - B→A = „AUSGANG“
6. Falls verfügbar: **Line Cross Counting** aktivieren und tägliche Rücksetzung (z.B. 00:00 Uhr) konfigurieren.
7. Kurz testen: 2–3 mal selbst durch die Tür gehen, prüfen, ob Zähler korrekt reagiert.

**Zeitbedarf:** 10–20 Minuten pro Eingang.

Damit ist die Besucherzählung im Grunde funktionsfähig – Protect zeigt dir für die Kamera die Anzahl der Überquerungen (z.B. pro Tag) an.

***

## 6. Von der Kamera zum Dashboard: Alarm Manager & Webhooks

Wer „richtig“ mit Daten arbeiten will (BI, Reporting, Conversion‑Rate), braucht eine **strukturierte Ausleitung der Zähldaten**. Hier kommt der **UniFi Alarm Manager** ins Spiel.

### 6.1. Alarm im Alarm Manager anlegen

1. In UniFi Protect → „Alarm Manager“ öffnen
2. **Neuen Alarm** erstellen, z.B. „Store_A_Eingang_IN“
3. **Trigger** definieren:
 - Typ: „Activity“ bzw. „Line Crossing“
 - Scope: entsprechende Kamera + spezifische Linie wählen
 - Zeitplan: z.B. Öffnungszeiten, wenn du nur diese zählen möchtest

### 6.2. Aktion: Webhook konfigurieren

1. Im Alarm‑Workflow: Action → **Webhook**
2. Modus „Custom Webhook“ wählen
3. Ziel‑URL angeben, z.B.
 `https://analytics.deinedomain.tld/unifi/protect/linecross`
4. HTTP‑Methode auf **POST** stellen
5. Entweder Standard‑Payload von Protect nutzen oder ein eigenes JSON definieren (je nach Protect‑Version). Ubiquitis Doku zeigt das Format der Webhook‑Events.

**Zeitbedarf:** 5–15 Minuten pro Alarm (also pro Eingang / Richtung, wenn du IN und OUT getrennt zählst).

### 6.3. Verarbeitung im Backend / Home Assistant

Nun brauchst du noch ein System, das diese POST‑Requests entgegennimmt und verarbeitet:

- **Option Home Assistant**:
 - In HA einen **Webhook‑Trigger** anlegen
 - In der Automation den Visitor‑Counter (Helper) für den entsprechenden Store/Eingang hochzählen
 - Optionale Speicherung in InfluxDB, SQLite, Postgres etc.

- **Option eigenes Backend**:
 - Kleiner Webservice (Node.js, Python, Go …), der:
 - Den Alarmnamen oder eine Kamera‑ID ausliest
 - Aus dem Payload `store_id`, `entrance_id`, Richtung, Timestamp extrahiert
 - Das Event in eine Datenbank (z.B. Postgres, BigQuery) schreibt
 - Darauf basierend kannst du dann in Power BI, Grafana oder Looker Studio Dashboards bauen.

**Wichtig:**
Dieses Backend‑Setup ist **einmaliger Projektaufwand**. Pro weiterem Eingang musst du in der Regel nur:

- Eine neue Line Crossing‑Regel auf der Kamera anlegen
- Einen (ggf. kopierten) Alarm im Alarm Manager konfigurieren
- Im Backend eine Zuordnung (Mapping) für die neue Kamera/den neuen Alarm ergänzen.

***

## 7. Wann lieber zu dediziertem People‑Counting greifen?

Trotz der vielen Vorteile gibt es Szenarien, in denen ein klassisches People‑Counting‑System mehr Sinn ergibt:

- Juristisch belastbare, zertifizierte Besucherzahlen (z.B. für Mietverträge, Sicherheitsauflagen)
- Extrem hohes Besucheraufkommen mit sehr engem Durchgang
- Komplexe Mehrzonen‑Analysen (z.B. Heatmaps im Store, Verweildauer in Regalgängen)

Viele dieser Systeme arbeiten mit Tiefensensoren oder stereooptischen Verfahren, um Personen auch bei starkem Andrang noch korrekt zu trennen. Sie sind aber meist deutlich teurer und weniger flexibel als eine kamera‑basierte Lösung auf Basis von UniFi Protect.

Für **Marketing‑ und Operations‑Use‑Cases** (Conversion, Staffing, Kampagnen‑Evaluation) ist die UniFi‑Lösung in den meisten Fällen ausreichend – vor allem, wenn du sowieso schon in dieses Ökosystem investierst.

***

## 8. Fazit

Mit UniFi Protect, AI‑fähigen Kameras bzw. dem UniFi AI Port kannst du ein **skalierbares, relativ kosteneffizientes People‑Counting‑System** aufbauen:

- Du nutzt vorhandene oder einfach zu beschaffende Hardware
- Du bekommst per Line Crossing / Line Cross Counting eine solide Besucherzählung pro Eingang
- Über den Alarm Manager und Webhooks integrierst du das Ganze in dein bestehendes Analytics‑Ökosystem
- Der zusätzliche **Zeitaufwand pro Eingang** liegt bei etwa **30–40 Minuten**, sobald die Grundarchitektur steht

Für ein großes Filialnetz ist das äußerst attraktiv: Die anfängliche Konzeption und Backend‑Implementierung kostet etwas Hirnschmalz, danach lässt sich jeder neue Laden weitgehend nach „Kochrezept“ einrichten.

Wenn du möchtest, kann der nächste Schritt sein, das in ein konkretes Rollout‑Konzept zu gießen: z.B. „10 Läden mit je 2 Eingängen, zentrales UNVR in der Zentrale, AI Ports wo nötig, Datenmodell + Beispiel‑Dashboard (Conversion vs. Umsatz)“.
