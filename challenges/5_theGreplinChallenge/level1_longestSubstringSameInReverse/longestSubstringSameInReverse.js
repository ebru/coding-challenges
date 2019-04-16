/**
 * Finds the longest substring that is the same in reverse
 * 
 * @param {string} str 
 */
function longestSubstringSameInReverse(str) {
  let longest = '';

  function isSameInReverse(str) {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length; j++) {

      let substr = str.substring(i, j);

      if (isSameInReverse(substr)) {
        if (substr.length > longest.length) {
          longest = substr;
        }
      }

    }
  }

  return longest;
}

module.exports = longestSubstringSameInReverse;