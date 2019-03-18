- css 命名词汇
  feeds （如：feed-item）  *-item -> 列表
- html结构及布局
  从上到下 从左到右 语义化和功能性
  1. 套路
  content>h3+p
  2. 盒子
  3. a 作为盒子在移动端是很正常的，
     display: block
  4. 盒子模型
  文字line-height padding margin
  5. 文字截断
     tmall 商铺信息是由商家填写的，它的高度不被限制
     display: -webkit-box;新的盒子模型，像flex 来划分父元素的空间. =>盒子布局
     overflow: hiddden  超出则隐藏
     -webkit-line-clamp 行数
     -webkit-box-orient: vertical
- a.feed-item>(div.feed-content>div.cover+h3+p)+div.author>span.name

6. 浮动 float:left | right
   离开文档流
   在一个盒子里，将要浮动的元素卸载最前面 => 左右布局。
   在flex 布局之前，我们一般借助于float 来布局。
   图片的宽高？ 宽度用百分比， 达到自适应的需求。
   高度怎么做？ div padding-top: 自身的宽度来做比例100% => 正方形
   自适应设备里的盒子的等比例设置 width 百分比，
   高度用padding-top
  