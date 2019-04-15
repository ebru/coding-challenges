const spiralMatrix = require('./spiralMatrix');

test('empty array is given', () => {
    expect(spiralMatrix([])).toEqual([]);
});

test('n equals 1', () => {
    expect(spiralMatrix(1)).toEqual([[1]]);
});

test('n equals 2', () => {
    expect(spiralMatrix(2)).toEqual([[1, 2], [4, 3]]);
});

test('n equals 3', () => {
    expect(spiralMatrix(3)).toEqual([[ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ]]);
});