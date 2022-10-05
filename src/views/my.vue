<template>
  <div class="my-box">
    <div class="head-box"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
.my-box {
  position: absolute;
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: green;

  .head-box {
    height: (24 / @ip6);
    width: 100%;
    background-color: red;
  }
}
</style>
