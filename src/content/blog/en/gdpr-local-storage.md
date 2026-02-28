---
title: "GDPR and Networking: Why Local Storage Beats Cloud Solutions"
description: "Cloud services are convenient – but uncritical adoption carries significant data protection risks. Why local storage with UniFi Drive is the better choice for businesses."
pubDate: 2026-02-24
lang: en
tags: ["GDPR", "Data Protection", "UniFi Drive"]
author: "Digital Runners"
---

"Everything in the cloud" sounds modern and practical – and for many applications, it is. But when it comes to business data subject to Switzerland's Data Protection Act (revDSG) or the EU's General Data Protection Regulation (GDPR), a closer look is warranted. Not everything stored in the cloud is stored securely and in compliance with the law.

## The Problem with Cloud Storage Services

### Server Location and Data Sovereignty

When you store data with a cloud provider, it physically resides on servers – somewhere in the world. Many popular cloud services (Google Drive, Microsoft OneDrive, Dropbox) operate their infrastructure primarily in the United States. This means your data may be subject to the US **CLOUD Act**, which allows US authorities to access stored data under certain circumstances – even without your knowledge.

For Swiss businesses processing personal data belonging to their customers, clients or patients, this is not a theoretical concern – it is a real compliance risk.

### Provider Dependency

Cloud services can change their pricing, remove features or in the worst case shut down entirely. A business that stores all its company data with a third-party provider gives away some control. What happens to your data if the provider discontinues the product or is acquired by another company?

### Security Vulnerabilities from External Attack Surfaces

Cloud services are attractive targets for cybercriminals. Major providers are regularly attacked – and even with strong security architecture, some residual risk remains. Businesses running local network storage significantly reduce their attack surface: a system that is not directly accessible from the internet cannot be directly attacked from the internet.

## What Do the GDPR and revDSG Actually Require?

Both the GDPR and Switzerland's revised Data Protection Act require that:

1. **Personal data is stored only for the specified purpose**
2. **Storage is secure and protected from unauthorised access**
3. **Third-party providers (data processors) are contractually bound to the same data protection standards**
4. **Adequate safeguards exist for transfers to third countries**

The last point is particularly sensitive with US cloud services. EU law does recognise the **Data Privacy Framework** (successor to Privacy Shield), but its long-term stability continues to be questioned.

**Local storage sidesteps this problem entirely**: data that never leaves the building is subject only to national law.

## UniFi Drive: Local NAS within the UniFi Ecosystem

**UniFi Drive** (UNAS – UniFi Network Attached Storage) is Ubiquiti's answer to the need for local, manageable storage infrastructure. The key advantage: it is administered directly within the UniFi Controller – the same interface you use for your network, cameras and access control.

### What UniFi Drive Offers

- **Local file storage**: Shared network folders for the entire team (SMB/NFS protocol), compatible with Windows, macOS and Linux
- **Backup target**: UniFi Drive can be configured as a local backup destination for workstations and servers
- **Extended storage for UniFi Protect**: Camera recordings can be stored directly on UniFi Drive – more capacity without upgrading the NVR
- **RAID configuration**: Redundant drives (RAID 1, 5, 6) protect against data loss in the event of a drive failure
- **Management within UniFi Controller**: No separate NAS operating system, no additional management interface to learn

### The UNAS Pro – Current Hardware

The **UNAS Pro** from Ubiquiti offers 7 drive bays for 3.5" HDDs or 2.5" SSDs, two 10GbE network ports for fast transfer rates, and is designed for continuous operation in a server rack or as a desktop unit.

## Hybrid Approaches: Combining Local and Cloud

Local storage doesn't mean abandoning cloud services entirely. A sensible hybrid approach looks like this:

1. **Sensitive data** (customer records, contracts, patient files, accounting) → stored locally on UniFi Drive
2. **Collaboration tools** (project management, communication) → cloud services with EU-based servers
3. **Backups** → local NAS + encrypted off-site backup in a Swiss data centre

This model maximises control over critical data without sacrificing the benefits of modern cloud collaboration.

## Conclusion

"Cloud first" is not a strategy that applies to all data. Businesses that process personal data and need to remain compliant with GDPR or revDSG should critically examine where and how data is stored. Local storage with UniFi Drive offers maximum data control, GDPR-compliant data handling and seamless integration into existing UniFi infrastructure – without the complexity of a separate NAS system.

---

*We advise Swiss businesses on privacy-compliant network infrastructure and set up UniFi Drive. [Get in touch](/en/kontakt) for a consultation.*
