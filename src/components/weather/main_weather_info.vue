<template>
  <div class="main-info-box">
    <div class="left">
      <Lottie class="lottie" :options="defaultOptions" :width="150" :height="150" @animCreated="handleAnimation"> </Lottie>
      <div class="detail">
        <span class="weather-desc">{{ realTimeWeather().text }} {{ dailyWeather().daily[0].tempMax }}/{{ dailyWeather().daily[0].tempMin }}℃</span>
        <span class="time">{{ timeArea }} {{ time }}</span>
      </div>
    </div>
    <div class="temp">
      <span class="area-temp">{{ realTimeWeather().temp }}</span>
      <span class="feeling-temp">体感：{{ realTimeWeather().feelsLike }}°</span>
    </div>
  </div>
</template>

<script>
// 引入vuex
import { mapState } from 'vuex'
// 引入lottie动画组件
import Lottie from 'vue-lottie'

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
  props: {
    // realTimeWeather: {
    //   type: Object,
    //   default: null
    // },
    // dailyWeather: {
    //   type: Object,
    //   default: null
    // }
  },
  computed: {},
  data() {
    return {
      ...mapState('m_weather', ['realTimeWeather', 'dailyWeather']),

      defaultOptions: { animationData: night_rain, loop: true, autoplay: true },
      defaultAnim: '',
      weatherIcon: [
        {
          path: sunny_day,
          timeDesc: '日间',
          desc: '晴朗的正午',
          id: 100
        },
        {
          path: night_rain,
          timeDesc: 'both',
          desc: '大雨',
          id: 307
        },
        {
          path: cloudy,
          timeDesc: '日间',
          desc: '多云的日间',
          id: 102
        },
        {
          path: cloudy02,
          timeDesc: '日间',
          desc: '较轻的多云',
          id: 103
        },
        {
          path: cloudy03,
          timeDesc: '日间',
          desc: '多云',
          id: 104
        },
        {
          path: cloudy_rainy,
          timeDesc: '日间',
          desc: '晴转阵雨',
          id: 300
        },
        {
          path: fog,
          timeDesc: 'both',
          desc: '有雾',
          id: 501
        },
        {
          path: full_moon,
          timeDesc: '夜间',
          desc: '晴朗无云的夜间',
          id: 150
        },
        {
          path: light_snow,
          timeDesc: 'both',
          desc: '阵雪',
          id: 457
        },
        {
          path: night,
          timeDesc: '夜间',
          desc: '较轻多云的夜间',
          id: 152
        },
        {
          path: night_cloudy,
          timeDesc: '夜间',
          desc: '夜间多云',
          id: 151
        },
        {
          path: night_rain_storm,
          timeDesc: 'both',
          desc: '雷阵雨',
          id: 302
        },
        {
          path: sunny_night,
          timeDesc: '夜间',
          desc: '晴朗的夜间',
          id: 150
        },
        {
          path: thunder,
          timeDesc: 'both',
          desc: '打雷，可能下雨',
          id: 154
        }
      ],
      time: '',
      timeArea: ''
      // 接受实时信息
      // realTimeWeather: this.realTimeWeather
      // dailyWeather: {
      //   tempMax: 36,
      //   tempMin: -1
      // }
    }
  },
  methods: {
    handleAnimation(anim) {
      this.defaultAnim = anim
    },
    getTime() {
      let date = new Date()
      this.time = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    },
    disTimeArea() {
      let date = new Date().getHours()
      let time = ''
      if (0 <= date && date < 3) time = '拂晓'
      else if (3 <= date && date < 6) time = '黎明'
      else if (6 <= date && date < 9) time = '清晨'
      else if (9 <= date && date < 12) time = '上午'
      else if (12 <= date && date < 15) time = '正午'
      else if (15 <= date && date < 18) time = '下午'
      else if (18 <= date && date < 21) time = '傍晚'
      else time = '深夜'
      this.timeArea = time
    },
    searchIcon() {
      this.weatherIcon.forEach((element) => {
        // console.log(element)
        // 注意从vuex中取出来的数据需要加上括号，不然识别不到
        if (element.id === Number(this.realTimeWeather().icon)) {
          // console.log(this.realTimeWeather().icon)
          this.defaultOptions.animationData = element.path
          return
        }
      })
    }
  },
  created() {
    this.getTime()
    this.disTimeArea()
    this.searchIcon()
    // console.log(this.realTimeWeather())
  },
  mounted() {
    // console.log(this.realTimeWeather)
  },
  components: {
    Lottie
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
  margin-top: (75 / 3.75vw);
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
