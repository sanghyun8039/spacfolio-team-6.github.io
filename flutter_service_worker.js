'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "255c621fdca8d29525da28258d02860d",
"assets/AssetManifest.bin.json": "c34d6cc77a5cda4ea4559e36fffee038",
"assets/AssetManifest.json": "753dd9312e4ea2c2e2c0443ab8edb19e",
"assets/assets/images/background.png": "b3f2235f44dde09800e09d29e7834901",
"assets/assets/images/badge.png": "66a0fc5055c3dd305abe5086c39e7024",
"assets/assets/images/boardimg01.png": "017843be5a6b07035a47e1eed4adf71e",
"assets/assets/images/boardimg02.png": "d30f9683bff7ef48d058619349e971d3",
"assets/assets/images/boardimg03.png": "c35fa30454ce6db51aacba5d539882f5",
"assets/assets/images/Group%25201171277220.svg": "471ecc8405e770163ac92a579764bae2",
"assets/assets/images/Group%25201171277221.svg": "e52d7ebd20b56623176aac24ec151e1c",
"assets/assets/images/Group%25201171277222.svg": "31f17bdc0792260a9b4cf6a472bdb90f",
"assets/assets/images/Group%25201171277223.svg": "111b10865691f3979ec875692879f644",
"assets/assets/images/main/main1.png": "4e553f9c81c49bfd3f26f0296a3ee750",
"assets/assets/images/main/main2.png": "24a173372cdd2eeadd25b7659b44346c",
"assets/assets/images/main/main3.png": "4da9541ac47294c8ef3702b17ad000ec",
"assets/assets/images/main/main4.png": "302baf78561d34795428715c31ecddc3",
"assets/assets/images/portfolio/1.png": "770f7d5b54fe33ff893093c4357496fd",
"assets/assets/images/portfolio/10.png": "f0461ae3491439d0747c2676aea3a433",
"assets/assets/images/portfolio/11.png": "9678b7b25f88be724b923c27e7a773a2",
"assets/assets/images/portfolio/12.png": "d37186fbe00dabccb11e15f1942a1cfd",
"assets/assets/images/portfolio/13.png": "aeeeb2a06bfb8dfccd1736897bb8931d",
"assets/assets/images/portfolio/14.png": "68a07b76a69e378129d1ef0c53950f10",
"assets/assets/images/portfolio/15.png": "891027a02c034dddc330ff453fddd38c",
"assets/assets/images/portfolio/16.png": "94ec3875958eed2dde6009a07b441e86",
"assets/assets/images/portfolio/17.png": "029f5628ab2d6dd3e7c5950392c4379c",
"assets/assets/images/portfolio/18.png": "6d2627bdc2fadc46d65dc2490cb212a0",
"assets/assets/images/portfolio/19.png": "feacec5b9da5c512160400e0c1874509",
"assets/assets/images/portfolio/2.png": "57a630e6af9cfe5cf2e381c36ad5abd6",
"assets/assets/images/portfolio/20.png": "56ed10d59e60ea13fb0d303fdb079373",
"assets/assets/images/portfolio/21.png": "aae4b973ddea1de5a8453c2116b81b3d",
"assets/assets/images/portfolio/22.png": "e202307c535ad049f3552a58c486b841",
"assets/assets/images/portfolio/23.png": "5bd4ad704f9ec5241227cfd515d32522",
"assets/assets/images/portfolio/24.png": "482c86b6d36c95da3a88e32c7d826da3",
"assets/assets/images/portfolio/25.png": "076e68bff2bb7b6a2ec3eee66c547e9c",
"assets/assets/images/portfolio/26.png": "1d4b9eda00fa618aae906f726256a1c0",
"assets/assets/images/portfolio/27.png": "7acddc1e2f4e6cce6744c8cb7b20be29",
"assets/assets/images/portfolio/28.png": "a155212dd941e12a4f6c4314ceff9d43",
"assets/assets/images/portfolio/29.png": "cead0385f85a07b7413c982be8fe347b",
"assets/assets/images/portfolio/3.png": "b78c5b1cd49d64417ab3d806c9913d49",
"assets/assets/images/portfolio/30.png": "25493857c02730e62e767ca791f613ba",
"assets/assets/images/portfolio/4.png": "327dad1e338de151e7898313515120d0",
"assets/assets/images/portfolio/5.png": "eeb240390a0817594d2097171779c12e",
"assets/assets/images/portfolio/6.png": "432615f1518173a7e642266581f8fb13",
"assets/assets/images/portfolio/7.png": "90c9f8acab3292b1a23b22c66dd10491",
"assets/assets/images/portfolio/8.png": "7e779565d6c6545ab069b8a726f7b25f",
"assets/assets/images/portfolio/9.png": "14d3ff793daa8015967fe0715b5dcfd7",
"assets/assets/images/profile.png": "2e634fe114605e97b8dfc04bbab80188",
"assets/assets/images/signupdone.png": "7c7cdf70cb9bb854b27abaf0c2b0bda8",
"assets/assets/logo/sfac_logo.svg": "474edce576ab09375ca3c1e54deef1a2",
"assets/assets/logo/spac_splash.png": "9d1281c9968e64bd64edbd0762758699",
"assets/FontManifest.json": "ddb46f4f6375f354b268f2b4e78866f5",
"assets/fonts/MaterialIcons-Regular.otf": "f3345180a46aaceda69506598a6a9b0a",
"assets/fonts/Pretendard-Black.ttf": "51c73880d5964b36e6373b3fe31f3058",
"assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/fonts/Pretendard-ExtraBold.ttf": "332e9b673b0c1709e93fee01e4543f1d",
"assets/fonts/Pretendard-ExtraLight.ttf": "2f39a307ce00aa5e734137d4cee3b5c1",
"assets/fonts/Pretendard-Light.ttf": "77ecd2ca94928e38ff7c68bb255324f7",
"assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/fonts/Pretendard-Regular.ttf": "d6e0de06bff8b7fda2db4682168e3ddf",
"assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/fonts/Pretendard-Thin.ttf": "8b65a9299b173e635e6acac200e80257",
"assets/NOTICES": "ed4d74db2942b26ce047227f810fbb49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "3b10a45dc2e87db8545581155d9c4cca",
"canvaskit/canvaskit.wasm": "3d7f6ea5aa090f30117738537b971fa5",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "c6fdbd7cdc7518a3801101d264dd148a",
"canvaskit/chromium/canvaskit.wasm": "f5b9494ba49d9de8b746ad18ae2d4887",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "433b296864c83c925310f7aa5e18eb93",
"canvaskit/skwasm.wasm": "48d811c20d772ad85860fc7e3120cd22",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "438f10d014e67e3ad287378046a40a92",
"/": "438f10d014e67e3ad287378046a40a92",
"main.dart.js": "ca6cce1e598bf13993b8fc1344130d54",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"version.json": "322dfa94430cc69aa45ce83495f46466"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
