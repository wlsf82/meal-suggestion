/*
  Meal Suggestion PWA Service Worker
  - Precache core assets
  - Cache-first for static assets
  - Network-first for navigation
*/

const CACHE_VERSION = 'v2'
const CACHE_NAME = `meal-suggestion-${CACHE_VERSION}`

const ASSET_URLS = [
  './index.html',
  './style.css',
  './script.js',
  './meals.js',
  './manifest.webmanifest',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
]

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSET_URLS))
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('meal-suggestion-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    }).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  // Only handle same-origin GET requests
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return
  }

  const isDocument = request.mode === 'navigate'
    || request.destination === 'document'
    || (request.headers && request.headers.get('accept') && request.headers.get('accept').includes('text/html'))

  if (isDocument) {
    // Network-first for navigation, fallback to cached index.html on error or non-OK
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response || !response.ok) {
            return caches.match('./index.html')
          }
          return response
        })
        .catch(() => caches.match('./index.html'))
    )
    return
  }

  // Static assets: cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request).then((response) => {
        if (response && response.ok) {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)).catch(() => {})
        }
        return response
      }).catch(() => cached)
    })
  )
})
