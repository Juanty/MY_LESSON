// 找一个无序数组中第 k 大的函数
// function fingdkthlargest (nums, k) {
//   if (k < 0 || k > nums.length - 1) return NaN;
//   return nums.sort((a, b) => b - a)[k - 1];
// }
// console.log(fingdkthlargest([1, 4, 2, 6, 9, 10], 2));


function fingdkthlargest (nums, k) {
  const arr = qiuck_sort(nums);
  return arr[k-1];
}
function qiuck_sort (arr) {
  if (arr.length <= 1) return arr;

  var left = [],
    right = [],
    baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot, 1)[0];

  for (var i = 0; i < arr.length; i++) { // O(N)
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return qiuck_sort(left).cancat([base], qiuck_sort(right)); // 递归 O(log2N)次
}

console.log(fingdkthlargest([1, 4, 2, 6, 9, 10], 2));
