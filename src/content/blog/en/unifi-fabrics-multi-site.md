---
title: "UniFi Fabrics: Centralized Multi-Site Management, Access Control, and Configuration"
description: "UniFi Fabrics bundles multiple sites into a shared management layer. WiFi configurations, access control, and user management can be centrally orchestrated -- all without license fees."
pubDate: 2026-03-18
lang: en
tags: ["UniFi", "Fabrics", "Multi-Site", "MSP", "Access Control", "Identity", "Ubiquiti"]
author: "Digital Runners"
---

## Multiple Sites, One Problem

Anyone managing more than one UniFi site knows the drill: create the same WiFi configuration across three sites, maintain users in duplicate, set up access control separately at each location. With two sites, it is manageable. With ten, it becomes tedious busywork.

This is exactly where UniFi Fabrics comes in. Ubiquiti has introduced a new management layer within Site Manager that groups multiple sites under a shared umbrella. Fabrics is currently available in Early Access and can be activated through unifi.ui.com.

## What Is a Fabric?

A Fabric is essentially a group of UniFi sites that are managed together. You select which sites belong to the Fabric and get a higher-level interface for controlling configurations, users, and policies across locations.

The entire system runs through Site Manager and requires no additional licenses. That is a relevant point, since comparable solutions from other vendors quickly add up in cost.

## User Management via Identity Provider

Under "Consolidated People Management," you can connect an external identity provider. Supported options include Google Workspace, Microsoft Entra (formerly Azure AD), JumpCloud, Active Directory, and LDAP.

Once connected, users are synchronized centrally. An Identity Sync Service runs on the master site, aligning permissions across all sites within the Fabric. The master site is the primary gateway (such as a UDM Pro Max) that coordinates the synchronization.

For connectivity between sites, there are two options: manual port forwarding or using Ubiquiti's own relay service.

## Centralized WiFi Deployment

One of the most practical aspects: WiFi configurations can be created once and then pushed to all (or selected) sites in the Fabric. In a video, Cody from Mactelecom Networks demonstrated this with a guest WiFi network that he created centrally and distributed to two sites.

Once a network is distributed through the Fabric, it can no longer be edited locally at individual sites. A notice appears indicating that the configuration is centrally managed. This prevents someone on-site from making changes that would be overwritten at the next sync.

## Access Control Across Multiple Sites

For anyone using UniFi Access, this is likely the most compelling feature. Through Fabrics, door access policies can be managed across sites. You can create custom roles (e.g., "Door Guardian"), restrict them to specific sites, and control access to individual doors.

There is also a new capability in the UniFi Identity app: Remote Unlock. Previously, you had to be within Bluetooth range to open a door via the app. Through Fabrics, this now works remotely. In the Identity Endpoint app, a user can see all doors they have access to, even if those doors are at different locations.

For MSPs managing multiple clients with UniFi Access, this is a genuine time saver.

## Physical Security and Protect

Beyond access control, Fabrics also brings physical security (cameras) into centralized management. In the demonstrated setup, both UDM Pro Max sites and a UNVR Pro were part of the Fabric, allowing Protect surveillance to be monitored across sites as well.

## What Is Coming Next

Several features are still marked as "Coming Soon." These include Device Templates for automated device configuration and zero-touch provisioning, a centralized client overview across all sites, a System Log, the Update Manager, and an Alarm Manager for centralized cross-site alarm management.

## Conclusion

UniFi Fabrics solves a concrete problem: the cumbersome management of multiple sites. Instead of applying the same settings individually at each location, you define them once and distribute. The integration of access control across sites was long overdue, and the fact that it comes without license fees makes it attractive even for smaller MSP setups.

Fabrics is still in the Early Access phase but already runs stably according to the walkthrough from Mactelecom Networks. If you manage multiple UniFi sites, it is worth a look.
