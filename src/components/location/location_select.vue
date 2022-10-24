<template>
  <div class="main-box">
    <!-- 地址选择面板 -->
    <transition name="search">
      <div class="select-panel" v-show="show">
        <input class="search-text" type="text" v-model="keyword" placeholder="搜索" />
        <!-- <div class="search-history" v-if="false"></div> -->
        <div class="search-result" v-if="area.length !== 0">
          <div v-for="(item, i) in area" :key="i" @click="changeArea(item.district)">{{ item.name }}</div>
        </div>
      </div>
    </transition>

    <!-- 地址选择面板遮罩 -->
    <transition name="main">
      <div class="cover" v-show="show" @click="unShowPanel"></div>
    </transition>
  </div>
</template>

<script>
import bus from '@/store/bus.js'
export default {
  name: 'location-selector',
  data() {
    return {
      // 输入框中的关键字
      keyword: '',
      area: [],
      chooseArea: {
        // 省
        province: '',
        // 市
        city: '',
        // 区
        district: ''
      }
    }
  },
  methods: {
    unShowPanel() {
      // console.log('ok')
      this.$emit('close', false)
    },

    changeArea(district) {
      // if()
    }
  },
  // props是只读的，并不能进行修改
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    keyword: {
      handler(val) {
        console.log(val)
        // 获取输入提示信息
        AMap.plugin('AMap.Autocomplete', () => {
          let _that = this
          // 实例化Autocomplete
          var autoOptions = {
            city: '全国'
          }
          var autoComplete = new AMap.Autocomplete(autoOptions)
          autoComplete.search(val, function (status, result) {
            let tips = []
            console.log(result.tips)
            if (result.tips) {
              result.tips.forEach((res) => {
                tips.push(res)
              })
            }
            _that.area = tips
            // console.log(tips)
          })
        })
      }
    },
    show: {
      handler(newVal) {
        // 隐藏的时候清除输入框里面的所有内容
        if (!newVal) {
          ;(this.area = []), (this.keyword = '')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
// v-enter-active跟v-leave-active作用于整个动画阶段，一般用来定义动画曲线，动画时间等
.search-enter-active,
.search-leave-active {
  transition: all 0.2s;
}
// 一般使用v-enter以及v-leave-to来定义动画的最初和最终形态，记住这个组合
.search-enter,
.search-leave {
  opacity: 0;
  transform: translateY(-100px);
}

.main-enter-active,
.main-leave-active {
  transition: all 0.2s;
}

.main-enter,
.main-leave-to {
  opacity: 0;
}
.main-box {
  display: flex;
  justify-content: center;
  position: fixed;
  margin-top: 10vw;
  .cover {
    // position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .select-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 2vw;
    border-bottom-right-radius: 2vw;
    position: fixed;
    height: 80vh;
    width: 90vw;
    background-color: white;
    margin-top: -1px;
    z-index: 999;

    .search-text {
      font-size: 14px;
      padding: (2 / 3.75vw) (15 / 3.75vw);
      margin-top: 2vw;
      height: 7.5vw;
      width: 75%;
      outline-style: none;
      border: 1px solid #ccc;
      background: #fefefe;
      border-radius: 10vw;
    }

    .search-history {
      height: 30vw;
    }
    .search-text::placeholder {
      // color: red;
    }
    .search-result {
      width: 100%;
      overflow: hidden;
    }
    .search-result div {
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
      // background-color: pink;
      list-style: none;
      width: 100%;
      box-sizing: border-box;
      height: (50 / 3.75vw);
      line-height: (50 / 3.75vw);
      border-bottom: 1px solid #f1f1f1;

      // 对于文字进行处理
      // 1.文字不换行
      white-space: nowrap;
      // 2.溢出隐藏
      overflow: hidden;
      // 3.溢出文字省略号显示
      text-overflow: ellipsis;
    }
  }
}
</style>
