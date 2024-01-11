'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c99136216ca2e1938144f1891c783519",
"assets/AssetManifest.bin.json": "2fb6ee6d3abe01ec4e32b3a5be7fc78d",
"assets/AssetManifest.json": "9a9c63f68a4a5539ef40037e69bb1e5e",
"assets/assets/images/background.png": "b3f2235f44dde09800e09d29e7834901",
"assets/assets/images/badge.png": "66a0fc5055c3dd305abe5086c39e7024",
"assets/assets/images/boardimg01.png": "017843be5a6b07035a47e1eed4adf71e",
"assets/assets/images/boardimg02.png": "d30f9683bff7ef48d058619349e971d3",
"assets/assets/images/boardimg03.png": "c35fa30454ce6db51aacba5d539882f5",
"assets/assets/images/community/ad/ad_recruit_01.jpg": "3d865d4648f4246e5ae57f830aab3667",
"assets/assets/images/community/ad/ad_recruit_02.jpg": "83644c141f61bc4477cdd71ecdd90798",
"assets/assets/images/community/club/free/free_01.jpg": "c8a0285435c49d4f86e210bd54269f10",
"assets/assets/images/community/club/free/free_02.jpg": "9e1eba204d39e4c8bee0ee1b439bfd3a",
"assets/assets/images/community/club/free/free_03.jpg": "400540a83101921150245e46a8c62636",
"assets/assets/images/community/club/growth/growth_01.jpg": "e8e57ecbd124a073ade52f542d3e688c",
"assets/assets/images/community/club/growth/growth_02.jpg": "037e0b0e85d7aba2d9e5a71a4d3ee947",
"assets/assets/images/community/club/growth/growth_03.jpg": "61c78d7912571586c77d40bd02289569",
"assets/assets/images/community/recruit/recruit_01.jpg": "a165b2e5e772b464da535dedcbbcdd67",
"assets/assets/images/community/recruit/recruit_02.jpg": "cf9e87f9314be9e0754f812d5abf74b3",
"assets/assets/images/community/recruit/recruit_03.jpg": "7ee04b929bd649ee758d5a23d6fd8db7",
"assets/assets/images/community/recruit/recruit_04.jpg": "be576e2004e57f60ea2d39cfd586987a",
"assets/assets/images/community/recruit/recruit_05.jpg": "6ff69f3f0253c687d3009becec8fb781",
"assets/assets/images/community/recruit/recruit_06.jpg": "e02533aff5e2dc22f7d9e8229faba448",
"assets/assets/images/community/recruit/recruit_07.jpg": "c19dfed536ed16ec19156caee9086753",
"assets/assets/images/community/recruit/recruit_08.jpg": "ed92ecea1cfb0f338b4899224d419f91",
"assets/assets/images/community/recruit/recruit_09.jpg": "3ed1279c2df9f15bf62ca64c311263ec",
"assets/assets/images/community/recruit/recruit_10.jpg": "62c3c000d452490dd6cb0b5b2624fa16",
"assets/assets/images/community/recruit/recruit_11.jpg": "010dfea27a449c61dfd243c668826a40",
"assets/assets/images/community/recruit/recruit_12.jpg": "4b69eaec7b9632631166d9d77f9c88c0",
"assets/assets/images/community/recruit/recruit_13.jpg": "4f26bd8bd238e132fb680864806bd8d0",
"assets/assets/images/Group%25201171277220.svg": "471ecc8405e770163ac92a579764bae2",
"assets/assets/images/Group%25201171277221.svg": "e52d7ebd20b56623176aac24ec151e1c",
"assets/assets/images/Group%25201171277222.svg": "31f17bdc0792260a9b4cf6a472bdb90f",
"assets/assets/images/Group%25201171277223.svg": "111b10865691f3979ec875692879f644",
"assets/assets/images/main/main1.png": "4e553f9c81c49bfd3f26f0296a3ee750",
"assets/assets/images/main/main2.png": "24a173372cdd2eeadd25b7659b44346c",
"assets/assets/images/main/main3.png": "4da9541ac47294c8ef3702b17ad000ec",
"assets/assets/images/main/main4.png": "302baf78561d34795428715c31ecddc3",
"assets/assets/images/main/person.png": "82322a83d49d35122f989dc26380e645",
"assets/assets/images/main/position_01.png": "0f36d8beeda257e39d0c87c9ad06b482",
"assets/assets/images/main/position_02.png": "ea796f4bebe5ffac1334b968d46f5914",
"assets/assets/images/main/position_03.png": "e70a67e4bc66d0a0b13098f1ac5cb59e",
"assets/assets/images/main/position_04.png": "89b8a6989236290a537b9ebd2af52133",
"assets/assets/images/main/position_05.png": "722b567cc0226e6a15f8d5a80c368fb0",
"assets/assets/images/main/position_06.png": "7d630aa8917aecd2b660f261b178bf25",
"assets/assets/images/main/position_07.png": "56d3bd46ede5ca964e8f8e3579a20763",
"assets/assets/images/main/position_08.png": "9b019a6c4f62e99accdf9f820e6ae90d",
"assets/assets/images/main/position_09.png": "52a7963b40685cd525be2a27b7dd72ab",
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
"assets/assets/images/portfolio/aftereffects.svg": "206832f3c4bd3e27691d4d1bcf4aba2b",
"assets/assets/images/portfolio/figma.svg": "d682a8a6c98f4c0e801b6b45d5c34ded",
"assets/assets/images/portfolio/photoshop.svg": "4bee82caa32063692fd84e193ce6b494",
"assets/assets/images/profile.png": "2e634fe114605e97b8dfc04bbab80188",
"assets/assets/images/project/Aftereffects.svg": "b5beddccc15e9beb5235ef483610db3e",
"assets/assets/images/project/banner.png": "4e5f59915b32b2847d8b22d1c5f053f1",
"assets/assets/images/project/check_circle.svg": "ab8169567e786e56c3147a98ee6bddb5",
"assets/assets/images/project/detail.png": "e971174327fec2651ca5547aab548a67",
"assets/assets/images/project/discord.svg": "a67f2e7d64520042b8b5fafc5d703809",
"assets/assets/images/project/dog.png": "fe2bd4de3f722fd66b2eb9c31c1f1ec3",
"assets/assets/images/project/flutter.svg": "98c2bed8c8a13f216b521f5a6195d520",
"assets/assets/images/project/human.png": "31179e6d093aaeceff974aff995ba851",
"assets/assets/images/project/icon-delete.svg": "eb147970774fa1b462e0b37cc149183f",
"assets/assets/images/project/icon-person-disabled.svg": "73b107789d203278528902727c0245b8",
"assets/assets/images/project/nodejs.svg": "e58468ccd8fde1abf473ac9115703695",
"assets/assets/images/project/photoshop.svg": "ba06d9ff4a69076126b20fe3c18cc2bc",
"assets/assets/images/project/tool_figma.svg": "319dea2347d657e607805e6543d9102f",
"assets/assets/images/signupdone.png": "7c7cdf70cb9bb854b27abaf0c2b0bda8",
"assets/assets/logo/sfac_logo.svg": "474edce576ab09375ca3c1e54deef1a2",
"assets/assets/logo/spac_splash.png": "9d1281c9968e64bd64edbd0762758699",
"assets/FontManifest.json": "88c817103ed367e65a73dad63b4d6517",
"assets/fonts/CustomIcons.ttf": "c6d6486bb6f6e2a579e6e433b1045129",
"assets/fonts/MaterialIcons-Regular.otf": "91bb2ccedc4350e1ee53389d3825404d",
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
"index.html": "7c3aeff7a06d27ae22a046195b64ad39",
"/": "7c3aeff7a06d27ae22a046195b64ad39",
"main.dart.js": "bf31ae463661a6013f772b5532bd9796",
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
