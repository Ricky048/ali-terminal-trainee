<template>
  <div id="app">
    <HeaderBox v-if="active !== 2"></HeaderBox>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-yiliaohangyedeICON--copy-copy"></use>
    </svg> -->
    <router-view />
    <Footer @activePage="getActivePage"></Footer>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // 给状态栏预留位置
  padding-top: 24px;
}
</style>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    getActivePage(val) {
      this.active = val
    }
  },
  watch: {
    // active: {
    //   handler() {}
    // }
  },
  created() {
    // console.log(this.$route) //打印当前路由属性
    // 路由启动初始化页面，默认为天气界面
    if (this.$route.path === '/') {
      this.$router.push('/')
    }
    // this.getActivePage()
  }
}
</script>
