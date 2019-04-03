const nums = ['c', 'a', 'z', 'y'];
const nums2 = [1 ,10, 2, 28];
console.log(nums.sort());
console.log(nums2.sort(function (a, b){
    console.log(a, b, a - b > 0);
    return a - b > 0;
    // console.log(a, b, '------');
}));