---
title: "UniFi Design Center 2026: Network Planning with Floor Plans, Heatmaps, and Bill of Materials"
description: "The UniFi Design Center is a free planning tool from Ubiquiti. The 2026 update adds High Availability, Shadow Mode, and MC-LAG to network planning. An overview of its features."
pubDate: 2026-03-14
lang: en
tags: ["UniFi", "Design Center", "Network Planning", "WiFi", "Heatmap", "High Availability", "Shadow Mode"]
author: "Digital Runners"
---

## What Is the UniFi Design Center?

The UniFi Design Center is a free, browser-based tool at design.ui.com. It lets you plan network installations before purchasing equipment or running cables. You upload a floor plan, draw in walls, place access points, cameras, and switches, and get an estimate of [WiFi coverage](/en/blog/wifi-planning-offices), cable paths, and required hardware.

The tool is aimed at installers and IT managers who want to know how many APs they need and where they should go before starting a new installation or expansion. It is overkill for home networks, but for offices, warehouses, or multi-unit buildings, it saves time and prevents costly mistakes.

## Project Wizard

When creating a new project, a wizard walks you through the basic configuration: Should WiFi be included? Which product line (e.g., Enterprise E7)? Are cameras or [access control](/en/blog/unifi-access-control) needed? Based on the answers, the tool suggests an initial equipment list, including gateway and switch.

This is a useful starting point, especially if you are not familiar with the entire Ubiquiti product lineup. Everything can be adjusted afterward, but the initial selection provides direction.

## Floor Plans and Wall Materials

The floor plan is uploaded as an image (PNG, JPEG) or PDF. You then set the scale by marking a known distance on the plan and entering the length. Without this step, distance calculations and WiFi simulations will be inaccurate.

Next, you draw in the walls. The tool distinguishes between different materials: drywall, concrete, glass (single and double glazing), and brick. Each material has its own attenuation value that affects how much the WiFi signal is weakened when passing through. Concrete walls absorb more than drywall; glass windows less than brick walls.

Drawing the walls takes some patience. With a floor plan containing many rooms and windows, you can easily spend half an hour on it. But the accuracy of the later WiFi heatmap depends directly on how carefully you work here.

## WiFi Simulation and Heatmap

Once the walls are in place and access points are positioned, the Design Center generates a heatmap. It shows signal strength in dBm using color coding: green is good, yellow is acceptable, red is problematic.

You can switch between frequency bands (2.4 GHz, 5 GHz, 6 GHz), adjust transmit power and channel width, and select the client device type, from WiFi 7 down to WiFi 4. The heatmap changes depending on the settings. A WiFi 7 client with Multi-Link Operation sees the world differently than an older smartphone on 2.4 GHz.

Hovering the cursor over the floor plan shows the estimated signal strength and distance to the nearest AP in real time. With multiple APs, you can also see where a client would likely roam. This helps fine-tune AP positions before drilling holes.

## Cameras and Access Control

Beyond WiFi, camera planning can also be done in the Design Center. You select a camera model (e.g., G5 Bullet, [G5 Turret Ultra](/en/blog/g5-turret-ultra-camera-review)) and place it on the floor plan. The tool shows the viewing angle and covered area, making it easy to spot blind spots at a glance.

Access control works similarly: place Enterprise Access Hubs, then position readers (G3 Reader Pro, Reader Flex) at doors. The G3 Reader Pro units have a built-in camera whose coverage area is also displayed.

## Data Outlets and Cabling

Recent updates added the ability to draw RJ45 data outlets on the floor plan. You place them where end devices will be connected and link them to the nearest switch or patch panel using the cable tool.

There is also a cable routing tool for planning physical cable paths through walls and ceilings. Each cable shows its calculated length, which is useful for material estimation -- you know before ordering exactly how many meters of Cat6a you need.

Additionally, you can now place wired client devices (PCs, printers, IP phones) on the floor plan. This helps with port planning on switches.

## Network Rack

The Design Center can also model a virtual network rack. You select the rack size and populate it with devices: gateway, switches, patch panels, UPS. Devices are displayed in the rack view exactly as they would be physically installed.

The rack is linked to the floor plan. Cable connections between rack devices and placed cameras, APs, or data outlets are automatically incorporated into the topology.

## New in 2026: High Availability and MC-LAG

The February 2026 update brings two features relevant to larger installations.

Shadow Mode can now be modeled in the Design Center. You place two identical gateways (such as two UDM Pro Max units) and link them together. The tool displays them as a stack and shows the high-availability configuration in the topology view. However, this currently only works when devices are placed on the floor plan. The Shadow Mode connection is not yet visualized within the rack itself.

MC-LAG works on the same principle: connect two identical switches, and the Design Center displays them as a linked stack. This is helpful for installations with redundant switching layers, because you can account for failover in the planning phase.

Additionally, there are now WAN switches that automatically connect to the internet node in the topology and support connections to up to two gateways.

## Bill of Materials and Export

Once the plan is complete, the Design Center generates a bill of materials with all placed devices and estimated costs. The list can be exported, as can the entire plan as PDF or HTML. Since late 2025, there is also an integrated checkout for ordering devices directly from Ubiquiti.

For client proposals, this is practical: you export the plan with heatmap and bill of materials and have professional documentation showing why exactly these devices go in exactly these positions.

## Conclusion

The UniFi Design Center has evolved from a simple heatmap tool into comprehensive network planning software. Having WiFi simulation, camera planning, cabling, and rack configuration in a single free tool is unusual. Comparable software from Ekahau or iBwave costs four figures per year.

The accuracy of the WiFi heatmap depends heavily on how precisely you enter wall materials and scale. Cut corners here, and you get optimistic results. Take the time to do it right, and you get a useful preliminary assessment that reduces the effort of on-site manual surveying.

---

*Have questions about network planning? [Get in touch](/en/kontakt) for a free initial consultation.*
