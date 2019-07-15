## context
  跨组件之间传递数据
  this.props
  父组件 -> 子组件 -> 孙组件
  context: 父组件 -> 孙组件
  被 react-router react-redux 广泛使用
  版本区分 16.0 前后

## 问题
  shouldComponentUpdate
  尽可能少渲染
  return true 
  return false 不更新
  如果中间某个组件 shouldComponentUpdate false 后代组件不会更新

## context 16.0
  新增 update