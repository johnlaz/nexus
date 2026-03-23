# NEXUS — App Portfolio `v2.0`

> A dark-luxury editorial PWA dashboard for showcasing and demoing a personal app portfolio.

## What's New in v2.0

- **12 real apps pre-loaded** — APEX, ARMORY, AXIOM, INFUSE, LAZ LAB, Listener Pro, NEXUS, Odoo Email Link, TRSAV, UNPLUGGED, Story Magic, Kinetic Portfolio Terminal
- **Theme color glow** — each app card glows with its own accent color pulled from meta
- **Notes section** — capture ideas, bugs, future features; saved locally & in Full Suite export
- **Marketing Card export** — one-click portfolio summary card, printable as PDF
- **Mobile iframe fix** — bottom nav no longer overlaps launched app content
- **Version label** — v2.0 displayed in dashboard header and wordmark

## All Features

- Mobile-first responsive (slide-in drawer, bottom nav, portrait/landscape auto-orient)
- Auto metadata scraping via multi-proxy fallback chain
- Groq AI enrichment — fills name/tag/desc from page content
- Icon upload per app (shown large in card preview, stored in export)
- Manual override protection — user fields never overwritten by scan
- Live status monitoring with animated indicators
- Scan All button with gold progress bar
- API key injection via postMessage on launch
- Full Suite export/import (apps + icons + keys + notes + Groq key + logo)
- Keys-only and Apps-only export tiers

## Deployment

1. Push all files to GitHub repo root
2. **Settings → Pages → Deploy from branch → main / root**
3. Live at `https://johnlaz.github.io/nexus/`

## File Structure

```
nexus/
├── index.html               ← Main app (all logic inline)
├── manifest.json            ← PWA manifest
├── sw.js                    ← Service worker
├── icons/
│   ├── favicon.ico
│   ├── icon-16.png
│   ├── icon-32.png
│   ├── icon-192.png
│   ├── icon-512.png
│   └── apple-touch-icon.png
└── README.md
```

## Version History

| Version | Notes |
|---------|-------|
| v2.0 | 12 real apps, theme color card glows, Notes tab, Marketing Card export, mobile iframe fix, version label |
| v1.6 | Auto device orientation, portrait card layout, landscape 3-col grid |
| v1.5 | Full mobile layout, slide-in drawer, bottom nav bar |
| v1.4 | Icon upload, export retains all data, API key injection on launch |
| v1.3 | Groq AI enrichment, AI Settings tab, Scan All button |
| v1.2 | Multi-proxy scraper fallback chain |
| v1.1 | Auto metadata scraping |
| v1.0 | Initial release |

---
Built with HTML5 · CSS3 · Vanilla JS · No build tools required
