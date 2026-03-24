---
title: "Ubiquiti at MWC 2026: EFG Core, SuperLink HA, Fingerprint Reader, and More"
description: "Ubiquiti showcased new hardware at Mobile World Congress in Barcelona. The most exciting announcements at a glance: EFG Core, SuperLink HA with Thread support, Enterprise NAS, and the Retro Reader Fingerprint."
pubDate: 2026-03-10
lang: en
tags: ["UniFi", "MWC", "Enterprise", "SuperLink", "Access", "Thread", "Smart Home"]
author: "Digital Runners"
---

## Ubiquiti at MWC 2026

Ubiquiti was present at Mobile World Congress in Barcelona this week with a booth and showed off several new products. Not everything has been officially announced – some of it first surfaced on Reddit when visitors shared photos from the booth. Here is a summary of the most interesting new developments.

---

## Enterprise Fortress Gateway Core

The existing Enterprise Fortress Gateway (EFG) at around $2,000 and in a rack form factor is not exactly aimed at smaller setups. At MWC, a device labeled "Enterprise Fortress Gateway Core" was on display.

Details are still sparse. What we know from the booth: it is a more compact version of the EFG, designed for environments that need enterprise-grade security features but not the full 25G rack unit. The existing EFG offers 12.5 Gbps IDS/IPS, NeXT AI Inspection (SSL/TLS deep packet inspection), and Shadow Mode HA. Whether the Core brings all of that in a smaller package or whether Ubiquiti cuts certain features remains unclear.

For businesses that have been stuck choosing between the UDM Pro Max and the EFG, the Core could fill exactly that gap.

---

## Enterprise NAS / NVR

Photos from the Ubiquiti rack at the booth revealed a new device that appears to be either an Enterprise NAS or a redesigned NVR. The chassis features a ventilation grille on top, a slightly redesigned front frame, and 16 drive bays. Below it, additional units were visible – possibly expansion modules.

This would be a logical step. Anyone running Protect with many cameras who also needs network storage has had to rely on third-party NAS systems until now. An integrated Enterprise NAS that plugs directly into the UniFi management interface would simplify that significantly.

Whether the device works standalone or requires a console like the UDM Pro Max is not yet known. Pricing is also completely absent so far.

---

## SuperLink HA with Thread Support

This is likely the announcement that will generate the most excitement among smart home users. A device labeled "SuperLink HA" was on display at MWC. According to the visible descriptions at the booth, it is a SuperLink gateway and simultaneously a Thread border router.

What this means in practice: the device bridges the existing SuperLink ecosystem (a proprietary long-range radio link for Protect sensors, up to 2 km range) with the open Thread protocol. Thread is the wireless standard behind Matter, the new smart home standard that Apple, Google, and Amazon are jointly driving forward.

On top of that, it includes LTE connectivity as a fallback and a built-in battery for power outages. The device is clearly aimed at installations that need to keep communicating even during power and internet failures.

Anyone running a UniFi network who wanted to use Thread devices previously needed a separate Thread border router (from Apple, Google, or as an OpenThread DIY build). With the SuperLink HA, that would move directly into the UniFi ecosystem. Pricing and availability are not yet known.

---

## Protect Alarm Hub

Also on display at the booth: a Protect Alarm Hub. The description mentions a 32-zone alarm panel for wired intrusion sensors. Power is supplied via PoE++, with optional battery backup.

This is relevant for anyone looking to integrate a traditional burglar alarm system into a UniFi Protect setup. Until now, Protect has been primarily camera-based; with the SuperLink sensors, environmental sensors were added. The Alarm Hub expands this with wired alarm sensors, which are standard in professional security installations.

Whether the device is also compatible with existing third-party sensors or only works with UniFi-branded components remains an open question.

---

## Retro Reader Fingerprint

UniFi Access has offered access control via NFC and PIN for a while now. At MWC, a new reader was shown that adds fingerprint recognition: the Retro Reader Fingerprint.

The "Retro" in the name refers to "retrofit." The idea is to add biometric access control to existing door installations without having to replace the entire hardware. The reader runs on PoE, so no separate power cabling is needed.

Two-factor authentication becomes possible: NFC card plus fingerprint, or PIN plus fingerprint. For offices, server rooms, or other secured areas, this is a sensible upgrade. Cody from Mactelecom Networks mentioned in his video that he sees biometric access control as his personal highlight of the show.

---

## Summary

Ubiquiti is expanding the UniFi ecosystem in multiple directions at once: enterprise security (EFG Core), storage (NAS/NVR), smart home and IoT (SuperLink HA with Thread), traditional security (Alarm Hub), and access control (Fingerprint Reader). None of these products have an official datasheet or price yet. They are prototypes and pre-announcements from the show floor.

As soon as Ubiquiti publishes official specifications, we will update the details here on Digital Runners. If you have questions about your UniFi setup or planning with the upcoming products, get in touch with us.
