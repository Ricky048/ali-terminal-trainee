<template>
  <!-- 天气的界面 -->
  <div class="weather-box">
    <info-box></info-box>
  </div>
</template>

<script>
import weather_info_box from '@/components/weather/main_weather_info.vue'
export default {
  components: {
    'info-box': weather_info_box
  }
}
</script>

<style lang="less" scoped>
.weather-box {
  box-sizing: border-box;
  padding-left: (12 / 3.75vw);
  padding-right: (12 / 3.75vw);
  width: 100%;
  height: 100vh;
  background-color: #efefef;
}
</style>
