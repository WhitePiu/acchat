import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
// 导入服务器模块
import VueSocketIO from 'vue-socket.io'
import SocketIO  from 'socket.io-client';

Vue.use(ElementUI)
// 连接到服务器
Vue.use(
  new VueSocketIO({
    debug: true,
    // 访问代理服务器
    connection: SocketIO('ws://127.0.0.1:3000'),
    // 关闭自动连接
    options: {
      autoConnect: false
    },
    // 服务器给vuex发送事件
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  sockets: {
    welcome: function(data) {
      console.log("welcome服务器监听", data)
    }
  }
}).$mount('#app')
