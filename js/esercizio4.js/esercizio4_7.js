
const contaVocali = (testo) => {
    const vocali = "aeiouAEIOU";
    let contatore = 0;

    for (let lettera of testo) {
        if (vocali.includes(lettera)) {
            contatore++;
        }
    }

    return contatore;
};


console.log("Vocali in 'Alessandro': " + contaVocali("Alessandro")); 
console.log("Vocali in 'Javascript': " + contaVocali("Javascript")); 