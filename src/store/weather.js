// 用于暂存天气数据的vuex空间
export default {
  namespaced: true,
  state() {
    return {}
  },
  mutations: {
    // 获取实时气象数据的方法，使用axios获取，async解包
    async getRealTimeWeather() {
      const res = await this.$http.get('/now?location=101010100&key=17fc788e661c475da127af5e7011abff')
      console.log(res)
    },

    saveRealTimeDataToStorage() {
      // this.
    }
  }
}
