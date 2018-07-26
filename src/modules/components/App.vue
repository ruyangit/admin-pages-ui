<template>
  <ru-layout id="app" sidebarActive="sb-6">
     <ru-navbar-inner title="组件仓库" :treeData="data">
       <router-view></router-view>
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
          label: '文本编辑器',
          url:'/editor',
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    components:{
    RuNavbarInner
  }
  };
</script>

<style lang="less">

</style>
