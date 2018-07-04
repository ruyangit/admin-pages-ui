<template>
<div id="app" class="framework">
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
        <!-- <el-breadcrumb separator="/" style="padding:20px;">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
        <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        <!-- </el-breadcrumb> -->
        <!-- <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="DATE" width="180">
                </el-table-column>
                <el-table-column prop="name" label="NAME" width="180">
                </el-table-column>
                <el-table-column prop="address" label="ADDRESS">
                </el-table-column>
                <el-table-column prop="id" label="ID" width="80">
                </el-table-column>
              </el-table> -->
        <div style="padding-right:310px;">
          <div class="container-block demo-wgd">
            <el-row>
              <el-col :span="24" :lg="8" class="data-item">
                <div class="data-title">总收入</div>
                <div class="data-intro">所有项目收入</div>
                <div class="data-value">￥10M</div>
                <div class="data-progress">
                  <el-progress :percentage="30" :showText="false"></el-progress>
                </div>
                <div class="data-extra">
                  <div>
                    <a class="settings-link" href="#">
                      设置
                    </a>
                  </div>
                  <div>30%</div>
                </div>
              </el-col>
              <el-col :span="24" :lg="8" class="data-item">
                <div class="data-title">今年新用户</div>
                <div class="data-intro">今年新注册用户</div>
                <div class="data-value">2000</div>
                <div class="data-progress">
                  <el-progress :percentage="70" :showText="false"></el-progress>
                </div>
                <div class="data-extra">
                  <div>
                    <a class="settings-link" href="#">
                      设置
                    </a>
                  </div>
                  <div>70%</div>
                </div>
              </el-col>
              <el-col :span="24" :lg="8" class="data-item">
                <div class="data-title">本月新订单</div>
                <div class="data-intro">本月新增订单数</div>
                <div class="data-value">579</div>
                <div class="data-progress">
                  <el-progress :percentage="60" :showText="false"></el-progress>
                </div>
                <div class="data-extra">
                  <div>
                    <a class="settings-link" href="#">
                      设置
                    </a>
                  </div>
                  <div>60%</div>
                </div>
              </el-col>
              <!-- <el-col :span="24" :lg="6">
                 3
              </el-col>
              <el-col :span="24" :lg="6">
                 4
              </el-col> -->
            </el-row>
            </div>
          <div class="container-block" style="margin-bottom: 15px;">
            <h4>实时概况</h4>
            <el-row>
              <el-col :span="24" :lg="12">
                <div class="demo-data-item">
                  <img src="https://img.alicdn.com/tfs/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png" alt="" class="data-item-img" />
                  <div class="data-item-unit">
                    <div class="unit-title">门店销售额(元)</div>
                    <div class="unit-amount">1982.00</div>
                    <div class="unit-footer">昨日：1680.00</div>
                  </div>
                  <div class="data-item-unit">
                    <div class="unit-title">门店支付订单数</div>
                    <div class="unit-amount">80</div>
                    <div class="unit-footer">昨日：60</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="24" :lg="12">
                <div class="demo-data-item">
                  <img src="https://img.alicdn.com/tfs/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png" alt="" class="data-item-img" />
                  <div class="data-item-unit">
                    <div class="unit-title">网店销售额(元)</div>
                    <div class="unit-amount">2381.00</div>
                    <div class="unit-footer">昨日：2123.00</div>
                  </div>
                  <div class="data-item-unit">
                    <div class="unit-title">网店支付订单数</div>
                    <div class="unit-amount">120</div>
                    <div class="unit-footer">昨日：128</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="24" :lg="12">
                <div class="demo-data-item">
                  <img src="https://img.alicdn.com/tfs/TB1Py4_ceuSBuNjy1XcXXcYjFXa-142-140.png" alt="" class="data-item-img" />
                  <div class="data-item-unit">
                    <div class="unit-title">新增客户数</div>
                    <div class="unit-amount">239</div>
                    <div class="unit-footer">昨日：231</div>
                  </div>
                  <div class="data-item-unit">
                    <div class="unit-title">支付客户数</div>
                    <div class="unit-amount">85</div>
                    <div class="unit-footer">昨日：60</div>
                  </div>
                </div>
              </el-col>
              <el-col :span="24" :lg="12">
                <div class="demo-data-item">
                  <img src="https://img.alicdn.com/tfs/TB1Ni4_ceuSBuNjy1XcXXcYjFXa-142-140.png" alt="" class="data-item-img" />
                  <div class="data-item-unit">
                    <div class="unit-title">新增会员数</div>
                    <div class="unit-amount">45</div>
                    <div class="unit-footer">昨日：78</div>
                  </div>
                  <div class="data-item-unit">
                    <div class="unit-title">新增储值金额(元)</div>
                    <div class="unit-amount">568.00</div>
                    <div class="unit-footer">昨日：693.00</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
            <!-- <div class="container-block">
          <h4>重要提醒</h4>
          <el-row>
            <el-col :span="24">
              <div class="demo-notice-item">
                <div class="notice-item-title">订单相关</div>
                <div class="notice-item-body">
                  <div class="body-item">待发货订单：<a href="#">100</a></div>
                  <div class="body-item">待处理退款：<a href="#">0</a></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="demo-notice-item">
                <div class="notice-item-title">物流信息</div>
                <div class="notice-item-body">
                  <div class="body-item">已完成：<a href="#">100</a></div>
                  <div class="body-item">派送中：<a href="#">0</a></div>
                  <div class="body-item">退货中：<a href="#">0</a></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="demo-notice-item">
                <div class="notice-item-title">商品相关</div>
                <div class="notice-item-body">
                  <div class="body-item">门店在售：<a href="#">100</a></div>
                  <div class="body-item">门店售罄：<a href="#">0</a></div>
                  <div class="body-item">库存预警：<a href="#">0</a></div>
                  <div class="body-item">网店在售：<a href="#">0</a></div>
                  <div class="body-item">网店售罄：<a href="#">0</a></div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="demo-notice-item">
                <div class="notice-item-title">通知消息</div>
                <div class="notice-item-body">
                  <div class="body-item">未读客户消息：<a href="#">100</a></div>
                  <div class="body-item">未读通知：<a href="#">0</a></div>
                  <div class="body-item">系统通知：<a href="#">0</a></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div> -->
        <div class="container-block demo-jud">
              <h4>评价概览</h4>

              <div class="overview-data">388 <span class="overview-data-unit">分</span>
              </div>
              <div class="overview-data-detail">
                <div>
                  <div class="overview-data-detail-count">+21.8%</div>
                  <div class="overview-data-detail-desc">好评环比增长比例</div>
                </div>
                <div>
                  <div class="overview-data-detail-count">+10.2%</div>
                  <div class="overview-data-detail-desc">好评同比增长比例</div>
                </div>
                <div>
                  <div class="overview-data-detail-count">+52</div>
                  <div class="overview-data-detail-desc">好评环比增长数量</div>
                </div>
              </div>
              <div class="overview-data-extra-links">
                <div class="overview-data-extra-links-title">扩展链接</div>
                <div class="overview-data-extra-links-wrapper">
                  <a class="overview-data-extra-link" href="" target="_blank">微博</a>
                  <a class="overview-data-extra-link" href="" target="_blank">知乎</a>
                  <a class="overview-data-extra-link" href="" target="_blank">头条</a>
                </div>
              </div>
            </div>
        </div>
        <div class="demo-right" style="width:300px;position:absolute;top:10px;right:10px;">
          <el-tabs v-model="activeName" type="border-card" style="height:300px;margin-bottom: 15px;">
            <el-tab-pane label="全部公告" name="first">
              全部公告
            </el-tab-pane>
            <el-tab-pane label="动态" name="second">动态</el-tab-pane>
            <el-tab-pane label="通知" name="third">通知</el-tab-pane>
          </el-tabs>
          <el-carousel trigger="click" height="154px" :autoplay="false" style="margin-bottom: 15px;">
              <el-carousel-item v-for="(item,index) in slides" :key="index">
                <img :src="item.url" :alt="item.text" />
              </el-carousel-item>
            </el-carousel>
            <div class="container-block demo-jud">
              <h4>评分统计</h4>
              <div class="overview-rating-wrapper">
                <span class="overview-rating-count">4.5</span>
                <span class="overview-rating">
                <el-rate v-model="rateValue" disabled></el-rate>
              </span>
              </div>
              <div class="overview-detail">
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">5 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="90" color="#27ae60" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">4 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="70" color="#2980b9" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">3 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="10" color="#f1c40f" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">2 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="4" color="#e67e22" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">1 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="0" color="#e74c3c" :showText="false"></el-progress>
                  </span>
                </div>
              </div>
            </div>
        </div>
            <div class="normal-footer">
        <div class="container-block" style="margin-bottom: 0px;">
          <el-row>
            <el-col :span="4">
              <a href="#">
                <img
                  src="/static/images/user/ryan.png"
                  alt=""
                  class="logo"
                />
              </a>
            </el-col>
            <el-col :span="20">
              <div class="nav">
                <a href="#" class="nav-link">
                  Home
                </a>
                <a href="#" class="nav-link">
                  Shop
                </a>
                <a href="#" class="nav-link">
                  Blog
                </a>
                <a href="#" class="nav-link">
                  Service
                </a>
                <a href="#" class="nav-link">
                  About
                </a>
                <a href="#" class="nav-link" style="margin-right:0px;">
                  Contact
                </a>
              </div>
            </el-col>
          </el-row>
          </div>
        </div>
        <!-- <el-row :gutter="10">
          <el-col :span="24" :lg="12">
            <div class="container-block demo-jud">
              <h4>评价概览</h4>

              <div class="overview-data">388 <span class="overview-data-unit">分</span>
              </div>
              <div class="overview-data-detail">
                <div>
                  <div class="overview-data-detail-count">+21.8%</div>
                  <div class="overview-data-detail-desc">好评环比增长比例</div>
                </div>
                <div>
                  <div class="overview-data-detail-count">+10.2%</div>
                  <div class="overview-data-detail-desc">好评同比增长比例</div>
                </div>
                <div>
                  <div class="overview-data-detail-count">+52</div>
                  <div class="overview-data-detail-desc">好评环比增长数量</div>
                </div>
              </div>
              <div class="overview-data-extra-links">
                <div class="overview-data-extra-links-title">扩展链接</div>
                <div class="overview-data-extra-links-wrapper">
                  <a class="overview-data-extra-link" href="" target="_blank">微博</a>
                  <a class="overview-data-extra-link" href="" target="_blank">知乎</a>
                  <a class="overview-data-extra-link" href="" target="_blank">头条</a>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :lg="12">
            <div class="container-block demo-jud">
              <h4>评分统计</h4>
              <div class="overview-rating-wrapper">
                <span class="overview-rating-count">4.5</span>
                <span class="overview-rating">
                <el-rate v-model="rateValue" disabled></el-rate>
              </span>
              </div>
              <div class="overview-detail">
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">5 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="90" color="#27ae60" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">4 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="70" color="#2980b9" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">3 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="10" color="#f1c40f" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">2 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="4" color="#e67e22" :showText="false"></el-progress>
                  </span>
                </div>
                <div class="overview-detail-item">
                  <span class="overview-detail-item-text">1 星</span>
                  <span class="overview-detail-item-percent-wrapper">
                    <el-progress :percentage="0" color="#e74c3c" :showText="false"></el-progress>
                  </span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row> -->
        <!-- <div class="el-row" style="padding-left: 6px; padding-right: 6px;">
              <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-success">Success
                  <div class="value">#67C23A</div>
                </div>
              </div>
              <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-warning">Warning
                  <div class="value">#E6A23C</div>
                </div>
              </div>
              <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-danger">Danger
                  <div class="value">#F56C6C</div>
                </div>
              </div>
              <div class="el-col el-col-6 el-col-xs-12" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-info">Info
                  <div class="value">#909399</div>
                </div>
              </div>
            </div>
            <div class="el-row" style="padding-left: 6px; padding-right: 6px;">
              <div class="el-col el-col-18 el-col-xs-24" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-success">Success
                  <div class="value">#67C23A</div>
                </div>
              </div>
              <div class="el-col el-col-6 el-col-xs-24" style="padding-left: 6px; padding-right: 6px;">
                <div class="demo-color-box bg-info">Info
                  <div class="value">#909399</div>
                </div>
              </div>
            </div> -->
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
      tableData: [],
      activeName: "first",
      rateValue: 4.5,
      slides: [
        {
          url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg',
          text: '阿里公益T恤设计大概',
        },
        {
          url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg',
          text: '淘公仔设计大赛',
        },
        {
          url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg',
          text: '磁带播放器换肤设计大赛',
        },
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleTip() {
      this.$notify({
        title: "提示",
        dangerouslyUseHTMLString: true,
        message: '喜欢就 <a style="color:blue;" href="https://github.com/ruyangit/my-vuejs-skye-cli.git">Star</a> 一个吧, [ ^_^ ]',
        duration: 0,
        type: "success",
        position: "bottom-right",
        showClose: false
      });
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
   // this.handleTip();
  }
};
</script>

<style lang="less">
.container-block {
  background-color: #fff; // border-radius: 6px;
  padding: 20px;
  margin-bottom: 15px;
  h4 {
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    color: rgb(51, 51, 51);
    font-weight: bold;
    margin: 0px 0px 20px;
    padding: 0px;
  }
}

.demo {
  &-right {
    .el-tabs--border-card {
      border: 0;
      box-shadow: none;
      &>.el-tabs__header {
        border-bottom: 0;
        .el-tabs__item {
          &.is-active {
            border-right-color: transparent;
            border-left-color: transparent;
          }
        }
      }
    }
  }
  &-wgd{
    .data{
      &-item{
        margin: 10px 0;
        padding: 0 30px;
        position: relative;
      }
      &-title{
        font-weight: bold;
      }
      &-intro{
        margin-top: 10px;
        color: #999;
      }
      &-value{
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        top:10px;
        right: 30px;
        color: #3080fe;
      }
      &-progress{
        margin-top: 20px;
      }
      &-extra{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        color: #999;
      }
    }
    .settings-link{
      color: #999;
    }
    .vertical-line{
      position: absolute;
      top: 20px;
      bottom: 20px;
      right: 0;
      left: 0;
      border-left: 1px solid #eee;
    }
  }
  &-jud {
    height:255px;
    .overview {
      &-data {
        margin-top: 25px;
        font-size: 30px;
        &-unit {
          font-size: 18px;
        }
        &-detail {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          &-count {
            font-size: 18px;
          }
          &-desc {
            font-size: 12px;
            margin-top: 5px;
            color: rgb(102, 102, 102);
          }
        }
        &-extra {
          &-links {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid rgb(238, 238, 238);
            &-title {
              font-size: 12px;
              color: rgb(102, 102, 102);
            }
            &-wrapper {
              margin-top: 10px;
              a:link,
              a:visited {
                color: #5485f7;
              }
            }
          }
          &-link {
            margin-right: 5px;
          }
        }
      }
      &-rating {
        &-wrapper {
          display: flex;
          align-items: center;
        }
        &-count {
          font-size: 30px;
          margin-right: 10px;
        }
      }
      &-detail {
        margin-top: 20px;
        &-item {
          display: flex;
          align-items: center;
          margin-top: 5px;
          &-percent {
            display: inline-block;
            &-wrapper {
              flex: 1;
            }
          }
          &-text {
            margin-right: 10px;
          }
        }
      }
    }
  }
  &-data-item {
    display: flex;
    flex-basis: 50%;
    padding: 20px;
    align-items: center;
    .data-item-img {
      width: 58px;
      height: 58px;
      margin-right: 30px;
    }
    .data-item-unit {
      height: 72px;
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
      justify-content: space-between;
      .unit-title {
        color: rgb(102, 102, 102);
        font-size: 12px;
      }
      .unit-amount {
        color: rgb(51, 51, 51);
        font-size: 24px;
      }
      .unit-footer {
        color: rgb(153, 153, 153);
        font-size: 12px;
      }
    }
  }
  &-notice-item {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    padding: 20px;
    .notice-item-title {
      margin-bottom: 10px;
      font-size: 14px;
      color: rgb(51, 51, 51);
    }
    .notice-item-body {
      display: flex;
      flex-wrap: wrap;
      line-height: 1.28;
      .body-item {
        display: flex;
        flex-basis: 33%;
        color: rgb(153, 153, 153);
        font-size: 13px;
        margin-bottom: 10px;
        a:link,
        a:visited {
          color: #5485f7;
        }
      }
    }
  }
}

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

.framework {
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
      bottom: 0px; // background: #f5f7fa;
      overflow-y: hidden;
      .topbar {
        .topbar-menu {
          padding-left: 1px;
          .topbar-menu-right {
            position: absolute;
            right: 1px;
          }
        }
        .el-menu--horizontal {
          &>.el-submenu {
            &.is-active {
              .el-submenu__title {
                border-bottom: 0px;
              }
            }
          }
        }
      }
      .main-body {
        width: 100%;
        height: 100%;
        padding-left: 1px;
        overflow-y: auto;
        background-color: #fafafa;
        padding: 10px;
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

.normal-footer{
  .content{
    align-items: center;
  }
  .logo{
    width: 80px;
  }
  .nav{
    text-align: right
  }
  .nav-link{
    margin-right: 20px;
    color: rgba(0, 0, 0, 0.87)
  }
}

.demo-color-box {
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 74px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
}

.bg-success {
  background-color: #67c23a;
}

.bg-warning {
  background-color: #e6a23c;
}

.bg-danger {
  background-color: #f56c6c;
}

.bg-info {
  background-color: #909399;
}
</style>

