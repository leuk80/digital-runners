---
title: "UniFi Protect 7.0: Firmware Rollback, Tag Manager, and Custom Layouts"
description: "UniFi Protect 7.0 introduces firmware rollback, custom camera layouts, Tag Manager, motion paths, and image-based search. All new features and bug fixes at a glance."
pubDate: 2026-03-09
lang: en
tags: ["UniFi Protect", "Ubiquiti", "Firmware Update", "AI Key", "Smart Home"]
author: "Digital Runners"
---

### UniFi Protect 7.0: Firmware Rollback, Tag Manager, and Custom Layouts Overview

Ubiquiti has released UniFi Protect 7.0, a major update that brings several long-requested features. The current version 7.0.73 is in release candidate status and includes new features alongside various bug fixes. We took a closer look at the update and summarize what has changed.

***

## 1. Firmware Rollback: Finally Available

Arguably the most important new feature for many admins: UniFi Protect now displays the current firmware version in the left panel next to the oldest recording. Right next to it, there is a new button that lets you restore the previous firmware version.

If you run into issues after an update or accidentally upgraded, you can simply roll back to the previous version. The [G5 Turret Ultra](/en/blog/g5-turret-ultra-camera-review) benefits from this as well. Optionally, you can send a support file to Ubiquiti to help with troubleshooting, but this can also be declined. The version you are rolling back to is clearly displayed.

Hopefully, Ubiquiti will bring this rollback feature to other UniFi applications soon.

***

## 2. Dashboard: Real-Time Bitrate and AI Monitoring

The dashboard now includes a **real-time bitrate** display. At a glance, you can see how much bandwidth your cameras are currently using – in the test video by Mactelecom Networks, the value was around 25 to 35 Mbit/s.

If you have an **AI Key** deployed, you also get edge AI latency displayed. This includes:

- Processed detections and average latency values
- **Object Indexing** (in the test: 5,663 objects in 24 hours)
- **AI Summary**, **Speech-to-Text**, **LPR**, and **Face ID** for legacy cameras
- CPU utilization of the AI Key (only 5% in the test)

Individual AI services can also be selectively disabled if needed – for example, LPR for legacy cameras if you don't use it.

***

## 3. Custom Camera Layouts

The camera view in the dashboard can now be freely customized. Cameras can be moved to the desired position via **drag and drop**. If you prefer your doorbell camera on the right instead of the left, just drag it over and save the layout.

There is also an **auto-arrange function** that suggests an automatic layout. And if you need different views, you can create multiple **multi-views** using the three icons – for example, for different floors or building areas.

***

## 4. Tag Manager: Grouping Cameras

Under "Devices," there is now a **Tag Manager**. It lets you organize cameras into logical groups. For example, a tag called "Front of House" for all cameras at the front of the building.

The practical benefit: These tags also appear in **Find Anything** search. Instead of scrolling through all cameras, you simply select the relevant tag and see only the matching recordings. For larger installations with many cameras, this is a real time-saver.

***

## 5. Motion Paths in Playback

When playing back recordings, you can now display a **motion path**. Under "Object Overlay," there is a new "Path" option that shows the route of detected persons as a blue line with directional arrows.

This can be helpful when you want to trace the path someone took – for example, if something went missing from the garden and you want to see where a person went. PTZ cameras are excluded from this feature, however.

***

## 6. Image-Based Search in Find Anything

Find Anything now supports **image-based search**. You upload a photo and the system searches for similar persons in the recordings. You can set a confidence level: a high setting shows only very similar matches, while a lower setting also includes less precise results.

In the video test by Mactelecom Networks, a thumbnail image was uploaded and the system recognized the person both with and without a hat. This feature requires an **AI Key with the computer vision extension enabled**.

***

## 7. AI Policies and Offsite Archiving

In the new **Intelligence section**, there is now a flowchart that visualizes AI policies. It shows how cameras (both modern AI cameras and legacy cameras via LPR) are integrated into the AI pipeline and how alerts and notifications are generated from there.

**Offsite archiving** has also received a visual representation. The data flow from camera through on-site storage (e.g., [UDM Pro Max](/en/blog/udm-pro-max-vs-ucg-max) or UMVR) to cloud services like Google Drive, OneDrive, Dropbox, or a NAS is clearly illustrated. According to the display, "Continuous Recording Scheduled Uploads" is still a work-in-progress feature.

***

## 8. Bug Fixes in Version 7.0.73

The current version 7.0.73 addresses several specific issues:

- **Third-party cameras** now reconnect correctly after an IP change
- **Third-party cameras** resume recording after a system interruption
- **Motion events** from third-party cameras with AI Port are processed correctly again
- The **temperature slider** in the Safe Zone now shows the correct limits when Fahrenheit is selected
- The **capacity bar** now correctly reflects actual camera usage
- **Canceling a delayed arming countdown** now actually stops the process instead of continuing in the background

The last point in particular was a potential security issue: anyone who canceled the alarm countdown could be lulled into a false sense of security because the system armed itself anyway.

***

## 9. Requirements

UniFi Protect 7.0 requires **UniFi OS 5.1.0** or newer. If you are still running an older OS version, you need to update that first.

***

## 10. Conclusion

UniFi Protect 7.0 is a solid update. The firmware rollback feature alone makes the upgrade worthwhile because it provides a safety net for problematic updates. Tag Manager and Custom Layouts make daily use more convenient, especially for larger installations. And motion paths along with image-based search noticeably expand the analysis capabilities.

Version 7.0.73 is currently still a release candidate. If you want to play it safe, wait for the final GA release. Everyone else can install the update via the dashboard.

***

*Sources: [UniFi Protect 7.0.73 Release Notes](https://community.ui.com/releases/UniFi-Protect-Application-7-0-73/128d7f05-7605-4cd2-8b28-659439be1418) | Video: [Mactelecom Networks – UniFi Protect 7](https://www.youtube.com/watch?v=Eq0u-GnEr4I)*

---

*Have questions about UniFi Protect? [Get in touch](/en/kontakt) for a free initial consultation.*
