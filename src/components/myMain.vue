<template>
  <div class="box"> 
    <!-- 遍历消息队列 -->
    <div v-for="(item, index) in messageList" :key="index">
      <!-- 符合当前聊天对象 -->
      <div v-if="item.name === userInfo.name">
        <!-- 输出所有聊天记录 -->
        <p v-for="list, index in item.mList" :key="index" :class="{'right':list.type}">
          <el-row>
            <el-avatar v-if="list.type" :src="myInfo.src"></el-avatar>
            <el-avatar v-else :src="userInfo.src"></el-avatar>
            <span class="mes">:{{ list.content }}</span>
          </el-row>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
  export default {
    data() {
      return {

      }
    },
    computed: {
      messageList() {
        return store.state.mesList
      },
      userInfo() {
        return store.state.userInfo
      },
      myInfo() {
        return store.state.myInfo
      }
    }
  }
</script>

<style scoped>
  p{
    height: 100px;
    vertical-align: middle;
    text-align: left;
  }
  .right{
    text-align: right;
  }
  span.mes {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 20px;
    background-color: bisque;
  }
</style>