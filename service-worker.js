var cacheName='activities-v1';
var cacheFiles=[
    'Coursework1.html',
    'lessons.js',
    'activities.webmanifest',
    'images/art.png',
    'images/badminton.png',
    'images/baseball.png',
    'images/basketball.png',
    'images/chess.png',
    'images/cooking.png',
    'images/dance.png',
    'images/music.png',
    'images/robotics.png',
    'images/swimming.png',
    'images/yoga.png',
    'images/header.PNG',
    'images/header1.PNG',
    'images/192.png',
    'images/512.png'
]

self.addEventListener('install',(e)=>{
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch',function(e){
        e.respondWith(
            caches.match(e.request).then(function(r){
                return r || fetch(e.request).then(function(response){
                    return caches.open(cacheName).then(function(cache){
                        cache.put(e.request,response.clone());
                        return response;
                    });
                });
            })
            );
        });