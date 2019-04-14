const longestSequenceOfZeros = require('./longestSequenceOfZeros');

test('should return 2 for input 9 as binary 1001', () => {
    expect(longestSequenceOfZeros(9)).toEqual(2);
});

test('should return 4 for input 529 as binary 1000010001', () => {
    expect(longestSequenceOfZeros(529)).toEqual(4);
});

test('should return 1 for input 20 as binary 10100', () => {
    expect(longestSequenceOfZeros(20)).toEqual(1);
});

test('should return 0 for input 15 as binary 1111', () => {
    expect(longestSequenceOfZeros(15)).toEqual(0);
});

test('should return 0 for input 32 as binary 100000', () => {
    expect(longestSequenceOfZeros(32)).toEqual(0);
});

test('should return 5 for input 1041 as binary 10000010001 ', () => {
    expect(longestSequenceOfZeros(1041)).toEqual(5);
});