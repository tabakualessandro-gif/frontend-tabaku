
const fattoriale = (n) => {
    let risultato = 1;
    
    
    for (let i = 1; i <= n; i++) {
        risultato = risultato * i;
    }
    
    return risultato;
};


console.log("Il fattoriale di 5 è: " + fattoriale(5));  
console.log("Il fattoriale di 3 è: " + fattoriale(3));  
console.log("Il fattoriale di 0 è: " + fattoriale(0));  