//Blog: http://52.198.119.162/leetcode-js-263-ugly-number/

// <strong>Solution:</strong>
// 1. 運用 for of 來將陣列數值依序放入。
// 2. 使用 while 來判斷，當 n 可以被整除，則將 n / p。
//                     當 n 沒法被整除，則 break。
// 3. 回傳 n === 1 的結果。

// <strong>Code 1:</strongc>
var isUgly = function (n) {
  for (let p of [2, 3, 5]) {
    while (n && n % p === 0) {
      n /= p
    }
  }
  return n === 1;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>

Input: n = 6
n = 6, p = 2, 3, 5
console.log(n, p, (n % p === 0))

step.1
6, 2, true
3, 2, false

step.2
3, 3, true
1, 3, false

step.3
1 5 false

return n === 1 //true
*/