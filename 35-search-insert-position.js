//Blog:http://52.198.119.162/2022/06/29/leetcode-js-35-search-insert-position/

// <strong>Solution:</strong>
// 1. 先確認目標值是否存在陣列中，如「是」則回傳位置。
// 2. 如「不是」則依序確認陣列中第一個比目標值大的數值，
// 回傳它的位置。
// 3. 如目標值不存在陣列，則放入陣列最後一個位置。

var searchInsert = function (nums, target) {
  //運用indexOf指令比對並回傳位置
  const targetIndex = nums.indexOf(target)
  if (targetIndex >= 0) return targetIndex //若不存在於陣列中，則indexOf()會回傳 -1。

  //使用for依序比對目標與陣列值得大小
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      return i
    }
  }
  //陣列沒有比目標值大，放到最後一個位置
  return nums.length
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
targetIndex = nums.indexOf(target) //找到符合回傳位置
Array  =  0  1  2  3
nums   = [1, 3, 5, 6]
target =        5
return targetIndex //targetIndex = 2
</pre> */
