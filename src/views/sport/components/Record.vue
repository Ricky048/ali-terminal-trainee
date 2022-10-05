<template>
  <div class="record-list shadow">
    <div v-for="item in 5" :key="item" class="item">
      <div class="flex">
        <div>{{item}} </div>
        <!-- 标题 -->
        <div class="item-title">2022/10/5 跑步记录</div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.record-list {
  background-color: #fff;

  .item {
    padding: 15px 20px;
    border-bottom: 1px solid #eee;

    .item-title {
      padding-left: 20px;
    }
  }
}
</style>