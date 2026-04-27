
const applicaDue = (valore, funzione1, funzione2) => {
   
    const primoRisultato = funzione1(valore);
    
    const risultatoFinale = funzione2(primoRisultato);
    
    return risultatoFinale;
};


const raddoppia = (x) => x * 2;
const aggiungiUno = (x) => x + 1;


const finale = applicaDue(5, raddoppia, aggiungiUno);

console.log("Il risultato finale è: " + finale); 