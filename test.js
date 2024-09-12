

//const capitalization = require('./functions.js');
const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./functions.js');

//capitalize tests
test('check capitalization', () => {
    expect(capitalize('cats').charAt(0)).toMatch(/C/)
});

//reverse string tests
test('check reverse string', () => {
    expect(reverseString('cars')).toMatch('srac')
});

test('check reverse string with capitals', () => {
    expect(reverseString('RaceCAR')).toMatch('racecar')
});

//calculator tests
test('check addition', () => {
    expect(calculator.add(1,2)).toBe(3);
});

test('check addition of negative and positive number', () => {
    expect(calculator.add(-1,3)).toBe(2);
});

test('check addition of two negative numbers', () => {
    expect(calculator.add(-2,-2)).toBe(-4);
});

test('check subtraction of two positive numbers', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});

test('check subtraction of two negative numbers', () => {
    expect(calculator.subtract(-1,-2)).toBe(1);
});

test('check subtraction of positive and negative number', () => {
    expect(calculator.subtract(2,-1)).toBe(3);
});

test('check division', () => {
    expect(calculator.divide(6,2)).toBe(3);
})

test('check division with positive and negative', () => {
    expect(calculator.divide(6,-2)).toBe(-3);
});

test('check division with two negative', () => {
    expect(calculator.divide(-6,-2)).toBe(3);
});

test('check multiply', () => {
    expect(calculator.multiply(6,2)).toBe(12);
});

test('check multiply with positive and negative', () => {
    expect(calculator.multiply(6,-2)).toBe(-12);
});

test('check multiply with two negative numbers', () => {
    expect(calculator.multiply(-6,-2)).toBe(12);
});

test('check cesar cipher function', () => {
    expect(caesarCipher('abc',3)).toMatch('def');
});

test('caesar cipher with wrapping', () => {
    expect(caesarCipher('xyz',3)).toMatch('abc');
})

test('caesar cipher case preservation', () => {
    expect(caesarCipher('HeLLo',3)).toMatch('KhOOr');
});

test('caesar cipher keep punctuation and only move numbers', () => {
    expect(caesarCipher('Hello, World!',3)).toMatch('Khoor, Zruog!')
});

test('array average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('array min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('array max', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('array length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});