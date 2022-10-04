<template>
  <div class="main-info-box">
    <div class="left">
      <lottie class="lottie" :options="defaultOptions" :width="150" :height="150" @animCreated="handleAnimation"></lottie>
      <div class="detail">
        <span class="weather-desc">晴转阵雨 34/29℃</span>
        <span class="time">日间 13:14</span>
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

// 柔和半透明图标
import sunny_day from '@/assets/Lottie/sunny-day.json'
import night_rain from '@/assets/Lottie/night-rain.json'
import cloudy from '@/assets/Lottie/cloudy.json'
import cloudy02 from '@/assets/Lottie/cloudy-02.json'
import cloudy03 from '@/assets/Lottie/cloudy-03.json'
import cloudy_rainy from '@/assets/Lottie/cloudy-and-rainy.json'
import fog from '@/assets/Lottie/fog.json'
import full_moon from '@/assets/Lottie/full-moon.json'
import light_snow from '@/assets/Lottie/light-snow.json'
import night from '@/assets/Lottie/night.json'
import night_cloudy from '@/assets/Lottie/night-cloudy.json'
import night_rain_storm from '@/assets/Lottie/night-rain-and-storm.json'
import sunny_night from '@/assets/Lottie/sunny-night.json'
import thunder from '@/assets/Lottie/thunder.json'

// 扁平化图标
import sunny_day01 from '@/assets/Lottie/SunnyDay.json'
import blustery from '@/assets/Lottie/Blustery.json'
import clear_night from '@/assets/Lottie/Clear-Night.json'
import cloudy04 from '@/assets/Lottie/Cloudy02.json'
import cold from '@/assets/Lottie/Cold.json'
import dust from '@/assets/Lottie/Dust.json'
import foggy from '@/assets/Lottie/Foggy.json'
import hot from '@/assets/Lottie/Hot.json'
import isolated_thundershowers from '@/assets/Lottie/Isolated-Thundershowers.json'
import mostly_cloudy_day from '@/assets/Lottie/MostlyCloudyDay.json'
import mostly_cloudy_night from '@/assets/Lottie/MostlyCloudyNight.json'
import showers from '@/assets/Lottie/Showers.json'
import snow_flurries from '@/assets/Lottie/SnowFlurries.json'
import snow from '@/assets/Lottie/Snow.json'
import typhoon from '@/assets/Lottie/typhoon.json'
import windy from '@/assets/Lottie/Windy.json'
import tornado from '@/assets/Lottie/tornado.json'
export default {
  name: 'weather_info_box',
  props: {},
  data() {
    return {
      defaultOptions: { animationData: cloudy_rainy, loop: true, autoplay: true },
      defaultAnim: '',
      weatherIcon: [
        {
          path: 'sunny_day',
          timeDesc: '日间',
          desc: '晴朗的上午'
        },
        {
          path: 'night_rain',
          timeDesc: '夜间',
          desc: '夜间暴雨'
        },
        {
          path: 'cloudy',
          timeDesc: '日间',
          desc: '多云的日间'
        },
        {
          path: 'cloudy02',
          timeDesc: '日间',
          desc: '较轻的多云'
        },
        {
          path: 'cloudy03',
          timeDesc: '日间',
          desc: '多云'
        },
        {
          path: 'cloudy_rainy',
          timeDesc: '日间',
          desc: '晴转阵雨'
        },
        {
          path: 'fog',
          timeDesc: 'both',
          desc: '有雾'
        },
        {
          path: 'full_moon',
          timeDesc: '夜间',
          desc: '晴朗无云的夜间'
        },
        {
          path: 'light_snow',
          timeDesc: 'both',
          desc: '阵雪'
        },
        {
          path: 'night',
          timeDesc: '夜间',
          desc: '较轻多云的夜间'
        },
        {
          path: 'night_cloudy',
          timeDesc: '夜间',
          desc: '夜间多云'
        },
        {
          path: 'night_rain_storm',
          timeDesc: 'both',
          desc: '雷阵雨'
        },
        {
          path: 'sunny_night',
          timeDesc: '夜间',
          desc: '晴朗的夜间'
        },
        {
          path: 'thunder',
          timeDesc: 'both',
          desc: '打雷，可能下雨'
        }
      ]
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
      font-size: (70 / @ip6);
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
    flex: 1;
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
