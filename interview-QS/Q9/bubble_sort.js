function bubbleSort(arr) {
  let len = arr.length;
  for(var i = 0; i < len; i++) {
    for(var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
    return arr;
}

console.log(bubbleSort([2,5,6,3,7,8]))