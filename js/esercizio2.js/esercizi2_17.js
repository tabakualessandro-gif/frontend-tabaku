const a = 10, b = 15, c = 20;
const isValido = (a + b > c) && (a + c > b) && (b + c > a);
console.log(`Il triangolo è valido? ${isValido}`);