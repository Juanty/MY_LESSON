### 圣杯布局
-  意义：提高用户体验最快时间把重要的内容加载出来。

- 浮动布局：脱离文档流

- 清除浮动，弥补父容器高度塌陷问题
  - 几种方法：
    1. 在父元素底部加上一行代码  <div class="clear: left"></div>
    2. 在父元素css中加上浮动
     div.content{
       float: left;
     }
    3. 使用css中的伪类after， 给父元素div添加一个clearFix的class类
      content::after{
        content:"";
        clear: both;
        display: block;
      }
      content::after{
        content:".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
      .clearFix::after{
        content:".";
        clear: both;
        display: block;
        height: 0;
        visibility: hidden;
      }
    4. 利用BFC（块级格式化上下文）的效果来弥补父容器的高度塌陷
      div.content{
        overflow: hidden; | auto; | scroll;
      }
    5. 尼古拉斯大师 方法， 把父容器的display设置为table，
      可以创建一个匿名表格单元， 直接出发BFC效果。   =>最简便但不推荐使用
      .content{
        display:table;
      }







  