importScripts('/soundrecord/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/soundrecord/_nuxt/050b2fd12b357c88a2d5.js",
    "revision": "0f7e9cee07bfc0e6423af21599dd2768"
  },
  {
    "url": "/soundrecord/_nuxt/0b028c3131a8ea493567.js",
    "revision": "8f4a4635a07d2c3e7bc8d83e488d5d7a"
  },
  {
    "url": "/soundrecord/_nuxt/2e4b9543ba820cdec30c.js",
    "revision": "d5765ec4047ac0f863e45d81ce4a39c6"
  },
  {
    "url": "/soundrecord/_nuxt/3893f6738e422bb4e90a.js",
    "revision": "7c3c19508885f6905ea98a4827a86b2c"
  },
  {
    "url": "/soundrecord/_nuxt/9c55b914413acc6721db.js",
    "revision": "51c91cc1df8d5efc38f6f0080c4e1a85"
  },
  {
    "url": "/soundrecord/_nuxt/9c9a904896160ca061fc.js",
    "revision": "4abd82ad29cd1c02642381791270868e"
  },
  {
    "url": "/soundrecord/_nuxt/cea82284394d5cac6642.js",
    "revision": "f2842519d33ce2b136f26edd6bffbffd"
  }
], {
  "cacheId": "soundrecord",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/soundrecord/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/soundrecord/.*'), workbox.strategies.networkFirst({}), 'GET')
