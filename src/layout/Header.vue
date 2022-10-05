<template>
  <div class="header-box" v-show="isShow">
    <Location :area="realTimeArea" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Location from '@/components/Location.vue'
export default {
  data() {
    return {
      // 实时区域显示文本
      realTimeArea: '南海区',
      isShow: {}
    }
  },
  computed: {
    ...mapState({
      activeIndex: state => state.app.activeIndex
    })
  },
  watch: {
    $route(val) {
      this.isShow = !val.meta.hiddenHeader
    }
  },
  components: {
    Location
  }
}
</script>

<style>
.header-box {
  width: 100%;
  height: 10vw;
  line-height: 10vw;
  background-color: #fff;
  z-index: 999;
}
</style>
