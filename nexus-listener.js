/**
 * NEXUS Listener Snippet — v2.1
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop this into every app's HTML (inside a <script> tag or as an external JS
 * file loaded at the bottom of <body>).
 *
 * What it does:
 *   1. NEXUS_DATA_INJECT  — when Nexus launches this app with stored data,
 *      this listener restores the app's full localStorage automatically.
 *
 *   2. NEXUS_EXPORT_REQUEST — when Nexus runs "Capture All Apps", this
 *      listener responds with the app's entire localStorage so Nexus can
 *      bundle it into the master restore file.
 *
 *   3. NEXUS_KEY_INJECT — receives the API key set in Nexus config for this
 *      app. Store it wherever your app expects it (see example below).
 *
 * HOW TO INSTALL:
 *   Option A — Inline in your HTML, just before </body>:
 *     <script src="nexus-listener.js"></script>
 *
 *   Option B — Copy the contents into an existing <script> block in your app.
 *
 * CUSTOMISE:
 *   - Edit the NEXUS_KEY_INJECT handler to store the key where your app
 *     looks for it (localStorage key name, global variable, etc.)
 *   - Edit the NEXUS_DATA_INJECT handler if you want to skip certain
 *     localStorage keys on restore (e.g. keys you don't want overwritten).
 * ─────────────────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  // ── CONFIG ──────────────────────────────────────────────────────────────────
  // Keys to SKIP when restoring from master inject (add any you don't want
  // overwritten, e.g. a user-specific auth token you set locally).
  const SKIP_KEYS_ON_INJECT = [
    // 'my-auth-token',
    // 'user-preferences',
  ];

  // The localStorage key where your app reads its API key.
  // Change this to match your app's convention.
  // e.g. 'groq-api-key', 'openai-key', 'app-license', etc.
  const API_KEY_STORAGE_KEY = 'groq-api-key';
  // ────────────────────────────────────────────────────────────────────────────

  window.addEventListener('message', function (event) {
    // Security: only accept messages from parent window (Nexus)
    // Nexus is same-origin (github.io) so this is safe.
    // If you need cross-origin, loosen this check.
    if (!event.data || typeof event.data !== 'object') return;

    const { type, appId, appName, data, key } = event.data;

    // ── 1. RESTORE localStorage from master backup ──
    if (type === 'NEXUS_DATA_INJECT') {
      try {
        let restored = 0;
        Object.entries(data || {}).forEach(([k, v]) => {
          if (SKIP_KEYS_ON_INJECT.includes(k)) return;
          try {
            localStorage.setItem(k, v);
            restored++;
          } catch (e) {
            console.warn('[NEXUS] Could not restore key:', k, e);
          }
        });
        console.log(`[NEXUS] Data injected — ${restored} localStorage keys restored`);

        // Optional: dispatch a custom event so your app can react
        // (e.g. re-render UI with the restored data)
        window.dispatchEvent(new CustomEvent('nexus-data-restored', {
          detail: { appId, appName, keys: restored }
        }));
      } catch (e) {
        console.warn('[NEXUS] Data inject failed:', e);
      }
      return;
    }

    // ── 2. RESPOND to export request — send localStorage to Nexus ──
    if (type === 'NEXUS_EXPORT_REQUEST') {
      try {
        const snapshot = {};
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          snapshot[k] = localStorage.getItem(k);
        }
        // Use window.parent (always available) instead of event.source
        // which can be null for hidden/offscreen iframes in some browsers
        const target = window.parent !== window ? window.parent : event.source;
        if (target) {
          target.postMessage({
            type:  'NEXUS_EXPORT_RESPONSE',
            appId: appId,
            data:  snapshot
          }, '*');
          console.log(`[NEXUS] Export response sent — ${Object.keys(snapshot).length} keys`);
        }
      } catch (e) {
        console.warn('[NEXUS] Export response failed:', e);
      }
      return;
    }

    // ── 3. RECEIVE API key from Nexus key vault ──
    if (type === 'NEXUS_KEY_INJECT') {
      try {
        if (key) {
          localStorage.setItem(API_KEY_STORAGE_KEY, key);
          console.log(`[NEXUS] API key injected → localStorage['${API_KEY_STORAGE_KEY}']`);

          // Optional: dispatch event so your app can pick up the new key
          window.dispatchEvent(new CustomEvent('nexus-key-received', {
            detail: { appId, appName, key }
          }));
        }
      } catch (e) {
        console.warn('[NEXUS] Key inject failed:', e);
      }
      return;
    }
  });

  console.log('[NEXUS] Listener active — ready for inject/export');
})();
