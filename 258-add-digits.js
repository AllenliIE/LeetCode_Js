// <strong>Solution:</strong>
// 1. 如果 num 介於 0 ~9 之間，回傳 num。
// 2. 當(num > 9)時宣告 sum = 0，且
// 3. 當(num 的整數不等於 0)，
// 執行以下：
// (1.) sum = 0 + 個位數
// (2.) num = num / 10
//    
//     將 num = sum，回傳 num。

// <strong>Code 1:</strongc>
var addDigits = function (num) {
  if (num < 10 && num >= 0) return num

  while (num > 9) {
    let sum = 0
    while (parseInt(num) !== 0) {
      sum += parseInt(num % 10)
      num /= 10
    }
    num = sum
  }
  return num
};
