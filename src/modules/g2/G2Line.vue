<template>
<div :id="id">
</div>
</template>

<script>
import G2 from "g2";
export default {
  data() {
    return {
      chart: null
    };
  },
  props: {
    charData: {
      type: Array,
      default: function() {
        return {
          data: []
        };
      }
    },
    id: String
  },
  mounted: function() {
         this.drawChart(this.charData);       // 第一步想到的是创建的时候更新图表，但是这个不适用于异步请求接口获取相关数据，所以采用下面的监听的方式
    // console.log(this.charData);
  },
  beforeUpdate: function() {
    //      this.drawChart();
  },
  watch: {
    charData: function(val, oldVal) {
      // 监听charData，当放生变化时，触发这个回调函数绘制图表
      console.log("new: %s, old: %s", val, oldVal);
      this.drawChart(val);
    }
  },
  methods: {
    drawChart: function(datas) {
      // 如果图形存在则删除再创建，这个地方感觉稍微有点坑
      // 具体的G2 api函数说明请看上面提供的官网地址，此处不再逐一说明
      this.chart && this.chart.destroy();
      let data = datas;
      this.chart = new G2.Chart({
        id: this.id,
        width: 1000,
        height: 250
      });
      this.chart.source(data, {
        strftime: {
          alias: "日期",
          type: "cat",
          range: [0, 1]
        },
        value: {
          alias: "数量值(人)"
        }
      });
      this.chart
        .line()
        .position("strftime*value")
        .size(2);
      this.chart
        .point()
        .position("strftime*value")
        .color("#757373")
        .shape("circle")
        .label("value", {
          offset: 20,
          label: {
            fill: "#000"
          }
        });
      this.chart.animate(false);
      this.chart.render();
    }
  }
};
</script>

<style lang="less">
</style>