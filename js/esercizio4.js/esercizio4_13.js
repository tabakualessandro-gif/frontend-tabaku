
const creaContatore = () => {
    let conteggio = 0; 

   
    return () => {
        conteggio++; 
        return conteggio;
    };
};



const mioContatore = creaContatore();

console.log(mioContatore());
console.log(mioContatore()); 
console.log(mioContatore()); 

const secondoContatore = creaContatore();
console.log(secondoContatore()); 