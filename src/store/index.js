import Vuex from 'vuex';
import Vue from'vue'
import tableData from '../assets/tableData.js'
import tableData1 from '../assets/tableData1.js'
import getImg from '@/assets/JS/getImg.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    counter: 0,
    myInfo:{
      name: "Qtwawa",
      src: "https://img-blog.csdnimg.cn/1a80f6adcc544b77b06af1a8e88e0e24.jpeg"
    },
    // 用户登陆状态
    isLogin: false,
    // 当前活跃用户
    userInfo:{
      name: "",
      src: ""
    },
    // 后台用户数据
    tableData,
    tableData1,
    // 消息数据
    mesList:[
      {
        name: "顶益范",
        mList: [
          {
            // 是谁发的
            type: false,
            time: "",
            content: "爸爸在吗"
          },
          {
            type: true,
            time: "",
            content: "咋了丁儿"
          }
        ]
      }
    ]
  }),
  getters: {

  },
  mutations: {
    setUserInfo(store, user){
      store.userInfo = user
    },
    // 告知vuex谁登录了
    setMyName(store, name) {

      store.myInfo.name = name
      store.myInfo.src = getImg(name)
      store.isLogin = true
    },
    SOCKET_updateTable(store, data) {
      store.tableData = data
      console.log("ok")
    }
  }

})
