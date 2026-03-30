---
title: "UniFi Network 10.1: WiFi Doctor, Roaming Visualization, and Improved Shadow Mode"
description: "UniFi Network 10.1 introduces a WiFi Doctor for automatic network optimization, a visual roaming map for clients, and an improved Shadow Mode setup for gateway redundancy."
pubDate: 2026-03-11
lang: en
tags: ["UniFi", "Network", "WiFi", "Shadow Mode", "Roaming", "Firmware"]
author: "Digital Runners"
---

## What Is in Network 10.1?

Ubiquiti released UniFi Network 10.1 in early February (version 10.1.83, currently as Release Candidate). The update focuses on three areas: automatic WiFi optimization, better visibility into client roaming, and a revamped setup for gateway high availability.

## WiFi Doctor

The dashboard now has a new section called "WiFi Doctor." It automatically checks your WiFi setup and highlights where optimization is needed. Specifically, it covers four areas: 2.4 GHz channels for IoT devices, current firmware on all APs, roaming configuration on 5 GHz and 6 GHz, and wired AP uplinks.

When everything checks out, you see four green checkmarks. When something is off, the WiFi Doctor shows what needs adjusting. This is especially useful when managing multiple sites and you do not want to manually review every setting each time.

## Roaming Visualization

Under "Air View," there is a new section for Connectivity Insights. You can track roaming events for individual clients: which access points did a device switch between? Was the transition successful or did something go wrong?

There is also a roaming map that visually shows how clients move between APs. In small setups with two APs, you will not see much, but in larger installations with ten or more APs, it quickly becomes useful. You can select multiple clients simultaneously and filter by manufacturer, SSID, source AP, and target AP.

For anyone who regularly troubleshoots [WiFi issues](/en/blog/wifi-planning-offices) in larger offices or warehouses, this is a tool that significantly speeds up diagnosis.

## Shadow Mode Setup

For those running two gateways (such as two [UDM Pro Max](/en/blog/udm-pro-max-vs-ucg-max) units), there is an improved Shadow Mode setup. A guided wizard now appears in the settings, walking you step by step through the wiring and configuration of both gateways.

Shadow Mode is based on VRRP and ensures that if one gateway fails, the second automatically takes over. The setup was not particularly intuitive before. With the new wizard, the system verifies that the configuration is correctly synchronized and that failover actually works, rather than just hoping everything is fine.

Under the same menu, you will also find settings for MC-LAG and Switch Stacking, though the stack switches are not yet available.

## Audit Log

A new Audit Log is available under the logging section. It records which admin made which configuration change. Each entry shows the device (PC, Mac, iPhone), the source IP, the category of the change, and a description of what was modified.

For teams where multiple people have access to the UniFi management, this is practical. When something suddenly stops working, you can trace who changed what and when.

## Additional Improvements

Network 10.1 brings several other enhancements. Device Tags let you group devices and quickly filter by specific categories (such as all switches with cameras attached). For clients, there are new Quick Actions with a ping test and the ability to block apps for specific devices. VPN servers and clients now support configurable MTU/MSS values. And if you use Starlink, the dashboard now shows firmware status and obstruction details, provided the Starlink is connected directly to the UniFi gateway.

## Conclusion

Network 10.1 is not a spectacular feature update, but it is a solid one. The WiFi Doctor saves time on configuration checks, the roaming visualization helps with troubleshooting in larger installations, and the improved Shadow Mode makes high availability more accessible. The Audit Log was overdue.

The update is currently available as a Release Candidate. To test it, switch to the Release Candidate channel in the settings.

---

*Have questions about WiFi optimisation? [Get in touch](/en/kontakt) for a free initial consultation.*
