<template>
<ru-layout id="app" sidebarActive="sb-2">
  <ru-navbar-inner title="数据中心" :treeData="data">
    <div style="padding:10px">
      <div class="container-block">
      <h4>列表</h4>
      <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    </div>
    </div>
  </ru-navbar-inner>
</ru-layout>
</template>

<script>
import RuNavbarInner from '@/components/navbar-inner.vue';
export default {
  name: "App",
  data() {
    return {
      data: [{
        label: '一级 1'
      }, {
        label: '一级 2',
      }, {
        label: '一级 3',
      }]
    }
  },
  components:{
    RuNavbarInner
  }
};
</script>

<style lang="less">

</style>
