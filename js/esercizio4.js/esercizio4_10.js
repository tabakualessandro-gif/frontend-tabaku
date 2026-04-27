
const invertiStringa = (stringa) => {
    let stringaInvertita = "";
    
   
    for (let i = stringa.length - 1; i >= 0; i--) {
        stringaInvertita += stringa[i];
    }
    
    return stringaInvertita;
};


console.log("Inverso di 'Alessandro': " + invertiStringa("Alessandro")); 
console.log("Inverso di 'Roma': " + invertiStringa("Roma"));            
console.log("Inverso di 'Javascript': " + invertiStringa("Javascript")); 