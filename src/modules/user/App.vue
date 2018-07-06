<template>
  <ru-layout id="app" sidebarActive="sb-1">
     <ru-navbar-inner title="个人中心" :treeData="data">
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
          label: '基本信息',
          url:'/profile',
        }, {
          label: '联系人管理',
          url:'/address',
        }, {
          label: '安全保障',
          children: [{
            label: '密钥',
            url:'/key',
          }, {
            label: 'Oauth认证',
            url:'/oauth',
          }, {
            label: '授权管理',
            url:'/oauth',
          }]
        },{
          label: '二级 2',
          children: [{
            label: '二级 2-1',
            url:'',
          }, {
            label: '二级 2-2',
            url:'',
          }]
        },{
          label: '一级 3',
          url:'',
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
