1. 三个容器 背后 100%的宽度，拖拽的圆点，已经拖了的进度条
2. touchStart touchMove touchEnd
3. 改变 width left

```js
new Progress('selector', {
  onDrag: ()  => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  progress: 0.5,
  disableDrag: false
})
```