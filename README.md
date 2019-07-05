# MY_LESSON
- Coding dream...
- Git常用命令使用大全
  https://www.cnblogs.com/Gxiaopan/p/6714539.html
- Git常用命令速查表
  https://upload-images.jianshu.io/upload_images/2759190-030b69c3de39e145.png
- Git is a distributed version control system.
  Git is a free software under the GPL.
  Git has a mutable index called stage.
  Git tracks changes of file.
  Github uses git to handle codes, more safety.
  create a new branch is quick & simple.
  create a tst branch.
- git_skills git clone 拉取远程origin代码到本地，再进行版本控制
 
## js 有7个假值
- undifined
- null
- +0
- -0
- NaN
- ""
- false

- 0 / 1 Number 类型
- 2... bool值类型

-[] == false true

- this在全局指向window 在构造函数下指向调用它的对象

# js面试知识点
1. 对于箭头函数，this关键字指向是它所在上下文（定义时的位置）的环境，与普通函数不同！
2. 一元加号会尝试将boolean类型转换为数字类型。 true被转换为1，false被转换为0。
3. 译者注：==会引发隐式类型转换，右侧的对象类型会自动拆箱为Number类型。当我们使用==运算符时，它只检查它是否具有相同的值。 他们都有3的值，所以它返回true。
4. 您不能像使用常规对象那样向构造函数添加属性。 如果要一次向所有对象添加功能，则必须使用原型。 Person.prototype.getFullName = function () { return ${this.firstName} ${this.lastName}; }
 