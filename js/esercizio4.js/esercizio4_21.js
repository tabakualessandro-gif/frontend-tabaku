const mcm = (a, b) => {
    const mcd = (x, y) => (!y ? x : mcd(y, x % y));
    return Math.abs(a * b) / mcd(a, b);
};