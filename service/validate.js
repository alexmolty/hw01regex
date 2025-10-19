//a) Credit card number (8-16 digits)
const validateCardNumber = text => {
    const pattern = /^\d{8,16}$/;
    return pattern.test(text);
}

//b) Date (Format: DD.MM.YYYY)
const validateDate1 = text => {
    const pattern = /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d\d\d\d$/;
    return pattern.test(text);
}
//c) Date (Format: YYYY-MM-DD)
const validateDate2 = text => {
    const pattern = /^\d\d\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    return pattern.test(text);
}
//d) Phone Number (Format: +99(99)9999-9999)
const validatePhoneNumber = text => {
    const pattern = /^\+\d\d\(\d\d\)\d\d\d\d-\d\d\d\d$/;
    return pattern.test(text);
}
//e) Number less and equals 255 (positive)
const validateNumber = text => {
    const pattern = /^([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
    return pattern.test(text);
}


// стало интересно проверить возможности ChatGPT
// он составил монстр-выражение - дату DD.MM.YYYY, но с соблюдением всех проверок (високосный год, дни в месяце):
const validateDate3 = text => {
    const pattern = /^(?:(?:0[1-9]|[12]\d|3[01])\.(?:0[13578]|1[02])|(?:0[1-9]|[12]\d|30)\.(?:0[469]|11)|(?:0[1-9]|1\d|2[0-8])\.02)\.\d{4}$|^29\.02\.(?:(?:\d\d(?:0[48]|[2468][048]|[13579][26]))|(?:[02468][048]00|[13579][26]00))$/;
    return pattern.test(text);
}
module.exports = {validateCardNumber, validateDate1, validateDate2, validatePhoneNumber, validateNumber, validateDate3};
