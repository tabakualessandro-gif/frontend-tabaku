
const caesarCipher = (str, shift) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    return str.split("").map(char => {
        const indice = alfabeto.indexOf(char);
        if (indice === -1) return char; 
        const nuovoIndice = (indice + shift) % 26;
        return alfabeto[nuovoIndice];
    }).join("");
};

console.log(caesarCipher("abc", 1)); 