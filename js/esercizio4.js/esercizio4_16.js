
const tronca = (num, decimali) => {
    const moltiplicatore = Math.pow(10, decimali);
    return Math.trunc(num * moltiplicatore) / moltiplicatore;
};

console.log("Tronca 3.14159 a 2 decimali: " + tronca(3.14159, 2)); 
console.log("Tronca 10.888 a 1 decimale: " + tronca(10.888, 1));   