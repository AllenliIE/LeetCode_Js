//Blog: https://www.allenliservice.site/leetcode-javascript-30-days-challenge-day4-2635-apply-transform-over-each-element-in-array/

// <strong>solution:</strong>
// 因題目希望我們不要使用 map() 的方法，同時又希望回傳的是一個新的陣列，
// 所以這部分我們先宣告一個空陣列叫做 res，接著我們運用 forEach((num, index)) 的方式，
// 將題目給的 arr 中所有的 element 的數值 num 與位置 index，依序放入 fn(num, index)中做運算，
// 且同步放入到新的陣列 res 中，最後回傳結果。

// <strong>Code 1: BigO(n)</strong>
var map = function (arr, fn) {
  const res = [];

  arr.forEach((num, index) => {
    res.push(fn(num, index));
  });
  return res;
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }

[2]
[2,3]
[2,3,4]
</pre> */
