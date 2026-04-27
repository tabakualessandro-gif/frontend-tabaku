
const sommaFinoA = (n) => {
    
    if (n <= 1) return n;
    
   
    return n + sommaFinoA(n - 1);
};

console.log("Somma fino a 5: " + sommaFinoA(5)); 