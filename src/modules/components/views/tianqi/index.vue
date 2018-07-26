<template>
<div class="demo-tianqi">
  城市：{{data.city}}，aqi：{{data.aqi||'--'}}，温度：{{data.wendu}}<br>
  <h3>{{data.ganmao}}</h3><br><br>
  <div>
    <h1>{{data.yesterday}}</h1>
  </div><br><br>
  <div v-for="(item,index) in data.forecast" :key="index">
    <h1>{{item.date}}，</h1>
    {{item.high}}，
    {{item.low}}，
    {{item.fengxiang}}-{{item.fengli}}，
    {{item.type}}
  </div>
  <div class="city">
    <a href="javascript:;" @click="selectCity('上海')">上海，</a>
    <a href="javascript:;" @click="selectCity('西安')">西安，</a>
    <a href="javascript:;" @click="selectCity('咸阳')">咸阳，</a>
    <a href="javascript:;" @click="selectCity('泾阳')">泾阳</a>
  </div>
  <div style="margin-top: 15px;">
    <el-input placeholder="请输入城市名称" v-model="inputCity" style="width:300px;">
    <el-button slot="append"  @click="selectCity(inputCity)">查看天气</el-button>
  </el-input>
  </div>
</div>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      data: {},
      inputCity:''
    };
  },
  methods: {
    weatherApi(city) {
      const loading = this.$loading({
        target: document.querySelector(".demo-tianqi")
      });
      request({
        url: "weatherApi?city=" + city,
        method: "get"
      }).then(response => {
        this.data = response;
        loading.close();
      });
    },
    selectCity(city) {
      this.$router.push({
        path: "/tianqi/" + city
      });
    }
  },
  watch: {
    $route() {
      this.weatherApi(this.$route.params.city);
    }
  },
  mounted() {
    this.weatherApi(this.$route.params.city);
  }
};
</script>

<style lang="less">
.demo {
  &-tianqi {
    padding: 15px;
    min-height: 500px;
    .city {
      margin-top: 50px;
      font-size: 18px;
      font-weight: bold;
      color: blue;
    }
  }
}
</style>