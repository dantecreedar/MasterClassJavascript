const video = document.getElementById('video');

addEventListener('visibilitychange', function (e) {
    // bodycl
  /*   console.log(document.visibilityState); */
    if(document.visibilityState == 'hidden'){
        console.log("pause");
        video.pause();
    }else if(document.visibilityState == 'visible'){
        console.log('play Esta activo');
        console.warn("Estuvo en Modo Offline");
        const marcador = document.getElementById('marcador');
        console.marcador
        video.play();
        marcador.innerHTML = "Online"
    }
});