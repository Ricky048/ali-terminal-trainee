<template>
  <!-- 主菜单 -->
  <div class="menu-box" @click="changeSide">
    <span class="iconfont icon-caidan"></span>
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
    // 显示隐藏侧边栏的方法
    changeSide() {
      this.show = !this.show
      // 触发显示隐藏侧边栏的方法则向侧边栏发送信息
      bus.$emit('showSide', this.show)
    }
  },
  created() {
    // 接受从侧边栏发出的信息并且进行监听
    bus.$on('hideSide', (msg) => {
      this.show = msg
    })
  },
  beforeDestroy() {
    // 销毁这个监听事件
    bus.$off('hideSide')
  }
}
</script>

<style lang="less" scoped>
.menu-box {
  .icon-caidan {
    font-weight: 1000;
    margin-left: (12 / 3.75vw);
  }
}
</style>
