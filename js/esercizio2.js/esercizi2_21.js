const distanzaKm = 350;
const consumoKmLitro = 15;
const prezzoCarburante = 1.85;

const litriNecessari = distanzaKm / consumoKmLitro;
const costoTotale = litriNecessari * prezzoCarburante;

console.log(`Per un viaggio di ${distanzaKm} km, il costo totale è di €${costoTotale.toFixed(2)}`);