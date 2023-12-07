
const memorization = (fn)=>{ /* fn funcion como parameytro */
    /* objeto vacio */
    let results = {};
    /* funcion */
    return (arg)=>{
        if (!results[arg]){ /* si no existe el indice 1... */

            console.log(`Resultado ${arg} no guardado...`);
            results[arg]= fn(arg);
        }else{
            console.log(`Resultado ${arg} ya se guardo...`);
        }

        return results[arg];
    }
}

/* const mul2 = memorization(a => {
    return a * 2
})

console.log(mul2(1));
console.log(mul2(2));
console.log(mul2(3));
 */
/* con promesas */

console.log("Con Promesas...");
console.log("Execute!");
const request = async () =>{
    let res = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    let json = await res.json();
    return json;
}

request(1).then(r => console.log(r))
request(1).then(r => console.log(r))
/* 
function mult(a) {
    return a * 2;
}

console.log(mult(4)); */