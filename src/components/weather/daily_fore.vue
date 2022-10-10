<template>
  <div class="main-box">
    <div class="weather-icon">
      <span class="icon-box" v-for="(item, i) in this.dailyWeather().daily" :key="i">
        <svg class="icon" aria-hidden="true" v-html="icons[i]"></svg>
        <span class="date">{{ i === 0 ? '今天' : getUTCDay(i) }}</span>
      </span>
    </div>
    <!-- 这个组件用于创建一个可视化天气温预报 -->
    <div id="eCharts-box"></div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'hours_eCharts',
  data() {
    return {
      ...mapState('m_weather', ['dailyWeather']),
      // 天气图标数据集
      weather_icon: [
        { id: 100, name: '晴 白天', icon: '#icon-sunny' },
        { id: 999, name: '位置 默认晴', icon: '#icon-sunny' },
        { id: 101, name: '多云 白天', icon: '#icon-duoyun1' },
        { id: 102, name: '少云 白天', icon: '#icon-duoyunzhuanqing' },
        { id: 103, name: '晴转多云 白天', icon: '#icon-qingzhuanduoyun' },
        { id: 104, name: '阴天 both', icon: '#icon-yintian' },
        { id: 150, name: '晴 夜间', icon: '#icon-yejianqing' },
        { id: 151, name: '夜间多云 夜间', icon: '#icon-yejianduoyun' },
        { id: 152, name: '夜间少云 夜间', icon: '#icon-yejianduoyun' },
        { id: 153, name: '夜间晴间多云 夜间', icon: '#icon-yejianduoyun' },
        { id: 154, name: '阴天 夜间', icon: '#icon-yejianyin' },
        { id: 300, name: '阵雨 白天', icon: '#icon-qingzhuanyu' },
        { id: 301, name: '强阵雨 白天', icon: '#icon-qingzhuanyu' },
        { id: 302, name: '雷阵雨 both', icon: '#icon-lighting' },
        { id: 303, name: '强雷阵雨 both', icon: '#icon-lighting' },
        { id: 304, name: '雷阵雨有冰雹 白天', icon: '#icon-leizhenyubanyoubingbao' },
        { id: 305, name: '小雨 both', icon: '#icon-xiaoyu' },
        { id: 306, name: '中雨 both', icon: '#icon-rain' },
        { id: 307, name: '大雨 both', icon: '#icon-dayu' },
        { id: 314, name: '中雨 both', icon: '#icon-rain' },
        { id: 315, name: '大雨 both', icon: '#icon-dayu' },
        { id: 399, name: '雨 both', icon: '#icon-rain' },
        { id: 308, name: '极端降雨 both', icon: '#icon-tedabaoyu' },
        { id: 309, name: '细雨 both', icon: '#icon-xiaoyu' },
        { id: 310, name: '暴雨 both', icon: '#icon-baoyu' },
        { id: 311, name: '大暴雨 both', icon: '#icon-dabaoyu' },
        { id: 316, name: '暴雨 both', icon: '#icon-baoyu' },
        { id: 317, name: '大暴雨 both', icon: '#icon-dabaoyu' },
        { id: 312, name: '特大暴雨 both', icon: '#icon-tedabaoyu' },
        { id: 318, name: '特大暴雨 both', icon: '#icon-tedabaoyu' },
        { id: 313, name: '冻雨 both', icon: '#icon-dongyu' },
        { id: 350, name: '夜间阵雨 夜间', icon: '#icon-yejianyu' },
        { id: 351, name: '夜间阵雨 夜间', icon: '#icon-yejianyu' },
        { id: 400, name: '小雪 both', icon: '#icon-xiaoxue' },
        { id: 401, name: '中雪 both', icon: '#icon-snow' },
        { id: 402, name: '大雪 both', icon: '#icon-daxue' },
        { id: 403, name: '暴雪 both', icon: '#icon-tedabaoxue' },
        { id: 408, name: '小到中雪 both', icon: '#icon-snow' },
        { id: 409, name: '中到大雪 both', icon: '#icon-daxue' },
        { id: 410, name: '大到暴雪 both', icon: '#icon-tedabaoxue' },
        { id: 404, name: '雨夹雪 both', icon: '#icon-sleet' },
        { id: 405, name: '雨雪 both', icon: '#icon-sleet' },
        { id: 406, name: '晴转雨夹雪 白天', icon: '#icon-qingzhuanyujiaxue' },
        { id: 407, name: '阵雪 白天', icon: '#icon-qingzhuanxue' },
        { id: 456, name: '夜间雨夹雪 夜间', icon: '#icon-yejianyujiaxue' },
        { id: 457, name: '夜间阵雪 夜间', icon: '#icon-yejianxue' },
        { id: 499, name: '雪 both', icon: '#icon-snow' },
        { id: 500, name: '薄雾 白天', icon: '#icon-wu' },
        { id: 501, name: '雾 白天', icon: '#icon-wu' },
        { id: 502, name: '雾霾 白天', icon: '#icon-mai1' },
        { id: 503, name: '扬沙 both', icon: '#icon-fuchenyangsha1' },
        { id: 504, name: '浮尘 both', icon: '#icon-fuchenyangsha1' },
        { id: 507, name: '沙尘暴 both', icon: '#icon-shachenbao' },
        { id: 508, name: '强沙尘暴 both', icon: '#icon-shachenbao1' }
      ],
      // iconDOM集,用于动态进行svg图标渲染
      icons: []
      // dailyMax: [],
      // dailyMin: []
    }
  },
  methods: {
    // 绘制数据可视化函数
    drawHoursPred() {
      let echarts = require('echarts')
      var chartDom = document.getElementById('eCharts-box')
      var myChart = echarts.init(chartDom)
      var option = {
        media: [{}],
        // 是否显示单一显示按钮，这里这个组件不需要，不显示
        legend: {
          show: false
        },
        grid: {
          left: '-25',
          right: '-25',
          top: '25%',
          bottom: '25%'
        },
        // x坐标轴配置项
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        // y坐标轴配置项
        yAxis: {
          type: 'value',
          show: false,
          min: Number(this.min)
          // max: this.max
        },
        series: [
          {
            // 是否有动态效果
            animation: false,
            silent: true,
            symbol: 'circle',
            stack: 'x',
            // 是否显示数据，此处显示
            label: {
              show: true,
              position: [0, -17],
              // 文字偏移量
              offset: 0,
              formatter: '{@data} ℃',
              color: 'white',
              // fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条
            lineStyle: {
              color: 'rgba(239,239,239,0.7)'
            },
            // 线条端点
            itemStyle: {
              color: '#efefef'
            },
            // 填充区域
            areaStyle: {
              origin: Number(this.datum()),
              opacity: 0.35
            },
            name: 'Highest',
            type: 'line',
            data: [this.dailyMaxTemp[0], ...this.dailyMaxTemp, this.dailyMaxTemp[6]]
          },
          {
            animation: false,
            silent: true,
            symbol: 'circle',
            label: {
              show: true,
              position: [0, 17],
              offset: 0,
              formatter: '{@data} ℃',
              color: 'white',
              // fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条颜色
            lineStyle: {
              color: 'rgba(239,239,239,0.7)'
            },
            // 线条端点颜色
            itemStyle: {
              color: '#efefef'
            },
            areaStyle: {
              origin: Number(this.datum()),
              // color: 'rgba(255,255,255,0.4)'
              opacity: 0.35
            },
            name: 'Lowest',
            type: 'line',
            data: [this.dailyMinTemp[0], ...this.dailyMinTemp, this.dailyMinTemp[6]]
          }
        ]
      }
      option && myChart.setOption(option)
    },
    // 设置基准线,用于绘制数据可视化函数,原理是获取当前周最低气温集中的最高气温
    datum() {
      var arr = []
      for (let i = 0; i < this.dailyMinTemp.length; i++) {
        arr.push(Number(this.dailyMinTemp[i]))
      }
      arr = arr.sort((a, b) => {
        return a - b
      })
      // console.log(arr)
      return arr[arr.length - 1]
    },
    // 获取当前的星期N
    getUTCDay(i) {
      var date = new Date()
      var UTCDay = date.getDay()
      var weekday = new Array()
      // console.log('ok')
      // console.log(UTCDay)
      weekday = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      return weekday[(UTCDay + i) % 7]
    },
    // 用于获取weather_icon中的坐标
    iconIndex(str) {
      for (let i = 0; i < this.weather_icon.length; i++) {
        if (this.weather_icon[i].id === Number(str)) {
          return i
        }
      }
    },
    // 用于生成iconDOM集
    getWeatherIcon() {
      var arr = [...this.dailyWeather().daily]
      var iconDom = []
      arr.forEach((e) => {
        let num = this.iconIndex(e.iconDay)
        let str = this.weather_icon[num].icon
        iconDom.push('<use xlink:href="' + str + '"></use>')
      })
      this.icons = iconDom
      var i = this.iconIndex(arr.iconDay)
    }
    // // 用于获取当前周最低气温
    // getDailyMin() {
    //   var arr = []
    //   arr = [...this.dailyMinTemp]
    //   arr.unshift(arr[0])
    //   arr.push(arr[arr.length - 1])
    //   this.dailyMin = [...arr]
    // },
    // // 用于获取当前周最高气温
    // getDailyMax() {
    //   var arr = []
    //   arr = [this.dailyMaxTemp[0], ...this.dailyMaxTemp, this.dailyMaxTemp[6]]
    //   console.log(arr)
    //   this.dailyMin = [...arr]
    // }
  },
  computed: {
    ...mapGetters('m_weather', ['dailyMaxTemp', 'dailyMinTemp']),
    min() {
      // 使用浅拷贝，防止进行数组的排序的时候影响到了原本的数组
      var arr = [...this.dailyMinTemp]
      // for (let i = 0; i < this.dailyMinTemp.length; i++) {
      //   arr.push(Number(this.dailyMinTemp[i]))
      // }
      arr = arr.sort((a, b) => {
        return a - b
      })
      // console.log(arr)
      return arr[0]
    }
  },
  mounted() {
    // this.drawChart()
    this.getWeatherIcon()
    this.getWeatherIcon()
    this.drawHoursPred()
  },
  created() {
    // console.log(this.dailyWeather())
  }
}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
.main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  #eCharts-box {
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(0, 0, 0, 0));
    position: relative;
    // border-radius: 15px;
    /* background-color: rgba(16, 155, 210, 0.621); */
    width: 100%;
    height: (125 / @ip6);
    overflow: hidden;
  }

  .weather-icon {
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.05));
    display: flex;
    justify-content: space-around;
    margin-top: (20 / @ip6);
    width: 100%;
    // justify-content: space-between;
    .icon-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #efefef;
      font-size: (12 / @ip6);

      .icon {
        display: inline-block;
        width: (40 / @ip6);
        height: (40 / @ip6);
      }
    }
  }
}
</style>
