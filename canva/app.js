const lienzo = document.querySelector('canvas');
let context = lienzo.getContext('2d');/*  contexto de grafico */
let stk= document.querySelector('canvas').getContext('2d');

/* objeto */

context.fillStyle = "cyan";
/*               xi  yi  xf  yf                */
context.fillRect(20, 20,100,50); /*  sus parametro se escriben como cordeenadas */
stk.strokeStyle = "red";
stk.strokeRect(135, 20, 50, 50);
stk.lineWidth = 5;
stk.strokeRect(205, 20, 50, 50);