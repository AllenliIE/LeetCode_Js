//Blog: http://52.198.119.162/leetcode-js-338-counting-bits/

// <strong>Solution:</strong>
// 1. 建立 ans 陣列為 [0]。
// 2. 執行 i = n 的迴圈，並依序把 i 放入 ans 陣列。
// 3. 放入

// <strong>Code 1:</strongc>
var countBits = function (n) {
  let ans = [0]

  for (let i = 0; i <= n; i++) {
    ans[i] = ans[Math.floor(i / 2)] + i % 2
  }
  return ans
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: n = 2

[ 0 ]
[ 0, 1 ]
[ 0, 1, 1 ]

[ 0, 1, 1 ] */
