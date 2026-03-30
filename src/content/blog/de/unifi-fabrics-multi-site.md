---
title: "UniFi Fabrics: Multi-Site-Verwaltung, Zutrittskontrolle und Konfiguration zentral steuern"
description: "UniFi Fabrics bündelt mehrere Standorte in einer gemeinsamen Verwaltung. WLAN-Konfigurationen, Zutrittskontrolle und Benutzerverwaltung lassen sich zentral orchestrieren, komplett ohne Lizenzkosten."
pubDate: 2026-03-18
lang: de
tags: ["UniFi", "Fabrics", "Multi-Site", "MSP", "Access Control", "Identity", "Ubiquiti"]
author: "Digital Runners"
---

## Mehrere Standorte, ein Problem

Wer mehr als einen UniFi-Standort betreut, kennt das: gleiche WLAN-Konfiguration auf drei Sites anlegen, Benutzer doppelt pflegen, Zutrittskontrolle pro Standort separat einrichten. Bei zwei Standorten geht das noch. Bei zehn wird es zur Fleissarbeit.

Genau hier setzt UniFi Fabrics an. Ubiquiti hat damit eine neue Verwaltungsebene im Site Manager eingeführt, die mehrere Standorte unter einem gemeinsamen Dach zusammenfasst. Fabrics ist aktuell als Early Access verfügbar und lässt sich über unifi.ui.com aktivieren.

## Was ist ein Fabric?

Ein Fabric ist im Grunde eine Gruppe von UniFi-Sites, die gemeinsam verwaltet werden. Man wählt aus, welche Standorte zum Fabric gehören sollen, und bekommt dann eine übergeordnete Oberfläche, über die sich Konfigurationen, Benutzer und Richtlinien standortübergreifend steuern lassen.

Das Ganze läuft über den Site Manager und braucht keine zusätzlichen Lizenzen. Das ist ein relevanter Punkt, weil vergleichbare Lösungen bei anderen Herstellern schnell ins Geld gehen.

## Benutzerverwaltung über Identity Provider

Unter "Consolidated People Management" lässt sich ein externer Identity Provider anbinden. Unterstützt werden Google Workspace, Microsoft Entra (ehemals Azure AD), JumpCloud, Active Directory und LDAP.

Einmal verbunden, werden Benutzer zentral synchronisiert. Dafür läuft auf dem Master-Standort ein Identity Sync Service, der Berechtigungen über alle Standorte im Fabric hinweg abgleicht. Der Master-Standort ist dabei der primäre Gateway (etwa ein UDM Pro Max), über den die Synchronisation koordiniert wird.

Für die Verbindung zwischen den Sites gibt es zwei Optionen: manuelles Port-Forwarding oder die Nutzung eines Ubiquiti-eigenen Relay-Dienstes.

## WLAN-Netzwerke zentral ausrollen

Einer der praktischsten Aspekte: WLAN-Konfigurationen lassen sich einmal anlegen und dann auf alle (oder ausgewählte) Standorte im Fabric pushen. Im Video hat Cody von Mactelecom Networks das mit einem Gäste-WLAN getestet, das er zentral erstellt und auf zwei Standorte verteilt hat.

Sobald ein Netzwerk über das Fabric verteilt wird, ist es auf den einzelnen Sites nicht mehr lokal editierbar. Es erscheint ein Hinweis, dass die Konfiguration zentral verwaltet wird. Das verhindert, dass jemand vor Ort Änderungen macht, die dann beim nächsten Sync wieder überschrieben werden.

## Zutrittskontrolle über mehrere Standorte

Für alle, die UniFi Access einsetzen, ist das hier wohl das interessanteste Feature. Über Fabrics lassen sich Türzugangsrichtlinien standortübergreifend verwalten. Man kann benutzerdefinierte Rollen anlegen (z.B. "Türwächter"), diese auf bestimmte Standorte einschränken und den Zugang zu spezifischen Türen regeln.

Dazu kommt eine Neuerung bei der UniFi Identity App: Remote Unlock. Bisher musste man sich in Bluetooth-Reichweite befinden, um eine Tür per App zu öffnen. Über Fabrics funktioniert das jetzt auch aus der Ferne. In der Identity-Endpoint-App sieht ein Benutzer alle Türen, zu denen er Zugang hat, auch wenn diese an verschiedenen Standorten sind.

Für MSPs, die mehrere Kunden mit UniFi Access betreuen, ist das ein echter Zeitsparer.

## Physische Sicherheit und Protect

Neben der Zutrittskontrolle bringt Fabrics auch die physische Sicherheit (Kameras) in die zentrale Verwaltung. Im gezeigten Setup waren sowohl UDM-Pro-Max-Standorte als auch ein UNVR Pro Teil des Fabrics, sodass sich die Protect-Überwachung ebenfalls standortübergreifend einsehen lässt.

## Was noch kommt

Einiges ist noch als "Coming Soon" markiert. Dazu gehören Device Templates für die automatisierte Gerätekonfiguration und Zero-Touch-Provisioning, eine zentrale Client-Übersicht über alle Standorte, ein System Log, der Update Manager und ein Alarm Manager, der standortübergreifende Alarme zentral verwalten soll.

## Fazit

UniFi Fabrics löst ein konkretes Problem: die aufwändige Verwaltung mehrerer Standorte. Statt die gleichen Einstellungen an jedem Standort einzeln vorzunehmen, definiert man sie einmal und verteilt sie. Die Integration der Zutrittskontrolle über Standorte hinweg war längst überfällig, und dass das Ganze ohne Lizenzkosten auskommt, macht es auch für kleinere MSP-Setups attraktiv.

Fabrics ist noch in der Early-Access-Phase, funktioniert aber laut dem gezeigten Walkthrough von Mactelecom Networks bereits stabil. Wer mehrere UniFi-Sites verwaltet, sollte sich das anschauen.
