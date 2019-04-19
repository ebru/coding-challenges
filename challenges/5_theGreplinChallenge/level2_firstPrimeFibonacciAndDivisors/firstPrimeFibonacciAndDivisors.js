/**
 * Finds the first prime fibonacci number larger than given number
 * 
 * @param {number} n 
 */
function firstPrimeFibonacciLargerThan(n) {
    let cache = {};
  
    function fib(n) {
      if (n in cache)
        return cache[n];
        
      if (n < 2)
        return n;
  
      return cache[n] = fib(n - 1) + fib(n - 2);
    }
  
    let counter = 1;
  
    while (true) {
      if (fib(counter) > n && isPrime(fib(counter))) {
        return fib(counter);
      }
      counter++;
    }
  }

/**
 * Checks if a given number is prime
 * 
 * @param {number} num 
 */
function isPrime(num) {
    if (num < 2)
        return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }

    return true;
}

/**
 * Finds sum of prime divisors of a given number
 * 
 * @param {number} x 
 */
function sumOfPrimeDivisorsOf(x) {
    let sum = 0;

    for (let i = 2; i < x; i++) {
        if (x % i === 0 && isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

/**
 * Returns the final solution for the question
 * 
 * @param {number} n 
 */
function firstPrimeFibonacciAndDivisors(n) {
    let x = firstPrimeFibonacciLargerThan(n);
    
    return sumOfPrimeDivisorsOf(x + 1);
}

module.exports = firstPrimeFibonacciAndDivisors;