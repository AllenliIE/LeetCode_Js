//Blog: http://52.198.119.162/leetcode-js-409-longest-palindrome/

// <strong>Solution:</strong>
// 1. 設定 counts 為 Object literals { }。
// 2. 宣告符合字串的長度為 0，條件為 false(如為中心對稱則需 + 1)。
// 3. 將 counts 中依序放入物件與對應個數。
// 4. 將每一個 counts 中的字母個數，進行 2 的餘數計算：
// <pre style='background-color:#ggg'>
//  - 剩餘 0: 長度加上此字母的個數
//  - 不剩餘 0: 長度加上此字母的個數 - 1 (此數中心點，故須 - 1)
//  且符合中心對稱條件。
// </pre>
// 5. 如果 condition 設定的條件為:
// <pre style='background-color:#ggg'>
//  - condition = true: 長度 + 1
//  - condition = false: 長度維持不變
// </pre>
// 6. 回傳長度。

// <strong>Code 1: BigO(n)</strong>
var longestPalindrome = function(s) {
  const counts = {}
  let length = 0, condition = false

  for (let i = 0; i < s.length; i++) {
    counts[s[i]] = (counts[s[i]] || 0) + 1
  }
  
  for (let letter in counts) {
    if (counts[letter] % 2 === 0) {
      length += counts[letter]
    } else {
      condition = true
      length += counts[letter] - 1
    }
  }
  if (condition) length += 1

  return length
};
/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: s = "abccccdd"
length = 0, condition = false
counts = {a: 1}
counts = {a: 1, b: 1}
counts = {a: 1, b: 1, c: 1}
counts = {a: 1, b: 1, c: 2}
counts = {a: 1, b: 1, c: 3}
counts = {a: 1, b: 1, c: 4}
counts = {a: 1, b: 1, c: 2, d: 1}
counts = {a: 1, b: 1, c: 4, d: 2}

step.1
counts[letter] % 2 = 1 //{a: 1}, 1 % 2 = 1
condition = true
length += counts[letter] - 1 //0 + 1 - 1 = 0

step.2
counts[letter] % 2 = 1 //{b: 1}, 1 % 2 = 1
condition = true
length += counts[letter] - 1 //0 + 1 - 1 = 0

step.3
counts[letter] % 2 = 0 //{c: 4}, 4 % 2 = 0
condition = true
length += counts[letter] //0 + 4 = 4

step.4
counts[letter] % 2 = 0 //{d: 2}, 2 % 2 = 0
condition = true
length += counts[letter] //4 + 2 = 6

step.5
ition = true => length += 1 = 6 + 1 = 7
(ex.符合中心對稱，故對稱的長度再加上中心點。
return length //7
</pre> */

// <strong>Code 2: BigO(n)</strong>
var longestPalindrome = function(s) {
    const counts = new Set()
    let length = 0

    for (const letter of s) {
        if (counts.has(letter)) {
            length += 2
            counts.delete(letter)
        } else {
            counts.add(letter)
        }
    }

    return length + (counts.size > 0 ? 1 : 0);
};