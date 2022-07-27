//Blog:http://52.198.119.162/2022/05/22/leetcode-js-1-two-sum/

const twoSum = function (nums, target) {
  const box = {};
  for (let i = 0; i < nums.length; i++) {
    if (box[target - nums[i]] !== undefined) {
      return [box[target - nums[i]], i]
    } else {
      box[nums[i]] = i
    }
  }

};

// Input: nums = [2, 7, 11, 15], target = 9
// i = 0 1  2  3
// step.1
// box = []
// i = 0; nums[i] = 2;
// if ((box[9 - 2]) === undefined) // box[7]沒有東西
//   box[nums[i]] = i => box[2] = 0 // box[ , , 0]
// i = 0 1  2

// step.2
// box = [, , 0]
// i = 1; nums[1] = 7;
// if ((box[9 - 7]) !== undefined) // box[2] = 0
//   return ([box[9 - 7], 1]) // [0, 1]