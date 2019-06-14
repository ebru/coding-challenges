/**
 * Validate if string given contains balanced parantheses
 * 
 * @param {string} str 
 */
function balancedParantheses(str) {
    let count = 0;

    if (str === '') {
      return false;
    }
  
    for (let char of str) {
      if (char === '(') {
        count++;
      }
  
      if (char === ')') {
        count--;
      }
  
      if (count < 0) {
        return false;
      }
    }
  
    if (count !== 0) {
      return false;
    }
  
    return true;
  }

module.exports = balancedParantheses;