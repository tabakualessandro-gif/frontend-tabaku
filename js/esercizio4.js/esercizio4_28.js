
const convalidaCF = (cf) => {
    const regex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
    return regex.test(cf);
};

console.log(convalidaCF("RSSMRA80A01H501W")); 