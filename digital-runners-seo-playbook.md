# Digital Runners SEO Fix Playbook — Claude Code

> **Projekt:** digital-runners.ch
> **Datum:** 30. März 2026
> **Ziel:** Indexierungsrate von 21% auf >80% bringen, kritische technische SEO-Probleme beheben
> **Kontext:** Google Search Console zeigt 75 nicht-indexierte von 95 bekannten Seiten

---

## Phase 0 — Discovery & Bestandsaufnahme

> Bevor du Änderungen machst: Tech-Stack und Projektstruktur verstehen.

### 0.1 Projektstruktur analysieren

```bash
# Repo-Root identifizieren und Struktur verstehen
find . -maxdepth 3 -type f \( -name "*.astro" -o -name "*.html" -o -name "*.njk" -o -name "*.jsx" -o -name "*.tsx" -o -name "*.vue" -o -name "*.svelte" -o -name "*.php" -o -name "*.md" -o -name "*.mdx" \) | head -50

# Framework erkennen
cat package.json 2>/dev/null | grep -E "astro|next|nuxt|gatsby|hugo|eleventy|svelte"

# Config-Dateien suchen
ls -la astro.config.* next.config.* nuxt.config.* vite.config.* webpack.config.* gatsby-config.* 2>/dev/null

# Deployment-Config finden
ls -la netlify.toml vercel.json wrangler.toml cloudflare.* _redirects _headers .htaccess nginx.conf 2>/dev/null
```

### 0.2 Aktuelle SEO-Infrastruktur prüfen

```bash
# Sitemap finden
find . -name "sitemap*" -type f 2>/dev/null

# robots.txt finden
find . -name "robots.txt" -type f 2>/dev/null

# Redirect-Konfiguration finden
grep -rl "redirect" --include="*.toml" --include="*.json" --include="*.yaml" --include="*.yml" --include="*.js" --include="*.ts" --include="*.conf" . 2>/dev/null | head -20

# Meta-Tags / Head-Konfiguration finden
grep -rl "noindex\|canonical\|hreflang\|og:title\|meta name" --include="*.astro" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.njk" --include="*.vue" . 2>/dev/null | head -20
```

### 0.3 Sprachstruktur verstehen

```bash
# /de/ Pfad und andere Sprachen suchen
find . -type d -name "de" -o -name "en" -o -name "fr" -o -name "it" 2>/dev/null

# i18n-Konfiguration suchen
grep -rl "i18n\|locale\|lang\|language" --include="*.config.*" --include="*.json" --include="*.yaml" . 2>/dev/null | head -10

# Sprachspezifische Routing-Logik
grep -rl "defaultLocale\|locales\|i18n" --include="*.ts" --include="*.js" --include="*.mjs" --include="*.astro" . 2>/dev/null | head -10
```

---

## Phase 1 — Kritische technische Fixes

> Diese Fixes haben den grössten sofortigen Impact auf die Indexierung.

### 1.1 Redirect-Bereinigung (www ↔ non-www ↔ /de/)

**Problem:** 13 Seiten als Weiterleitungen erkannt. Vermutlich www/non-www-Duplikate und /de/-Pfad-Varianten.

**Ziel:** EINE kanonische URL-Struktur. Da Google bereits `digital-runners.ch` (ohne www) indexiert → non-www als Standard.

**Umsetzung je nach Hosting:**

Falls **Cloudflare Pages / Workers:**
```toml
# In wrangler.toml oder _redirects:
# www → non-www (301)
https://www.digital-runners.ch/* https://digital-runners.ch/:splat 301

# Falls nur DE und kein Multilingual → Root direkt auf DE-Content
# ODER falls Multilingual: / → /de/ redirect
https://digital-runners.ch/ https://digital-runners.ch/de/ 301
```

Falls **Netlify:**
```toml
# netlify.toml
[[redirects]]
  from = "https://www.digital-runners.ch/*"
  to = "https://digital-runners.ch/:splat"
  status = 301
  force = true
```

Falls **Vercel / Next.js:**
```js
// next.config.js oder vercel.json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.digital-runners.ch" }],
      "destination": "https://digital-runners.ch/:path*",
      "permanent": true
    }
  ]
}
```

Falls **nginx / Apache:**
```nginx
# nginx
server {
    server_name www.digital-runners.ch;
    return 301 $scheme://digital-runners.ch$request_uri;
}
```

**Entscheidungslogik für /de/ Pfad:**
- Falls die Seite NUR auf Deutsch existiert → `/de/` Prefix entfernen, Content direkt unter Root ausliefern
- Falls Multilingual (DE + EN) → `/de/` behalten, aber korrekte `hreflang`-Tags setzen (siehe 1.4)

### 1.2 Bot-Blocking / 403-Problem beheben

**Problem:** Direkte HTTP-Anfragen geben 403 zurück. Möglicherweise betrifft das auch Googlebot.

**Prüfen:**
```bash
# Falls Cloudflare: WAF/Security-Regeln checken
# Suche nach Bot-Protection-Konfiguration
grep -rl "bot\|crawl\|user-agent\|firewall\|security" --include="*.toml" --include="*.json" --include="*.yaml" . 2>/dev/null

# Falls _headers Datei existiert (Cloudflare Pages / Netlify):
cat _headers 2>/dev/null
cat public/_headers 2>/dev/null
```

**Fix:** Falls Cloudflare als CDN:
- Im Cloudflare Dashboard: Security → WAF → "Bot Fight Mode" deaktivieren ODER Googlebot/Bingbot als "Verified Bot" erlauben
- Unter Security → Settings: Challenge-Modus für Suchmaschinen-Bots ausnehmen
- Alternativ: Custom Rule erstellen die bekannte Bot-User-Agents durchlässt

### 1.3 robots.txt erstellen/korrigieren

**Ziel-robots.txt:**
```
User-agent: *
Allow: /

# Keine Blockierungen für wichtige Pfade
# Admin/API-Pfade blockieren falls vorhanden
Disallow: /api/
Disallow: /admin/
Disallow: /_astro/   # oder je nach Framework

Sitemap: https://digital-runners.ch/sitemap.xml
```

**Erstellen oder überschreiben:**
```bash
# Finde den richtigen Ort für static files
# Astro: public/robots.txt
# Next.js: public/robots.txt
# Hugo: static/robots.txt
# Netlify: public/robots.txt oder Root

# Erstelle robots.txt am richtigen Ort
cat > public/robots.txt << 'EOF'
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://digital-runners.ch/sitemap.xml
EOF
```

### 1.4 Sitemap bereinigen

**Prinzip:** Die Sitemap darf NUR kanonische, indexierbare URLs enthalten. Keine Redirects, keine noindex-Seiten, keine 404s.

```bash
# Aktuelle Sitemap finden und analysieren
find . -name "sitemap*" -type f
cat <sitemap-pfad>

# Prüfen ob Sitemap automatisch generiert wird (z.B. @astrojs/sitemap)
grep -r "sitemap" package.json 2>/dev/null
```

**Falls automatisch generiert (empfohlen):** Die Sitemap-Config anpassen, um Redirect-URLs und noindex-Seiten auszuschliessen:

Falls **Astro:**
```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://digital-runners.ch',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/admin/'),
      // Nur kanonische URLs
    }),
  ],
});
```

**Manuelle Sitemap-Hygiene — diese URLs müssen RAUS:**
- Alle `www.digital-runners.ch`-Varianten
- Alle URLs die auf einen Redirect zeigen
- Die 2 noindex-Seiten (nach Identifikation)
- Die 2 404-URLs (nach Identifikation)

### 1.5 Canonical-Tags auf jeder Seite setzen

**Jede Seite braucht ein `<link rel="canonical">`** das auf die kanonische URL zeigt.

```bash
# Prüfe ob bereits Canonical-Tags gesetzt sind
grep -r "canonical" --include="*.astro" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.njk" . 2>/dev/null
```

**Implementierung in der Layout-Komponente:**

Falls **Astro:**
```astro
---
// src/layouts/BaseLayout.astro
const canonicalURL = new URL(Astro.url.pathname, 'https://digital-runners.ch');
---
<head>
  <link rel="canonical" href={canonicalURL.href} />
  <!-- Falls Multilingual: hreflang -->
  <link rel="alternate" hreflang="de" href={canonicalURL.href} />
  <link rel="alternate" hreflang="x-default" href={canonicalURL.href} />
</head>
```

Falls **Next.js:**
```tsx
// In _app.tsx oder layout.tsx (App Router)
import Head from 'next/head';

<Head>
  <link rel="canonical" href={`https://digital-runners.ch${router.asPath}`} />
</Head>
```

### 1.6 noindex-Seiten identifizieren und korrigieren

```bash
# Alle noindex-Tags im Projekt finden
grep -rn "noindex" --include="*.astro" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.njk" --include="*.vue" . 2>/dev/null

# Meta-Robots-Tags finden
grep -rn "robots" --include="*.astro" --include="*.html" --include="*.jsx" --include="*.tsx" . 2>/dev/null
```

**Entscheidung für jede noindex-Seite:**
- Soll indexiert werden → `noindex` entfernen
- Soll NICHT indexiert werden (z.B. Danke-Seite, Impressum-Draft) → noindex behalten, aber aus Sitemap entfernen

### 1.7 404-Seiten beheben

```bash
# Broken internal links finden
grep -rn "href=" --include="*.astro" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.md" --include="*.mdx" . 2>/dev/null | grep -i "digital-runners"
```

**Für jede 404-URL entscheiden:**
- Seite wiederherstellen falls Content existiert
- 301-Redirect auf die nächstpassende Seite falls Content entfernt wurde
- Interne Links die auf diese URL verweisen aktualisieren

---

## Phase 2 — Content-Qualität verbessern

> Hauptgrund für "Gefunden, nicht indexiert": Google sieht keinen Mehrwert in Template-Seiten.

### 2.1 Branchenseiten-Audit

**Problem:** Die /services/ Seite listet ~10+ Branchen mit Template-Texten auf. Google behandelt diese als Near-Duplicates.

```bash
# Alle Service/Branchen-Seiten finden
find . -path "*/services/*" -o -path "*/branchen/*" -o -path "*/industries/*" | head -30

# Content-Länge pro Seite prüfen
for f in $(find . -path "*/services/*" -name "*.astro" -o -name "*.md" -o -name "*.mdx" 2>/dev/null); do
  echo "$(wc -w < "$f") words: $f"
done | sort -n
```

**Strategie: Konsolidieren statt Inflaten**

Statt 10 dünne Branchenseiten → **3-4 starke Fokusseiten** erstellen:

1. **Hotels & Gastgewerbe** — WiFi-Lösungen, Gäste-WLAN, Captive Portal
2. **Arztpraxen & Gesundheitswesen** — Sichere Netzwerke, HIPAA-äquivalent, Medizingeräte
3. **Büros & KMU** — Standard-Business-Netzwerk, VLANs, Remote Access
4. **Spezial (Lager/Fabriken)** — Outdoor-APs, raue Umgebungen, IoT

**Für jede Fokusseite mindestens enthalten:**
- 500+ Wörter einzigartiger Content
- Konkretes Angebot (Paketpreise oder "ab CHF X")
- Ein konkretes Beispiel / Mini-Case-Study
- Technische Spezifikationen (welche UniFi-Produkte für diese Branche)
- Call-to-Action mit Kontaktformular
- Schema.org `Service` Markup

**Restliche Seiten:** 301-Redirect auf die passende Fokusseite oder als Abschnitt auf der Hauptseite /services/ einbinden.

### 2.2 Content-Templates für Branchenseiten

Für jede verbleibende Branchenseite folgendes Template verwenden:

```markdown
---
title: "UniFi Netzwerk für [Branche] — Digital Runners"
description: "Professionelle UniFi Netzwerklösungen für [Branche] in der Schweiz. [Spezifischer Nutzen]. Beratung & Installation aus Zürich."
---

# UniFi Netzwerklösungen für [Branche]

## Die Herausforderung
[2-3 Sätze über branchenspezifische Netzwerk-Probleme — z.B. viele Gäste-Geräte im Hotel]

## Unsere Lösung
[3-4 Absätze mit konkreten UniFi-Produkten und Konfigurationen für diese Branche]

### Empfohlene Ausstattung
[Tabelle mit UniFi-Produkten, Mengen, Einsatzzweck]

### Typisches Projekt
[Mini-Case-Study: Ausgangslage → Lösung → Ergebnis, 150+ Wörter]

## Ihre Vorteile
[3-4 branchenspezifische Vorteile — nicht generisch]

## Nächster Schritt
[CTA: Kostenlose Erstberatung, Kontaktformular]
```

### 2.3 Meta-Tags optimieren

Jede Seite braucht einzigartige Title-Tags und Meta-Descriptions.

```bash
# Alle aktuellen Title-Tags finden
grep -rn "<title>\|title:" --include="*.astro" --include="*.html" --include="*.md" --include="*.mdx" . 2>/dev/null | head -30

# Alle Meta-Descriptions finden
grep -rn "description" --include="*.astro" --include="*.html" --include="*.md" --include="*.mdx" . 2>/dev/null | head -30
```

**Title-Tag Formel:** `[Primäres Keyword] — [Spezifikation] | Digital Runners`
- Homepage: `UniFi Partner Schweiz — Netzwerklösungen für KMU | Digital Runners`
- Blog: `[Artikel-Titel] | Digital Runners Blog`
- Service: `UniFi für [Branche] — [Kernnutzen] | Digital Runners`

**Meta-Description:** 140-155 Zeichen, mit CTA und Standort (Zürich/Schweiz).

### 2.4 Schema.org Structured Data

Auf **jeder Seite** mindestens `Organization` Schema. Auf Service-Seiten zusätzlich `Service` Schema.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital Runners",
  "url": "https://digital-runners.ch",
  "logo": "https://digital-runners.ch/logo.png",
  "description": "Schweizer UniFi Partner für KMU Netzwerklösungen",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zürich",
    "addressCountry": "CH"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Schweiz"
  },
  "sameAs": []
}
</script>
```

Für Service-Seiten:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "UniFi Netzwerkinstallation für Hotels",
  "provider": {
    "@type": "Organization",
    "name": "Digital Runners"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Schweiz"
  },
  "description": "Professionelle UniFi WLAN- und Netzwerklösungen für Hotels und Gastgewerbe in der Schweiz."
}
</script>
```

---

## Phase 3 — Content-Strategie & Blog

> Neue Inhalte schaffen, die organischen Traffic anziehen und die Domain-Autorität stärken.

### 3.1 Blog-Artikel Roadmap

Erstelle folgende Artikel in dieser Reihenfolge (höchstes Keyword-Potenzial zuerst):

| Prio | Arbeitstitel | Ziel-Keywords | Wörter |
|------|-------------|---------------|--------|
| 1 | UniFi Netzwerk Kosten Schweiz 2026 — Was kostet ein professionelles KMU-Netzwerk? | unifi kosten, netzwerk kosten kmu schweiz | 1200+ |
| 2 | UniFi vs. Meraki vs. Aruba — Vergleich für Schweizer KMU | unifi vs meraki, netzwerk vergleich kmu | 1500+ |
| 3 | WLAN-Planung für Hotels — Schritt-für-Schritt mit UniFi | wlan hotel einrichten, hotel wifi lösung | 1000+ |
| 4 | UniFi Netzwerk einrichten 2026 — Der komplette Guide (Update) | unifi netzwerk einrichten, unifi guide 2026 | 2000+ |
| 5 | 5 häufige Netzwerk-Fehler in Schweizer KMUs | netzwerk probleme kmu, wlan probleme büro | 800+ |

### 3.2 Bestehenden Blog-Artikel aktualisieren

Der Artikel "UniFi Networks 2024" muss aktualisiert werden:

```bash
# Blog-Artikel finden
find . -path "*blog*" -name "*.md" -o -name "*.mdx" -o -name "*.astro" 2>/dev/null
```

**Änderungen am bestehenden Artikel:**
- Titel aktualisieren: "UniFi Networks 2026 — Ein Überblick" (oder neuen Artikel mit 301 vom alten)
- Neue Produkte ergänzen (Cloud Gateway Ultra 2, neue APs etc.)
- Datum aktualisieren
- Interne Links zu den neuen Service-Seiten einbauen
- FAQ-Section mit Schema.org `FAQPage` Markup hinzufügen

### 3.3 Blog-Artikel Template

```markdown
---
title: "[Titel]"
description: "[Meta-Description, 140-155 Zeichen]"
date: "2026-03-30"
author: "Kim Engels"
tags: ["unifi", "netzwerk", "[branche]"]
---

# [H1 — Primäres Keyword enthalten]

[Einleitung: 2-3 Sätze, Problem benennen, Lösung anteasen]

## [H2 — Sekundäres Keyword]

[Content-Block, 200+ Wörter]

### [H3 — Longtail-Keyword]

[Detail-Content]

## Fazit

[Zusammenfassung + CTA]

---

*Haben Sie Fragen zu [Thema]? [Kontaktieren Sie uns](https://digital-runners.ch/kontakt/) für eine kostenlose Erstberatung.*
```

---

## Phase 4 — Interne Verlinkung & Navigation

### 4.1 Interne Link-Struktur aufbauen

```bash
# Aktuelle interne Links analysieren
grep -rn "href=" --include="*.astro" --include="*.html" --include="*.md" --include="*.mdx" . 2>/dev/null | grep -c "digital-runners\|href=\"/"
```

**Regeln für interne Verlinkung:**
- Homepage → verlinkt auf alle Hauptseiten (/services/, /blog/, /kontakt/)
- Jede Service-Seite → verlinkt auf 2-3 verwandte Blog-Artikel
- Jeder Blog-Artikel → verlinkt auf 1-2 Service-Seiten und 1-2 andere Blog-Artikel
- Breadcrumb-Navigation auf allen Unterseiten
- Footer mit Links zu allen Hauptseiten

### 4.2 Breadcrumbs implementieren

```html
<!-- Breadcrumb-Komponente -->
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/services/"><span itemprop="name">Services</span></a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">[Aktuelle Seite]</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
```

---

## Phase 5 — Performance & Core Web Vitals

### 5.1 Performance-Check

```bash
# Bilder ohne optimierte Formate finden
find . -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | head -20

# Grosse Dateien finden
find . -type f -size +500k \( -name "*.png" -o -name "*.jpg" -o -name "*.svg" -o -name "*.gif" \) | head -20

# Prüfen ob Bildoptimierung konfiguriert ist
grep -r "image\|sharp\|squoosh\|imagemin" package.json 2>/dev/null
```

**Quick Wins:**
- Alle Bilder auf WebP/AVIF umstellen
- Lazy-Loading für Below-the-fold Bilder: `loading="lazy"`
- Kritische CSS inline, Rest async laden
- Preconnect für externe Ressourcen

### 5.2 Open Graph & Social Meta

```html
<meta property="og:title" content="[Seitentitel]" />
<meta property="og:description" content="[Meta-Description]" />
<meta property="og:image" content="https://digital-runners.ch/og-image.jpg" />
<meta property="og:url" content="https://digital-runners.ch/[pfad]/" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="de_CH" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## Phase 6 — Post-Deployment Checkliste

### 6.1 Validierung nach Deployment

Nach jedem Deployment diese Checks durchführen:

- [ ] `curl -I https://digital-runners.ch` → 200 OK (kein 403!)
- [ ] `curl -I https://www.digital-runners.ch` → 301 → digital-runners.ch
- [ ] `curl https://digital-runners.ch/robots.txt` → korrekte robots.txt
- [ ] `curl https://digital-runners.ch/sitemap.xml` → valide Sitemap ohne Redirect-URLs
- [ ] Keine `noindex` auf indexierbaren Seiten
- [ ] Canonical-Tags auf jeder Seite korrekt
- [ ] Schema.org via Google Rich Results Test validieren

### 6.2 Google Search Console Aktionen

Nach den Fixes manuell in der GSC:
1. Sitemap erneut einreichen: Sitemaps → Neue Sitemap hinzufügen
2. Für jede der 51 "Gefunden, nicht indexiert" Seiten: URL-Prüfung → Indexierung beantragen
3. Für die 13 Redirect-URLs: Prüfen ob sie aus der Sitemap verschwunden sind
4. Nach 1 Woche: Indexierungsbericht erneut prüfen

### 6.3 Monitoring

- Wöchentlich GSC-Indexierungsbericht prüfen
- Ziel nach 4 Wochen: Indexierungsrate >50%
- Ziel nach 8 Wochen: Indexierungsrate >80%
- Impressionen-Trend sollte stetig steigen

---

## Zusammenfassung: Ausführungsreihenfolge

```
Phase 0: Discovery (10 min)
  └→ Tech-Stack erkennen, Projektstruktur verstehen

Phase 1: Technische Fixes (2-4h)
  ├→ 1.1 Redirects bereinigen (www/non-www/de)
  ├→ 1.2 Bot-Blocking / 403 beheben
  ├→ 1.3 robots.txt erstellen/korrigieren
  ├→ 1.4 Sitemap bereinigen
  ├→ 1.5 Canonical-Tags setzen
  ├→ 1.6 noindex-Seiten fixen
  └→ 1.7 404-Fehler beheben

Phase 2: Content-Qualität (4-8h)
  ├→ 2.1 Branchenseiten konsolidieren
  ├→ 2.2 Fokusseiten mit echtem Content füllen
  ├→ 2.3 Meta-Tags optimieren
  └→ 2.4 Schema.org Structured Data

Phase 3: Content-Strategie (ongoing)
  ├→ 3.1 Blog-Artikel nach Roadmap erstellen
  ├→ 3.2 Bestehenden Artikel aktualisieren
  └→ 3.3 1 Artikel pro Woche publizieren

Phase 4: Verlinkung & Navigation (1-2h)
  ├→ 4.1 Interne Link-Struktur
  └→ 4.2 Breadcrumbs

Phase 5: Performance (1-2h)
  ├→ 5.1 Bilder optimieren
  └→ 5.2 OG-Tags

Phase 6: Validierung & Monitoring (ongoing)
  ├→ 6.1 Post-Deployment Checks
  ├→ 6.2 GSC Aktionen
  └→ 6.3 Wöchentliches Monitoring
```
