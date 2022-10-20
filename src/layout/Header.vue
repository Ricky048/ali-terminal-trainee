<template>
  <div class="main-box">
    <div class="header-box" v-show="isShow">
      <left-menu />
      <Location @showPanel="displayPanel" :show="ifShowPanel" />
      <right-menu />
    </div>
    <location-selector :show="ifShowPanel" @close="getCloseFlag"></location-selector>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Location from '@/components/location/location_top.vue'
import left_menu from '@/components/menu/left_menu.vue'
import right_menu from '@/components/menu/right_menu.vue'
import location_selector from '@/components/location/location_select.vue'
export default {
  data() {
    return {
      // 实时区域显示文本
      realTimeArea: '南海区',
      isShow: {},
      ifShowPanel: false
    }
  },
  methods: {
    displayPanel(val) {
      // console.log(val)
      this.ifShowPanel = val
    },
    changePanel() {
      this.ifShowPanel = !this.ifShowPanel
    },
    // 传进来关闭panel的信号
    getCloseFlag(val) {
      this.ifShowPanel = val
    }
  },
  props: {},
  computed: {
    ...mapState({
      activeIndex: (state) => state.app.activeIndex
    })
  },
  watch: {
    $route(val) {
      this.isShow = !val.meta.hiddenHeader
    }
  },
  components: {
    Location,
    'left-menu': left_menu,
    'right-menu': right_menu,
    'location-selector': location_selector
  }
}
</script>

<style lang="less" scoped>
.main-box {
  // 不知道什么原因，这个头部必须加上层级才能够显示
  z-index: 999;
  .header-box {
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vw;
    line-height: 10vw;
    background-color: white;
  }
}
</style>
