<template>
  <div>{{ userName }}</div>
</template>

<script>
import store from '../store'
  export default {
    data(){
      return {
        // 在这里写不是响应式，解决方法，放在computed
      }
    },
    computed:{
      // 从vuex中获取
      userName(){
        return store.state.userInfo.name
      }
    }
  }
</script>

<style scoped>

</style>