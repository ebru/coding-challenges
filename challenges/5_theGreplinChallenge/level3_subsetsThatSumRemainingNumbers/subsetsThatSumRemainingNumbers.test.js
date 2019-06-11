const subsetsThatSumRemainingNumbers = require('./subsetsThatSumRemainingNumbers');

test('array is given with small length', () => {
    expect(subsetsThatSumRemainingNumbers([1, 2, 3, 4, 6])).toEqual(4);
});

test('array is given with long length', () => {
    expect(subsetsThatSumRemainingNumbers([3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99])).toEqual(179);
});