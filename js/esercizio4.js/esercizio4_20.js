const convalidaEmail = (email) => {
    const parti = email.split("@");
    if (parti.length !== 2) return false; 
    
    const [prima, dopo] = parti;
   
    return prima.length > 0 && dopo.length > 0 && dopo.includes(".");
};