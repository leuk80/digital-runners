---
title: "UniFi AirWire: WiFi 7 Client with True STR MLO Tested"
description: "The UniFi AirWire is Ubiquiti's first external WiFi 7 client with true STR MLO. It connects simultaneously on 5 GHz and 6 GHz and delivers significantly higher speeds than a MacBook's built-in WiFi in testing."
pubDate: 2026-03-20
lang: en
tags: ["UniFi", "AirWire", "WiFi 7", "MLO", "STR", "Ubiquiti", "Wireless"]
author: "Digital Runners"
---

## What Is the AirWire?

Ubiquiti has introduced the AirWire, a rather unusual product: an external WiFi 7 client that connects to your computer via USB-C. The device simultaneously connects over 5 GHz and 6 GHz to the access point and aggregates both bands. This is true STR MLO (Simultaneous Transmit and Receive Multi-Link Operation), not the EMLSR that current laptops and smartphones use.

With EMLSR, multiple bands are technically active, but only one transmits and receives at any given time. The other bands just listen. The AirWire works differently: both radio modules operate in parallel, which in practice delivers noticeably more throughput and lower latency.

## Hardware and Design

The AirWire is not a small USB stick. The enclosure measures 117 x 117 x 42.5 mm and weighs 537 g. That footprint is necessary to house two separate radio modules, a directional antenna, and the cooling system.

On the front sits a small LCM display showing which bands the AirWire is currently connected to. A flip-up antenna on top should be aimed toward the access point. On the back, there are two USB-C ports: one for data and one for supplemental power if the computer cannot supply enough.

The AirWire appears on the computer as a 5 GbE network adapter over USB 3.2 Gen 2. Maximum power consumption is 18 watts.

## Technical Specifications

The key specs:

- WiFi 7, 4 spatial streams (2x2 on 5 GHz + 2x2 on 6 GHz)
- Maximum data rate: 5.8 Gbps on 6 GHz (320 MHz), 4.3 Gbps on 5 GHz (240 MHz)
- Antenna gain: 11 dBi on both bands
- Transmit power: 25 dBm on 5 GHz, 20 dBm on 6 GHz
- No 2.4 GHz support
- USB-C with Power Delivery (5/9/12V)
- Backward compatible with WiFi 6 and WiFi 5

## Setup in UniFi Network

Setup is straightforward. In the UniFi Network app, the AirWire appears as a new device with "Pending Adoption" status. Once adopted, it shows up in the device list.

Under the WiFi settings, you should check whether "Mesh eMLO" is enabled (currently still under Labs). If you have a WiFi 7 access point with 320 MHz on 6 GHz, you should enable that as well. In the AirWire overview, you then see both connections: 80 MHz on 5 GHz and 320 MHz on 6 GHz.

You can set the Mesh Parent in the settings, specifying which access point should serve as the counterpart. The native VLAN can also be configured.

## Speed Test Results

Mactelecom Networks tested the AirWire on a Mac Mini that normally connects via its built-in WiFi. An E7 access point with 10 GbE uplink served as the counterpart. Here are the comparative results:

**Basement (approx. 5 meters from AP):**

| Test | Built-in WiFi | AirWire |
|------|--------------|---------|
| Speedtest Download | 768 Mbps | 2,547 Mbps |
| Speedtest Upload | 790 Mbps | 1,939 Mbps |
| OpenSpeedTest Download | 757 Mbps | 2,771 Mbps |
| OpenSpeedTest Upload | 853 Mbps | 3,247 Mbps |

**Ground floor (one floor above the AP):**

| Test | Built-in WiFi | AirWire |
|------|--------------|---------|
| Speedtest Download | 445 Mbps | 2,999 Mbps |
| Speedtest Upload | 268 Mbps | 1,340 Mbps |
| OpenSpeedTest Download | 462 Mbps | 1,788 Mbps |
| OpenSpeedTest Upload | 177 Mbps | 1,323 Mbps |

**Upper floor (two floors above the AP):**

| Test | Built-in WiFi | AirWire |
|------|--------------|---------|
| Speedtest Download | 569 Mbps | 1,963 Mbps |
| Speedtest Upload | 97 Mbps | 1,200 Mbps |
| OpenSpeedTest Download | 393 Mbps | 2,160 Mbps |
| OpenSpeedTest Upload | 93 Mbps | 1,583 Mbps |

The differences are striking, especially for uploads across multiple floors. On the upper floor, the AirWire delivers over 15 times more upload throughput than the built-in WiFi.

## Temperature

The AirWire showed temperatures around 47 to 48 degrees Celsius (about 117 degrees Fahrenheit). According to Mactelecom Networks, the enclosure does not feel particularly hot to the touch.

## Who Is the AirWire For?

The AirWire is a niche product. It costs 199 USD and is larger than a typical WiFi adapter. But for certain scenarios it makes sense: if you have a stationary computer that cannot get an Ethernet cable and you still need high throughput (for example, video editing from a NAS), the AirWire can be an alternative to running cable. Running that cable would cost more than 199 USD in many cases anyway.

You do need a UniFi access point though. And for full STR MLO, it must be a WiFi 7 model -- a U7 or E7. Older access points are supported but will not deliver MLO.

## Conclusion

The AirWire solves a specific problem: current WiFi 7 clients do not tap the full potential of the standard because they only support EMLSR. With the AirWire, you get true STR MLO on the client side, and the test results show that the difference is substantial in practice. If you have already invested in UniFi WiFi 7 and need more wireless performance at a given location than your laptop's built-in WiFi can provide, this is a viable solution.
