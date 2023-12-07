/* const worker */
const worker = new Worker('./worker.js')
const sumButton = document.getElementById('sumButton');
const bgButton = document.getElementById('bgButton');

sumButton.addEventListener('click',(e) =>{
    /* let sum = 0;
    for(let i = 0; i < 500; i++){
        sum += i;
        alert(`The final sum is ${sum}`);
    } 
 */
    /* worker */
    worker.postMessage('hello world')

});

worker.onmessage = function(message) {
    console.log(message);
}

bgButton.addEventListener('click',(e) =>{
    if(document.body.style.background !== "green"){
        document.body.style.background = "green";
    }else{
        document.body.style.background = "blue";
    }
})
