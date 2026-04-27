const euro = 100;
const TASSO_USD = 1.09;
const TASSO_GBP = 0.86;
const TASSO_JPY = 163.50;

console.log(`${euro}€ equivalgono a:`);
console.log(`${(euro * TASSO_USD).toFixed(2)} USD`);
console.log(`${(euro * TASSO_GBP).toFixed(2)} GBP`);
console.log(`${(euro * TASSO_JPY).toFixed(2)} JPY`);