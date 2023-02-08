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
    "revision": "c441485b805f9de8790ca122ee029968"
  },
  {
    "url": "about.html",
    "revision": "0068d2c3ce8922270beaf0b44c0856c5"
  },
  {
    "url": "about1.html",
    "revision": "402842df3db0d7fe069a71ac844b33fb"
  },
  {
    "url": "about2.html",
    "revision": "a89f8e5306a92fdfe3fcbbe9776ae930"
  },
  {
    "url": "assets/css/0.styles.5dbea6a9.css",
    "revision": "9cd3b2fbc2ffd244ced65afe6de398fc"
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
    "url": "assets/js/1.c987d480.js",
    "revision": "a0fc133d7a3aabe0cd23e88b23fa6eda"
  },
  {
    "url": "assets/js/10.32bb97c9.js",
    "revision": "3c339ce3941f4c94fd97108d934a33a0"
  },
  {
    "url": "assets/js/11.1cd84d64.js",
    "revision": "edc1dac3a37a43f9998c3e91f2daaeba"
  },
  {
    "url": "assets/js/12.c9b30a65.js",
    "revision": "b4dea3783de1e81269dd973de81d6133"
  },
  {
    "url": "assets/js/13.41a82ffa.js",
    "revision": "3d34bc24ef0a5bd3e0c5bc8c7342bd4c"
  },
  {
    "url": "assets/js/14.9654ca56.js",
    "revision": "eb7b5d7513e2ec743ed064cfcf8c6b52"
  },
  {
    "url": "assets/js/15.a3b6d32d.js",
    "revision": "a372f0285c2936f632bb4f5d650de716"
  },
  {
    "url": "assets/js/16.1fa8dc95.js",
    "revision": "f0d0d1f7a30383a39d202ed1c442c871"
  },
  {
    "url": "assets/js/17.d248b473.js",
    "revision": "68a8d9eb75351d7947e773043e0028d8"
  },
  {
    "url": "assets/js/18.6cda5a6f.js",
    "revision": "bbaf05b96d96cd7b439731686e4282a9"
  },
  {
    "url": "assets/js/19.85242d3d.js",
    "revision": "ef55fec4587ab955d4be0615fab469bd"
  },
  {
    "url": "assets/js/20.0c11bc4a.js",
    "revision": "66df0e0aaf335e1f7d729c1c8c842943"
  },
  {
    "url": "assets/js/21.ca4427e6.js",
    "revision": "ccfcc4993bcc967df624d4fc15810980"
  },
  {
    "url": "assets/js/22.6db93448.js",
    "revision": "9ebdc0205bf8173930c8b8f091df9202"
  },
  {
    "url": "assets/js/23.32857bbc.js",
    "revision": "890445e876bf56745150ee491389f6b3"
  },
  {
    "url": "assets/js/24.cb1bf1dd.js",
    "revision": "ecfef67cd0c1f564e5e0b52194adba53"
  },
  {
    "url": "assets/js/25.f6d34765.js",
    "revision": "76d09f67c93cfc97c8e3a9d4724152e2"
  },
  {
    "url": "assets/js/26.0964089e.js",
    "revision": "e49c592de90d85e8f07dec7dd202a86f"
  },
  {
    "url": "assets/js/27.af4bcf3e.js",
    "revision": "ba6ecce3b93ad91c73ec32f82c71cae8"
  },
  {
    "url": "assets/js/28.8079fe2d.js",
    "revision": "0078ba0b607aecec4ef296df3e0652da"
  },
  {
    "url": "assets/js/29.dd08440b.js",
    "revision": "6505559ef3fcd4ca1943adb1b1c63f3d"
  },
  {
    "url": "assets/js/3.15dac59f.js",
    "revision": "8262258abb8498a3270296741be42b7f"
  },
  {
    "url": "assets/js/30.a73e6a3e.js",
    "revision": "136d3c54e64e880a521bac6526bb298f"
  },
  {
    "url": "assets/js/4.93e5f20c.js",
    "revision": "f1511f2433994af269e4dea59ebedbdb"
  },
  {
    "url": "assets/js/5.8201c1eb.js",
    "revision": "fdb7e03e3374a03e974fe5d9b79cafde"
  },
  {
    "url": "assets/js/6.53e0d2ed.js",
    "revision": "398476e3a5ab35db877e6086511360bd"
  },
  {
    "url": "assets/js/7.1cbcb1a1.js",
    "revision": "47c66c50bfd2260505f1104fce0dd45d"
  },
  {
    "url": "assets/js/8.d725ad4f.js",
    "revision": "a6c28ba81880ca66ecc254051a74fbc7"
  },
  {
    "url": "assets/js/9.e8e3be0f.js",
    "revision": "e856f33b4b61c2800cf4248fb035064f"
  },
  {
    "url": "assets/js/app.f7a88d6d.js",
    "revision": "6fdd023ecea58431dce8805bb87b150f"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "8afdc7e9a7dcf350a959aa8286e1d621"
  },
  {
    "url": "categories/index.html",
    "revision": "16279577c40f48f66d4507a2bf60a2b2"
  },
  {
    "url": "countup.html",
    "revision": "db612be8811d85038d76ebea61816978"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "a99d513431adc2039df66885a661a6ca"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "5383910f5547c0dcfbabeddf4b37195d"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "597332705b081672a39969deb85da8ce"
  },
  {
    "url": "favicon.png",
    "revision": "0cbf84f68d2168822cbdf764f499e29d"
  },
  {
    "url": "frontend/css/c-aaa.html",
    "revision": "99ea9eae27eff1022c9f34d4631ae202"
  },
  {
    "url": "frontend/css/c-bbb.html",
    "revision": "5a3097161bb88760c463dfdc325f3899"
  },
  {
    "url": "frontend/css/c-ccc.html",
    "revision": "9c41f048ed44b48f04ffe0ab344970ad"
  },
  {
    "url": "frontend/javascript/j-aaa.html",
    "revision": "651d8a9bad4fb5d256c8c216a0a5ec93"
  },
  {
    "url": "frontend/javascript/j-bbb.html",
    "revision": "85cbcb07483de3f4e867e82bd1be27c2"
  },
  {
    "url": "frontend/javascript/j-ccc.html",
    "revision": "972ca6bc33135d429b62d52b0722f1f1"
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
    "revision": "e663de6e2fe12ed703ebd712b5c31025"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "68ad3e441bc8cbfa81ea46d6418cfdfd"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "84c00ac2300a4afd123936e4fc3bc47c"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "fcb3943c93a67e4baa8c696f390575c0"
  },
  {
    "url": "tag/index.html",
    "revision": "12a9ca0df46e84888dbb9e18be22ef26"
  },
  {
    "url": "timeline/index.html",
    "revision": "87b098c68ac0f6c9e23dde193b831404"
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
