
const curry = (f) => (a) => (b) => f(a, b);


const somma = (a, b) => a + b;
const sommaCurried = curry(somma);
console.log(sommaCurried(3)(4)); 