<template>
  <div class="location">
    <span class="iconfont icon-location" v-if="isMiddle"></span>
    <span>{{ area }}</span>
    <span class="iconfont icon-right" v-if="isMiddle"></span>
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
    }
  }
}
</script>

<style scoped lang="less">
@ip6: 3.75vw;
.location {
  display: flex;
  font-size: (16 / @ip6);
  font-weight: 550;
  justify-content: center;
  align-items: center;
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
}
</style>
