兼容性 不行
scroll-behavior: smooth

chrome 支持css， 但是其他浏览器怎么办？ scroll-behavior失效
JS写

scroll-behavior ie不支持 —— chrome使用
兼容 hack   ie用js  window.scrollTo(0, 1/8); —— ie使用
requestAnimationFrame(递归函数)
浏览器判断
  