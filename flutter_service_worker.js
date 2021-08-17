'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8f4a3103068d992669f388262ed6fbbe",
".git/config": "fd9184d12611b4cd51d82f1ff45bfdfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "918d063de4c55c1a963b72e2119374de",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5e068cd4f23e4e49480b02848d105f37",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "103ed824cd62e787e95d31b343c0eee9",
".git/logs/refs/heads/main": "103ed824cd62e787e95d31b343c0eee9",
".git/logs/refs/remotes/origin/HEAD": "24cb30faa68e628db8542113a9c53916",
".git/logs/refs/remotes/origin/main": "4d795b0ca51312754b7f4d2a40dd296d",
".git/objects/0d/9b6bbf3817093563fb5df10c09a61900a23a6b": "fc4be926697ba789a040d10133374ed9",
".git/objects/10/0177e3e0710560bc445e472dc1eaedb0085713": "c7ec2b5f9d1f0598748c5492a6d7935b",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/17aabbfba307d2c9278a7557a0080d0db09d05": "c5c62ac0d134e067e6bb9609a7a1b3dc",
".git/objects/20/e762818a9b853dce92516cc211238c450b2364": "cb0d6a49f1176095626e24fd74de5513",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/41/4868d7e63cb0de9af1986133ee603e05dd65a6": "b049636d29c1a1c51289d95ce00ca64d",
".git/objects/4a/b8f445c3a2f1c6bfa1afe362c3cc416ec2af9e": "047f68adcbb8131a78c92ccef2006c6d",
".git/objects/53/7378654c6727565d7fcfa221a6769b08d6b4af": "b2e0dfe6df3b1009ddc8fd7f87707ba5",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/80/71a8504d6182df5ab62018ce0c36ffa3403b4f": "f7db1e551fe7d67415688e9247c6d946",
".git/objects/89/5e1cb22dde0f863dfca299c1876d1850234866": "492eb9a268b83ce0498d491028779a97",
".git/objects/ac/bc976c86b8a16714b5a5d34acb9870172c9067": "91d13db5026c510c8779fa2089a41a9b",
".git/objects/b6/e5b6b66d67a8050ad892b475f684e5c71fbd71": "bbcde7793af3c7657a4357f63236a4c0",
".git/objects/bc/6cb5cbbb85ebe947086b3d503685deb2373d7b": "a2e5daa0c344619784b996ae1f6e5fa9",
".git/objects/bd/fd62b394caf89e613227d765a796065c77205c": "1a9ff8ed88535b144d8b9ca9e65902a0",
".git/objects/c5/2b66fb6661c433b4de922545511958c694079c": "0d434c673983f33f41d832ec5ee86013",
".git/objects/e6/b262f41bf10b561b9d0be153b1d26ca784f7f8": "dd690bba6d0676dec0f68bb4ef1a2c84",
".git/objects/e8/426ac20485e16d985a0aa23e43feab90b24ffd": "bec2b4a29c57337def753c1ee14b5c05",
".git/objects/f6/31c1f5731a82e63ae2b9eafd7619d81ee28362": "afbe00f571d0758938e04c07cc69df3f",
".git/objects/f7/cf492c0862acb85a5763e7e55477fa04be9a03": "61892e0bf0cf96c7e7b26336cd9cb135",
".git/objects/pack/pack-392fc173d932f61955c7b5ff38b6af013da98968.idx": "c2eb32b78036a06ccfcf01d97a6bc63d",
".git/objects/pack/pack-392fc173d932f61955c7b5ff38b6af013da98968.pack": "783560fb6b08a3001e236fcecc8a0aed",
".git/packed-refs": "29eb3830d27585f55d08b82bcde1632c",
".git/refs/heads/main": "9e245312d5191f581edbb46a55f43b24",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9e245312d5191f581edbb46a55f43b24",
"assets/AssetManifest.json": "146ac22845df6bdce91a29fdefd42220",
"assets/assets/sky.jpg": "642e3edcb1ecc294c7053685cedb20a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "43d7635cad31500023dfae5c48cf073c",
"/": "43d7635cad31500023dfae5c48cf073c",
"main.dart.js": "8fc88cc30e2ccb95b3b46a4d0b1ae75f",
"manifest.json": "7268d731e85213fad6b35f4c3b52f2e6",
"README.md": "b3b5dbabe400d05d0993deed73443279",
"version.json": "aaafa928a4f8616604eca12d830fe765"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
