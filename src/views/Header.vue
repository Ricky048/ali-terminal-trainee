<template>
  <!-- 头部区域 -->
  <div class="header-box">
    <local :area="realTimeArea" :active="active"></local>
  </div>
</template>

<script>
import local from '@/components/Location.vue'
import bus from '@/store/bus.js'
export default {
  data() {
    return {
      // 实时区域显示文本
      realTimeArea: '南海区',
      active: 0
    }
  },
  name: 'Header',
  components: {
    local
  },
  methods: {},
  created() {
    bus.$on('activePage', (val) => {
      this.active = val
    })
  },
  updated() {}
}
</script>

<style>
.header-box {
  position: fixed;
  width: 100%;
  height: 10vw;
  line-height: 10vw;
  background-color: #fff;
  z-index: 999;
  /* background-color: orange; */
}
</style>
