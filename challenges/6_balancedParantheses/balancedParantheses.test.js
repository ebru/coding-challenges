const balancedParantheses = require('./balancedParantheses');

test('empty value is passed', () => {
    expect(balancedParantheses('')).toEqual(false);
});

test('a fully nested valid string is given', () => {
    expect(balancedParantheses('((BCD)AE)')).toEqual(true);
});

test('balanced somehow valid string is given', () => {
    expect(balancedParantheses('(ZH)N(X)()')).toEqual(true);
});

test('not valid string is given', () => {
    expect(balancedParantheses(')(PH)N(X)')).toEqual(false);
});