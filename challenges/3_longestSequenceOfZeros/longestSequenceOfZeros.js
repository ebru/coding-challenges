/**
 * Returns the length of its longest sequence of zeros as a binary gap
 * 
 * @param {number} n 
 */
function longestSequenceOfZeros(n) {
  let binary = n.toString(2);

  let indexes = {
    'startPoints': [],
    'endPoints': []
  }

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1 && binary[i + 1] == 0) {
      indexes['startPoints'].push(i);
    }

    if (binary[i] == 0 && binary[i + 1] == 1) {
      indexes['endPoints'].push(i);
    }
  }

  let longest = 0;

  indexes['startPoints'].forEach((val, i) => {
    if (indexes['endPoints'][i]) {
      let count = 0;

      while (binary[val + 1] == 0) {
        count++;
        val++;
      }

      if (count > longest) {
        longest = count;
      }
    }
  });

  return longest;
}

module.exports = longestSequenceOfZeros;