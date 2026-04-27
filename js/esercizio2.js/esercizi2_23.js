const carattere = "e".toLowerCase();
const isVocale = carattere === 'a' || carattere === 'e' || carattere === 'i' || carattere === 'o' || carattere === 'u';

if (isVocale) {
    console.log(`Il carattere '${carattere}' è una vocale.`);
} else {
    console.log(`Il carattere '${carattere}' è una consonante.`);
}