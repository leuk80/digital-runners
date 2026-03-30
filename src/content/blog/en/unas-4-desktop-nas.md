---
title: "UniFi UNAS 4: Desktop NAS with Four Bays and NVMe Cache"
description: "The UNAS 4 brings four drive bays, NVMe SSD cache, and 2.5 Gigabit Ethernet in a compact enclosure. Who it is for and where the limitations are."
pubDate: 2026-03-24
lang: en
tags: ["UniFi", "UNAS", "NAS", "Storage", "Backup", "RAID"]
author: "Digital Runners"
---

## Four Bays, One Goal

Ubiquiti has released the UNAS 4, the new desktop NAS with four SATA bays. The predecessor UNAS 2 offered two bays, which was sufficient for simple backups but quickly hit its limits with RAID configurations. With four bays, RAID 5, RAID 6, and RAID 10 are now possible. Anyone wanting to store data redundantly has significantly more flexibility.

The device costs 379 USD and is aimed at home labs, small offices, and anyone already running UniFi hardware.

## Hardware in Detail

The UNAS 4 uses the same quad-core ARM Cortex-A55 at 1.7 GHz as the UNAS 2, along with 4 GB of RAM. The processing power is adequate for file shares and backups, but anyone expecting transcoding or demanding applications is looking at the wrong device. This is a data store, not a workstation.

What distinguishes the UNAS 4 from the UNAS 2, beyond the four SATA bays, is two M.2 NVMe slots. These can be used as SSD cache to deliver frequently accessed files faster. In an office with ten people regularly accessing the same project folders, the difference is noticeable.

Connectivity includes a 2.5 GbE RJ45 port, USB-C at 5 Gbps, and Bluetooth 4.1. The device can be powered via PoE+++, which eliminates the need for a separate power adapter if a compatible PoE switch is available. A small 1.47-inch display on the front shows the device status.

## Installing Drives: From Below

The bays are located on the bottom of the enclosure. To insert or swap a drive, you need to flip the device over. For a desktop NAS that is typically set up once and then left alone, this is not a major issue. Swapping a drive during operation, however, is more cumbersome than with a NAS that has front-accessible bays.

Both 2.5-inch and 3.5-inch SATA drives are supported. SSDs work in the SATA bays as well, though the NVMe slots are generally the better choice for caching.

## Software: UniFi Drive

The UNAS 4 runs UniFi Drive, Ubiquiti's own NAS software. No license fees, no subscriptions. Management is handled through the familiar UniFi dashboard. Anyone already managing switches, access points, or cameras through UniFi will feel right at home.

Drive 4.0 features include personal and shared drives, snapshots, file encryption, Time Machine backups for Macs, share links for individual files, and cloud backup to Google Drive, OneDrive, Dropbox, Amazon S3, Backblaze B2, or Wasabi.

Since version 4.0, Microsoft 365 OneDrive data can also be backed up locally, and iPhones can automatically transfer photos to the NAS.

## UNAS 4 vs. UNAS 2 vs. UNAS Pro 4

The UNAS 2 costs 199 USD and has two SATA bays without NVMe slots. It is sufficient for a simple backup or as a personal file store. RAID options are limited to RAID 1 (mirroring).

The UNAS 4 doubles the bays and adds NVMe cache. This enables RAID 5 and RAID 6, which with four drives offers significantly more safety and capacity.

The UNAS Pro 4 sits at 499 USD and targets rack mounting. It offers 10 GbE SFP+ ports instead of 2.5 GbE, supports hot-spare configurations, and suits environments where higher throughput is needed. If you do not run a 10 Gigabit network, you are paying the premium without a tangible benefit.

## Who Should Consider the UNAS 4?

Anyone already running a UniFi network with 2.5 Gigabit switches who needs local storage for backups, file shares, or Protect recordings gets a device that fits seamlessly into the ecosystem. Installation and management run through the same dashboard as the rest of the infrastructure.

If you only need two drives, the UNAS 2 is the more economical choice. If you have a 10 Gigabit network or need rack mounting, the UNAS Pro 4 is the way to go. The UNAS 4 sits right in between: more storage and redundancy than the entry-level model, without the Pro price tag.

One more thing: the device is currently only available in white and frequently sells out in the Ubiquiti Store. If you want one, enabling restock notifications is a good idea.
