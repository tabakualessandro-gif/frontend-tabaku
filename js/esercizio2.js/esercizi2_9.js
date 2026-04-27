let secondiTotali = 3661;

let ore = Math.floor(secondiTotali / 3600);
let minuti = Math.floor((secondiTotali % 3600) / 60);
let secondiRestanti = secondiTotali % 60;

console.log(`${secondiTotali} secondi corrispondono a: ${ore} ore, ${minuti} minuti e ${secondiRestanti} secondi.`);