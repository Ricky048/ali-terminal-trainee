<template>
  <div id="container"></div>
</template>

<script>
// import AMap from '@/api/amap'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_location', ['realTimeLocation']),
      realTimeLocationData: null
      // lat: '',
      // lng: ''
    }
  },
  methods: {
    ...mapMutations('m_location', ['getRealTimeLocation']),

    getLocation() {
      var _that = this
      // let lng = ''
      // let lat = ''
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
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
          console.log(data.position)
          _that.getRealTimeLocation(data.position)
          // lng = position.lng
          // lat = position.lat
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
    // console.log('ok')
  },
  mounted() {
    this.getLocation()
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
