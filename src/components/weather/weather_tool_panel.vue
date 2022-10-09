<template>
  <div class="tool-main-box">
    <div class="hours-weather">
      <ul>
        <li>
          <span class="cate">运动指数</span><span class="indexData">{{ weatherIndex[0].category }}</span>
        </li>
        <li>
          <span class="cate">穿衣指数</span><span class="indexData">{{ weatherIndex[1].category }}</span>
        </li>
        <li>
          <span class="cate">紫外线</span><span class="indexData">{{ weatherIndex[2].category }}</span>
        </li>
        <li>
          <span class="cate">空气质量</span><span class="indexData">{{ airQuality.category }}</span>
        </li>
        <li>
          <span class="cate">相对湿度</span><span class="indexData">{{ Number(realTimeWeather().humidity).toFixed(1) }} <span style="font-size: 3.4vw">%</span></span>
        </li>
        <li>
          <span class="cate">PM2.5</span><span class="indexData">{{ Number(airQuality.pm2p5).toFixed(1) }}</span>
        </li>
        <li>
          <span class="cate">{{ realTimeWeather().windDir }}</span
          ><span class="indexData">{{ Number(realTimeWeather().windSpeed).toFixed(1) }} <span style="font-size: 3.4vw">km/h</span></span>
        </li>
        <li>
          <span class="cate">能见度</span><span class="indexData">{{ Number(realTimeWeather().vis).toFixed(1) }} <span style="font-size: 3.4vw">km</span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import weather from '@/store/weather'
import { mapState } from 'vuex'
export default {
  name: 'weather-tool',
  data() {
    return {
      ...mapState('m_weather', ['realTimeWeather']),
      ...mapState('m_location', ['locationCode']),
      weatherIndex: [
        {
          name: '运动指数',
          category: '较适宜'
        },
        {
          name: '穿衣指数',
          category: '热'
        },
        {
          name: '紫外线指数',
          category: '强'
        }
      ],
      airQuality: {
        pubTime: '2022-10-09T01:00+08:00',
        aqi: '36',
        level: '1',
        category: '差',
        primary: 'NA',
        pm10: '36',
        pm2p5: '100',
        no2: '27',
        so2: '6',
        co: '0.7',
        o3: '62'
      }
    }
  },
  methods: {
    async getIndex() {
      const { data: res } = await this.$http.get('https://devapi.qweather.com/v7/indices/1d?type=1,3,5&location=' + this.locationCode() + '&key=17fc788e661c475da127af5e7011abff')
      this.weatherIndex = res.daily
      // console.log(this.realTimeWeather())
    },

    async getQuality() {
      const { data: res } = await this.$http.get('https://devapi.qweather.com/v7/air/now?location=' + this.locationCode() + '&key=17fc788e661c475da127af5e7011abff')
      this.airQuality = res.now
      // console.log(this.airQuality)
    }
  },
  created() {},
  mounted() {
    this.getIndex()
    this.getQuality()
  }
}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
.tool-main-box {
  .hours-weather {
    border-top: rgba(255, 255, 255, 0.2) solid 0.1vw;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        flex-direction: column;
        justify-content: baseline;
        // border: 1px solid white;
        box-sizing: border-box;
        height: 18vw;
        width: 50vw;
        // background-color: skyblue;
        padding: (10 / @ip6) 0 0 (14 / @ip6);

        .cate {
          font-size: (13 / @ip6);
          color: rgba(239, 239, 239, 0.8);
        }

        .indexData {
          margin-top: 1vw;
          // font-size: 1rem;
          color: #efefef;
        }
      }
    }
  }
}
</style>
