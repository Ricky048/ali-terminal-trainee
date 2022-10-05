// 用于暂存天气数据的vuex空间
export default {
  namespaced: true,
  state: () => ({
    realTimeWeather: Object,
    dailyWeather: Object
  }),

  mutations: {
    saveToStorage(state) {
      // this.
    },

    // 获取当前实时气象数据
    updateRealTimeWeather(state, weather) {
      state.realTimeWeather = weather
    },

    // 获取未来气象数据
    updateFutureWeather(state, weather) {
      state.dailyWeather = weather
    }
  }
}
