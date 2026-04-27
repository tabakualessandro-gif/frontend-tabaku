const creaPassword = (n) => {
    const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < n; i++) {
        password += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }
    return password;
};