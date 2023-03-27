//Blog: http://52.198.119.162/leetcode-js-217-contains-duplicate/

// <strong>Solution:</strong>
// 1. 建立 hashTable 物件。
// 2. 運用「for of」來將 nums 陣列中的數值依序取出。
// 3. 判斷該數值是否存在 hashTable 物件中，如有回傳 true，反之在 hashTable 物件存入該數值為名稱，並配對 true。
// 4. 沒有重複出現的數值，則回傳 false。

// <strong>Code:</strong>
var containsDuplicate = function (nums) {
  let hashTable = {}

  for (let num of nums) {
    if (hashTable[num]) return true;
    hashTable[num] = true
  }
  return false;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,1]

{ '1': true }
{ '1': true, '2': true }
{ '1': true, '2': true, '3': true }

if (hashTable[1]) = true, return true;
</pre> */