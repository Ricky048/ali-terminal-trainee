<template>
  <div class="header-box">
    <local></local>
  </div>
</template>

<script>
import local from '@/components/Location.vue'
export default {
  name: 'Header',
  components: {
    local
  }
}
</script>

<style>
.header-box {
  width: 100%;
  background-color: orange;
}
</style>
