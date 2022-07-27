//Blog:http://52.198.119.162/2022/05/17/leetcode-js-8-string-to-integer/

var myAtoi = function (s) {
  // "   -321321 bunnies" 
  //ignore leading whitespaces
  let index = 0;
  while (s[index] === " ") {
    index++
  }
  //check if the next character is '-' or '+'
  let sign = 1 //default to '+'
  if (s[index] === '+') {
    sign = 1
    index++
  } else if (s[index] === "-") {
    sign = -1
    index++
  }
  //read string of digits into integer
  const digits = {}
  for (let i = 0; i < 10; i++) {
    digits[i + ""] = i
  }
  let result = 0
  for (let i = index; i < s.length; i++) {
    if (digits[s[i]] !== undefined) { // is digit
      result = result * 10 + digits[s[i]] //重點
    } else {
      break
    }
  }
  // clamped to max or min
  result = result * sign
  if (result < -1 * Math.pow(2, 31)) {
    result = -1 * Math.pow(2, 31)
  } else if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1
  }
  return result
};

// result = 0
// result = result * 10 + digits[s[i]] => 0 + 4 = 4
// result = result * 10 + digits[s[i]] => 4 * 10 + 2 = 42
// Output = 42