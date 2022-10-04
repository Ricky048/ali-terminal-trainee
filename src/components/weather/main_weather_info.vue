<template>
  <div class="main-info-box">
    <div class="left">
      <lottie class="lottie" :options="defaultOptions" :width="150" :height="150" @animCreated="handleAnimation"></lottie>
      <div class="detail">
        <span class="weather-desc">暴雨 34/29℃</span>
        <span class="time">夜间 0:57</span>
      </div>
    </div>
    <div class="temp">
      <span class="area-temp">29</span>
      <span class="feeling-temp">体感：30°</span>
    </div>
  </div>
</template>

<script>
// 导入天气lottie
import sunny_day from '@/assets/Lottie/sunny-day.json'
import sunny_day01 from '@/assets/Lottie/SunnyDay.json'
import night_rain from '@/assets/Lottie/night-rain.json'
import blustery from '@/assets/Lottie/Blustery.json'
import clear_night from '@/assets/Lottie/Clear-Night.json'
import cloudy from '@/assets/Lottie/cloudy.json'
import cloudy02 from '@/assets/Lottie/cloudy-02.json'
import cloudy03 from '@/assets/Lottie/cloudy-03.json'
import cloudy_rainy from '@/assets/Lottie/cloudy-and-rainy.json'
import cloudy04 from '@/assets/Lottie/Cloudy02.json'
import cold from '@/assets/Lottie/Cold.json'
import dust from '@/assets/Lottie/Dust.json'
import fog from '@/assets/Lottie/fog.json'
import foggy from '@/assets/Lottie/Foggy.json'
import full_moon from '@/assets/Lottie/full-moon.json'
import hot from '@/assets/Lottie/Hot.json'
import isolated_thundershowers from '@/assets/Lottie/Isolated-Thundershowers.json'
import light_snow from '@/assets/Lottie/light-snow.json'
import mostly_cloudy_day from '@/assets/Lottie/MostlyCloudyDay.json'
import mostly_cloudy_night from '@/assets/Lottie/MostlyCloudyNight.json'
import night from '@/assets/Lottie/night.json'
import night_cloudy from '@/assets/Lottie/night-cloudy.json'
import night_rain_storm from '@/assets/Lottie/night-rain-and-storm.json'
import showers from '@/assets/Lottie/Showers.json'
import snow_flurries from '@/assets/Lottie/SnowFlurries.json'
import snow from '@/assets/Lottie/Snow.json'
import sunny_night from '@/assets/Lottie/sunny-night.json'
import thunder from '@/assets/Lottie/thunder.json'
import tornado from '@/assets/Lottie/tornado.json'
import typhoon from '@/assets/Lottie/typhoon.json'
import windy from '@/assets/Lottie/Windy.json'
export default {
  name: 'weather_info_box',
  props: {},
  data() {
    return {
      defaultOptions: { animationData: rain, loop: true, autoplay: true },
      defaultAnim: ''
    }
  },
  methods: {
    handleAnimation(anim) {
      this.defaultAnim = anim
    }
  }
}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
.main-info-box {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: (24 / @ip6) (35 / @ip6);
  margin-top: 100px;
  height: (150 / 3.75vw);
  width: 100%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #efefef;
  box-sizing: border-box;

  .temp {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    .area-temp {
      font-size: (65 / @ip6);
      font-weight: 600;

      &::after {
        content: '°';
        display: inline-block;
        font-size: (30 / @ip6);
        vertical-align: super;
      }
    }

    .feeling-temp {
      font-size: (15 / @ip6);
    }
  }

  .left {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;

    .lottie {
      position: absolute;
      bottom: (5 / @ip6);
      left: (-20 / @ip6);
    }

    .detail {
      display: flex;
      flex-direction: column;
      position: absolute;
      align-items: baseline;
      bottom: (2 / @ip6);
      left: (10 / @ip6);

      .weather-desc {
      }

      .time {
        font-size: (12 / @ip6);
        margin-top: (5 / @ip6);
      }
    }
  }
}
</style>
