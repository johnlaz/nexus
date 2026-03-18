# NEXUS — TRS Control Center `v1`

> A dark-luxury editorial PWA dashboard for the Total Rental Solutions application suite.

## Overview

NEXUS is a unified "Single Pane of Glass" control center for managing, monitoring, and launching the entire TRS PWA ecosystem from one polished interface.

## Features

- **Editorial Dark UI** — Playfair Display + DM Mono typography, gold accent palette, grain overlay
- **Live Status Monitoring** — Real-time heartbeat pings with animated status indicators
- **App Cards with Previews** — Rich cards with descriptions, tags, and launch actions
- **Inline Key Vault** — API keys surfaced contextually in the iframe header bar
- **Dynamic Configuration** — Add/remove/edit apps live, persisted to `localStorage`
- **Export / Import** — JSON config portability across machines
- **Custom Branding** — Upload your own logo to replace the wordmark
- **Full PWA** — Installable, offline-capable via Service Worker

## Deployment (GitHub Pages)

1. Push all files to a GitHub repository
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your suite will be live at `https://<username>.github.io/<repo-name>/`

## File Structure

```
nexus-v1/
├── index.html       ← Main app shell
├── manifest.json    ← PWA manifest
├── sw.js            ← Service worker (cache-first, offline support)
├── icons/
│   ├── icon-32.png
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Configuration

Click the **⚙ Configure** button in the sidebar to:
- Add your GitHub-hosted PWA URLs
- Set app names, tags, descriptions, and API keys
- Upload your company logo
- Export/import JSON config

## Version History

| Version | Notes |
|---------|-------|
| v1 | Initial release — Dark luxury editorial UI, card previews, SW caching |

---

Built with pure HTML5 · CSS3 · Vanilla JS · No build tools required
