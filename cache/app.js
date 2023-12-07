/* if(navigator.serviceWorker){
    navigator.serviceWorker.register('./app.js')
} */
caches.open('prueba_1').then(e => {
    e.add('./index.html')
})
caches.open('prueba_2');
caches.open('prueba_3');
caches.open('prueba_Default');

caches.has('prueba_1').then(e => console.log(e))
caches.has('prueba_4').then(e => console.log(e))

/* example */
caches.open('cache_V1').then((caches) => {
    caches.addAll(
        [
            './index.html',
            './texto.txt'
        ]
    )
})