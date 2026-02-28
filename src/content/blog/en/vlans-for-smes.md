---
title: "VLANs Explained Simply: Network Segmentation for Swiss SMEs"
description: "What is a VLAN, why does your business need one, and how do you set it up with UniFi? A practical explanation without the IT jargon."
pubDate: 2026-02-10
lang: en
tags: ["VLAN", "Network Security", "SME"]
author: "Digital Runners"
---

The term "VLAN" comes up regularly in IT discussions – but what does it actually mean, and why is network segmentation so important for Swiss SMEs? This article explains it in straightforward terms, without drowning in unnecessary jargon.

## What Is a VLAN?

VLAN stands for **Virtual Local Area Network**. The concept is simple: on a single physical network infrastructure (switches, access points, cabling), multiple logically separated networks operate as if they were physically distinct.

Think of a residential building: all apartments share the same structure, but each apartment has its own locked door. A VLAN works similarly – different network participants share the same hardware but cannot communicate with each other without authorisation.

## Why Does My Business Need VLANs?

### Security Through Separation

The most important argument for VLANs is **network security**. In a flat network without segmentation, any device can in principle communicate with any other. An infected device – such as a laptop carrying malware or a compromised IoT device – can spread across the entire network.

VLANs limit the potential damage: an attacker who gains access to the guest network cannot reach your business data.

### Compliance and Data Protection

Switzerland's revised Data Protection Act (revDSG) and the GDPR require that personal data is adequately protected. VLANs are a key building block for demonstrating data separation technically – for example, between patient records in a medical practice and the guest network.

### Performance Optimisation

A further benefit: VLANs reduce **broadcast traffic**. In large unsegmented networks, every device regularly sends broadcast packets to all others – which can noticeably impair network performance when many devices are connected. VLANs contain this traffic within each segment.

## Typical VLAN Structures for SMEs

### Office / Office Complex

```
VLAN 10 – Employees (laptops, desktops)
VLAN 20 – Guests / clients (separate WiFi, no internal access)
VLAN 30 – Printers and office equipment
VLAN 40 – IoT / smart devices (displays, cameras, door systems)
VLAN 50 – Servers and NAS
```

### Medical Practice / Healthcare

```
VLAN 10 – Medical workstations (practice software, PACS)
VLAN 20 – Staff (general use)
VLAN 30 – Patient WiFi (captive portal)
VLAN 40 – Medical devices (IoT, isolated for security)
```

### Hotel

```
VLAN 10 – Hotel software / PMS (Property Management System)
VLAN 20 – Staff (internal)
VLAN 30 – Guests (voucher system or portal)
VLAN 40 – Point of sale / POS systems
VLAN 50 – Surveillance cameras
```

## Setting Up VLANs with UniFi

With UniFi, VLAN configuration is intuitive and centrally managed through the **UniFi Network Controller**. For each VLAN you define:

1. **VLAN ID**: A number between 2 and 4094 that uniquely identifies the network segment
2. **IP subnet**: For example 192.168.10.0/24 for VLAN 10, 192.168.20.0/24 for VLAN 20
3. **DHCP server**: Each VLAN gets its own address range (optional)
4. **Firewall rules**: Which VLANs may communicate with each other, which may not?

UniFi switches tag traffic automatically on the appropriate ports, and access points support multiple SSIDs – one per VLAN. Employees connect to the internal WiFi, guests to the guest WiFi, cameras communicate within the IoT VLAN.

## Frequently Asked Questions

**"Will my employees notice the VLANs?"**
No. From a user perspective, nothing changes – you connect to WiFi or plug in a cable as normal. The segmentation runs entirely in the background.

**"Does this require expensive hardware?"**
Not necessarily. UniFi switches and access points support VLAN tagging even in entry-level models. The hardware you would already be deploying for a professional network can generally handle VLANs without issue.

**"What does setup cost?"**
It depends on the complexity of your infrastructure. For a small office, a sensible VLAN structure can be configured quickly – for larger environments with multiple sites, more planning is required.

## Conclusion

VLANs are not a luxury for large corporations – they are a practical security measure for any business that wants to protect its data. With UniFi, even complex network structures are centrally and clearly managed, without needing an in-house IT department.

---

*We plan and configure VLANs for SMEs of all sizes. [Contact us](/en/kontakt) for a free initial consultation.*
