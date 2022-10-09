<template>
  <div>
    <!-- 更多的界面 -->
    <van-cell-group>
      <van-cell title="更多" title-style="text-align: center" icon="arrow-left" size="large" @click="onBack"/>
    </van-cell-group>
    <div style="margin-bottom: 10px" />
    <van-cell-group>
      <van-cell title="性别" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" @click="showDialog" is-link />
      <van-cell title="个性签名" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" @click="showSign = true" is-link />
      <van-cell title="生日" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" :value="date" @click="showDate = true" is-link />
<!--      <van-cell title="选择出生日期" :value="date" @click="show = true" />-->
      <van-calendar v-model="showDate" @confirm="onConfirm" />
      <van-cell title="地区" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" @click="showAdress = true" is-link />
<!--      <van-area title="地区" :area-list="areaList" />-->
    </van-cell-group>
  <van-dialog v-model="show" title="性别" show-cancel-button>
    <van-radio-group v-model="checked" direction="horizontal" style="margin-left: 100px; margin-top: 20px; margin-bottom: 20px">
      <van-radio name="1">男</van-radio>
      <van-radio name="2">女</van-radio>
    </van-radio-group>
  </van-dialog>
    <van-dialog v-model="showAdress" title="地区" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="value" style="margin-left: 15px" label="地区" placeholder="请输入地址" />
      </van-cell-group>
    </van-dialog>
    <van-dialog v-model="showSign" title="个性签名" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="value" style="margin-left: 15px" label="个性签名" placeholder="请输入个性签名" />
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
  import { Dialog } from 'vant'
  import { ref } from 'vue'
  // import areaList from "@/assets/js/area.js"
export default {
  setup() {
    const date = ref('');
    const value = ref('');
    const showDate = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value) => {
      show.value = false;
      date.value = formatDate(value);
    };

    return {
      date,
      showDate,
      onConfirm,
      value
    };
  },
  data() {
    return {
  username:'aliyun',
      userLabel: '运动健将',
      show:false,
      checked: '',
      showAdress: false,
      showSign: false
      // areaList: {},
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods:{
    onBack() {
      this.$router.push({ path: '/my' })
    },
    showDialog() {
     this.show = true
    }
  }
}
</script>
<style lang="less" scoped>
  .head-icon {
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
