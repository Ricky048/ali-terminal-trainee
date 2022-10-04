<template>
  <div class="Footer">
    <van-tabbar v-model="active" active-color="#000" inactive-color="#808A87" route>
      <van-tabbar-item v-for="(item, id) in tabbarItem" :key="id" :to="item.path" replace>
        <span class="title">
          {{ item.title }}
        </span>
        <template #icon="props">
          <div class="icon-box" :id="item.inAnimation ? 'Anim' : ''" @click="changeAnim(item)">
            <img :src="props.active ? item.activeIconPath : item.iconPath" class="tabbar-icon" />
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabbarItem: [
        { title: '天气', iconPath: require('@/assets/icons/weather.png'), activeIconPath: require('@/assets/icons/weather-active.png'), path: '/', inAnimation: false },
        { title: '运动', iconPath: require('@/assets/icons/running.png'), activeIconPath: require('@/assets/icons/running-active.png'), path: '/sport', inAnimation: false },
        { title: '我的', iconPath: require('@/assets/icons/my.png'), activeIconPath: require('@/assets/icons/my-active.png'), path: '/my', inAnimation: false }
      ],
      active: 0
    }
  },
  methods: {
    changeAnim(item) {
      item.inAnimation = true
      this.tabbarItem[this.active].inAnimation = false
    }
  },
  created() {
    this.tabbarItem[this.active].inAnimation = true
  }
}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
.Footer {
  @keyframes icon-enlarge {
    to {
      transform: scale(1.25) translateY(-3px);
    }
  }

  #Anim {
    animation: icon-enlarge 0.2s forwards;
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    // box-sizing: border-box;
    width: (26 / @ip6);
    height: (26 / @ip6);
    border: (3 / @ip6) solid white;
    background-color: white;
    border-radius: 50%;
    z-index: 999;
    .tabbar-icon {
      width: (26 / @ip6);
      height: (26 / @ip6);
    }
  }
}
</style>
