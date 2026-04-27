
const isPrimo = (n) => {
   
    if (n < 2) return false;

  
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
           
            return false;
        }
    }


    return true;
};


console.log("Il numero 7 è primo? " + isPrimo(7));   
console.log("Il numero 10 è primo? " + isPrimo(10)); 
console.log("Il numero 2 è primo? " + isPrimo(2));   