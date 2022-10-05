<template>
  <div id="app">
    <layout-header />
    <layout-main />
    <layout-footer />
  </div>
</template>

<script>
import Header from '@/layout/Header.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'
export default {
  components: {
    LayoutHeader: Header,
    LayoutMain: Main,
    LayoutFooter: Footer
  }
}
</script>

<style lang="less">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>