//Blog: http://52.198.119.162/leetcode-js-268-missing-number/

// <strong>Solution:</strong>
// 1. 宣告 result 為 0。
// 2. 宣告 numLength 為 nums 的長度。
// 3. 如果沒有長度，返回 0。
// 4. 執行 nums 長度的迴圈，且每一輪都將 result 加上 nums 陣列中的數字，
//    同時減去當前第 i 輪的 i 值。
//    (正常數列的加總 - 減去該陣列實際值得加總 = 缺少的數字)
// 5. 回傳 nums 的長度減去 result。

// <strong>Code 1: BigO(2n)</strongc>
var missingNumber = function (nums) {
  let length = nums.length
      lengthTotal = 0,
      numsTotal = 0
  
  if (length === 0) return 0;

  for (let i = 0; i <= length; i++) {
    lengthTotal += i
  }
  for (let i = 0; i < length; i++) {
    numsTotal += nums[i]
  }
  return lengthTotal - numsTotal;  
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: nums = [3,0,1]

result += nums[i] - i
result = 0 + 3 - 0 = 3
result = 3 + 0 - 1 = 2
result = 2 + 1 - 2 = 1

return numLength - result = 3 - 1 = 2
*/

/* <strong>Code 2: BigO(n)</strongc> */
var missingNumber = function(nums) {
  let length = nums.length,
      numsTotal = 0

  if (length === 0) return 0;

  for (let i = 0; i < length; i++) {
    numsTotal += nums[i] - i
  }

  return length - numsTotal;
};

/* <strong>Code 3: BigO(n) ES6 Set</strongc> */
var missingNumber = function(nums) {
  let numsSet = new Set(nums),
  lostNumbers = []

  for (let i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) lostNumbers.push(i)
  }
  return lostNumbers;
};