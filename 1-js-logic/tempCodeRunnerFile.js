const input = require('prompt-sync')();

let num1 = 1; 
let num2 = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let i = 0; i < 10; i++) {
    console.log(num1);
    
    let proxNum = num1 + num2;
    
    num1 = num2;
    num2 = proxNum;
}