<template>
  <div class="app-sport">
    <Card>
      🏃‍ 跑步
    </Card>

    <h4>跑步记录</h4>
    <Record />
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Record from './components/Record.vue';
export default {
  components: { Card, Record }
}
</script>

<style scoped lang="less">
.app-sport {
  padding: 12px;
}
</style>
