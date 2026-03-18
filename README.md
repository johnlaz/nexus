# NEXUS — App Portfolio `v1.5`

> A dark-luxury editorial PWA dashboard for showcasing and demoing a personal app portfolio.

## Overview

NEXUS is a unified control center for managing, monitoring, and launching a suite of independently hosted PWAs — built as a polished portfolio hub and live demo environment. Works on desktop and mobile.

## Features

- **Mobile-First Responsive** — slide-in sidebar drawer, bottom nav bar, full-screen modal on phones
- **Editorial Dark UI** — Playfair Display + DM Mono typography, gold accent palette, grain overlay
- **Auto Metadata Scraping** — paste a URL and cards self-populate via multi-proxy fallback chain
- **Groq AI Enrichment** — reads full page content to write name, tag, description when meta tags are sparse
- **App Icon Upload** — upload any image per app; displayed large in card preview, stored in export
- **Manual Override Protection** — user-typed fields never overwritten by scan or AI
- **Live Status Monitoring** — real-time heartbeat pings with animated indicators
- **Scan All Button** — one-click refresh all metadata with gold progress bar
- **Inline Key Vault** — API keys shown in iframe header, injected via postMessage on launch
- **Export / Import** — JSON config retains icons (base64), descriptions, and all manual data
- **Full PWA** — installable, offline-capable via Service Worker

## Deployment (GitHub Pages)

1. Push all files to a GitHub repository root
2. Go to **Settings → Pages → Deploy from branch → main / root**
3. Live at `https://<username>.github.io/<repo-name>/`

## File Structure

```
nexus/
├── index.html       ← Main app shell
├── manifest.json    ← PWA manifest
├── sw.js            ← Service worker
├── icons/
│   ├── icon-32.png
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Version History

| Version | Notes |
|---------|-------|
| v1.5 | Full mobile layout — slide-in drawer, bottom nav bar, responsive cards. Uploaded icon fills card preview. Tighter Groq prompt. |
| v1.4 | Icon upload per app, export retains all data, manual overrides protected, API key injected on launch |
| v1.3 | Groq AI enrichment, AI Settings tab, Scan All button with progress bar |
| v1.2 | Multi-proxy scraper fallback chain |
| v1.1 | Auto metadata scraping |
| v1.0 | Initial release |

---

Built with pure HTML5 · CSS3 · Vanilla JS · No build tools required
