//Blog: http://52.198.119.162/leetcode-js-242-valid-anagram/

// <strong>Solution:</strong>
// 1. 先判斷 s 和 t 的長度是否不相同，並回傳 false。
// 2. 將 s 和 t 字串切割，並進行字母排序，再將字母組合。
// 3. 判斷 s 和 t 是否相同，並回傳true，反之回傳 false。

// <strong>Code 1:</strong>
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  var s = s.split("").sort().join(""),
      t = t.split("").sort().join("")

  return s === t;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: s = "anagram", t = "nagaram"

s = "aaagmnr"
t = "aaagmnr"

return true */

// <strong>Code 2:</strong>
var isAnagram = function (s, t) {

  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
};