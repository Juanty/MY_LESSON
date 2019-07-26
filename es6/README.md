###对 ES6 的理解   

ES6相对于ES5  ECMAScipt 的第六次修订  
ES2015  随着babel webpack 构建工具的成熟，  
ES6 已成为js 编程的事实标准。  
我认为 ES6 比 ES5 更加简介，提高了开发效率，   
让js代码更优雅。   

- 新增的特性  
  let变量 和const 常量声明，具有var没有的块级作用域，      
  比如循环事件监听时闭包就不需要了，让代码更好理解。   
  var 变量提升的能力，但是 let const 不会到顶级对象上去，       
  使用的变量或常量一定要声明一下            

- 箭头函数  
  简化了函数的表达形式，  
  1. 不用function 关键字 () => {}  
  2. 如果只有一个参数，() 也可以省  
  3. 如果代码直接返回，{} 也可以省  右侧的代码就是返回值
  4. 有效的规避了this 丢失的问题指向上一级

- 模板字符串  
  增强版的字符串，用``云括号，  
  它的多行表达方式，特别适合react jsx templete的书写      
  DOM或html 模板的构建 更加优雅    

- 解构赋值   
  可解，spread 可合，reset 从对象或数组中提取值，  
  对变量进行赋值，提高开发效率      

- for of 循环    
  for 计步，数组友好，但是对象，Set Map       
  类数组 以及字符串都可以遍历      

- SET ES6 新增的数据结构    
  类似数组。唯一的，没有重复的值  

- import export ES6的模块化       
  ES6原生支持的module，将js代码分割成不同的小块独立开发       
  一个文件一个类，一个独立的模块，比如说utils api        

- ... 展开运算符    
  终于支持原生的class关键字了，  
  让js 有了传统的面向对象的写法，extends    
  不过他只是语法糖，底层还是基于原型的面向对象

- promise  
  为js 提供了异步解决方案，归避了回调地狱(then)   
  代码的书写和执行是一样的

- 更棒的异步解决方案 ES7  
  async await  
  koa 就是基于async await 快速取代了 express的江湖地位

- vue react 响应式编程依赖的proxy   
  defineProperty 监听对象的改变，做一些事情

- ES6 提供了新的数据类型，Symbol
  
