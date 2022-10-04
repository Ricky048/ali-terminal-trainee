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
  width: 100%;
  background-color: orange;
}
</style>
