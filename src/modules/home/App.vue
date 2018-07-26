<template>
<ru-layout id="app" sidebarActive="sb-4" mainBodyPadding="10px" :normalFooter="true">

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
</ru-layout>
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
      slides: [{
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
// .container-block {
//   background-color: #fff; // border-radius: 6px;
//   padding: 20px;
//   margin-bottom: 15px;
//   h4 {
//     height: 16px;
//     line-height: 16px;
//     font-size: 16px;
//     color: rgb(51, 51, 51);
//     font-weight: bold;
//     margin: 0px 0px 20px;
//     padding: 0px;
//   }
// }

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
  &-wgd {
    .data {
      &-item {
        margin: 10px 0;
        padding: 0 30px;
        position: relative;
      }
      &-title {
        font-weight: bold;
      }
      &-intro {
        margin-top: 10px;
        color: #999;
      }
      &-value {
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        top: 10px;
        right: 30px;
        color: #3080fe;
      }
      &-progress {
        margin-top: 20px;
      }
      &-extra {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        color: #999;
      }
    }
    .settings-link {
      color: #999;
    }
    .vertical-line {
      position: absolute;
      top: 20px;
      bottom: 20px;
      right: 0;
      left: 0;
      border-left: 1px solid #eee;
    }
  }
  &-jud {
    height: 255px;
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
      // width: 58px;
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
</style>

