---
title: "UniFi Access Bolt Lock: Fail-Secure and Fail-Safe Door Lock for Professional Access Control"
description: "Ubiquiti expands the UniFi Access lineup with two new Bolt Locks. The electromagnetic bolt locks come in fail-secure and fail-safe variants for wood and metal doors. Starting at 99 USD."
pubDate: 2026-03-23
lang: en
tags: ["UniFi", "UniFi Access", "Bolt Lock", "Access Control", "Door Lock", "Fail-Secure", "Fail-Safe", "Ubiquiti"]
author: "Digital Runners"
---

## New Locks for UniFi Access

Ubiquiti has introduced two new Bolt Locks for the UniFi Access system. These electromagnetic bolt locks complement the existing Strike Locks and Electric Locks, offering another way to integrate doors into the UniFi access control system.

A Bolt Lock uses a solenoid that electromagnetically extends or retracts a metal bolt. When a signal comes from the UniFi Access Hub, the bolt retracts and the door can be opened. Without a signal, the bolt stays in its resting position. Which resting position that is depends on whether you choose the fail-secure or fail-safe variant.

## Fail-Secure vs. Fail-Safe: The Key Difference

The two models differ in their behavior during a power outage, and this is the most important decision when planning:

**Fail-Secure (UACC-Lock-Bolt-Secure):** During a power outage, the door stays locked. The bolt only retracts when power is applied. This variant is suited for areas where security takes priority -- server rooms, storage areas with valuable inventory, or other restricted-access zones.

**Fail-Safe (UACC-Lock-Bolt-Safe):** During a power outage, the door automatically unlocks. The bolt is held in the locked position by continuous power. When power fails, the bolt retracts and the door can be opened. This variant is required for escape routes and emergency exits, ensuring people can always leave the building.

## Technical Specifications

Both models share the same housing design and dimensions:

- Housing: 132 x 30 x 42 mm, aluminum alloy
- Door frame plate: 82 x 32 x 3 mm
- Door plate: 204 x 33 x 3 mm
- Housing weight: 350 g
- Suitable for single wood and metal doors
- Integrated door position sensor

Power consumption differs between the two variants. The fail-secure model draws about 12 mA in standby and around 600 mA during active operation. The fail-safe model requires about 110 mA in standby and up to 1000 mA dynamically, because it needs continuous power to hold the bolt in the locked position.

## Installation and Mounting

The Bolt Locks are recessed into the door frame. Depending on the frame material (wood or metal) and lock size, Ubiquiti provides four different installation templates.

For different door types and opening directions, there are matching mounting options:

- Flush-mounted in the frame (standard for wooden frames)
- L-bracket for outward-opening doors with narrow frames
- U-bracket for outward-opening glass doors
- LZ-bracket for inward-opening doors

Wiring runs to the UniFi Access Hub, which can be up to 150 meters away (with 18-AWG cable). The Hub controls the lock and manages all access logic.

## Integration with the UniFi Access System

The Bolt Locks are part of the UniFi Access ecosystem and are controlled through the Access Hub. At a minimum, you need:

- A UniFi Console (Cloud Gateway, Dream Machine, or equivalent) with the UniFi Access application installed
- A UniFi Access Hub as the controller
- A UniFi Access Reader (e.g., Access Reader G2, G6 Entry, or Retrofit Reader) as the input device

Door unlocking can then happen through various methods: NFC cards, Apple Wallet, Google Wallet, facial recognition, Mobile Unlock via the app, PIN code, or TouchPass. Which methods are available depends on the reader being used.

Communication between the Hub and Reader is secured with 128-bit NaCl encryption. For enhanced security, two-factor authentication can be enabled, requiring two different methods to be confirmed within a configurable time window.

## Pricing and Availability

Both Bolt Lock models are listed in the Ubiquiti Store:

- **Fail-Secure Bolt Lock (UACC-Lock-Bolt-Secure):** 99 USD
- **Fail-Safe Bolt Lock (UACC-Lock-Bolt-Safe):** 99 USD

This puts the Bolt Locks in the same price range as the existing Strike Locks. If you already have an Access Hub and Reader in place, you just need to add the appropriate lock.

## Bolt Lock, Strike Lock, or Electric Lock?

With the new Bolt Locks, Ubiquiti now offers three different lock types for UniFi Access. The choice depends on the installation situation and requirements:

**Bolt Lock** is best suited for doors where the bolt extends into the door frame and latches in place. Typical for interior and exterior doors in office buildings, server rooms, or warehouses.

**Strike Lock** replaces the classic mechanical door release and is built into the frame. Well suited for standard doors with an existing lock that should be supplemented with an electronic release.

**Electric Lock** is a mortise lock with an integrated bolt and latch. It provides the highest mechanical security but requires a cutout in the door itself.

## Conclusion

The new Bolt Locks fill a gap in the UniFi Access lineup. For anyone building or expanding their access control with Ubiquiti, there is now another lock type that can be flexibly deployed depending on the door and security requirements. At around 99 USD per lock, the entry point remains affordable -- provided you already have the necessary infrastructure of console, Access Hub, and Reader in place.
