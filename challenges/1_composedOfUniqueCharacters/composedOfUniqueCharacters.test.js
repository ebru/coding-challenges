const composedOfUniqueCharacters = require('./composedOfUniqueCharacters');

test('string has some characters occurred multiple times', () => {
    expect(composedOfUniqueCharacters('correct horse battery staple')).toEqual(0);
});

test('string has no repeated characters', () => {
    expect(composedOfUniqueCharacters('my string')).toEqual(1);
});