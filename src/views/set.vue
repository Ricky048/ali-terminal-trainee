<template>
  <div>
    <!-- 我的界面 -->
<!--    <div style="width: 100%; height: 600px">-->
<!--      <div style="width: 100%; height: 20%">-->
<!--        <img src="@/assets/icons/head.png" style="width: 100px; height: 100px; margin: 20px 20px; float: left"/>-->
<!--        <div style="float: left">-->
<!--          <h2 style=" margin-top: 40px">{{username}}</h2>-->
<!--          <h3>{{userLabel}}</h3>-->
<!--        </div>-->
<!--        <div style="text-align:center;margin-top:30px; margin-bottom: 10px" />-->
<!--        <table-->
<!--          style="width: 100%"-->
<!--          class="table table-striped table-bordered"-->
<!--          align="center"-->
<!--          valign="center"-->
<!--        >-->
<!--          <tr style="border: 1px solid #ddd;">-->
<!--            <td class="value" colspan="5">-->
<!--              <div style="display: flex; flex-direction: column;">-->
<!--                <div style="display: flex; justify-content: flex-start;">-->
<!--                  <img src="@/assets/icons/person.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>-->
<!--                  <div style="float: left">-->
<!--                    <p style="font-style: normal; font-size: 20px;">个人信息</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td class="value" colspan="5">-->
<!--              <div style="display: flex; flex-direction: column;">-->
<!--                <div style="display: flex; justify-content: flex-start;">-->
<!--                  <img src="@/assets/icons/set.png" style="height: 30px; width: 30px; float: left; margin-top: 20px; margin-right: 15px; margin-left: 10px "/>-->
<!--                  <div style="float: left">-->
<!--                  <p style="font-style: normal; font-size: 20px;">设置</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div></td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </div>-->
<!--      </div>-->
    <van-cell-group>
      <van-cell title="设置" title-style="text-align: center" icon="arrow-left" size="large" @click="onBack"/>
    </van-cell-group>
    <div style="margin-bottom: 10px" />
    <van-cell-group>
<!--      <van-cell title="通用" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" size="large" is-link>-->
<!--        &lt;!&ndash; 使用 right-icon 插槽来自定义右侧图标 &ndash;&gt;-->
<!--        <template #right-icon>-->
<!--          <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" class="head-icon" size="30" />-->
<!--          &lt;!&ndash;            <van-icon name="search" class="search-icon" />&ndash;&gt;-->
<!--        </template>-->
<!--      </van-cell>-->
      <van-cell title="通用" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
      <van-cell title="新消息通知" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
      <van-cell title="外观与布局" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
    </van-cell-group>
    <p style="margin-left: 15px; font-size:14px;">安全与隐私</p>
    <van-cell-group>
      <van-cell title="安全中心" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
      <van-cell title="隐私" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
      <van-cell title="个人信息查询" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
    </van-cell-group>
    <div style="margin-bottom: 7px" />
    <van-cell-group>
      <van-cell title="客服与帮助" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
      <van-cell title="关于" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;" is-link />
    </van-cell-group>
    <div style="margin-bottom: 7px" />
    <van-cell-group>
      <van-cell title="退出登录" @click="showLogin" size="large" title-style="font-family: 'Arial Normal', 'Arial'; line-height: 30px;text-align: center" />
    </van-cell-group>
<!--    <van-dialog v-model="showLogin" title="个性签名" show-cancel-button>-->
<!--      <van-cell-group inset>-->
<!--        <van-field v-model="value" style="margin-left: 15px" label="个性签名" placeholder="请输入个性签名" />-->
<!--      </van-cell-group>-->
<!--    </van-dialog>-->
  </div>
</template>

<script>
  import { Dialog } from 'vant'
export default {
  data() {
    return {
  username:'aliyun',
      userLabel: '运动健将',
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  methods:{
    onBack() {
      this.$router.push({ path: '/my' })
    },
    showLogin() {
      Dialog.confirm({
        message:
          '您确定要退出的登录吗？',
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
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
