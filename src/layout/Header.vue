<template>
  <div class="header-box" v-show="isShow">
    <Location :area="realTimeArea" />
    <location-selector v-if="ifShowPanel" @showPanel="show"></location-selector>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Location from '@/components/Location.vue'
import location_selector from '@/components/location/location_panel.vue'
export default {
  data() {
    return {
      // 实时区域显示文本
      realTimeArea: '南海区',
      isShow: {},
      ifShowPanel: true
    }
  },
  methods: {
    show(val) {
      console.log(val)
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
    'location-selector': location_selector
  }
}
</script>

<style>
.header-box {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vw;
  line-height: 10vw;
  background-color: #fff;
  z-index: 999;
}
</style>
