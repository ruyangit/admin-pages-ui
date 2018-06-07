<template>
  <div id="app">
    <div class="wrapper " :class="{'sidebar-mini':sidebarMini}">
      <div class="sidebar">
        <div class="sidebar-header">
          <svg-icon type="dx-logo" className="logo" />
        </div>
        <ul class="sidebar-nav-list">
          <li class="sidebar-nav-item">
            <a class="sidebar-item" href="#">
              <i class="el-icon-news"></i>
              <span class="sidebar-item-label">个人中心</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="sidebar-item actived" href="#">
              <i class="el-icon-tickets"></i>
              <span class="sidebar-item-label">数据中心</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a class="sidebar-item" href="#">
              <i class="el-icon-refresh"></i>
              <span class="sidebar-item-label">统计报表</span>
            </a>
          </li>
        </ul>
        <div class="sidebar-nav-list-divider">
          <div class="divider"></div>
        </div>
        <el-scrollbar class="sidebar-body">
          <ul class="sidebar-nav-list">
            <li class="sidebar-nav-item">
              <a class="sidebar-item" href="#">
                <i class="el-icon-phone-outline"></i>
                <span class="sidebar-item-label">通讯录</span>
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="sidebar-item" href="#">
                <i class="el-icon-picture-outline"></i>
                <span class="sidebar-item-label">图库图片</span>
              </a>
            </li>
            <li class="sidebar-nav-item">
              <a class="sidebar-item" href="#">
                <i class="el-icon-star-off"></i>
                <span class="sidebar-item-label">智能收藏</span>
              </a>
            </li>
          </ul>
        </el-scrollbar>
        <div class="sidebar-footer" @click="sidebarMini=!sidebarMini">
          <a class="sidebar-item" href="#">
            <i class="el-icon-d-arrow-left rotate"></i>
            <span class="sidebar-item-label">折叠隐藏</span>
          </a>
        </div>
      </div>
      <div class="container">
        <div class="topbar">
          <el-menu :default-active="activeIndex2" class="topbar-menu" mode="horizontal" @select="handleSelect">
            <!-- <el-menu-item index="1">我的工作台</el-menu-item> -->
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-submenu index="9" class="topbar-menu-right">
              <span slot="title">账户中心</span>
              <div class="topbar-menu-user">
                <div class="topbar-user-info">
                  <img src="/static/images/user/face.jpg" class="topbar-user-avatar">
                  <p class="topbar-user-email"><span>ruyangit@163.com</span></p>
                </div>
                <div class="topbar-body">
                  <el-menu-item index="9-1"><i class="el-icon-edit-outline"></i>
                    <p>写文章</p>
                  </el-menu-item>
                  <el-menu-item index="9-2"><i class="el-icon-bell"></i>
                    <p>消息</p>
                  </el-menu-item>
                  <el-menu-item index="9-3"><i class="el-icon-star-off"></i>
                    <p>收藏</p>
                  </el-menu-item>
                  <el-menu-item index="9-4"><i class="el-icon-service"></i>
                    <p>智能客服</p>
                  </el-menu-item>
                  <el-menu-item index="9-5"><i class="el-icon-setting"></i>
                    <p>设置</p>
                  </el-menu-item>
                </div>
                <div class="btn-list">
                  <a class="btn-list-link" href="#">退出管理控制台</a>
                </div>
              </div>
            </el-submenu>
          </el-menu>
        </div>
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
        sidebarMini: false,
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
  .topbar-menu-user {
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
        margin: 8px 0; // color: #fff;
        font-size: 14px;
      }
    }
    .topbar-body {
      height: 205px;
      padding: 15px;
      .el-menu-item {
        float: left;
        width: 80px;
        height: 80px;
        text-align: center;
        padding-top: 8px;
        i {
          font-size: 23px;
          margin-right: 0px;
        }
      }
    }
    .btn-list {
      padding-top: 6px; // background: rgb(67, 74, 80);
      border-top: 1px solid #eaeaea;
      .btn-list-link {
        height: 35px;
        line-height: 35px;
        display: block;
        transition: all 0.15s;
        text-align: center; // color: #fff; // background-color: #f5f5f6;
        // border-top: #eaeaea;
      }
    }
  }
  #app {
    width: 100%;
    height: 100%;
    background: #e5e5e5;
    .wrapper {
      .sidebar {
        width: 200px;
        height: 100%;
        position: absolute;
        left: 0px; // background: #ffffff;
        background-color: #f5f7fa;
        border-right: 1px solid #e6e9f0;
        overflow-y: hidden;
        .sidebar-header {
          line-height: 90px;
          text-align: center;
          .logo {
            width: 45px;
            height: 45px;
            vertical-align: middle;
          }
        }
        .sidebar-body {
          width: 100%;
          height: 100%;
          padding-left: 1px;
          overflow-y: auto;
          .el-scrollbar__wrap {
            overflow-x: auto;
          }
        }
        &>.sidebar-body {
          width: auto;
          height: auto;
          position: absolute; // top: 25px;
          top: 300px;
          left: 0px;
          right: 0px;
          bottom: 50px;
        }
        .sidebar-nav-list {
          padding: 0;
          margin-bottom: 0;
          list-style: none;
          .sidebar-nav-item {
            display: list-item;
            &>a {
              display: block;
              &.actived {
                color: #2f3033;
                border-left-color: #008afe;
                background-color: #e1edfa;
              }
              &:hover {
                background-color: #e1edfa;
              }
            }
          }
        }
        .sidebar-footer {
          border-top: 1px solid #e5e5e5;
          position: absolute;
          bottom: 0px;
          width: 100%;
          height: 50px;
          &>a {
            display: block;
          }
        }
        .sidebar-item {
          height: 45px;
          padding: 0 27px;
          margin: 0 0 5px;
          line-height: 45px;
          color: #8d9199;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          font-size: 14px;
          white-space: nowrap;
          i {
            margin-right: 13px;
            vertical-align: middle;
          }
        }
        .sidebar-nav-list-divider {
          margin: 30px 0;
          height: 1px;
          .divider {
            margin: 0 auto;
            height: 1px;
            width: 180px;
            background-color: #e6e9f0;
          }
        }
      }
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
        .topbar {
          .topbar-menu {
            padding-left: 1px;
            .topbar-menu-right {
              position: absolute;
              right: 1px;
            }
          }
        }
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
          top: 61px;
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
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
    }
    .sidebar-mini {
      .sidebar {
        width: 79px;
        .sidebar-nav-list-divider {
          margin: 30px 0;
          height: 1px;
          .divider {
            margin: 0 auto;
            height: 1px;
            width: 30px;
            background-color: #e6e9f0;
          }
        }
      }
      .container {
        left: 79px;
      }
      .sidebar-footer {
        .rotate {
          transform: rotate(180deg);
          transition: transform 0.2s;
        }
      }
      .sidebar-item {
        .sidebar-item-label {
          display: none;
        }
      }
    }
  }
</style>

