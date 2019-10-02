/**
 * Number class to check the weird ones
 */
class Number {
  /**
   * Constructor
   */
  constructor(value) {
    this.value = value;
    const divisorResult = this.findDivisors();
    this.sumOfDivisors = divisorResult.sum;
    this.divisors = divisorResult.divisors;
  }

  /**
   * Checks if the number passes the weird number rules
   */
  checkIfWeird() {
    if (
      this.sumOfDivisors > this.value &&
      this.checkIfNoDivisorSubsetSumsToNum()
    )
      return true;

    return false;
  }

  /**
   * Checks if no subset of divisors sums up to number's value
   */
  checkIfNoDivisorSubsetSumsToNum() {
    for (let i = 0; i < Math.pow(2, this.divisors.length); i++) {
      let j = this.divisors.length - 1;
      let sum = 0;

      do {
        if ((i & (1 << j)) !== 0) {
          sum += this.divisors[j];
        }
      } while (j--);

      if (sum === this.value) {
        return false;
      }
    }

    return true;
  }

  /**
   * Finds divisors and their sum of the number's value
   */
  findDivisors() {
    // since 1 divides each number
    let sum = 1;
    let divisors = [1];

    for (let i = 2; i < this.value; i++) {
      if (this.value % i === 0) {
        sum += i;
        divisors.push(i);
      }
    }

    return {
      sum: sum,
      divisors: divisors
    };
  }
}

/**
 * Find weird numbers up to n
 *
 * @param {number} n number that ups to
 */
function findWeirdNumbers(n) {
  let weirdNumbers = [];

  for (let i = 1; i < n; i++) {
    const number = new Number(i);

    if (number.checkIfWeird()) weirdNumbers.push(i);
  }

  return weirdNumbers;
}

console.time();
console.log(findWeirdNumbers(1000)); // [70, 836]
console.timeEnd();
