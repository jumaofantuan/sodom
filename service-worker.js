/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79e9c035e8f6e1111201052933a209d7"
  },
  {
    "url": "about.html",
    "revision": "b576d9815d63f086cf7089a90d22e482"
  },
  {
    "url": "about1.html",
    "revision": "5c6751b5768173fff9a1d2b3da9ebc8f"
  },
  {
    "url": "about2.html",
    "revision": "ded5d6c176bf5861a9460000df38e129"
  },
  {
    "url": "assets/css/0.styles.eba8c6cd.css",
    "revision": "b1ff5035b6068c3865baa1b347f00d4c"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "8db08e977cd67c2f5a9662a47b4b27d5"
  },
  {
    "url": "assets/js/1.4874c353.js",
    "revision": "e05a0ef20478a118c50a8c23e1f462c4"
  },
  {
    "url": "assets/js/10.0de3e6a2.js",
    "revision": "f94e496e4210d60496e892353149de5e"
  },
  {
    "url": "assets/js/11.696ec98b.js",
    "revision": "14ee1ba09aae94261e8db9d8d0a070d4"
  },
  {
    "url": "assets/js/12.b226fb33.js",
    "revision": "785e7db8df8ef7efab1d051425418f26"
  },
  {
    "url": "assets/js/13.c17976ea.js",
    "revision": "dd370148d6d3d9e023420cfb3144a302"
  },
  {
    "url": "assets/js/14.012ca74c.js",
    "revision": "4fdcd2d339efedac72080ca624edfb04"
  },
  {
    "url": "assets/js/15.62910105.js",
    "revision": "80ba412949fff1d5818583319a53dad1"
  },
  {
    "url": "assets/js/16.0c3fe45b.js",
    "revision": "cc42d7406c17fdde409d0211839b024c"
  },
  {
    "url": "assets/js/17.2287c837.js",
    "revision": "9ca3ca23ef19499c833208c6077e1a96"
  },
  {
    "url": "assets/js/18.2dd276ee.js",
    "revision": "a8d777859812fa9568e9b81ae7d938d4"
  },
  {
    "url": "assets/js/19.2df36426.js",
    "revision": "971d696ab381875a2a55d5c05453df40"
  },
  {
    "url": "assets/js/20.45baff39.js",
    "revision": "e10b7981cfc8de49b5f86a92a756ae57"
  },
  {
    "url": "assets/js/21.b19188c9.js",
    "revision": "6952adaa5c74e45929b691b9518b7ac3"
  },
  {
    "url": "assets/js/3.389d95ca.js",
    "revision": "4d665390904d85a332cd55e8339be257"
  },
  {
    "url": "assets/js/4.1e5b3238.js",
    "revision": "0fbfa9096cd51d51a5a00ec5e3114209"
  },
  {
    "url": "assets/js/5.0234eff4.js",
    "revision": "f2c34e02af891cf83fb901c93a0dde04"
  },
  {
    "url": "assets/js/6.ba88de2b.js",
    "revision": "5c13d9d56780062571867b7e965d4dd3"
  },
  {
    "url": "assets/js/7.dbb79a2b.js",
    "revision": "e4467bb224865f2fcdf97012d7dcce37"
  },
  {
    "url": "assets/js/8.70a9f7f8.js",
    "revision": "273c73c54aa49c483bd6979370f13f69"
  },
  {
    "url": "assets/js/9.af6be9a5.js",
    "revision": "9fe32b7ffb57b0676e4ecccf0127cab4"
  },
  {
    "url": "assets/js/app.2a242cda.js",
    "revision": "6672e303209e7acddfac04e568dc239c"
  },
  {
    "url": "categories/index.html",
    "revision": "d51dffce2ea7c37169e3747322a34eda"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "a63d46c0e7c7d07d06e910b626e23f0b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "795935af19d1b3493dbc548f9fc18027"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "060b8f98950ffa8911972f747a4543ed"
  },
  {
    "url": "favicon.png",
    "revision": "0cbf84f68d2168822cbdf764f499e29d"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "3a643206ed1350c25cd4f2d06cc8c37f"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "47bdcac78cb94afa46d0a5752a43bc5b"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "a2aa4d3fa19146b36a387054ff8fd95c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "139479997db3286d19775edc9002350e"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "e4e12b5024eebf6d8565c5e8976ff072"
  },
  {
    "url": "index.html",
    "revision": "2b87e9692e3f380ee92e01c0f08cac03"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "a66d7fd4376628e467f01c49e5b3dd52"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "8aa7bd434037aff2182d5047507771b9"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "ff0877f018e8a22e1391b73e3e937e8e"
  },
  {
    "url": "tag/index.html",
    "revision": "9c0be3c575d189b286e7a9618d81174c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a88f2fcc3658088af896370463c21a5d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
