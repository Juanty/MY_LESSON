###圣杯布局
-  意义：提高用户体验最快时间把重要的内容加载出来。

- 浮动布局：脱离文档流

- 清除浮动，弥补父容器高度塌陷问题
  - 几种方法：
    1. 在父元素底部加上一行代码  <div class="clear: left"></div>
    2. 父级div定义伪类：after和zoom
    3. 父级div定义height
    4. 父级div定义overflow:hidden
    5. 父级div定义overflow:auto
    6. 父级div也一起浮动
    7. 父级div定义display:table