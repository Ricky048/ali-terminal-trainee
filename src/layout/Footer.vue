<template>
  <div class="Footer">
    <van-tabbar v-model="active" active-color="#000" inactive-color="#808A87" route :border="false">
      <van-tabbar-item v-for="(item, id) in tabbarItem" :key="id" :to="item.path" replace>
        <!-- tabbar文字 -->
        <span class="title">
          {{ item.title }}
        </span>
        <!-- tabbar图片 -->
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
import bus from '@/store/bus.js'
export default {
  data() {
    return {
      // isAnimation: 是否已经加载动画
      tabbarItem: [
        { title: '天气', iconPath: require('@/assets/icons/weather.png'), activeIconPath: require('@/assets/icons/weather-active.png'), path: '/', inAnimation: false, id: 0 },
        { title: '运动', iconPath: require('@/assets/icons/running.png'), activeIconPath: require('@/assets/icons/running-active.png'), path: '/sport', inAnimation: false, id: 1 },
        { title: '我的', iconPath: require('@/assets/icons/my.png'), activeIconPath: require('@/assets/icons/my-active.png'), path: '/my', inAnimation: false, id: 2 }
      ],
      active: this.$store.state.app.activeIndex
    }
  },
  methods: {
    changeAnim(item) {
      // 点击时加载动画，并且将flag设置为true
      item.inAnimation = true
      // 同时将上一个已经加载了动画的组件的flag设置为false
      // 感觉这个速度不够快，或许得设置一个并发？？
      if (item.id !== this.active) this.tabbarItem[this.active].inAnimation = false
    }
  },
  created() {
    // 界面刚开始加载时启动动画使weather/home界面突出
    this.tabbarItem[this.active].inAnimation = true
  },
  updated() {
    this.$store.commit('changeActiveIndex', this.active)
  }
}
</script>

<style lang="less" scoped>
// 此处使用iPhone6来进行设计，故使用ip6作为变量
@ip6: 3.75vw;

.Footer {
  position: relative;
  display: flex;
  flex-direction: column;

  // tabbar加载的小动画
  @keyframes icon-enlarge {
    to {
      transform: scale(1.5) translateY(-5px);
    }
  }

  #Anim {
    animation: icon-enlarge 0.1s forwards;
  }

  .icon-box {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    width: (24 / @ip6);
    height: (24 / @ip6);
    // border: (10 / @ip6) solid white;
    background-color: white;
    border-radius: 50%;
    z-index: 999;

    .tabbar-icon {
      width: (22 / @ip6);
      height: (22 / @ip6);
    }
  }
}
</style>
