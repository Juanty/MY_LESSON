# my-app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).









- .ts
  typescript 是js 的超集
  typescript 会编译成js
  可以跟写java一样
  .ts -> webpack loader -> bable -> js
  typescript 用来做大型项目，可以有效减少 bug 60% 以上，更好的多人协作


- 将弱类型的js 变成 静态类型的typescript
  错误在编译阶段就解决了
  let a: string = 1; //错误代码
  在比较重要的场合 添加声明
- interface 声明自定义的类型 接口
  多出的20% 代码， 有了类型检测，代码更可靠，有利于合作
- vuex 提供了一些类型给 typescript 学习这些