<template>
  <div class="location" :id="active === 1 ? 'set-middle' : ''">
    <div class="menu-box">
      <span class="iconfont icon-caidan" v-if="active === 0"></span>
    </div>
    <div>
      <span class="iconfont icon-location"></span>
      <span>{{ area }}</span>
      <span class="iconfont icon-right" v-if="active === 0"></span>
    </div>

    <div class="more-button" v-if="active === 0">
      <span class="iconfont icon-moreandroid"></span>
    </div>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
export default {
  data() {
    return {
      // 控制文字是否处于中间
      isMiddle: true,
      active: 0
    }
  },
  props: {
    area: {
      type: String,
      default: '北京市'
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
  border-top: #3f3f3f 1px solid;
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
