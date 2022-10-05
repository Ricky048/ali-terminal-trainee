<template>
  <!-- 天气的界面 -->
  <div class="weather-box">
    <info-box :dailyWeather="weatherData"></info-box>
  </div>
</template>

<script>
import weather_info_box from '@/components/weather/main_weather_info.vue'
import { location } from '@/js/Location.js'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_weather', ['realTimeWeather']),
      // 未来N天气象数据
      weatherData: {}
    }
  },
  components: {
    'info-box': weather_info_box
  },
  methods: {
    ...mapMutations('m_weather', ['updateRealTimeWeather', 'updateFutureWeather']),
    // 获取实时气象数据的方法，使用axios获取，async解包
    async getWeather() {
      const { data: location } = await this.$http.get('https://restapi.amap.com/v3/ip?key=d1f47fe9029b25c5c2ea0aa216365171')
      // console.log(location)
      let { data: localCode } = await this.$http.get('https://geoapi.qweather.com/v2/city/lookup?key=17fc788e661c475da127af5e7011abff&location=' + location.city)
      // console.log(localCode)
      const { data: res } = await this.$http.get('now?location=' + localCode.location[0].id + '&key=17fc788e661c475da127af5e7011abff')
      const { data: futureWeather } = await this.$http.get('3d?location=' + localCode.location[0].id + '&key=17fc788e661c475da127af5e7011abff')
      // this.realTimeData = res.now
      this.updateRealTimeWeather(res.now)
      this.updateFutureWeather(futureWeather)
    }

    /**获取地图定位*/
    // getLocation() {
    //   let _that = this
    //   let geolocation = location.initMap('map-container') //定位
    //   AMap.event.addListener(geolocation, 'complete', (result) => {
    //     _that.lat = result.position.lat
    //     _that.lng = result.position.lng
    //     _that.province = result.addressComponent.province
    //     _that.city = result.addressComponent.city
    //     _that.district = result.addressComponent.district
    //   })
    // }
  },
  created() {
    // this.getRealTimeWeather()
    this.getWeather()
  },
  mounted() { }
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
}
</style>
