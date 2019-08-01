// 'aba' 验证回文字符串

// var isPalindrome = function(s) {
//   s = s.trim();
//     if(s !== "") {
//       for(var i = 0, j = s.length - 1; i <= j; i++, j--) {
//         while(!/[a-z0-9]/i.test(s[i]) && i < s.length && i < j){
//           i++;
//         }
//         while(!/[a-z0-9]/i.test(s[j]) && j > 0 && i < j){
//           j--;
//         }
//         if(s[i].toUpperCase() !== s[j].toUpperCase()){
//           return false;
//         }
//       }
//     }
//   return true;
// };

// function validPalidrome (str) {
//   if (!str || typeof str != 'string' ) return false;
//   return str.split("").reverse().join("") === string;
// }

// 大小写
// 空，特殊符号 忽略
// A man, a plan, a canal: Panama
var isPalindrome = (c) => { // abc 123
  return /^[\w]$/.test(c);
}
var isPalindrome = (s) => {
  s = s.toLowerCase();
  let left = 0,
  right = s.length - 1;

  while(left < right) {
    if (!isValidChar(s[left])) {
      left++;
      continue;
    }

    if (s[left] == s[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }
  return right <= left;
}