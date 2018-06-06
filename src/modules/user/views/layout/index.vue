<template>
    <div class="container--layout">
        <main-header></main-header>
        <el-main class="main-content">
            <div class="resource-navbar">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="resource-nav-header">
                    <el-breadcrumb-item to="#" tag="a">用户中心</el-breadcrumb-item>
                    <el-breadcrumb-item>{{activeText}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="resource-menu">
                    <ul class="resource-ul clearfix">
                        <li><router-link to="profile" tag="a" exact-active-class="actived">个人信息</router-link></li>
                        <li><router-link to="key" tag="a" exact-active-class="actived">密钥管理</router-link></li>
                        <li><router-link to="security" tag="a" exact-active-class="actived">安全设置</router-link></li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
        </el-main>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeText: ""
    };
  },
  watch: {
    $route() {
      this.activeText = this.$router.currentRoute.meta.title;
    }
  },
  mounted() {
    this.activeText = this.$router.currentRoute.meta.title;
  }
};
</script>
