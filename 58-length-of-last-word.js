//Blog:http://52.198.119.162/2022/06/22/leetcode-js-58-length-of-last-word/

// <strong>Solution:</strong>
// 1. 運用.trim()移除字串中，字首前、字尾後的空白。
// 2. 使用.split(' ')來將字串以空白做切割為陣列。
// 3. 注意陣列與數列的關係。
// ex.
//   word = [a, b, c]
// array   0  1  2

var lengthOfLastWord = function (s) {
  const arr = s.trim().split(' ')
  return arr[arr.length - 1].length
};

/* <strong>Example 1</strong>
<pre style='background-color:#ggg'>
step.1
string    1        2
arr = ['Hello', 'World']
array     0        1
arr.length = 2
return arr[arr.length - 1].length 
//arr[1].length => 'World'.length => 5

</pre> */