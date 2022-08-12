module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const config = bracketsConfig.find((iter) => iter.includes(current));
   
    if (current === config[1] && stack[stack.length - 1] === config[0]) {
      stack.pop();
    } else stack.push(current);
  }
 
  return !stack.length;
}