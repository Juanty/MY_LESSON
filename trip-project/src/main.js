// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'
import requestPlugin from './request/http'
import AMap from 'vue-amap'

Vue.use(mandMobile)
// 请求拦截器
Vue.use(requestPlugin)

Vue.use(AMap)
AMap.initAMapApiLoader({
  // 高德的key
  key: 'ac29942f326d66ef2d2d8a8c5a262706',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
