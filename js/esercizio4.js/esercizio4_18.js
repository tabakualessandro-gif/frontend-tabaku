const sommaDigiti = (n) => {
    n = Math.abs(n); 
    if (n < 10) return n; 
    return (n % 10) + sommaDigiti(Math.floor(n / 10)); 
};