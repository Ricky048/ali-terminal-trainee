<template>
  <div class="Footer">
    <van-tabbar v-model="active" active-color="#000" inactive-color="#808A87" fixed="true">
      <van-tabbar-item v-for="(item, id) in tabbarItem" :key="id">
        <span>
          {{ item.title }}
        </span>
        <template #icon="props">
          <img :src="props.active ? item.activeIconPath : item.iconPath" class="tabbar-icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  data() {
    return {
      tabbarItem: [
        { title: '天气', iconPath: require('@/assets/icons/weather.png'), activeIconPath: require('@/assets/icons/weather-active.png') },
        { title: '运动', iconPath: require('@/assets/icons/running.png'), activeIconPath: require('@/assets/icons/running-active.png') },
        { title: '我的', iconPath: require('@/assets/icons/my.png'), activeIconPath: require('@/assets/icons/my-active.png') }
      ],
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.Footer {
  .tabbar-icon {
    width: (26 / 3.75vw);
    height: (26 / 3.75vw);
  }
}
</style>
