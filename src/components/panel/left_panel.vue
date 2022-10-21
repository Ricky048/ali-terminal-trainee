<template>
  <div class="main-box">
    <transition name="panel">
      <div class="panel" v-if="show"></div>
    </transition>
    <transition name="mask">
      <div class="mask" @click="hide" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    hide() {
      this.show = false
      // 向兄弟组件传递已经隐藏的信息
      bus.$emit('hideSide', false)
      console.log('ok')
    }
  },
  created() {
    bus.$on('showSide', (msg) => {
      this.show = msg
    })
  },
  beforeDestroy() {
    bus.$off('send')
  },
  props: {
    display: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
// 侧边栏展开动画
.panel-enter-active,
.panel-leave-active,
.mask-enter-active,
.mask-leave-active {
  transition: all 0.2s;
}
.panel-enter,
.panel-leave-to {
  transform: translate(-50vw);
  opacity: 0;
}

.mask-enter,
.mask-leave-to {
  opacity: 0;
}

.main-box {
  // display: flex;
  position: fixed;
  margin-top: 10vw;
  width: 100%;
  // background-color: pink;
  .mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .panel {
    z-index: 1;
    position: absolute;
    height: 100vh;
    width: 45vw;
    background-color: skyblue;
  }
}
</style>
