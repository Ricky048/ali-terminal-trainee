<template>
  <div id="app">
    <layout-header />
    <layout-main />
    <layout-footer />
    <Map-container></Map-container>
  </div>
</template>

<script>
import Header from '@/layout/Header.vue'
import Main from '@/layout/Main.vue'
import Footer from '@/layout/Footer.vue'
import Map from '@/components/MapContainer.vue'

export default {
  components: {
    LayoutHeader: Header,
    LayoutMain: Main,
    LayoutFooter: Footer,
    'Map-container': Map
  },
  created() {}
}
</script>

<style lang="less">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
