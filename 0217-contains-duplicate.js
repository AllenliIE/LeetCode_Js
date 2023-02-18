//Blog: http://52.198.119.162/leetcode-js-217-contains-duplicate/

// <strong>Solution:</strong>
// 1. 建立 map 物件。
// 2. 運用「for of」來將 nums 陣列中的數值依序取出。
// 3. 判斷該數值是否存在 map 物件中，如有回傳 true，反之在 map 物件存入該數值為名稱，並配對 true。
// 4. 沒有重複出現的數值，則回傳 false。

// <strong>Code:</strong>
var containsDuplicate = function (nums) {
  let map = {}

  for (let i of nums) {

    if (map[i]) return true
    map[i] = true
  }
  return false
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,1]

{ '1': true }
{ '1': true, '2': true }
{ '1': true, '2': true, '3': true }

if (map[1]) = true, return true
</pre> */