<template>
  <div id="app">
    <div>
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
        <el-menu-item index="1">我的工作台</el-menu-item>
        <!-- <el-submenu index="2">
                  <span slot="title">我的工作台</span>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu> -->
        <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
        <!-- <el-menu-item index="3">账户</el-menu-item> -->
        <el-submenu index="9" class="menu-right">
          <span slot="title">账户中心</span>
          <div class="menu-user">
            <div class="topbar-user-info">
              <img src="/static/images/user/face.jpg" class="topbar-user-avatar">
              <p class="topbar-user-email"><span>ruyangit@163.com</span></p>
            </div>
            <div class="topbar-body">
              <el-menu-item index="9-1"><i class="el-icon-edit-outline"></i><p>写文章</p></el-menu-item>
              <el-menu-item index="9-2"><i class="el-icon-bell"></i><p>消息</p></el-menu-item>
              <el-menu-item index="9-3"><i class="el-icon-star-off"></i><p>收藏</p></el-menu-item>
              <el-menu-item index="9-4"><i class="el-icon-service"></i><p>智能客服</p></el-menu-item>
              <el-menu-item index="9-5"><i class="el-icon-setting"></i><p>设置</p></el-menu-item>
            </div>
            <div class="btn-list">
              <a class="btn-list-link" href="#">退出管理控制台</a>
            </div>
          </div>
          <!-- <el-menu-item index="9-1">选项1</el-menu-item>
                  <el-menu-item index="9-2">选项2</el-menu-item>
                  <el-menu-item index="9-3">选项3</el-menu-item> -->
        </el-submenu>
      </el-menu>
    </div>
    <div class="wrapper">
      <div class="container">
        <!-- <div>head</div> -->
        <div class="main-body">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="DATE" width="180">
            </el-table-column>
            <el-table-column prop="name" label="NAME" width="180">
            </el-table-column>
            <el-table-column prop="address" label="ADDRESS">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="80">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: "1",
        activeIndex2: "1",
        tableData: []
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted() {
      for (var i = 0; i < 60; i++) {
        this.tableData.push({
          id: i + 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        });
      }
    }
  };
</script>

<style lang="less">
  .menu-user {
    width: 270px; // height: 280px;
    // background-color: #e5e5e5;
    .topbar-user-info {
      text-align: center;
      padding-top: 16px;
      border-bottom: 1px solid #eaeaea;
      .topbar-user-avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        vertical-align: middle;
      }
      .topbar-user-email {
        margin: 8px 0;
        // color: #fff;
        font-size: 14px;
      }
    }
    .topbar-body{
      height: 205px;
      padding: 15px;
      .el-menu-item{
          float: left;
          width: 80px;
          height: 80px;
          text-align: center;
          padding-top: 8px;
          i{
            font-size: 23px;
             margin-right: 0px;
          }
        }
    }
   

    .btn-list {
      padding-top: 6px;
      // background: rgb(67, 74, 80);
      border-top: 1px solid #eaeaea;
      .btn-list-link {
        height: 35px;
        line-height: 35px;
        display: block;
        transition: all .15s;
        text-align: center;
        // color: #fff; // background-color: #f5f5f6;
        // border-top: #eaeaea;
        
      }
    }
  }
  #app {
    width: 100%;
    height: 100%;
    background: #e5e5e5;
    .el-menu-demo {
      padding-left: 200px; // height: 50px;
      .menu-right {
        position: absolute;
        right: 1px;
      }
    }
    .wrapper {
      .container {
        width: auto;
        height: auto;
        position: absolute;
        top: 0px;
        left: 200px;
        right: 0px;
        bottom: 0px;
        background: #ffffff;
        overflow-y: hidden;
        .main-body {
          width: 100%;
          height: 100%;
          padding-left: 1px;
          overflow-y: auto;
        }
        &>.main-body {
          width: auto;
          height: auto;
          position: absolute; // top: 25px;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
        }
      }
    }
    &>.wrapper {
      width: auto;
      height: auto;
      position: absolute;
      top: 61px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
  }
</style>

