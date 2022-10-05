export default {
  state: {
    activeIndex: sessionStorage.getItem("app/activeIndex") || 0
  },
  mutations: {
    changeActiveIndex(state, value) {
      state.activeIndex = value
      sessionStorage.setItem("app/activeIndex", value)
    }
  }
}