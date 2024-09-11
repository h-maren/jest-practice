

//const capitalization = require('./functions.js');
const {capitalize, reverseString} = require('./functions.js');

test('check capitalization', () => {
     //expect('C').toMatch(/C/)
    expect(capitalize('cats').charAt(0)).toMatch(/C/)
});

test('check reverse string', () => {
    expect(reverseString('cars')).toMatch('srac')
});

test('check reverse string with capitals', () => {
    expect(reverseString('RaceCAR')).toMatch('racecar')
});