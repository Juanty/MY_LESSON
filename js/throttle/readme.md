### 函数的节流与防抖

阿里js面试第一题
- 搜索建议
  Google suggest
  input value => ajax
  这是有问题的，请求太频繁
  有分词的情况下， 如 灭霸 电蚊液
  keyup 没有必要每次都去触发ajax 太浪费性能
  过滤一些无效的请求， 打完一个单词再去搜索

- 防抖的关键
  频繁输入时，怎么减少请求？
  debounce(ajax, 500) 生成一个函数，能够控制执行， 停止输入时， 执行一次 打完一个单词会有意识地停一下
  setTimeout delay 之后一定会执行一次
  在规定时间内 被clear掉
  clearTimeout(func.id);
  func.id = setTimeout(function () {
    func();
  }, delay)
  句柄， 不重复的数字， func 函数是对象 id属性前一次加了一个setTimeout 下一次再清除