---
title: "UniFi Dream Router 5G Max: Cloud Gateway with 5G, WiFi 7, and 10G SFP+"
description: "The UDR 5G Max is Ubiquiti's first Dream Router with a built-in 5G modem, WiFi 7, and a 10G SFP+ port. Who the device is for and what sets it apart from other Cloud Gateways."
pubDate: 2026-03-27
lang: en
tags: ["UniFi", "UDR 5G Max", "Dream Router", "5G", "WiFi 7", "Cloud Gateway", "Ubiquiti", "SFP+"]
author: "Digital Runners"
---

## Internet Without a Cable

Ubiquiti has introduced the Dream Router 5G Max, a Cloud Gateway that no longer needs a wired internet connection. The device has a built-in 5G modem and can go online directly via the cellular network. You insert a SIM card, and the router connects to the nearest 5G tower. This works as a primary internet connection or as a failover if the fiber line goes down.

Previously, 5G failover on UniFi required a separate USB dongle or an external LTE router. That was always a makeshift solution. The UDR 5G Max makes it unnecessary because everything is in one box.

The price is 499 USD in the Ubiquiti Store.

## What Is Inside

The 5G modem delivers up to 3.4 Gbps downstream and 560 Mbps upstream on NSA networks (Non-Standalone). On SA networks (Standalone 5G), the figures are 1.8 Gbps down and 650 Mbps up. These are theoretical maximums that depend in practice on location, network coverage, and carrier. In real-world use, you can expect 200 to 800 Mbps, which is more than enough for most applications.

The device has two nano-SIM slots and also supports eSIM. Insert two SIM cards from different carriers and you get automatic failover between cellular connections. In the US, AT&T and T-Mobile are certified, with Verizon to follow. For Europe, you will need to check compatibility with your carrier.

## WiFi 7 and Ports

The router delivers WiFi 7 (BE10700) across three bands: 2.4 GHz at 688 Mbps, 5 GHz at 4.3 Gbps, and 6 GHz at 5.7 Gbps. That is the same class as a U7 Pro access point, packaged in a cylindrical desktop enclosure.

For wired connections, there is one 10G SFP+ port and four 2.5 GbE RJ45 ports. One of the RJ45 ports delivers PoE, which lets you power an access point or camera directly from the router without a separate PoE switch. This is practical for small sites where you do not want to deploy an extra switch.

For local storage, there is an SD card slot. This allows Protect recordings to be stored locally, similar to the standard Dream Router.

The enclosure measures 110 x 110 x 250 mm and has the typical cylindrical shape of the Dream Router lineup.

## UniFi OS and Apps

Like any Cloud Gateway, the UDR 5G Max runs UniFi OS. That means Network, Protect, Access, and the other UniFi applications run directly on the device. If you already have UniFi hardware deployed, you manage everything through the familiar dashboard.

The device also functions as a small NVR (Network Video Recorder) for UniFi Protect. A few cameras can record to the SD card slot, but anyone running more than three or four cameras will need a dedicated UNVR or UNAS.

## 5G as Backup or Primary Connection

The most interesting use case is probably not home use but rather locations where no fiber connection is available. Construction sites, pop-up stores, temporary offices, rural locations. You set up the router, insert a SIM card, and within minutes you have a fully functional UniFi network with internet access.

For locations with an existing wired connection, the device makes sense as a failover solution. If the line goes down, the 5G modem takes over. This happens automatically and is displayed in the UniFi app.

Ubiquiti also offers two standalone 5G modems alongside the UDR 5G Max: the UniFi 5G Max (U5G-Max) for indoor use at 399 USD and the UniFi 5G Max Outdoor (U5G-Max-Outdoor) for outdoor installations at 459 USD. These can be connected to existing Cloud Gateways if you do not need a new gateway but still want 5G failover.

## Assessment

499 USD for a router with a built-in 5G modem, WiFi 7, and 10G SFP+ is not cheap, but it is also not unreasonable when you consider what comparable devices from Cradlepoint or Peplink cost. Those quickly run into four figures.

If you already run a Dream Machine Pro or an Enterprise Gateway and are happy with it, you do not need the UDR 5G Max. The device is aimed at people who either have no wired internet or want a simple failover solution without modifying their existing infrastructure.

If you want to order: it is available in the Ubiquiti Store, but historically it sells out quickly. Setting up restock notifications is worthwhile.
