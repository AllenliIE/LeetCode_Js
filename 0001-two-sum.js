//Blog:http://52.198.119.162/leetcode-js-1-two-sum/

//<strong>Solution:</strong>
//1. 想像數組的陣列為一區塊
//2. 用「for迴圈」將目標值與陣列依序判斷
//3.「if條件」將目標值減去數組中的數字並判斷是否未定義
//   true: 不是未定義，回傳[對應box中值的位置, 回合數]
//   false: 是未定義，將比對回合數放入box中對應數組位置
//ex.詳情請閱FlowChart

//<strong>Code 1:</strong>
var twoSum = function (nums, target) {
  const box = {};
  for (let i = 0; i < nums.length; i++) {
    if (box[target - nums[i]] !== undefined) {
      return [box[target - nums[i]], i];
    } else {
      box[nums[i]] = i;
    }
  }
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
Input: nums = [2, 7, 11, 15], target = 9
i = 0 1  2  3
step.1
box = []
i = 0; nums[i] = 2;
if ((box[9 - 2]) === undefined) // box[7]沒有東西
box[nums[i]] = i => box[2] = 0 // box[ , , 0]
                                  i = 0 1  2

step.2
box = [, , 0]
i = 1; nums[1] = 7;
if ((box[9 - 7]) !== undefined) // box[2] = 0
return ([box[9 - 7], 1]) // [0, 1]
</pre>*/

//<strong>Code 2:</strong>
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let remainNum = target - nums[i];
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[j] === remainNum) return [i, j];
    }
  }
};
