//Greedy
var canJump = function (nums) {
  let position = nums.length - 1;

  for (let i = position; i >= 0; i--) {
    if (i + nums[i] >= position) {
      position = i;
    }
  }
  return position === 0;
};
