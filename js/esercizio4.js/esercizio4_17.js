const ripetiFino = (str, max) => {
    let risultato = "";
    while (risultato.length < max) {
      
        risultato += str[risultato.length % str.length];
    }
    return risultato;
};