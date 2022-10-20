<template>
  <div class="location" :id="active === 1 ? 'set-middle' : ''">
    <!-- 主菜单 -->
    <div class="menu-box">
      <span class="iconfont icon-caidan" v-if="active === 0"></span>
    </div>
    <!-- 下拉菜单，包括位置展示 -->
    <div @click="showPanel">
      <span class="iconfont icon-location"></span>
      <span>{{ address() ? address().district : area }}</span>
      <span class="iconfont icon-right" v-if="active === 0"></span>
    </div>
    <!-- 更多按钮，暂时只装设置 -->
    <div class="more-button" v-if="active === 0">
      <span class="iconfont icon-moreandroid"></span>
    </div>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_location', ['address']),
      // 控制文字是否处于中间
      isMiddle: true,
      active: 0,
      area: '北京市',
      isShow: false
    }
  },
  props: {
    // area: {
    //   type: String,
    //   default: '北京市'
    // }
  },
  methods: {
    showPanel() {
      // 将isShow抛给父组件
      this.$emit('showPanel', this.isShow)
      this.isShow = !this.isShow
    }
  },
  created() {
    bus.$on('activePage', (val) => {
      this.active = val
    })
  }
}
</script>

<style scoped lang="less">
@ip6: 3.75vw;

.location {
  display: flex;
  font-size: (14 / @ip6);
  font-weight: 500;
  justify-content: space-between;
  align-items: center;
  padding: 0 (12 / @ip6);
  margin: 0 auto;
  // background-color: pink;
  box-sizing: border-box;
  color: #3f3f3f;

  .icon-right,
  .icon-location {
    font-size: (14 / @ip6);
    font-weight: 1000;
    // transform: rotate(90deg);
    margin-left: 0.6vw;
    vertical-align: middle;
  }

  .icon-location {
    font-size: (18 / 3.75vw);
    transform: rotate(0);
    margin-left: 0;
    margin-right: 0.5vw;
  }

  .icon-caidan {
    font-weight: 1000;
  }

  .icon-moreandroid {
    font-weight: 1000;
  }
}

#set-middle {
  justify-content: center;
}
</style>
