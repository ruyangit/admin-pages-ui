<template>
  <ru-layout id="app" sidebarActive="sb-1">
     <ru-navbar-inner title="个人中心" :treeData="data">
       <div class="user demo-user">
         <div class="user-left">
           <div class="container-block">
            <div class="info-column">
            <h5 class="info-column-title">基本信息</h5>
            <el-row class="info-items">
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">任务标题：</span>
                <span class="info-item-value">{dataSource.title}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">店铺名称：</span>
                <span class="info-item-value">{dataSource.shopName}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">任务金额：</span>
                <span class="info-item-value">¥ {dataSource.amount}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">任务赏金：</span>
                <span class="info-item-value">¥ {dataSource.bounty}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">接单时间：</span>
                <span class="info-item-value">{dataSource.orderTime}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">交付时间：</span>
                <span class="info-item-value">
                  {dataSource.deliveryTime}
                </span>
              </el-col>
            </el-row>
          </div>
          <div class="info-column">
            <h5 class="info-column-title">更多信息</h5>
            <el-row class="info-items">
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">联系方式：</span>
                <span class="info-item-value">{dataSource.phone}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">收货地址：</span>
                <span class="info-item-value">{dataSource.address}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">任务状态：</span>
                <span class="info-item-value">{dataSource.status}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="info-item-label">备注：</span>
                <span class="info-item-value">{dataSource.remark}</span>
              </el-col>
              <el-col :span="24" :lg="12" class="info-item">
                <span class="attach-label">附件：</span>
                <span>
                   <img src="/static/images/user/face.jpg" alt="图片" class="attach-pics">
                </span>
              </el-col>
            </el-row>
          </div>
          </div>
          <div class="container-block">
            <div class="info-column">
            <h5 class="info-column-title">操作日志</h5>
            <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    <el-pagination
  small
  layout="prev, pager, next"
  :total="100" class="table-pagination">
</el-pagination>
  
            </div>
            </div>
         </div>
          <div class="user-right">
            <div class="container-block">
            <div class="info-column">
            <h5 class="info-column-title">基本信息</h5>
            
            </div>
            </div>
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
          label: '二级 1',
          children: [{
            label: '二级 1-1'
          }, {
            label: '二级 1-2'
          }]
        },{
          label: '二级 2',
          children: [{
            label: '二级 2-1'
          }, {
            label: '二级 2-2'
          }]
        },{
          label: '一级 3',
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    components:{
    RuNavbarInner
  },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style lang="less">

.demo{
  &-user{
    .info{  
      &-column{
        margin-bottom: 15px;
        &-title{
          margin-bottom: 20px;
          padding-left: 10px;
          border-left: 3px solid #3080fe;
        }
      }
      &-items{
        padding: 0px;
        margin-left: 15px;
      }
      &-item{
        margin-bottom: 18px;
        list-style: none;
        font-size: 14px;
        &-label{
          min-width: 70px;
          color: #999;
        }
        &-value{
          color:#333;
        }
      }
    }
    .attach{
      &-label{
        min-width: 70px;
        color: #999;
        float: left;
      }
      &-pics{
        width: 80px;
        height: 80px;
        border: 1px solid #eee;
        margin-right: 10px;
      }
    }
  }
}

.body{
  &-left{
    width: 180px;
    height: 100%;
    position: relative;
    background-color: #fff;
    border-right: solid 1px #e6e6e6;
    &-header{
      // background-color: antiquewhite;
      font-weight: bold;
      text-indent: 20px;
      height: 60px;
      line-height: 60px;
      .nav-fold{
        position: absolute;
        right: 15px;
        top: 20px;
        font-size: 18px;
        color: #909399;
        
        &.un{
          right: 5px;
          top: 10px;
          transform: rotate(90deg);
        }
      }
    }
    &-nav{
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
  }
  &-main{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 180px;
    right:0px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.user{
  padding: 10px;
  &-left{
    padding-right: 310px;
  }
  &-right{
    position: absolute;
    right: 10px;
    top: 10px;
    width: 300px;
  }
}
.table-pagination{
  text-align: center;
  margin-top: 10px;
}
</style>
