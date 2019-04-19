/**
 * Finds the longest substring that is the same in reverse
 * 
 * @param {string} str 
 */
function longestSubstringSameInReverse(str) {
  let longest = '';

  function isSameInReverse(str) {
    // Only iterate through half of the string while comparing the rest
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length - 1; j > 0; j--) {
      let substr = str.substring(i, j);

      if (isSameInReverse(substr) && substr.length > longest.length) {
          longest = substr;
      }
    }
  }

  return longest;
}

module.exports = longestSubstringSameInReverse;