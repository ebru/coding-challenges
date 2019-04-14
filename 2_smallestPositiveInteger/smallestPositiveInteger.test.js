const smallestPositiveInteger = require('./smallestPositiveInteger');

test('empty array is given', () => {
    expect(smallestPositiveInteger([])).toEqual(1);
});

test('smallest missing number is in range of array', () => {
    expect(smallestPositiveInteger([1, 3, 6, 4, 1, 2])).toEqual(5);
});

test('smallest missing number is bigger than all items', () => {
    expect(smallestPositiveInteger([1, 2, 3])).toEqual(4);
});

test('array contains only negative numbers', () => {
    expect(smallestPositiveInteger([-1, -3])).toEqual(1);
});

test('array contains positive and negative numbers', () => {
    expect(smallestPositiveInteger([-1, -3, 1, 3, 7])).toEqual(2);
});