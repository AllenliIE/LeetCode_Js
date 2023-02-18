//Blog: http://52.198.119.162/leetcode-js-283-move-zeroes/

// <strong>Solution:</strong>
// 1. 宣告 j = 0。
// 2. 執行 i 長度的迴圈。
// 3. 如果陣列中的數值不是 0，則前後交換位置。
// 4. 如果 i 是 0 的話，則不變動，往下搜尋，並由 j 來將 0 替換至後方。

// <strong>Code 1:</strongc>
var moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
  return nums
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: nums = [0,1,0,3,12]
i, j, nums[i], nums[j]

0 0 0 0
1 0 1 0
2 1 0 0
3 1 3 0
4 2 12 0
[ 1, 3, 12, 0, 0 ]
*/