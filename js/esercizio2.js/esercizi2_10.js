let a = 5;
let b = 10;

console.log(`Prima dello scambio: a=${a}, b=${b}`);

a = a + b; 
b = a - b; 
a = a - b; 

console.log(`Dopo lo scambio: a=${a}, b=${b}`);