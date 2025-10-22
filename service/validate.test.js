const {validateCardNumber, validateDate1, validateDate2, validatePhoneNumber, validateNumber, validateDate3} = require('./validate');
const {describe, test, expect} = require('@jest/globals')

describe('validateCardNumber', () => {
    test('should return true if the card number is valid', () => {
        expect(validateCardNumber('12345678')).toBe(true);
        expect(validateCardNumber('12345678910')).toBe(true);
        expect(validateCardNumber('1234567812345678')).toBe(true);
        expect(validateCardNumber('000000000000')).toBe(true);
        expect(validateCardNumber('09426894282439')).toBe(true);
    });
    test('should return false if the card number is invalid', () => {
        expect(validateCardNumber('12345')).toBe(false);
        expect(validateCardNumber('1234-5678')).toBe(false);
        expect(validateCardNumber('adfadvqerg')).toBe(false);
        expect(validateCardNumber('12390123905490139501395013593190')).toBe(false);
        expect(validateCardNumber('3161303130603bg')).toBe(false);
        expect(validateCardNumber('3161303130#$%')).toBe(false);
    });
});
describe('validateDate1', () => {
    test('should return true if the date is valid', () => {
        expect(validateDate1('01.01.2000')).toBe(true);
        expect(validateDate1('29.02.1972')).toBe(true);
        expect(validateDate1('31.08.6052')).toBe(true);
        expect(validateDate1('01.01.0001')).toBe(true);
    });
    test('should return false if the date is invalid', () => {
        expect(validateDate1('00.00.2000')).toBe(false);
        expect(validateDate1('adg;a;d')).toBe(false);
        expect(validateDate1('022.01.2015')).toBe(false);
        expect(validateDate1('31/05/2021')).toBe(false);
        expect(validateDate1('')).toBe(false);
        expect(validateDate1('02.05.1999 ')).toBe(false);
    })
});
describe('validateDate2', () => {
    test('should return true if the date is valid', () => {
        expect(validateDate2('1950-12-29')).toBe(true);
        expect(validateDate2('1950-12-29')).toBe(true);
        expect(validateDate2('2087-06-05')).toBe(true);
        expect(validateDate2('2000-11-01')).toBe(true);
        expect(validateDate2('0000-01-01')).toBe(true);
    });
    test('should return false if the date is invalid', () => {
        expect(validateDate2('1950-12-32')).toBe(false);
        expect(validateDate2('1950-13-29')).toBe(false);
        expect(validateDate2('1941/11/11')).toBe(false);
        expect(validateDate2('2087-07-0')).toBe(false);
        expect(validateDate2('asc')).toBe(false);
        expect(validateDate2('0000-00-00')).toBe(false);
        expect(validateDate2('1950-12-29 ')).toBe(false);
    });
});
describe('validatePhoneNumber', () => {
    test('should return true if the phone number is valid', () => {
        expect(validatePhoneNumber('+99(99)9999-9999')).toBe(true);
        expect(validatePhoneNumber('+12(25)6135-5682')).toBe(true);
        expect(validatePhoneNumber('+00(29)4804-1937')).toBe(true);
        expect(validatePhoneNumber('+24(21)7739-6844')).toBe(true);
    });
    test('should return false if the phone number is invalid', () => {
        expect(validatePhoneNumber('+99(99)9999-999')).toBe(false);
        expect(validatePhoneNumber('+12(25)6135-568')).toBe(false);
        expect(validatePhoneNumber('+00(29)04-1937')).toBe(false);
        expect(validatePhoneNumber('+24(21)7739-684')).toBe(false);
        expect(validatePhoneNumber('+99(99)9999-9999 ')).toBe(false);
        expect(validatePhoneNumber('99(99)9999-9999')).toBe(false);
        expect(validatePhoneNumber('')).toBe(false);
    })
});
describe('validateNumber', () => {
    test('should return true if number is valid', () => {
        expect(validateNumber('1')).toBe(true);
        expect(validateNumber('15')).toBe(true);
        expect(validateNumber('155')).toBe(true);
        expect(validateNumber('255')).toBe(true);
        expect(validateNumber('250')).toBe(true);
        expect(validateNumber('199')).toBe(true);
        expect(validateNumber('89')).toBe(true);
        expect(validateNumber('200')).toBe(true);
        expect(validateNumber('100')).toBe(true);
    })
    test('should return false if number is invalid', () => {
        expect(validateNumber('0')).toBe(false);
        expect(validateNumber('001')).toBe(false);
        expect(validateNumber('256')).toBe(false);
        expect(validateNumber('026')).toBe(false);
        expect(validateNumber('2155')).toBe(false);
        expect(validateNumber('asdf')).toBe(false);
        expect(validateNumber('')).toBe(false);
        expect(validateNumber('666')).toBe(false);
    })
})
describe('validateDate3', () => {
    test('should return true if the date is valid', () => {
        expect(validateDate3('20.01.1995')).toBe(true);
        expect(validateDate3('29.02.2004')).toBe(true);
        expect(validateDate3('29.02.2024')).toBe(true);
        expect(validateDate3('29.02.2400')).toBe(true);
        expect(validateDate3('29.02.1976')).toBe(true);
        expect(validateDate3('29.02.1980')).toBe(true);
        expect(validateDate3('01.01.2000')).toBe(true);
        expect(validateDate3('31.12.2099')).toBe(true);
    });
    test('should return false if the date is invalid', () => {
        expect(validateDate3('29.02.2023')).toBe(false);
        expect(validateDate3('29.02.2001')).toBe(false);
        expect(validateDate3('29.02.2002')).toBe(false);
        expect(validateDate3('00.00.2000')).toBe(false);
        expect(validateDate3('adg;a;d')).toBe(false);
        expect(validateDate3('022.01.2015')).toBe(false);
        expect(validateDate3('31/05/2021')).toBe(false);
        expect(validateDate3('00.00.2000')).toBe(false);
        expect(validateDate3('')).toBe(false);
        expect(validateDate3('02.05.1999 ')).toBe(false);
        expect(validateDate3('31.04.2023')).toBe(false);
        expect(validateDate3('31.06.2023')).toBe(false);
        expect(validateDate3('30.02.2024')).toBe(false);
        expect(validateDate3('32.01.2023')).toBe(false);
        expect(validateDate3('15.13.2023')).toBe(false);
        expect(validateDate3('15.00.2023')).toBe(false);
        expect(validateDate3('1.1.2023')).toBe(false);
        expect(validateDate3(' 01.01.2023')).toBe(false);
        expect(validateDate3('01.01.2023 ')).toBe(false);
        expect(validateDate3('31.09.2023')).toBe(false);
    })
})