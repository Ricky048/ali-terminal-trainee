<template>
  <div class="main-box">
    <div class="weather-icon"></div>
    <!-- 这个组件用于创建一个可视化逐小时天气预报 -->
    <div id="eCharts-box"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hours_eCharts',
  data() {
    return {
      max: 31
    }
  },
  methods: {
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
          min: this.min
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
              color: 'rgba(239,239,239,0.75)',
              // fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条
            lineStyle: {
              color: 'rgba(239,239,239,0.6)'
            },
            // 线条端点
            itemStyle: {
              color: '#efefef'
            },
            // 填充区域
            areaStyle: {
              origin: Number(this.datum()),
              opacity: 0.5
            },
            name: 'Highest',
            type: 'line',
            data: this.dailyMax
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
              color: 'rgba(239,239,239,0.75)',
              // fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条颜色
            lineStyle: {
              color: 'rgba(239,239,239,0.6)'
            },
            // 线条端点颜色
            itemStyle: {
              color: '#efefef'
            },
            areaStyle: {
              origin: Number(this.datum()),
              // color: 'rgba(255,255,255,0.4)'
              opacity: 0.5
            },
            name: 'Lowest',
            type: 'line',
            data: this.dailyMin
          }
        ]
      }
      option && myChart.setOption(option)
    },
    datum() {
      var arr = this.dailyMinTemp
      arr = arr.sort()
      console.log(arr[arr.length - 1])
      return arr[arr.length - 1]
    }
  },
  computed: {
    ...mapGetters('m_weather', ['dailyMaxTemp', 'dailyMinTemp']),
    dailyMin() {
      var arr = []
      arr = this.dailyMinTemp
      arr.unshift(arr[0])
      arr.push(arr[arr.length - 1])
      return arr
    },
    dailyMax() {
      var arr = []
      arr = this.dailyMaxTemp
      arr.unshift(arr[0])
      arr.push(arr[arr.length - 1])
      return arr
    },
    min() {
      var arr = []
      arr = this.dailyMinTemp
      arr = arr.sort()
      return arr[0]
    }
  },
  mounted() {
    // this.drawChart()
    this.drawHoursPred()
  }
}
</script>

<style lang="less" scoped>
.main-box {
  #eCharts-box {
    position: relative;
    margin-top: 20px;
    border-radius: 15px;
    /* background-color: rgba(16, 155, 210, 0.621); */
    width: 100%;
    height: 125px;
    overflow: hidden;
  }
}
</style>
