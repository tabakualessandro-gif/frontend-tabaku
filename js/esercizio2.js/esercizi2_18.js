const n = 472;
const centinaia = Math.floor(n / 100);
const decine = Math.floor((n % 100) / 10);
const unita = n % 10;

console.log(`Centinaia: ${centinaia}, Decine: ${decine}, Unità: ${unita}`);