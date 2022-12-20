//Blog: http://52.198.119.162/2022/08/07/leetcode-js-1480-running-sum-of-1d-array/

// <strong>Solution:</strong>
// 1. 先設定初始值為 currentSum = 0。
// 2. 運用 for迴圈來將 nums 的陣列逐一計算。
// 3. 每一輪都將 currentSum 加入當前的元素值 nums[i]。
// 4. 並將 nums[i] 更新成加總後的 currentSum。
// 5. 回傳新的 nums。

// <strong>Code 1:</strong>
var runningSum = function (nums) {
  let currentSum = 0
  for (i = 0; i < nums.length; i++) {
    currentSum += nums[i]
    nums[i] = currentSum
  }
  return nums
}

/* < strong > Example 1</strong >
<pre style='background-color:#ggg'>
Input: nums = [1,2,3,4]

step.1
i = 0
currentSum = 0
currentSum + nums[i] = 0 + 1 //1
nums[i] = currentSum //1

step.2
i = 1
currentSum = 1
currentSum + nums[i] = 2 + 1 //3
nums[i] = currentSum //3

step.3
i = 2
currentSum = 3
currentSum + nums[i] = 3 + 3 //6
nums[i] = currentSum //6

step.4
i = 3
currentSum = 6
currentSum + nums[i] = 6 + 4 //10
nums[i] = currentSum //10
return nums //[1, 3, 6, 10]
</pre> */

// <strong> Code 2: map</strong>
var runningSum = function (nums) {
  let currentSum = 0
  return nums.map(num => currentSum += num)
}

// <strong> Code 3:</strong>
var runningSum = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }
  return nums
}

// <strong> Code 4:</strong>
var runningSum = function (nums) {
  let newNums = []

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      newNums[i] = nums[i]
    } else {
      newNums[i] = newNums[i - 1] + nums[i]
    }
  }
  return newNums;
};