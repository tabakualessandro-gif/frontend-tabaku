
const ripeti = (azione, n) => {
    for (let i = 0; i < n; i++) {
        azione(); 
    }
};




const saluta = () => console.log("Ciao Alessandro!");


ripeti(saluta, 3);