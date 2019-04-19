const firstPrimeFibonacciAndDivisors = require('./firstPrimeFibonacciAndDivisors');

test('n is given 270000', () => {
    expect(firstPrimeFibonacciAndDivisors(270000)).toEqual(352);
});