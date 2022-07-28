//Blog:http://52.198.119.162/2022/06/07/leetcode-js-20-valid-parentheses/

//<strong>Solution:</strong>
// 1. 運用「for...of」將input進行迴圈，比對錯誤即回傳false
// 2. 當「if條件」符合左括號時，push()放入空陣列中
// 3. 當「if條件」出現右括號時，pop()比對上一次儲存的左括號
// 4. 最後當宣告的空陣列長度為0時，回傳ture 

var isValid = function (s) {
  const array = []
  const map = {
    "}": "{",
    ")": "(",
    "]": "["
  }

  for (let element of s) {
    if (element === '{' || element === '(' || element === '[') {
      array.push(element)
    } else {
      if (array.pop() !== map[element]) {
        return false
      }
    }
  }
  return array.length === 0
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
element = '('
array = [] => array = ['(']

step.2
element = ')'
array.pop = ['('] => map[element] = ['(']
array.length === 0 => true
</pre> */

