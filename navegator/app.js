const contenedor = document.getElementById('contenedor');
const contenedor_1 = document.getElementById('contenedor_1');
const contenedor_2= document.getElementById('contenedor_2');

console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.language);
console.log(navigator.cookieEnabled);
console.log(navigator.onLine);
console.log(navigator.platform);
console.log(navigator.plugins.length);


let info = document.createElement('span');
let info_1 = document.createElement('span');
let info_2 = document.createElement('span');

info.textContent = navigator.appName;
info_1.textContent = navigator.appCodeName;
info_2.textContent = navigator.language;


contenedor.appendChild(info);

contenedor_1.appendChild(info_1);

contenedor_2.appendChild(info_2);