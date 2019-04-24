- wxml 只是模板， 不像html5，
  看到的是page， 不是wxml， 而是编译过后的wxml，
  js data 拿去模板生成page view
- 登录 登录后
   页面不是静态的， 通过dom ajax
   MVVM 来实现 不同的状态
- wxml {{}} 或者指令 data 加相应的数据项就行
  this.setData{{}}  设置数据， 并且带来数据相应部分UI的重新渲染
  数据驱动界面 响应式 
  MVVM 数据决定一切
  数据状态 === 界面状态
  登录状态 hasUserInfo 界面在某一刻有且只有一个状态
  userInfo: {}  数据驱动界面 

- {{}} 不只是数据输出， 里面是js运行 {{addShow ? '' : 'hide'}}