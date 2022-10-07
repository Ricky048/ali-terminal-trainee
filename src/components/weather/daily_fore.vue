<template>
  <!-- 这个组件用于创建一个可视化逐小时天气预报 -->
  <div id="eCharts-box"></div>
</template>

<script>
export default {
  name: 'hours_eCharts',
  data() {
    return {
      max: 31,
      min: 21,
      maxTemp: [],
      minTemp: []
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
          // axisLabel: {
          //   formatter: '{value} °C'
          // }
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
              fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条
            lineStyle: {
              color: 'rgba(239,239,239,0.4)'
            },
            // 线条端点
            itemStyle: {
              color: '#efefef'
            },
            // 填充区域
            areaStyle: {
              // color: 'pink',
              origin: 26,
              opacity: 0.5
            },
            name: 'Highest',
            type: 'line',
            data: [31, 31, 30, 30, 30, 28, 28, 27, 27]
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
              fontWeight: 'bold',
              fontSize: 14,
              align: 'center'
            },
            // 线条颜色
            lineStyle: {
              color: 'rgba(239,239,239,0.4)'
            },
            // 线条端点颜色
            itemStyle: {
              color: '#efefef'
            },
            areaStyle: {
              origin: 26,
              // color: 'rgba(255,255,255,0.4)'
              opacity: 0.5
            },
            name: 'Lowest',
            type: 'line',
            data: [25, 25, 21, 22, 26, 24, 24, 23, 23]
            // markPoint: {
            //   data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
            // },
            // markLine: {
            //   data: [
            //     // { type: 'average', name: 'Avg' },
            //     [
            //       {
            //         symbol: 'none'
            //         // x: '90%'
            //         // yAxis: 'max'
            //       },
            //       {
            //         symbol: 'circle',
            //         label: {
            //           position: 'start',
            //           formatter: 'Max'
            //         },
            //         type: 'max',
            //         name: '最高点'
            //       }
            //     ]
            //   ]
            // }
          }
        ]
      }
      option && myChart.setOption(option)
    }
  },
  mounted() {
    // this.drawChart()
    this.drawHoursPred()
  }
}
</script>

<style>
#eCharts-box {
  position: relative;
  margin-top: 20px;
  border-radius: 15px;
  /* background-color: rgba(16, 155, 210, 0.621); */
  width: 100%;
  height: 125px;
  overflow: hidden;
}
</style>
