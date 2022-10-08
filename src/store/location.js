export default {
  namespaced: true,
  state: () => ({
    realTimeLocation: null,
    lng: '',
    lat: '',
    address: '',
    locationCode: ''
  }),

  mutations: {
    getRealTimeLocation(state, location) {
      state.realTimeLocation = location
      state.lng = location.lng
      // console.log(state.lng)
      state.lat = location.lat
      this.commit('m_location/getAddress')
    },

    getAddress(state) {
      AMap.plugin('AMap.Geocoder', function () {
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          // city: '010'
          radius: 1000 //范围，默认：500
        })

        // console.log(state.lng)

        var lnglat = [Number(state.lng), Number(state.lat)]

        geocoder.getAddress(lnglat, function (status, result) {
          // console.log(status)
          if (status === 'complete' && result.info === 'OK') {
            // result为对应的地理位置详细信息
            // console.log(result)
            state.address = result.regeocode.addressComponent
            // console.log(state.address)
          }
        })
      })
    },

    getLocationCode(state, code) {
      state.locationCode = code
    }
  },

  getters: {
    lng() {}
  }
}
