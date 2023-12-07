const caja = document.getElementById('caja')
const contenedor = document.getElementById('contenedor')

caja.addEventListener('dragstart',()=>{
    console.log("drag start");
})

caja.addEventListener('dragend',()=>{
    console.log("drag end");
})

caja.addEventListener('dragover',()=>{
    console.log("drag over");
})


caja.addEventListener('dragleave',()=>{
    console.log("drag leave");
})

caja.addEventListener('dragenter',()=>{
    console.log("drag enter");
})

caja.addEventListener('drop',()=>{
    console.log("drop");

})

contenedor.addEventListener('drogstart',()=>{
    console.log("drop start");
})

contenedor.addEventListener('dragleave',()=>{
    console.log("drag leave");
})

contenedor.addEventListener('dragenter',()=>{
    console.log("drag enter");
})

contenedor.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log("drag over");
})

contenedor.addEventListener('drogend',()=>{
    console.log("drop end");
})

/* princpal */
contenedor.addEventListener('drop',()=>{
    console.log("drop");

    contenedor.appendChild(caja)
})