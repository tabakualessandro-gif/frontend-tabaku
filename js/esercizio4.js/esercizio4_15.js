
const minMax = (...numeri) => {
    return {
        min: Math.min(...numeri),
        max: Math.max(...numeri)
    };
};

const risultato = minMax(10, 5, 88, 2, 45);
console.log("Il minimo è: " + risultato.min + ", il massimo è: " + risultato.max);