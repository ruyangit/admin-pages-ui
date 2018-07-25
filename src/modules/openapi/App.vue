<template>
  <ru-layout id="app" sidebarActive="sb-3">
     <ru-navbar-inner title="OpenApi" :treeData="data">
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
          label: '首页',
          url:'/index',
        }, {
          label: '新闻',
          url:'/news',
        }, {
          label: '小说',
          url:'/novel',
        },{
          label: '段子',
          url:'',
        },{
          label: '天气',
          url:'/tianqi/上海',
        },{
          label: '美图',
          url:'/meitu/1',
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
