onmessage = function(message) {
    let sum = 0;
    for(let i = 0; i < 500; i++){
        sum += i;
        postMessage(sum)
    } 

    console.log(message);
}