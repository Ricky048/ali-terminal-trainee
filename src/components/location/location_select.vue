<template>
  <div class="main-box">
    <transition name="search">
      <div class="select-panel" v-show="show">123</div>
    </transition>
    <transition name="main">
      <div class="cover" v-if="show" @click="unShowPanel"></div>
    </transition>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
export default {
  name: 'location-selector',
  data() {
    return {}
  },
  methods: {
    unShowPanel() {
      this.$emit('close', false)
    }
  },
  // props是只读的，并不能进行修改
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
// v-enter-active跟v-leave-active作用于整个动画阶段，一般用来定义动画曲线，动画时间等
.search-enter-active,
.search-leave-active {
  transition: all 0.2s;
}
// 一般使用v-enter以及v-leave-to来定义动画的最初和最终形态，记住这个组合
.search-enter,
.search-leave {
  opacity: 0;
  transform: translateY(-100px);
}

.main-enter-active,
.main-leave-active {
  transition: all 0.2s;
}

.main-enter,
.main-leave-to {
  opacity: 0;
}
.main-box {
  display: flex;
  justify-content: center;
  position: fixed;
  margin-top: 10vw;
  .cover {
    // position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .select-panel {
    position: fixed;
    height: 80vh;
    width: 90vw;
    background-color: white;
    margin-top: -1px;
    z-index: 999;
  }
}
</style>
