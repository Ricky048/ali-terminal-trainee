<template>
  <div>
    <!-- 个人信息的界面 -->
      <van-cell-group>
        <van-cell title="个人信息" title-style="text-align: center" icon="arrow-left" size="large" @click="onBack"/>
      </van-cell-group>
    <div style="margin-bottom: 10px" />
    <van-cell-group>
        <van-cell title="头像" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" size="large" @click="showHeader = true" is-link>
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" class="head-icon" size="30" />
<!--            <van-icon name="search" class="search-icon" />-->
          </template>
        </van-cell>
      <van-cell title="昵称" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" value-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;"  value="aliyun" @click="showName = true" is-link />
      <van-cell title="手机号码" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" value-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;"  value="15656555639" @click="showNum = true" is-link />
      <van-cell title="更多" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link @click="onMore"/>

    </van-cell-group>
    <van-dialog v-model="showName" title="昵称" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="value" style="margin-left: 15px" label="昵称" placeholder="请输入昵称" />
      </van-cell-group>
    </van-dialog>
    <van-dialog v-model="showNum" title="电话号码" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="phone" required style="margin-left: 15px" label="电话号码" placeholder="请输入电话号码" />
      </van-cell-group>
    </van-dialog>
    <van-dialog v-model="showHeader" title="上传头像" show-cancel-button>
      <van-uploader :after-read="afterRead" style="margin-left: 100px; margin-top: 20px;margin-bottom: 20px" />
    </van-dialog>
      </div>

<!--  </div>-->
</template>
<script>
  import { ref } from 'vue'
export default {
  setup() {
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };

    return {
      afterRead,
    };
  },
  data() {
    return {
  username:'aliyun',
      userLabel: '运动健将',
      showName: false,
      showNum:false,
      showHeader: false
    }
  },
  methods:{
    onBack() {
      this.$router.push({ path: '/my' })
    },
    onMore() {
      this.$router.push({ path: '/more' })
    }
  }
}
</script>
<style lang="less" scoped>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
  .head-icon {
    font-size: 16px;
    line-height: inherit;
  }
  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
  .table {
    border-collapse: collapse;
    border-spacing: 0;
    background-color: transparent;
    display: table;
    width: 100%;
    max-width: 100%;
    width: 800px;
    margin: 0 auto;
  }
  .table td {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-family: "Arial Normal", "Arial";
    color: #333333;
    padding: 8px 12px;
  }
  .table-bordered {
    border: 1px solid #ddd;
  }
  .column {
    width: 30px;
    height: 30px;
    border: 1px solid #333;
    background: #f1f1f1;
  }
  .value {
    width: 70px;
    height: 30px;
    /*border: 1px solid #333;*/
  }
</style>
