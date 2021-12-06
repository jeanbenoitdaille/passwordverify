function passwordChecker(password) {
    if (password.length < 8) {
        return false;
    }
    let passwordWithoutDigits = password.replace(/[0-9]/g, '');
    let checkUpper = s => (s.split("").filter(char => char === char.toUpperCase())).length >= 3;
    let isDigit = element => "0123456789".indexOf(element) !== -1;
    return checkUpper(passwordWithoutDigits) && password.split("").some(isDigit);
}
 
let check1 = passwordChecker("sdfoindii234");
let check2 = passwordChecker("bonjour");
let check3 = passwordChecker("1234");
let check4 = passwordChecker("motDePasseValide5412");