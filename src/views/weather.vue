<template>
  <!-- 天气的界面 -->
  <div class="weather-box" :style="{ backgroundImage: 'url(' + isDay + ')' }">
    <info-box :dailyWeather="weatherData"></info-box>
  </div>
</template>

<script>
import weather_info_box from '@/components/weather/main_weather_info.vue'
import locationRes from '@/js/Location.js'
import { mapMutations, mapState } from 'vuex'
import Location from '@/js/Location.js'
import { VueAMap } from 'vue-amap'

export default {
  data() {
    return {
      ...mapState('m_weather', ['realTimeWeather']),
      // 未来N天气象数据
      weatherData: {},
      isDay: require('@/assets/background/cloudy.jpg')
    }
  },
  components: {
    'info-box': weather_info_box
  },
  methods: {
    ...mapMutations('m_weather', ['updateRealTimeWeather', 'updateFutureWeather']),

    // 处理lottie动图
    handleAnimation(anim) {
      this.defaultAnim = anim
    },

    // 获取实时气象数据的方法，使用axios获取，async解包
    async getWeather() {
      const { data: location } = await this.$http.get('https://restapi.amap.com/v3/ip?key=d1f47fe9029b25c5c2ea0aa216365171')
      // console.log(location)
      let { data: localCode } = await this.$http.get('https://geoapi.qweather.com/v2/city/lookup?key=17fc788e661c475da127af5e7011abff&location=' + location.city)
      // console.log(localCode)
      const { data: res } = await this.$http.get('now?location=' + localCode.location[0].id + '&key=17fc788e661c475da127af5e7011abff')
      const { data: futureWeather } = await this.$http.get('7d?location=' + localCode.location[0].id + '&key=17fc788e661c475da127af5e7011abff')
      // this.realTimeData = res.now
      this.updateRealTimeWeather(res.now)
      this.updateFutureWeather(futureWeather)
      console.log(futureWeather)
      this.judgeDayOrNight(futureWeather.daily[0])
      // console.log(futureWeather)
    },

    // 处理背景图片的函数
    judgeDayOrNight(dailyData) {
      let date = new Date()
      let sunrise = Number(dailyData.sunrise.substring(0, 2)) // 今天10.6输出值为6
      let sunset = Number(dailyData.sunset.substring(0, 2)) // 今天输出值为18
      // console.log(sunset)
      if (date.getHours() < sunset && date.getHours() > sunrise) {
        // 时间段判定 6~18为白天，其余时间段为夜晚，以此判断背景图
        this.isDay = require('@/assets/background/clear_day.jpg')
      } else {
        this.isDay = require('@/assets/background/clear_night.jpg')
      }
    }
  },
  created() {
    // this.getRealTimeWeather()
    this.getWeather()
  },
  mounted() {
    // this.getLocation()
  }
}
</script>

<style lang="less" scoped>
.weather-box {
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding-left: (12 / 3.75vw);
  padding-right: (12 / 3.75vw);
  width: 100%;
  height: 100vh;
  background-color: #efefef;
  // background-image: url('');
  background-size: cover;
}
</style>
