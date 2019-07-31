const a = {
  b: 1
}
function b () {
  console.log('a 的值发生改变', a.b);
}
function bindData () {
  // object.keys()方法会返回一个由一个给定对象的自身可枚举属性的数组
  Object.keys(a).map(key => {
    let v = a[key]
    Object.defineProperty(a, key, {
      get () { // 读取属性时调用的方法
        console.log('正在读取a 里面的值');
        return v;
      },
      set (newA) { // 写入属性时调用的方法
        v = newA;
        b();
      }
    })
  })
}
bindData();
a.b = 3;