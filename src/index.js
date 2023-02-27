module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  let bracketsMap = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
    let lastBracket = stack[stack.length - 1];
    
    if (bracketsMap.has(currentBracket) && bracketsMap.get(currentBracket) === lastBracket) {
      stack.pop();
    } else if (bracketsMap.has(currentBracket)) {
      stack.push(currentBracket);
    } else if (currentBracket === bracketsMap.get(lastBracket)) {
      stack.pop();
    } else {
      return false;
    }
  }
  
  return stack.length === 0;
}
