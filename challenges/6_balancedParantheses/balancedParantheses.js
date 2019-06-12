function balancedParantheses(str) {
    let count = 0;
  
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