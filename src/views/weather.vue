<template>
  <!-- 天气的界面 -->
  <div class="weather-box" :style="{ backgroundImage: 'url(' + isDay + ')' }" v-if="ifShow">
    <info-box :dailyWeather="weatherData" :isDayOrNight="dayArea"></info-box>
    <daily-fore></daily-fore>
    <div class="box">
      <weather-tool></weather-tool>
    </div>
    <!-- 把整个面板撑上去，防止出现tabbar遮挡面板的问题 -->
    <div style="padding-bottom: 13%"></div>
  </div>
</template>

<script>
import weather_info_box from '@/components/weather/main_weather_info.vue'
import daily_fore from '@/components/weather/daily_fore.vue'
import weatherTool from '@/components/weather/weather_tool_panel.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_weather', ['realTimeWeather']),
      ...mapState('m_location', ['address']),
      // 未来N天气象数据
      weatherData: {},
      isDay: require('@/assets/background/cloudy.jpg'),
      dayArea: true,
      ifShow: false
    }
  },
  components: {
    'info-box': weather_info_box,
    'daily-fore': daily_fore,
    'weather-tool': weatherTool
  },
  methods: {
    ...mapMutations('m_weather', ['updateRealTimeWeather', 'updateFutureWeather']),
    ...mapMutations('m_location', ['getLocationCode']),
    // 处理lottie动图
    handleAnimation(anim) {
      this.defaultAnim = anim
    },
    // 获取实时气象数据的方法，使用axios获取，async解包
    async getWeather() {
      const { data: location } = await this.$http.get('https://restapi.amap.com/v3/ip?key=d1f47fe9029b25c5c2ea0aa216365171')
      // console.log(this.address())
      const { data: localCode } = await this.$http.get('https://geoapi.qweather.com/v2/city/lookup?key=17fc788e661c475da127af5e7011abff&location=' + this.address().district + '&adm=' + this.address().city)
      // console.log(localCode)
      const { location: Code } = localCode
      this.getLocationCode(Code[0].id)
      const { data: res } = await this.$http.get('https://devapi.qweather.com/v7/weather/now?location=' + Code[0].id + '&key=17fc788e661c475da127af5e7011abff')
      const { data: futureWeather } = await this.$http.get('https://devapi.qweather.com/v7/weather/7d?location=' + Code[0].id + '&key=17fc788e661c475da127af5e7011abff')
      // this.realTimeData = res.now
      // console.log(res)
      this.updateRealTimeWeather(res.now)
      this.updateFutureWeather(futureWeather)
      this.dayArea = this.judgeDayOrNight(futureWeather.daily[0])
      this.ifShow = true
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
        this.isDay = require('@/assets/background/sunny.jpg')
        return true
      } else {
        this.isDay = require('@/assets/background/night.jpg')
        return false
      }
    }
  },
  created() {
    // this.getRealTimeWeather()
  },
  mounted() {
    this.getWeather()
    // this.getLocation()
  }
}
</script>

<style lang="less" scoped>
.weather-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  box-sizing: border-box;
  // padding-left: (12 / 3.75vw);
  // padding-right: (12 / 3.75vw);
  width: 100%;
  background-color: #efefef;
  // background-image: url('');
  background-size: cover;
  .box {
    margin-top: 12px;
    flex: 1;
    width: 100%;
    height: 1000vw;
    background-color: transparent;
  }
}
</style>
