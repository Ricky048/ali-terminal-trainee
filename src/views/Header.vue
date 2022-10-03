<template>
  <div class="header-box container">
    <local :area="realTimeArea"></local>
  </div>
</template>

<script>
import local from '@/components/Location.vue'
export default {
  data() {
    return {
      // 实时区域显示文本
      realTimeArea: '南海区'
    }
  },
  name: 'Header',
  components: {
    local
  },
  methods: {
    async getRealTimeWeather() {
      const res = await this.$http.get('/now?location=101010100&key=17fc788e661c475da127af5e7011abff')
      console.log(res)
    }
  },
  created() {}
}
</script>

<style>
.header-box {
  width: 100%;
  background-color: orange;
}
</style>
