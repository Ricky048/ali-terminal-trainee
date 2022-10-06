<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_location', ['realTimeLocation']),
      realTimeLocationData: null,
      lat: '',
      lng: ''
    }
  },
  methods: {
    ...mapMutations('m_location', ['getRealTimeLocation']),

    // initMap() {
    //   AMapLoader.load({
    //     key: 'eea7c87fae2a8e20ff90f81708a3058c', // 申请好的Web端开发者Key，首次调用 load 时必填
    //     version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    //     plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    //   })

    // },

    getLocation() {
      var _that = this
      let lng = ''
      let lat = ''
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量
          offset: [10, 20],
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          position: 'RB',
          useNative: true
        })

        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            onComplete(result)
          } else {
            onError(result)
          }
        })

        function onComplete(data) {
          let position = data.position
          // data是具体的定位信息
          _that.getRealTimeLocation(data.position)
          lng = position.lng
          lat = position.lat
          // console.log(_that.realTimeLocation())
          // return data.position
        }

        function onError(data) {
          console.log('error')
          // 定位出错
        }
      })
    }
  },
  watch: {},
  created() {
    this.getLocation()
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    // this.initMap()
  }
}
</script>

<style lang="less" scoped>
#container {
  display: inline-block;
  padding: 0px;
  margin: 0px;
  width: 0;
  height: 0;
  display: none;
}
</style>
