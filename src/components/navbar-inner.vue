<template>
<div style="height:100%;" :class="{'body-mini':bodyMini}">
    <div class="body-left">
        <div class="body-left-header">
            <span>{{title}}</span>
            <i class="el-icon-d-caret nav-fold un" @click="bodyMini=!bodyMini"></i>
        </div>
        <el-scrollbar class="body-left-nav">
            <el-tree :data="treeData" :props="treeProps" @node-click="handleNodeClick" :default-expand-all="true" :highlight-current="true"></el-tree>
        </el-scrollbar>
    </div>
    <div class="body-fold" @click="bodyMini=!bodyMini">
        <i class="el-icon-d-caret nav-fold"></i>
    </div>
    <div class="body-main">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
  name: "ru-navbar-inner",
  data() {
    return {
      bodyMini: false,
      treeProps: {
        children: "children",
        label: "label"
      }
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    treeData: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleNodeClick(data) {
      if(!data.children&&data.url){
        console.log(data.url);
        this.$router.push({
        path: data.url
      });
        }
      }
  }
};
</script>

<style lang="less">
.body {
  &-left {
    width: 180px;
    height: 100%;
    position: relative;
    background-color: #fff;
    border-right: solid 1px #e6e6e6;
    &-header {
      // background-color: antiquewhite;
      font-weight: bold;
      text-indent: 20px;
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      .nav-fold {
        position: absolute;
        right: 15px;
        top: 20px;
        font-size: 18px;
        color: #909399;
        &.un {
          right: 5px;
          top: 10px;
          transform: rotate(90deg);
        }
      }
    }
    &-nav {
      position: absolute;
      top: 60px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      overflow-y: auto;
      .el-scrollbar__wrap {
        overflow-x: auto;
      }
    }
    .el-tree-node__label{
      font-size: 12px;
    }
  }
  &-main {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 180px;
    right: 0px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &-fold{
      display: none;
  }
  &-mini{
      .body{
          &-left{
              width: 0px;
              display: none;
          }
          &-fold{
              display:block;
              height: 60px;
              width: 45px;
              position: absolute;
              z-index: 10;
              background: #fff;
              
              .nav-fold {
                position: absolute;
                right: 15px;
                top: 20px;
                font-size: 18px;
                color: #909399;
                &:hover{
                    color: #000;
                }
            }
          }
          &-main{
              left: 0px;
          }
      }
  }
}
</style>
