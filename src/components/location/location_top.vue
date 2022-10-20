<template>
  <div class="location" :id="active === 1 ? 'set-middle' : ''">
    <!-- 位置展示 -->
    <div @click="showPopup">
      <span class="iconfont icon-location"></span>
      <span>{{ address() ? address().district : area }}</span>
      <span class="iconfont icon-right" v-if="active === 0"></span>
    </div>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      ...mapState('m_location', ['address']),
      // 控制文字是否处于中间
      isMiddle: true,
      active: 0,
      area: '北京市',
      isShow: true
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  watch: {
    show: {
      handler(oldVal, newVal) {
        this.isShow = newVal
      }
    },
    isShow: {
      // 在watch监听函数里面进行
      handler(oldVal, newVal) {
        // console.log(oldVal, newVal)
        // 获取所有类名为icon-right的元素，当前只有一个
        let rightAngle = document.querySelector('.icon-right')
        // 对于id名进行操作
        if (newVal) {
          rightAngle.id = 'anim-start'
        } else {
          rightAngle.id = ''
        }
      }
    }
  },
  methods: {
    // 用操作DOM元素的方法写一个动画
    showPopup() {
      // 这个方法用于对地址查找panel进行展示
      this.$emit('showPanel', this.isShow)
      this.isShow = !this.isShow
    }
  },
  created() {
    bus.$on('activePage', (val) => {
      this.active = val
    })
  }
}
</script>

<style lang="less" scoped>
@ip6: 3.75vw;
@keyframes rotateAngle-start {
  to {
    transform: rotate(90deg);
  }
}

#anim-start {
  animation: rotateAngle-start 0.2s forwards;
}

.location {
  font-size: (14 / @ip6);
  font-weight: 500;
  padding: 0 (12 / @ip6);
  margin: 0 auto;
  box-sizing: border-box;
  color: #3f3f3f;

  .icon-right,
  .icon-location {
    // 变换成为行内块元素，使之能够进行
    display: inline-block;
    font-size: (14 / @ip6);
    font-weight: 1000;
    margin-left: 0.6vw;
    vertical-align: middle;
  }

  .icon-location {
    font-size: (18 / 3.75vw);
    margin-left: 0;
    margin-right: 0.5vw;
  }

  .icon-moreandroid {
    font-weight: 1000;
  }
}

#set-middle {
  justify-content: center;
}
</style>
