---
title: "UniFi Network 10.2: Digital Twin, Time Machine, and Device Supervisor"
description: "UniFi Network 10.2 brings a digital rack view, a time travel function for switch ports, automatic power cycling of unresponsive devices, and encrypted open WiFi."
pubDate: 2026-03-25
lang: en
tags: ["UniFi", "Network", "Digital Twin", "Device Supervisor", "Firmware", "WiFi", "STP"]
author: "Digital Runners"
---

## What Is New in Network 10.2?

Ubiquiti released UniFi Network 10.2 in mid-March. The update delivers several features that admins in larger installations have been waiting for: a physical rack representation of the infrastructure, a timeline for switch ports, automatic restarting of failed devices, and encrypted open WiFi. There are also improvements to STP, firmware rollbacks, and WireGuard VPN.

## Time Machine for Switches

The Port Manager now has a 24-hour timeline showing when each port was active, when a device connected, and when something went down. It looks and works like the recording timeline in UniFi Protect: you scroll back and see at a glance what happened when.

Anyone who has debugged a switch port outage overnight and had no idea the next morning when the problem started will appreciate this. VLAN changes do not appear on the timeline yet -- that is still missing.

## Infrastructure Topology and Digital Twin

Under a new "Infrastructure" tab, there is now a view that represents the physical rack setup. You see the WAN connection, the gateway, and all downstream devices as a digital twin. Clicking on a connection reveals health metrics and traffic data.

The Digital Twin panel simultaneously shows firmware versions, CPU load, RAM usage, power consumption, and PoE budgets for all visible devices. You can organize devices into named groups, such as "Core" and "Access Layer." For installations with multiple switches and a structured rack layout, this is significantly clearer than the previous flat device list.

## Device Supervisor

The Device Supervisor monitors the heartbeat of connected UniFi devices and automatically restarts them via PoE power cycle when they stop responding for a defined period. This works through the PoE port on the switch: the device stops responding, the switch briefly cuts power and restores it.

You can set per device how long to wait before triggering an automatic restart. Important to note: in the EU and UK, this only works via PoE ports. PDU integration for outlet-powered devices is not yet available there.

For anyone with access points or cameras mounted in hard-to-reach locations, this eliminates the trip to the device or the manual power toggle in the dashboard.

## Enhanced Open (OWE)

Open WiFi networks can now be encrypted without requiring a password. There are three modes: classic open (unencrypted), Enhanced Open (everything encrypted via OWE), and Enhanced Open with Transition Mode. Transition Mode encrypts for compatible devices and falls back to unencrypted for older ones.

For guest WiFi in hotels, cafes, or offices, this is a sensible middle ground. Traffic between client and access point is encrypted at WPA3 level without anyone needing to type a password.

## STP Edge Mode and BPDU Guard

Two additions to the Spanning Tree Protocol: Edge Mode accelerates ports with end devices (PCs, printers, IP phones) by skipping STP negotiation. The port goes straight to the forwarding state instead of waiting the usual 30 seconds.

BPDU Guard works alongside Edge Mode. If unexpected BPDU packets arrive at an edge port (for example, because someone connected an unauthorized switch), the port is immediately disabled. It stays locked until manually re-enabled. This protects against loops and unauthorized network expansion.

## One-Click Firmware Revert

Firmware rollbacks can now be done with a single click directly from the dashboard, without SSH. This applies to both the Network application and individual devices. During the rollback, a support file is automatically created in case you need to escalate to Ubiquiti support.

## IPv6 WireGuard VPN

WireGuard VPN servers now support IPv6 addresses. Previously, only IPv4 was possible. This means dual-stack and pure IPv6 networks can now also be connected via WireGuard. UniFi OS 5.1 is required.

## Conclusion

Network 10.2 is a solid release with features that have been missing for a while. The Time Machine and Digital Twin make switch troubleshooting considerably easier. The Device Supervisor removes manual power cycling. And Enhanced Open was overdue for anyone running open guest WiFi.

The update runs on all UniFi Cloud Gateways, including the UDM lineup.
