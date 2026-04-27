const convertiTemperatura = (val, da, a) => {
   
    let celsius;
    if (da === "C") celsius = val;
    else if (da === "F") celsius = (val - 32) * 5/9;
    else if (da === "K") celsius = val - 273.15;

   
    if (a === "C") return celsius;
    if (a === "F") return (celsius * 9/5) + 32;
    if (a === "K") return celsius + 273.15;
};