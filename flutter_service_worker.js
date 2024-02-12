'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "64caba6f89349ceadd3107172ba284fd",
"assets/AssetManifest.bin.json": "451f282f3638f31ec5abe440d345c121",
"assets/AssetManifest.json": "44db20fcfbd274740a337bae9e30ccd7",
"assets/assets/avatars/avatar_01.svg": "a4a6d9d8983b15b6efa61258510199b8",
"assets/assets/avatars/avatar_02.svg": "1ece0da75f7f397a5fde42d98b944286",
"assets/assets/avatars/avatar_03.svg": "ab73238766c53bb2a94d30087369c8c5",
"assets/assets/avatars/avatar_04.svg": "0fccb757c9561a3bff482f25a8b3c224",
"assets/assets/avatars/avatar_05.svg": "133b61f2c170de0c37aa6b4ce89865af",
"assets/assets/avatars/avatar_06.svg": "4997d3eed745bf93ab2c66f11f691f9b",
"assets/assets/avatars/avatar_07.svg": "0150f92b2e019e36cf2344187c927986",
"assets/assets/avatars/avatar_08.svg": "bc1f44f3766f9957380c28fba383f26d",
"assets/assets/avatars/avatar_09.svg": "cd2f12d962e1dd005886f6e59d26b953",
"assets/assets/avatars/avatar_10.svg": "3aa4e880344117b8a7c2c250a46ce591",
"assets/assets/avatars/avatar_11.svg": "5e4cfce5368cf1e12804aea7f61d8d6c",
"assets/assets/avatars/avatar_12.svg": "801847cd202126b45aa3cf635ac3c0fe",
"assets/assets/avatars/avatar_13.svg": "4b481ad521080e89d1842fbeb906856f",
"assets/assets/avatars/avatar_14.svg": "1b02a2a5e3cdb26ca172099b366592b7",
"assets/assets/avatars/avatar_15.svg": "b207f98d7244e43086e01f9b01f01384",
"assets/assets/avatars/avatar_16.svg": "f5fd0de7bfe297c339e78095ab655299",
"assets/assets/avatars/avatar_17.svg": "b263e5a455e1ebcee0070c54d77ddf49",
"assets/assets/avatars/avatar_18.svg": "5a58e6f7a3fcd9b71d3c628d82396ca8",
"assets/assets/avatars/avatar_19.svg": "a1607cb079694f6fd5c456c0b45a432f",
"assets/assets/font/Pretendard-Bold.otf": "e93f79700405e1b4c1b3e70d8c378ca4",
"assets/assets/font/Pretendard-Medium.otf": "9ac30a1a68a5140a58b23aaf8025f1db",
"assets/assets/font/Pretendard-Regular.otf": "46b0c48afd8b0ddc2ed4fcbb2df81d8b",
"assets/assets/icons/account.svg": "7935009ad178b6fe3e49935a74570889",
"assets/assets/icons/add.svg": "2cd6eeef89dcc901ee14b751b5d6f1ec",
"assets/assets/icons/add_picture.svg": "e30ba28ac5ab69cc819c30f0b632fa77",
"assets/assets/icons/arrow_back.svg": "09f3406526b982c1349d688931114005",
"assets/assets/icons/arrow_down.svg": "5eafad453e3495f32634814a271938c5",
"assets/assets/icons/arrow_right.svg": "0d4b506e69f0448444edbbc6e00f2a61",
"assets/assets/icons/arrow_up.svg": "debf2eea8994cf6a6175f4c8096c6fd1",
"assets/assets/icons/bell.svg": "2cb3bee16ea379ea105972409385680d",
"assets/assets/icons/bookmark.svg": "73a1a4cd0f77083b6f5589756a817a6e",
"assets/assets/icons/bookmark_filled.svg": "16ee62502b3effe9358ebd3d40096a6b",
"assets/assets/icons/bookmark_outline.svg": "ef1d476222ac7bdab12b76e478d8b54b",
"assets/assets/icons/calendar.svg": "cf9e3c53129486e7678f0aef624c7cc1",
"assets/assets/icons/chat_grey.svg": "bd866ad27aa52ba5a3ca4850147a80f8",
"assets/assets/icons/chat_white.svg": "00e8d624e8dab91584c207918ebad24c",
"assets/assets/icons/check.svg": "75c52bf5b463cb7d209d71d3437f62f3",
"assets/assets/icons/check_blue.svg": "1bfca0dfab99195410986c30abb1047a",
"assets/assets/icons/close.svg": "d439efb5202b0ef3f5dd964281b0ac1c",
"assets/assets/icons/folder.svg": "5c6e73a1b4c2c3166d11c09c6c50446a",
"assets/assets/icons/heart.svg": "a8a26f1f4aaba2fab6d2585c15a5af2f",
"assets/assets/icons/heart_red.svg": "e6491f51202a6f013a074f27cc68fd94",
"assets/assets/icons/heart_white.svg": "7931e13102e22ab4590ecb5981f99fc8",
"assets/assets/icons/link.svg": "f4121e0917591c3d6564ac2d659ddc3b",
"assets/assets/icons/lock.svg": "8330b5fad3c125e792da41784f517a36",
"assets/assets/icons/log.svg": "f9d8decdde2811668922d97d8fac2bf0",
"assets/assets/icons/logout.svg": "4cd8f5b59b3c73c2829232105840253f",
"assets/assets/icons/menu_burger_off.svg": "aea5c399baba07565ceedbab15666ddb",
"assets/assets/icons/menu_burger_on.svg": "17af6ad0df8e57ec895df02a82c315b7",
"assets/assets/icons/menu_dots.svg": "7237bb84a66554b6fbaf487e0e9fdf23",
"assets/assets/icons/menu_tile_off.svg": "76d72d5ac2d5d74710ba0edbc3edfbe5",
"assets/assets/icons/menu_tile_on.svg": "4b0ab3c0251344ec5d14c597dcd2dd07",
"assets/assets/icons/mortar_board.svg": "71ff0acfaf374af66804b8ab44f8a55c",
"assets/assets/icons/notification.svg": "fcbe1b06f4b8f21e334becdbedfeaf30",
"assets/assets/icons/padlock.svg": "1406c53718a13e13b94a4ed8f9f68dca",
"assets/assets/icons/pencil.svg": "e809e38d8dc35bb9cf47889cf2e19034",
"assets/assets/icons/pencil_grey.svg": "99db2db19bf120d8dd089da68ad08c55",
"assets/assets/icons/polygon.svg": "e22c659e0939c6f4a243f6057596e0a2",
"assets/assets/icons/privacy.svg": "3eaa29cb24aeede798c0ba08cec9fe71",
"assets/assets/icons/profile_picture1.svg": "85d7c05eec0702cffb432140510637c9",
"assets/assets/icons/profile_picture10.svg": "91409f71c2f503d8bf20afaa4cd13075",
"assets/assets/icons/profile_picture11.svg": "1964e678a06173dad6399d9f5c5c9e98",
"assets/assets/icons/profile_picture12.svg": "76446862c517bd5185fd49b28a9ddf84",
"assets/assets/icons/profile_picture13.svg": "6c9793027e462be31817294faf5b80e0",
"assets/assets/icons/profile_picture14.svg": "9260461dc28c9e991b1dc38114e23409",
"assets/assets/icons/profile_picture15.svg": "0faa66d33ed333fbe8d0f280f760e794",
"assets/assets/icons/profile_picture16.svg": "1666995e9fa0a5a9d9ad779bf244192d",
"assets/assets/icons/profile_picture17.png": "a38df57f58c7c21233885180be2276d1",
"assets/assets/icons/profile_picture17.svg": "cbdbef93dbdc82e9aa924a67140cf1f2",
"assets/assets/icons/profile_picture18.png": "e92bec2c180136cc514251db1a630868",
"assets/assets/icons/profile_picture18.svg": "cf6546398733d118350fea8c00fdfa36",
"assets/assets/icons/profile_picture19.png": "e58fe56e23b2862ca1566f55c2c2f72f",
"assets/assets/icons/profile_picture2.svg": "b6403e1f0697a1e5e72e81dd0105dbbe",
"assets/assets/icons/profile_picture3.svg": "3736066b4c02fb74a4da4954d82565ae",
"assets/assets/icons/profile_picture4.svg": "bfb516d3b5ba82c6b3286b930aaa1def",
"assets/assets/icons/profile_picture5.svg": "25742cb607c7c9950cee3e5f816a8ea3",
"assets/assets/icons/profile_picture6.svg": "bb72bee97f89de3505ea7f1f304b42e4",
"assets/assets/icons/profile_picture7.svg": "46a4f6c5dae6c64911399f08407225b6",
"assets/assets/icons/profile_picture8.svg": "7370fd850649b375bee7b284b746949e",
"assets/assets/icons/profile_picture9.svg": "5ac5b1336a2a2aabd7f41a6d84accaa5",
"assets/assets/icons/project.svg": "96c04894f6c6557658525cf6e3061e6b",
"assets/assets/icons/qna.svg": "62db2d12d543581e2710d42d1a9028f8",
"assets/assets/icons/reply.svg": "75104054578ee89ff3f914f0fc692819",
"assets/assets/icons/search.svg": "4de30dfd1f94ba3acc87be5339edc784",
"assets/assets/icons/setting.svg": "76dad7f51e06cb5083df32bfe2bc4680",
"assets/assets/icons/sfac_program.svg": "12418e796729eee3fae24e82df456706",
"assets/assets/icons/share.svg": "ab85cd575e8578349d6cf357f4e44a15",
"assets/assets/icons/star.svg": "8ed492e61d8f894d24a8161c1135dc80",
"assets/assets/icons/star_outline.svg": "312b8ad68bf34649e3217f34344e43fd",
"assets/assets/icons/terms.svg": "09448dee31978625da08e821c880e948",
"assets/assets/icons/withdraw.svg": "3d981c8b035ed54bae2c3aa6b2109ba5",
"assets/assets/images/1.png": "1b3017a0088a18962cd1ffc07ae59c2f",
"assets/assets/images/2.png": "5b3e950c3f8d6b546550cfbb4b85b222",
"assets/assets/images/3.png": "a420491288c65a1b9d6bd6a8d76d98ac",
"assets/assets/images/4.png": "5de785297dcdc4176f369c7e2f5d0bbb",
"assets/assets/images/basic_profile_sm.png": "1148a899a737d34eb43b62e105d1e349",
"assets/assets/images/blue_bg.png": "240e02ca1adaf39962079cf14311cd34",
"assets/assets/images/character/character_main.png": "44c7e41b1808fc2f4788b12dd21d680b",
"assets/assets/images/check.png": "9ed54d3d76b793b59c0dfd196be5aa28",
"assets/assets/images/chevron-down.png": "ca8ab47af2ed32de7cdbe335c8e7edd2",
"assets/assets/images/Group.png": "8e265b7f9108b58f650c07a3f40e5010",
"assets/assets/images/image%25201063.png": "6e253a718e3560b1ca51dd5cfb2d211b",
"assets/assets/images/kakao.png": "322e86b27476b9d3ed96ac71e3b3b400",
"assets/assets/images/logger/css.png": "c25adc55c84f31dc5fdc7c1c90aa8b92",
"assets/assets/images/logger/javascript.png": "9ca880aab25ba8b32739f0984d049152",
"assets/assets/images/logger/log_king.png": "642acc93b4ecc54bfc680e283e4b3da1",
"assets/assets/images/logger/qna.png": "f749f909cf57fba612ce0c525631b7bb",
"assets/assets/images/logger/react.png": "679c5abdeb8ed8ef2f61748bb35a4059",
"assets/assets/images/logger/star.png": "7c8ead5a47878870afda9d717021eeed",
"assets/assets/images/logo_blue.png": "86f1b2697f46ac58ea7791d16c4df81e",
"assets/assets/images/logo_white.png": "f91b8df55a4a33f1c2f09bca16fdc84a",
"assets/assets/images/log_cover.png": "a5ec5653f34fcdd5cd02c864716cde19",
"assets/assets/images/log_default_thumbnail.png": "edb40d276d89a738de3f53edb803ef0e",
"assets/assets/images/log_finish.png": "cf7737e33d38ee1594bd49efea04668f",
"assets/assets/images/log_thumbnail.png": "66cecb31deb39ebd8f8fd183fcccce1c",
"assets/assets/images/log_thumbnail_2.png": "b4af9be69f9841cb9c5753f8c7ba437e",
"assets/assets/images/log_thumbnail_3.png": "186c793da57cb8f4711f273f643abcd7",
"assets/assets/images/log_thumbnail_4.png": "05538bcf897ffa33a005f07f89da2a86",
"assets/assets/images/more-vertical-f.png": "9f48ef3f87b7884115dfeafe81832e7a",
"assets/assets/images/mypage_log_image.png": "66cecb31deb39ebd8f8fd183fcccce1c",
"assets/assets/images/no.png": "b2f3c3a2c83d5de8aad9f6734ed6eaf8",
"assets/assets/images/polygon.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/images/propose/all_offer.png": "2e53e0123f482a6fc32c77059a95e3da",
"assets/assets/images/propose/no_offer.png": "f3e3758dcff80065b706aea3a32a7a0b",
"assets/assets/images/propose/only_apply.png": "a8f0b3ed0693f5d904338add5782afcd",
"assets/assets/images/propose/only_project.png": "6776641dc952c4f2a0e4e9e07899d2df",
"assets/assets/images/Python-logo-notext%25201.png": "e37d417ea8d3024de9980412859adf37",
"assets/assets/images/Q.png": "af06d0ecb4b9487cffa3a91383827f32",
"assets/assets/images/Rectangle%25201%2520(2).png": "c9b16afff26f7e2c1c2e513e0c13756f",
"assets/assets/images/Rectangle%252034626337%2520(Stroke).png": "769c67fc6eb22d0c6c5b7eda21b8ed10",
"assets/assets/images/signup_complete.png": "7a3a2b842d49e9afc8f7eb3ff2a8eb0a",
"assets/assets/images/Union%2520(1).png": "cd85cb228f0037eced6f5f2dd707b41e",
"assets/assets/images/Vector%2520(1).png": "6671a35288e7138a038c54191eb99091",
"assets/assets/images/Vector%25204850.png": "0039658567771a50563dbb10813755d4",
"assets/assets/images/Vector.png": "eeabf117d793512ac2510e798ed686c3",
"assets/assets/logo/sfacfolio.svg": "a53710482cf77a97fbfb5ed8686a0d8f",
"assets/assets/logo/sfaclog_logo.svg": "5fc5355771c31a24ce5f79b8d581a814",
"assets/assets/logo/sfaclog_main.svg": "ce473dc5e4481168038fdbd3f3a5c765",
"assets/assets/logo/sfaclog_min_logo.svg": "22bc6d74dc132b71bb4e09b45ae56082",
"assets/assets/welcome.json": "25171bf4cee6ed45d5c568e239668635",
"assets/FontManifest.json": "906966a38ec3a96d06a2fa4735586d3c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "59f070e80194a11a280c19e4d89c5e1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/packages/widgetbook/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/packages/widgetbook/assets/logo.png": "445292cbfde4f60d5b3dca36d0d6dfb2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "89980bcfc3a0b0e60e8b4aed584ed076",
"canvaskit/canvaskit.wasm": "76abec47a6c7ca563875a62c73c820cd",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "921cbff420bab392aebcbc8556e79107",
"canvaskit/chromium/canvaskit.wasm": "11ddd2529ca0ac86ddd651e28120b9f0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "a39c27eaf7e21920a53a03dec29cae2c",
"canvaskit/skwasm.wasm": "d5e67e43149dfd4c7fa5ff7df0fa7921",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d7e622f3717fe92a17f995990a3bda6",
"/": "6d7e622f3717fe92a17f995990a3bda6",
"main.dart.js": "939b214d1d947c38eeb9b71769788be7",
"manifest.json": "fecf779129226ed5421537acc1c4b24a",
"version.json": "0f52e74c52124798631c81cf2005fdc9"};
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
