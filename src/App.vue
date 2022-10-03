<template>
  <div id="app">
    <!-- <van-nav-bar title="标题" /> -->
    <HeaderBox></HeaderBox>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-yiliaohangyedeICON--copy-copy"></use>
    </svg> -->
    <Footer></Footer>
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
    return {}
  }
}
</script>
