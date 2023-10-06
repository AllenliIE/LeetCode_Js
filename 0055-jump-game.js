// <strong>Code 1: DP BigO(n ^ 2)</strong>
var canJump = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(false);

  dp[0] = true;

  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      for (let j = 1; j <= nums[i] && i + jump < n; jump++) {
        dp[i + jump] = true;
      }
    }
  }
  return dp[n - 1];
};

// <strong>Code 2: Greedy BigO(n)</strong>
var canJump = function (nums) {
  let position = nums.length - 1;

  for (let i = position; i >= 0; i--) {
    if (i + nums[i] >= position) {
      position = i;
    }
  }
  return position === 0;
};
