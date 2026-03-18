# NEXUS — App Portfolio `v2.0`

> A dark-luxury editorial PWA dashboard for showcasing and demoing a personal app portfolio.

## Overview

NEXUS is a unified control center for managing, monitoring, and launching a suite of independently hosted PWAs — built as a polished portfolio hub and live demo environment. Works on desktop, tablet, and mobile in both portrait and landscape.

## Features

- **Custom Branded Icon** — NEXUS Suite icon across all platforms (favicon, home screen, splash)
- **Mobile-First Responsive** — auto-follows device orientation, slide-in drawer, bottom nav bar
- **Editorial Dark UI** — Playfair Display + DM Mono typography, gold accent palette, grain texture
- **Auto Metadata Scraping** — paste a URL and cards self-populate via multi-proxy fallback chain
- **Groq AI Enrichment** — reads full page content to generate name, tag, description
- **App Icon Upload** — upload any image per app; shown large in card preview, retained in export
- **Manual Override Protection** — user-typed fields never overwritten by scan or AI
- **Live Status Monitoring** — real-time heartbeat pings with animated indicators
- **Scan All Button** — one-click refresh all metadata with progress bar
- **API Key Injection** — keys shown in iframe header + injected via postMessage on launch
- **Export / Import** — JSON config retains icons, descriptions, keys, and all manual data
- **Full PWA** — installable, offline-capable via Service Worker

## Deployment (GitHub Pages)

1. Push all files to your GitHub repository root
2. Go to **Settings → Pages → Deploy from branch → main / root**
3. Live at `https://johnlaz.github.io/nexus/`

## File Structure

```
nexus/
├── index.html               ← Main app shell
├── manifest.json            ← PWA manifest
├── sw.js                    ← Service worker (cache-first, offline)
├── icons/
│   ├── favicon.ico          ← Browser tab icon (multi-size)
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-192.png         ← Android home screen
│   ├── icon-512.png         ← Splash screen / store
│   └── apple-touch-icon.png ← iOS home screen (180px)
└── README.md
```

## Version History

| Version | Notes |
|---------|-------|
| v2.0 | NEXUS Suite branded icon (all sizes + favicon.ico + Apple touch), portrait/landscape auto-orientation, v2.0 label |
| v1.6 | Auto device orientation — removed manifest landscape lock, portrait card layout, landscape 3-col grid |
| v1.5 | Full mobile layout — slide-in drawer, bottom nav bar, responsive cards. Uploaded icon fills card preview. Tighter Groq prompt. |
| v1.4 | Icon upload per app, export retains all data, manual overrides protected, API key injected on launch |
| v1.3 | Groq AI enrichment, AI Settings tab, Scan All button with progress bar |
| v1.2 | Multi-proxy scraper fallback chain |
| v1.1 | Auto metadata scraping |
| v1.0 | Initial release |

---

Built with pure HTML5 · CSS3 · Vanilla JS · No build tools required
