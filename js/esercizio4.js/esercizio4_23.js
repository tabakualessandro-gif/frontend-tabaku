const isPangram = (frase) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const minuscolo = frase.toLowerCase();
    return alfabeto.split("").every(lettera => minuscolo.includes(lettera));
};