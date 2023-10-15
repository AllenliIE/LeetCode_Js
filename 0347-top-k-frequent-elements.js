//Blog: https://www.allenliservice.site/leetcode-js-347-top-k-frequent-elements/

// <strong>Solution:</strong>
// 1. 宣告 object 為物件。
// 2. 依序將 nums 中的元素取出：
//    如果第一次取，則放入 object 物件並給予數值 1。
//    反之，如果已經存在 object，則數值 + 1。
// 3. 宣告 object 物件中的屬性字串，並以陣列的方式回傳。
// 4. 使用 sort 排序搭配箭頭函式，將物件進行排序。
// 5. 使用 slice 回傳 0~k 的陣列元素。

// <strong>Code 1:</strongc>
var topKFrequent = function (nums, k) {
  let object = {};
  for (let num of nums) object[num] = (object[num] || 0) + 1;

  return Object.keys(object)
    .sort((a, b) => object[b] - object[a])
    .slice(0, k);
};

/* <strong>FlowChart:</strong>
<strong>Example 1</strong>

Input: nums = [1,1,1,2,2,3], k = 2

object = { '1': 3, '2': 2, '3': 1 }
return Object.keys(object).sort((a, b) => object[b] - object[a]).slice(0, 2) //[ '1', '2' ] */

// <strong>Code 2: map</strong>
var topKFrequent = function (nums, k) {
  let object = {};

  for (let num of nums) {
    object[num] = (object[num] || 0) + 1;
  }

  return Object.keys(object)
    .sort((a, b) => object[b] - object[a])
    .splice(0, k);
};
