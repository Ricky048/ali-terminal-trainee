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
export default {
  data() {
    return {
      // 控制文字是否处于中间
      isMiddle: true
    }
  },
  props: {
    area: {
      type: String,
      default: '北京市'
    },
    active: {
      type: Number,
      default: 0
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
@ip6: 3.75vw;
.location {
  display: flex;
  font-size: (16 / @ip6);
  font-weight: 550;
  justify-content: space-between;
  align-items: center;
  padding: 0 (12 / @ip6);
  margin: 0 auto;
  height: 10vw;
  background-color: pink;
  color: #3f3f3f;

  .icon-right,
  .icon-location {
    font-size: (14 / @ip6);
    font-weight: 1000;
    // transform: rotate(90deg);
    margin-left: 0.6vw;
  }

  .icon-location {
    font-size: (18 / 3.75vw);
    transform: rotate(0);
    margin-left: 0;
    margin-right: 0.2vw;
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
