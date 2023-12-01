<template>
  <div>
    <el-row class="myitem userlist">
      <el-avatar :src="myPhoto"></el-avatar>
      <span>姓名: {{ myName }}</span>
    </el-row>
    <el-row class="search">
      <el-input placeholder="请输入搜索内容" v-model="friendName">
        <el-button slot="append" icon="el-icon-search" @click="searchBtn()"></el-button>
      </el-input>
    </el-row>
    <el-row class="botlist">
      <el-table
        :data="fli_tableData"
        stripe
        style="width: 100%"
        :show-header="false"
        @cell-click="setuserInfo">
        <!-- 监听列表点击，事件委托 -->
        <el-table-column
          prop="date"
          label="日期"
          width="250"
          >
          <!-- 弄明白这个slot-scope到底是个什么东西 -->
          <template slot-scope="scope" >
            <div class="userlist">
              <el-avatar :src="scope.row.src"></el-avatar>
              <span>{{ scope.row.name }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import store from '../store'

  export default {
    data() {
      return {
        friendName: "",
        fli_tableData: null
      }
    },
    computed: {
      myName(){
        return store.state.myInfo.name
      },
      myPhoto(){
        return store.state.myInfo.src
      },
      tableData() {
        return store.state.tableData
      }
    },
    methods: {
      searchBtn() {
        this.fli_tableData = this.tableData.filter(data => {
          if (!this.friendName) return true
          return data.name.toLowerCase().includes(this.friendName.toLowerCase())
        })
      },
      // 提交vuexcommit
      setuserInfo(row, column, event){
        store.commit('setUserInfo', {name: row.name, src: row.src})
      }
    },
    // 生命周期钩子
    created() {
      this.fli_tableData = [
        ...this.tableData
      ]
    }
  }
</script>

<style scoped>
  .myitem {
    height: 60px;
    line-height: 60px;
  }
  .search {
    height: 50px;
    line-height: 50px;

  }
  .botlist{
    height: 390px;
    line-height: 60px;
  }

  .userlist{
    text-align:left;
    vertical-align:middle;
    cursor: pointer;
  }

  .userlist span{
    vertical-align: middle;
    margin-left: 10px;
  }

</style>