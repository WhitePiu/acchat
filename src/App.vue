<template>
  <div id="app">
    <!-- <meta name="referrer" content="no-referrer" /> -->
    <!-- 先展示登录界面，登录成功再展示聊天界面 -->

    <div class="login" v-if="!isLogin">
      <div class="error" v-if="errorName">
        <el-tag type="danger">
          用户名重复！
        </el-tag>
      </div>
      <el-tabs>
        <el-tab-pane label="登录" name="first">
          <el-input v-model="userName" placeholder="请输入用户名">
            <el-button slot="append" @click="btnLogin">登录</el-button>
          </el-input>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-container v-else>
      <!-- 好友栏 -->
      <el-aside width="250px">
        <myAside></myAside>
      </el-aside>
      <!-- 当前对话对象 -->
      <el-container>
        <el-header>
          <my-header></my-header>
        </el-header>
        <!-- 聊天区域 -->
        <el-main>
          <my-main></my-main>
        </el-main>
        <!-- 输入框 -->
        <el-footer>
          <my-footer></my-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
  
</template>

<script>
import myAside from './components/myAside.vue'
import MyFooter from './components/myFooter.vue'
import MyHeader from './components/myHeader.vue'
import MyMain from './components/myMain.vue'
import store from './store'
import getImg from './assets/JS/getImg'

export default {
  name: 'App',
  components: {
    myAside,
    MyHeader,
    MyMain,
    MyFooter
  },
  data() {
    return {
      userName: "",
      errorName: false
    }
  },
  methods: {
    btnLogin() {

      // 连接socket
      this.$socket.connect()
      // 第三个参数是处理服务器端的callback回调
      this.$socket.emit('login',{name:this.userName, src:getImg(this.userName)}, resolt => {

        if (resolt) {
          store.commit("setMyName", this.userName)
          this.errorName = false
        }
        else {
          this.errorName = true
        }
      })
    }
  },
  computed: {
    isLogin() {
      return store.state.isLogin
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-footer{
    line-height: 48px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 280px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  /* 登录界面 */
  .login{
    width: 50%;
    margin-left: 25%;
    padding-top: 20px;
    border: 1px solid rgb(228, 231, 237);
  }
</style>
