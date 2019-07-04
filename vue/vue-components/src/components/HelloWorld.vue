<template>
  <div class="hello">
    <i-menu></i-menu>
    <i-button size="large" @Click.native="handleClick">按钮</i-button>
  </div>
</template>

<script>
import button from './com/button'
import menu from './com/menu'
export default {
  name: 'HelloWorld',
  provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '蜗牛'
      }
    }
  },
  components: {
      'i-button': button,
      'i-menu': menu
  },
  methods: {
    handleClick () {
      // console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
