QQ 631758924 加密过后的
加密规则：
   第一个数删除，   6
   第二个数移到末尾 17589243
   第三步，将第三个数删除   1
   第四个数字移到末尾   5892437

631758924    6     
17589243     1
5892437      5
924378       9
43782        4
7823         7
238          2
83           8
3            3        




QQ 631758924 加密过后的 
加密规则: 算法
第一个数删除,         6 
第二个数移到末尾       17589243
第三步将第三个数字删除  1
第四个数字移动末尾      5892437
直至最后一个数字也删除了为止

631758924   6
17589243    1
5892437     5 
924378      9
43782       4
7823        7
238         2
83          8
3           3

talk in js 

“631758924” 第一个数删除

考虑采用数组来解决 数据结构
只在数组最后面进行操作， Stack 栈  push(入栈) pop(出栈)
在数组的最前面移除一个元素，在最后面插入一个元素 shift()  +   push()   队列 
JS 数组  最廉价的数据结构， 




// 数组是最廉价的数据结构
let enc_qq = [6,3,1,7,5,8,9,2,4],
  qq = [], //真正的
  head = 0, //队首指针, 要移除的元素位置
  tail = 9; //队尾指针, 要加入的元素位置
// 第一个数移除
  while (head < tail) {
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail] = enc_qq[head];
    tail++;
    head++;
  }
  // enc_qq.shift();
  console.log(qq);
// enc_qq.shift();
// console.log(enc_qq);
// enc_qq.unshift(0);
// console.log(enc_qq);
// enc_qq.pop();
// console.log(enc_qq);
// enc_qq.push(0);
// console.log(enc_qq);
// 字符串是字符集合
// console.log(enc_qq.length, enc_qq[0]);