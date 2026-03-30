---
title: "UniFi Drive 4.0: Back Up Microsoft 365 and iPhone Photos Locally"
description: "UniFi Drive 4.0 lets you automatically back up Microsoft 365 OneDrive data and iPhone photos to your own UNAS. What the update brings and where the limitations are."
pubDate: 2026-03-10
lang: en
tags: ["UniFi", "UNAS", "Backup", "Microsoft 365", "NAS", "iPhone", "Cloud"]
author: "Digital Runners"
---

## What Is New?

Ubiquiti released UniFi Drive 4.0 (version 4.0.12) in mid-February. The update transforms the existing NAS software into a backup platform. The key additions: Microsoft 365 OneDrive can now be backed up locally, iPhones can automatically store photos on the UNAS, and a drive health monitor warns about failing disks.

If you have a UNAS device deployed, the update is available through UniFi OS 4.4.11 or later.

## Backing Up Microsoft 365 OneDrive

You can now back up Microsoft 365 OneDrive data locally to the UNAS. Specifically, this covers business and education accounts managed through Microsoft Entra ID. Personal OneDrive accounts (i.e., personal outlook.com subscriptions) are not currently supported.

The idea behind it: your cloud data sits with Microsoft, but you have no control over what happens during a ransomware attack, an accidental deletion, or a compromised account. With Drive 4.0, a local copy of your OneDrive data is stored on your own hardware. Multi-version backups are possible, so files can be restored from a specific point in time.

Important: Microsoft 365 support is currently limited to OneDrive. SharePoint and Exchange are planned but not yet available. Restoration currently runs through the administrator only. A self-service option for end users is still missing.

## Automatic iPhone Photo and Video Backup

iPhones and iPads can now automatically store their photos and videos on the UNAS. This requires the free UniFi Endpoint app. No additional licenses, no subscription fees.

The app copies images in the background directly to the personal drive on the UNAS. No iCloud, no Google Photos, no third parties. The data stays within your own network.

There is one catch: Apple restricts background processes. The app needs to be manually opened occasionally to keep the synchronization running. Forget to do so, and you will have gaps in your backup.

## Drive Health Monitor

The new Health Monitor shows the status of HDDs and SSDs in real time. S.M.A.R.T. data is evaluated, temperatures are monitored, and errors are flagged before a drive fails completely.

On top of that, there are extended audit logs. Every file operation is logged: uploads, downloads, copies, moves to trash, and permanent deletions. For businesses that need accountability, this is a useful feature.

## What Hardware Is Required?

UniFi Drive 4.0 runs on Ubiquiti's UNAS devices. Currently available:

- UNAS Pro (7 bays, SFP+, approx. 499 USD)
- UNAS Pro 8 (8 bays, SFP+ and RJ45, approx. 799 USD)

Additionally announced are the UNAS 4 (approx. 379 USD) and the UNAS Pro 4 (approx. 499 USD) with NVMe caching.

Important to know: for remote access via the UniFi Endpoint app, you need a UniFi Cloud Gateway on your network (for example, UDM Pro, Dream Router 7, or Cloud Gateway Max). The UNAS alone is not enough.

## Where Are the Limitations?

Drive 4.0 is more capable than before but is not a Synology replacement. Some limitations:

The Microsoft 365 backup covers OneDrive only. If you need to back up SharePoint or Exchange, you still need a different solution. Docker and containers do not run on the UNAS. If you want VMs or custom apps on your NAS, Synology or QNAP are better options. The UNAS hardware runs on ARM processors without ECC RAM. This is fine for file sharing and backups, but there is no bit-rot protection like BTRFS or ZFS with ECC provides.

That said, if you already run a UniFi network, Drive 4.0 gives you a backup solution that integrates directly into your existing management. No separate admin interface, no additional licenses.

## Conclusion

With Drive 4.0, the UNAS becomes significantly more useful than it was six months ago. Especially for small offices and SMBs that want to back up OneDrive data and iPhone photos without a cloud subscription, it fits well.

However, if you need containers, VMs, or complete M365 coverage, Drive 4.0 alone will not get you far. In that case, a Synology or QNAP remains the safer choice.
