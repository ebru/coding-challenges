function longestSubstringSameInReverse(str) {
    let longest = 0;
    let longestStr = '';
  
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
          if (substr.length > longest) {
            longest = substr.length;
            longestStr = substr;
          }
        }
  
      }
    }
  
    return longestStr;
  }

  module.exports = longestSubstringSameInReverse;