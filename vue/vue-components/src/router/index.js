import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import iDisplay from '@/components/com/display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      component: iDisplay
    }
  ]
})
