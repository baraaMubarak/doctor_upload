'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "4377608ac78082587f9592d068a3b202",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4c9e3fe763b32e266669fc20be505981",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2c5d598343e900ed12a959f8c0bf7d31",
".git/logs/refs/heads/master": "2c5d598343e900ed12a959f8c0bf7d31",
".git/logs/refs/remotes/origin/master": "719bb51c93302f0933b8a7164dc3a94b",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/c2907e3a60fc0cb4fe20e186bf403628591a8b": "dc847337f37957c4b684b9e94deb5582",
".git/objects/12/ee386e9f8e92892a023cb89bab900261b302ee": "5a2e3c15c15dfac38de349e3d1720fe1",
".git/objects/19/45ce5fde8e638a257ece98c8cad610f4fc6dfb": "c10be6ba7ff2d9552174fb6073c2aa95",
".git/objects/1a/1791474ea6a7d2fcd40bec512865dfb4b3eb90": "15b67ce270c7bcd573218e377ab2f06a",
".git/objects/1d/be18d83c9f0de0a033b69b738388d4319112d2": "b081d9d6f60075bb409a66538af23d63",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/27/7e4fd76bd1509f2906d6cfea73c8e27c8c0669": "ee5a67794a6f52ad0e9861be3acff7ba",
".git/objects/2c/97eeadffe1a34bd67d3ff1c3887fd53e22c2ca": "083284edbfcb5640ad9f2ae180e0b94b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/ae4d68c005aac8c53722fc4d081725063c82eb": "d7d0d362cdf11d381d37d30e41795c41",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/6736c9fa067997359bede0da49531d44e8796a": "4584ff9e464d11eef68329a983b7ab76",
".git/objects/40/67a749f595dc1055236b2348e44f0c06486511": "a4642e0833997d19d042df8a7b964933",
".git/objects/40/a068b84b0c76f7c5e337efaaf29d561a21a29d": "edecca96a65faf5dc9fd2a06e0f81e78",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/96092db0ea791e64459a4f49025dc3bc46d114": "b9d14040c04353112f806b0ebb59efef",
".git/objects/4f/6ffe5539b6dd3917d36aad3993da18cd2cbf4c": "eedfe9922a66250e8bc03c3734f58150",
".git/objects/52/84c00c195750151b12887ac8c3634162bb0fa6": "58c31d4158a78c338cbf40fc9fbbc887",
".git/objects/57/fa6501497e5d16918002240829d8c28200fd0a": "c0dafa3615f24ef9112a02c0b1278ea9",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/051a7e45883ccebdf04eb74fa02cf059acd998": "260a2fd96e80ee682d66179f2f657ba5",
".git/objects/78/171d7bf93123ab3afeab7162df4006b364d289": "a5be21ca6745106a5b1524c7cee300f3",
".git/objects/80/689477cb5665b1e790871e0de3ad1349788e2c": "861ac09b08c71041a6c906bd673ce59f",
".git/objects/80/6a167f4291819ed397ea2bb78d374d909a3002": "0dbac5c343e7b9357bfb58b29d9500f7",
".git/objects/80/6df47e750cec389b7dd4593c49cb3416e3ae41": "95585923010e7a1474df80d07d35c073",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/7821bce73228ae770c1f1a9015aff640973cbd": "6424be85d0c0b2dea9fc57401a6e6a4e",
".git/objects/86/a96d388e169a1627cbf11541736a88f511efba": "ba000a899067d79f2a8def9b6c82892e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8ca81bea670f680383a902d714ccf26e09bd6b": "25cb29c0706775798f5a860485c1c44c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/1b96c3c3bb7c25100851a0d10eb5c62ebb5dc1": "65e1bc055686a589f423375885561f33",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/96/cc8c80b9236a07400b6188a703ee3878caff69": "a07180bfe799aa7522f885a889953ba5",
".git/objects/96/ce0d43c4395e7651b75339bbb58ce51e2b2add": "12744d8453c5db3dc8703f3582bea32d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/6ad23d8b2d60f80b926da0d5798c18a526e3c4": "d6e6af0c9e7802be3aeccf8d007aa520",
".git/objects/9f/7cc3e5b6564af43f1f27bdf9456974e0ad58ae": "729684003cb7f6a2f01fb4473d06b351",
".git/objects/a5/4b2037ec53555051071d8f7015bd2ce7ce4276": "bfccebd6feac63a74be3168918ad1e06",
".git/objects/a6/9499308b2be908588f2da949a7231b004bc758": "45c23b96b44bfa65a65632a838cd1636",
".git/objects/a8/7fde2816ab60b1e2b5abd5f6aaef22912e1b0a": "ef473dd2ddaeb3fdb1da2fbb301b8c78",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/ea066a4af5c795f7140104615198326bf467f0": "b6b8fd1f18014fa94de2cd69523bc54a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/d7f4c1fb2e9330e8f4569c3b4191689deb3447": "82404bb3eeeb2ed464d4b97f1b4f64e7",
".git/objects/c0/676505520b1a49aa8dad966ba0e12847e5aa77": "eb0d353f61d98f946bf1f063194daa28",
".git/objects/c1/a86762b9ee29c7822652321e3e6be56c3259a8": "c471167b41b7a54804ee351d3f9303ea",
".git/objects/c3/eff0c5a56678872289782e6ab7e02ae047ff1c": "01b116bb2edf3ddcb0ab4873c4459519",
".git/objects/c4/792c416b09aea429e5426b332e0cea956ec620": "092334f9af5c98fdc55c09d91c80720c",
".git/objects/c6/119aed76b755065a15ab7f6a5c301bae37a2d8": "6848c7ab99808baff26b4eac0faf8fb3",
".git/objects/c7/df2c719bc84268ad193654ad47e46152430098": "99bd520fa264062538a44f73c0b8ed8a",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/43f340d228380d0809b446083dfc066e5de60a": "5017d083e1bac03da9e48edb5c70a5b7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/5a5d32fc5ee971a2fc24054a4fb39739965289": "a41886f697e11aff0cab6801ad81c010",
".git/objects/e1/b12089c480af41759cde1175509a5824d396e1": "646bdf8706dccaefb793b6bbbd04167d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/9284894662e382c79510541e3f40ec0bd92d19": "8408ebf00a73bc0b7c4a7e0203ef4a51",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/eb68c309f01ea584c0351eb7ba2b367a8a5498": "6f141b0cf7e209c3fb661a364efa69a0",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/f12a7974f27bac5a6222e71de9c28574a88ab2": "f9adda9b94bf8b8b3c1adb3985639c5e",
".git/objects/f8/46ffe06cc2e9ba4e34a0655b9c9ecf0d956091": "b7afb01be50478d8003c32063397afb5",
".git/refs/heads/master": "069464c7d5e915caa42bcb7423c72225",
".git/refs/remotes/origin/master": "069464c7d5e915caa42bcb7423c72225",
".idea/caches/deviceStreaming.xml": "a36404bf7de5398fe2c0ecef4633a4e0",
".idea/misc.xml": "32297c961550157ed585d110b0b856d1",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/runConfigurations.xml": "783dfb3ebd10cf6acbdc3f07212ad78e",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "b63e42328232dee62971be6ebde2af40",
"assets/AssetManifest.bin": "4e42792492fd15c26d18992953566433",
"assets/AssetManifest.bin.json": "621728e48f491be6ea47e9f3e292608b",
"assets/AssetManifest.json": "173bc5ba3756805a43429f15cf003517",
"assets/assets/fonts/El_Messiri/static/ElMessiri-Regular.ttf": "0dfae81209fc5b5e0c3cff63db36b31b",
"assets/assets/fonts/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/assets/images/background.png": "92ddc4a4968e687aa6954249180ac9ed",
"assets/assets/images/doctor.png": "ea660858a1bdee8b37d746aeea7bfd59",
"assets/assets/images/illustration-1.png": "5ad69c7624875b76c84eebb06806ff46",
"assets/assets/images/illustration-2.png": "9f8a806312ecfe03313dabe5cf70a63f",
"assets/FontManifest.json": "53ac93a1fe41b69fa02f1e08d251a2e1",
"assets/fonts/MaterialIcons-Regular.otf": "784546430ff988c47bab8607fd38552d",
"assets/NOTICES": "51b1fe1d6644812e76eea6aff1f8f184",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2b40aa2a3c0fa5886013541e119ed8c6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "adec7711fbe73653beef692062c0e8a2",
"/": "adec7711fbe73653beef692062c0e8a2",
"main.dart.js": "93ff2a5cca9ec699422f005082d48852",
"manifest.json": "e253dc181279f4bef01b7a40d1f59b25",
"version.json": "3c401418eb433df95fa3ef46e81e780b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
