# NEXUS — App Portfolio `v1.1`

> A dark-luxury editorial PWA dashboard for showcasing and demoing a personal app portfolio.

## Overview

NEXUS is a unified control center for managing, monitoring, and launching a suite of independently hosted Progressive Web Apps — built as a polished portfolio hub and live demo environment.

## Features

- **Editorial Dark UI** — Playfair Display + DM Mono typography, gold accent palette, grain overlay
- **Auto Metadata Scraping** — Paste a URL and cards self-populate with title, description, favicon, og:image, and theme color
- **Live Status Monitoring** — Real-time heartbeat pings with animated status indicators
- **App Cards with Previews** — Rich cards with og:image previews, favicons, and theme-color accents
- **Inline Key Vault** — API keys surfaced contextually in the iframe header bar
- **Dynamic Configuration** — Add/remove/edit apps live, persisted to `localStorage`
- **Export / Import** — JSON config portability across machines
- **Custom Branding** — Upload your own logo to replace the wordmark
- **Full PWA** — Installable, offline-capable via Service Worker

## Deployment (GitHub Pages)

1. Push all files to a GitHub repository
2. Go to **Settings → Pages → Source → Deploy from branch → main / root**
3. Your portfolio will be live at `https://<username>.github.io/<repo-name>/`

## File Structure

```
nexus/
├── index.html       ← Main app shell
├── manifest.json    ← PWA manifest
├── sw.js            ← Service worker (cache-first, offline support)
├── icons/
│   ├── icon-32.png
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Adding Apps

1. Click **⚙ Configure** in the sidebar
2. Click **+ Add Application**
3. Paste the URL — metadata is fetched automatically (title, description, favicon, og:image)
4. Optionally override name, tag, description, or add an API key
5. Hit **↻ Rescan** at any time to refresh metadata from the live URL

## Version History

| Version | Notes |
|---------|-------|
| v1.2 | Multi-proxy scraper (corsproxy → allorigins → codetabs fallback chain), Scan All button with progress bar |
| v1.1 | Auto metadata scraping from URL — title, description, favicon, og:image, theme color |
| v1.0 | Initial release — Dark luxury editorial UI, card previews, SW caching |

---

Built with pure HTML5 · CSS3 · Vanilla JS · No build tools required
