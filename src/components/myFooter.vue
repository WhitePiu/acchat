<template>
  <div>
    <el-input type="textarea" :row="2" :autosize="{maxRows: 2}" placeholder="请输入内容" v-model="textarea"
    @keyup.enter.native="send"></el-input>
  </div>
</template>

<!-- 此组件输入框样式还需要调整 -->

<script>
  export default {
    data() {
      return {
        textarea: ''
      }
    },
    methods: {
      send(){
        this.textarea=""
      }
    }
  }
</script>

<style scoped>
</style>