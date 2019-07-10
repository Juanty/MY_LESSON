
## 跨域
   跨域是浏览器的安全策略 同源策略： 同协议 域名 端口 一致才是同源 不存在跨域

## 解决跨域问题
-  CORS
   规定了一组 http 的头部字段 作用是：
   允许哪些网站通过浏览器有哪些访问的权限
   1. access-X
   2. cookie
   3. 浏览器会先以 OPTIONS 请求方法发起一个预检 (preflight)请求 获取一下允不允许当前的域请求 服务器允许之后才会发起正式的请求

## 代理
   1. nginx live-server --proxy=/api:http://localhost:9999/api/ 反向代理 http://localhost:9999/api/ 或者其他 不知道 请求的是哪个服务器
   - 正向代理 google A -> proxy -> google.com B -> proxy -> google.com

## iframe + postMessage
   1. 前端页面 通过iframe 引入一个 后端目录下面的html, iframe是不受同源策略限制的
   2. postMessage 用于在两个窗口之间传递数据
   3. 前端页面 同过postMessage 向后端目录下面的html传递接口需要的请求参数
   4. 后端页面 通过 postMessage 向前端页面传递 接口结果