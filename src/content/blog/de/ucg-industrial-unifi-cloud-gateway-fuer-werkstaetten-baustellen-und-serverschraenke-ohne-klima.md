---
title: "UCG Industrial: UniFi Cloud Gateway für Werkstätten, Baustellen und Serverschränke ohne Klima"
description: "Ubiquiti bringt mit dem UCG Industrial ein lüfterloses Cloud Gateway für raue Umgebungen. Was das Gerät kann, für wen es gedacht ist und wie es sich von den anderen Gateways unterscheidet."
pubDate: 2026-03-10
lang: de
tags: ["UniFi", "Gateway", "Industrial", "PoE", "WiFi 7", "Netzwerk"]
author: "Digital Runners"
---

## Worum geht es?

Ubiquiti hat mit dem Cloud Gateway Industrial (UCG-Industrial) das erste Gerät einer neuen Produktlinie vorgestellt. Der Fokus liegt auf Einsatzorte, an denen ein normales Gateway nicht lange überlebt: Werkstätten, Lagerhallen, Baustellen, Aussenstationen, Serverräume ohne Klimaanlage.

Das Gerät ist komplett lüfterlos. Die Kühlung läuft passiv über ein Metallgehäuse mit Kühlrippen. Keine beweglichen Teile, kein Lüfter, der nach zwei Jahren Staub aufgibt. Betriebstemperatur laut Spezifikation: -30 °C bis 50 °C. Dazu ESD-Schutz bis ±8 kV (Luft) und ±4 kV (Kontakt). Das ist deutlich mehr als bei den üblichen Consumer- und Prosumer-Gateways.

---

## Anschlüsse und PoE

Das UCG Industrial hat folgende Ports:

- 1x 10G SFP+ (für Glasfaser oder DAC)
- 1x 10 GbE RJ45
- 4x 2.5 GbE RJ45

Davon liefern drei Ports PoE+++ mit bis zu 90 Watt pro Port. Zwei weitere Ports unterstützen PoE+. Das gesamte PoE-Budget liegt bei 270 Watt. Wer also ein paar Kameras, einen Access Point und vielleicht einen kleinen Switch direkt am Gateway betreiben will, kommt ohne zusätzliches Netzteil oder PoE-Injektor aus.

Die Gesamtleistung des Systems liegt bei 350 Watt. Der Eigenverbrauch des Gateways ohne angeschlossene PoE-Geräte beträgt rund 28 Watt.

---

## WiFi 7, aber ohne 6 GHz

Das UCG Industrial hat WiFi 7 (802.11be) eingebaut, allerdings ohne das 6-GHz-Band. Wer WiFi 7 mit 6 GHz braucht, ist weiterhin auf einen separaten Access Point angewiesen. Für viele industrielle Einsatzzwecke reicht das integrierte WLAN trotzdem als Grundversorgung, etwa für Management-Zugriff oder ein paar Endgeräte vor Ort.

Zwei externe Antennenanschlüsse sind vorhanden, dazu werden Antennen mitgeliefert.

---

## Vollständige UniFi Console

Anders als manche Kompaktgeräte ist das UCG Industrial eine vollwertige UniFi Console. Alle Applikationen laufen darauf: Network, Protect, Access, Talk und Connect. Laut Ubiquiti unterstützt das Gerät über 50 Kameras, 50 Access Hubs und mehr als 500 gleichzeitige Clients.

Der Arbeitsspeicher liegt bei 3 GB. Für die Anwendungsdaten gibt es einen microSD-Slot, eine 120-GB-Karte wird mitgeliefert.

Zwei SIM-Karten-Slots sind ebenfalls verbaut, aber noch nicht per Software aktiviert. Ubiquiti hat angekündigt, dass ein zukünftiges Update die Mobilfunkanbindung freischalten soll. Wenn das kommt, wäre das Gerät auch als Fallback-Gateway mit LTE-Uplink nutzbar.

---

## Montage und Formfaktor

Das Gehäuse wiegt 2,4 kg und kann auf verschiedene Arten montiert werden: flach auf dem Tisch, hochkant mit dem mitgelieferten Standfuss, an der Wand oder im Rack. Für die Rack-Montage gibt es ein separates Kit für 59 Dollar.

Der Formfaktor ist kompakter als die üblichen 19-Zoll-Geräte. Für Installationen, bei denen kein Rack vorhanden ist, lässt sich das Gateway einfach an die Wand schrauben oder auf ein Regal stellen.

---

## Preis und Verfügbarkeit

Das UCG Industrial kostet 579 Dollar bzw. 520 Euro (ohne MwSt.) und ist bereits im Ubiquiti Store erhältlich. Im Vergleich: Ein Cloud Gateway Ultra liegt bei rund 129 Dollar, hat aber deutlich weniger Ports, kein PoE und kein robustes Gehäuse. Ein UDM Pro Max kostet rund 499 Dollar, ist aber für Rack-Montage in klimatisierten Räumen gedacht.

Wer ein Gerät braucht, das auch bei Hitze, Kälte, Staub und Vibrationen zuverlässig läuft, findet beim UCG Industrial aktuell keine UniFi-Alternative.

---

## UniFi Industrial als neue Linie

Ubiquiti hat angekündigt, dass das UCG Industrial der Anfang einer ganzen Industrial-Produktlinie ist. Am MWC in Barcelona wurden Prototypen von Industrial-Switches und Access Points mit externen Antennen gezeigt. Details und Preise zu den weiteren Geräten fehlen noch.

Sobald es Neuigkeiten zu den Industrial-Switches und APs gibt, berichten wir hier auf Digital Runners. Bei Fragen zur Planung oder Integration des UCG Industrial in bestehende Setups: melde dich bei uns.
