---
title: "Visitor Counting with UniFi Protect: People Counting for Stores"
description: "How to build a scalable people counting system with UniFi Protect, AI Port, and Line Crossing for your retail locations."
pubDate: 2026-01-29
lang: en
tags: ["UniFi Protect", "People Counting", "Retail", "AI Port", "Visitor Counting"]
author: "Digital Runners"
draft: true
---


### Visitor Counting with UniFi Protect: How to Build a Scalable People Counting System for Your Stores

Running your stores professionally requires more than gut feeling: How many people visit each store every day? What are the peak hours? And how does foot traffic correlate with revenue, weather, or marketing campaigns?

Traditional people counting solutions are often expensive, proprietary, and require specialized hardware. If you are already using UniFi or need a camera system anyway, you can build a remarkably capable visitor counting setup with **UniFi Protect** today – including:

- **Person counting per entrance** via virtual lines (Line Crossing / Line Cross Counting)
- **IN/OUT direction** to determine net visitors or occupancy
- **Centralized analysis** via webhooks, Home Assistant, or custom backends

This article covers in detail:

1. How people counting with UniFi Protect works in principle
2. How to **upgrade non-AI cameras** with a **UniFi AI Port**
3. What **architecture** works best for multiple stores
4. How much **time** the initial setup per entrance realistically takes

***

## 1. Why UniFi Protect Is Compelling for Visitor Counting

UniFi Protect is primarily a video surveillance platform, but recent releases have massively expanded its AI capabilities:

- Object detection (person, vehicle, animal)
- Face recognition and license plate recognition on supported hardware
- **Line Crossing** and **Line Cross Counting** to detect and count crossings of virtual lines

This lets you model a typical retail scenario:

- Camera above the entrance
- Virtual line right at the door threshold
- UniFi Protect detects: "A person is crossing this line from outside to inside" and increments a counter.

The key advantage: this works not only with the latest AI cameras but also with older UniFi cameras and even third-party ONVIF cameras, thanks to the **UniFi AI Port**.

***

## 2. How It Works: People Counting with Line Crossing

### 2.1. Virtual Lines Instead of Dedicated 3D Sensors

UniFi Protect does not use dedicated 3D people counting sensors. Instead, it relies on:

- The camera feed
- AI models that detect **persons** (object class "Person")
- One or more virtual lines in the frame (crossing lines)

Whenever a detected person crosses this line in a specific direction, an event is generated:

- **Direction A→B**: e.g., "Entry"
- **Direction B→A**: e.g., "Exit"

With **Line Cross Counting**, a counter is also maintained that sums up these events.

### 2.2. What Is Possible and What Is Not?

**Well suited for:**

- Visitor counts per day / week / month
- Comparing store locations
- Peak hours (hourly or half-hourly buckets)
- Rough occupancy trends (IN minus OUT)

**Limitations:**

- In very dense crowds or when people occlude each other, counting accuracy can suffer.
- Strong reflections, backlight, or poor night vision degrade detection.
- The built-in counting function in Protect only offers limited history and (as of today) no full CSV export – for serious BI reports, you need webhooks or API integrations.

For many retail use cases, this accuracy is already more than sufficient – especially compared to the effort of deploying dedicated counting systems.

***

## 3. AI for Older Cameras Too: UniFi AI Port

Not everyone wants to replace all cameras with the latest G6/AI series. This is where the **UniFi AI Port** comes in.

### 3.1. What the AI Port Does

The UniFi AI Port is a small network device that analyzes video streams and **adds AI capabilities to otherwise "dumb" cameras**:

- Supports **G3/G4/G5 UniFi cameras** and **ONVIF cameras** from third-party manufacturers
- Adds AI features like person detection, license plate recognition, and face recognition to these cameras
- Unlocks **Line Crossing** and **Line Cross Counting** for these cameras in Protect

In Ubiquiti's feature matrix, the summary is:

- **G6 / AI cameras**: AI + Line Crossing + Line Cross Counting out of the box
- **G5/G4/G3 / ONVIF**: AI, Line Crossing & Line Cross Counting **via AI Port**
- **PTZ cameras**: Line Crossing / Counting currently not available

Newer Protect versions also allow multiple cameras to run on a single AI Port (capacity depends on resolution and frame rate).

### 3.2. What This Means for Your Project

This lets you:

- Upgrade existing UniFi installations without buying new AI cameras across the board
- Use high-quality ONVIF cameras in outdoor areas (e.g., existing dome/bullet cams) for visitor counting
- Migrate gradually: retrofit AI Ports first, then optionally switch to native AI cameras later

Especially for multi-location setups with existing camera infrastructure, this is economically attractive.

***

## 4. Architecture for a Store Network

### 4.1. Option A: Centralized UniFi Instance

- One central UniFi OS appliance (e.g., UNVR Pro, Cloud Gateway Pro) at headquarters
- All branch locations as separate **sites** in UniFi
- Cameras/AI Ports in the branches connect to headquarters via VPN/SD-WAN

**Advantages:**

- Uniform configuration and updates
- Central management & monitoring
- Simple, centralized alarm and webhook setup

**Disadvantages:**

- Site-to-site networking is mandatory
- Dependency on headquarters during connectivity outages

### 4.2. Option B: Dedicated NVR per Branch, Central Analytics Server

- Each branch runs, e.g., a UNVR or UDM SE with Protect
- Each instance sends **webhooks** to a central analytics server
- Branch independence is preserved; only an outbound HTTPS channel is needed

**Advantages:**

- Local resilience (stores keep running during HQ outages)
- No permanent VPN tunnel required
- Tenant separation (important for complex organizational structures)

For a growing retail network, Option B is often more comfortable, especially when local UniFi infrastructure already exists.

***

## 5. Step by Step: One Entrance in UniFi Protect

Assuming the **hardware is installed**: camera mounted, cabled, AI Port (if needed) connected, and UniFi Protect is running.

### 5.1. Adopt Camera & AI Port in Protect

1. Open UniFi Protect, device overview
2. Camera(s) and AI Port appear under "Unadopted"
3. Adopt both and update firmware if necessary
4. For non-AI cameras: link the camera with the AI Port in the AI Port settings

**Time required:** approx. 5-10 minutes per camera (assuming the network is properly configured).

### 5.2. Check Field of View and Position

1. Open the entrance camera's live view
2. Ensure the entire door area is fully visible
3. Make sure customers pass through the door **perpendicular** to the planned line, not diagonally at the edge of the frame
4. Test night mode (lighting conditions, IR reflections, etc.)

**Time required:** 5-10 minutes per camera (one-time fine-tuning).

### 5.3. Configure Line Crossing / Line Cross Counting

1. In Protect: Camera → Settings (gear icon) → **Recording** tab
2. Enable **Crossing Line** section
3. Draw the line in the frame:
   - Across the door threshold
   - So that no one can bypass it
4. Select detection object:
   - **Person** only, no vehicles/animals for this scenario
5. Define direction:
   - A→B = "ENTRY"
   - B→A = "EXIT"
6. If available: enable **Line Cross Counting** and configure daily reset (e.g., midnight).
7. Quick test: walk through the door 2-3 times yourself and verify the counter responds correctly.

**Time required:** 10-20 minutes per entrance.

At this point, visitor counting is essentially functional – Protect shows the number of crossings (e.g., per day) for the camera.

***

## 6. From Camera to Dashboard: Alarm Manager & Webhooks

If you want to work seriously with the data (BI, reporting, conversion rate), you need **structured data export**. This is where the **UniFi Alarm Manager** comes in.

### 6.1. Create an Alarm in Alarm Manager

1. In UniFi Protect → open "Alarm Manager"
2. **Create new alarm**, e.g., "Store_A_Entrance_IN"
3. **Define trigger**:
   - Type: "Activity" or "Line Crossing"
   - Scope: select the relevant camera + specific line
   - Schedule: e.g., business hours, if you only want to count during those times

### 6.2. Action: Configure Webhook

1. In the alarm workflow: Action → **Webhook**
2. Select "Custom Webhook" mode
3. Enter the target URL, e.g.,
   `https://analytics.yourdomain.tld/unifi/protect/linecross`
4. Set HTTP method to **POST**
5. Either use the standard Protect payload or define a custom JSON (depending on your Protect version). Ubiquiti's documentation describes the webhook event format.

**Time required:** 5-15 minutes per alarm (i.e., per entrance / direction if you count IN and OUT separately).

### 6.3. Processing in Backend / Home Assistant

You still need a system that receives and processes these POST requests:

- **Home Assistant option**:
  - Set up a **webhook trigger** in HA
  - In the automation, increment the visitor counter (helper) for the corresponding store/entrance
  - Optional storage in InfluxDB, SQLite, Postgres, etc.

- **Custom backend option**:
  - A small web service (Node.js, Python, Go, etc.) that:
    - Reads the alarm name or camera ID
    - Extracts `store_id`, `entrance_id`, direction, and timestamp from the payload
    - Writes the event to a database (e.g., Postgres, BigQuery)
  - From there, you can build dashboards in Power BI, Grafana, or Looker Studio.

**Important:**
This backend setup is a **one-time project effort**. For each additional entrance, you typically only need to:

- Create a new Line Crossing rule on the camera
- Configure a (potentially cloned) alarm in the Alarm Manager
- Add a mapping for the new camera/alarm in the backend.

***

## 7. When to Use a Dedicated People Counting System Instead

Despite the many advantages, there are scenarios where a traditional people counting system makes more sense:

- Legally binding, certified visitor counts (e.g., for lease agreements, safety regulations)
- Extremely high foot traffic through very narrow passages
- Complex multi-zone analyses (e.g., in-store heatmaps, dwell time in aisles)

Many of these systems use depth sensors or stereo-optical methods to accurately distinguish individuals even in heavy crowds. However, they are typically much more expensive and less flexible than a camera-based solution built on UniFi Protect.

For **marketing and operations use cases** (conversion, staffing, campaign evaluation), the UniFi solution is sufficient in most cases – especially if you are already invested in this ecosystem.

***

## 8. Conclusion

With UniFi Protect, AI-capable cameras, or the UniFi AI Port, you can build a **scalable, cost-effective people counting system**:

- You leverage existing or easily sourced hardware
- Line Crossing / Line Cross Counting gives you solid visitor counting per entrance
- Via the Alarm Manager and webhooks, you integrate everything into your existing analytics ecosystem
- The additional **time per entrance** is approximately **30-40 minutes** once the base architecture is in place

For a large store network, this is extremely attractive: the initial design and backend implementation takes some thought, but after that, each new location can be set up largely by following a recipe.

If you'd like, the next step could be turning this into a concrete rollout plan: e.g., "10 stores with 2 entrances each, central UNVR at headquarters, AI Ports where needed, data model + sample dashboard (conversion vs. revenue)."
