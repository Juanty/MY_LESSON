// 实现一个函数， 它的输入是数组， 其中包含喜欢该项目的人的姓名，
// likes []  no one likes this
// likes ['Peter'] Peter likes this
// likes ['Jacob', 'Alex'] Jacob and Alex like this
// likes ['Max', 'Jhon', 'Mark'] "Max, Jhon and Mark like this"
// likes ['Alex', 'Jacob', 'Mark','max'] "Alex, Jacob, and 2 others like this"

// 1. 跟 phone number 一样的解法
// 字符串模式， 数组的遍历
// 2. 多种模式情况 [下标]
// nums.length

// function createPhoneNumber(numbers) {
//   var format = "(xxx) xxx-xxxx";
//   for(var i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
//   }
//   return format;
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

function likes(names) {
  // 规则模板数组
  var templates = [
    'no one like this',
    '{name} like this',
    '{name} and {name} like this',
    '{name}, {name} and {name} like this',
    '{name}, {name} and {n} others like this'
  ];
  var idx = Math.min(names.length, 4);
  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === '{name}' ? names.shift() : names.length;
  });
}
console.log(likes([]));
console.log(likes(['Alex'])); 
console.log(likes(['Alex', 'Jhon']));
console.log(likes(['Alex', 'Jhon', 'Jacob']));
console.log(likes(['Alex', 'Jhon', 'Jacob', 'baby']));
console.log(likes(['Alex', 'Jhon', 'Jacob', 'baby', 'mami']));