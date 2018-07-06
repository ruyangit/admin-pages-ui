<template>
<div class="user demo-user">
  <div class="user-left">
    <div class="container-block">
      <h4>基本信息</h4>
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
    <div class="container-block">
      <h4>更多信息</h4>
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
    <div class="container-block">
      <h4>操作日志</h4>
    </div>
  </div>
  <div class="user-right">
    <div class="container-block">
      <h4>照片信息</h4>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUserInfo"
    })
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      // this.$emit('on-dialog-apps-click', false);
      this.$router.push({
        path: "/apps"
      });
    },
    onCancel() {
      // this.$emit('on-dialog-apps-click', false);
    }
  }
};
</script>

<style lang="less">
.demo {
  &-user {
    .info {
      &-items {
        padding: 0px;
        margin-left: 15px;
      }
      &-item {
        margin-bottom: 18px;
        list-style: none;
        font-size: 14px;
        &-label {
          min-width: 70px;
          color: #999;
        }
        &-value {
          color: #333;
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

.user {
  padding: 10px;
  &-left {
    padding-right: 310px;
  }
  &-right {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 300px;
  }
}
</style>