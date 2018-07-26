<template>
  <ru-layout id="app" sidebarActive="sb-11">
    <div class="demo-g2">
      <el-row :gutter="20">
        <el-col :span="24" id="c1" class="grid-content"></el-col>
        <el-col :span="24" id="c2" class="grid-content"></el-col>
        <el-col :span="24" id="c3" class="grid-content"></el-col>
        <el-col :span="12" id="c4" class="grid-content"></el-col>
        <el-col :span="12" id="c5" class="grid-content"></el-col>
        <el-col :span="24" id="c6" class="grid-content"></el-col>
      </el-row>
    </div>
  </ru-layout>
</template>

<script>
// import G2 from "g2";
export default {
  name: "App",
  data() {
    return {
      chart: null,
      chart2: null,
      chart3: null,
      chart4: null,
      chart5: null,
      chart6: null,
      data:[
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 355 },
        { genre: 'A1', sold: 355 },
        { genre: 'A2', sold: 255 },
        { genre: 'A3', sold: 375 },
        { genre: 'A4', sold: 155 },
        { genre: 'A5', sold: 415 },
        { genre: 'A6', sold: 155 },
        { genre: 'Other', sold: 150 }
      ],
       data2:[
        { genre: 'Sports', sold: 40 },
        { genre: 'Strategy', sold: 20 },
        { genre: 'Action', sold: 25.5 },
        { genre: 'Other', sold: 15.5 },
      ]
    };
  },
  methods: {
    drawChartC6(datas) {
      this.chart6 && this.chart6.destroy();
      let data = datas;

      this.chart6 = new G2.Chart({
        id: 'c6',
        height: 450,
        width: 1000,
      });
      // Step 2: 载入数据源
      this.chart6.source(data);
      this.chart6.scale({
        sold: {
          min: 100
        },
        genre: {
          range: [0, 1]
        }
      });
      this.chart6.axis('sold', {
        label: {
          formatter: function formatter(val) {
            return (val / 10000).toFixed(1) + 'k';
          }
        }
      });
      this.chart6.tooltip({
        crosshairs: {
          type: 'line'
        }
      });
      this.chart6.area().position('genre*sold');
      this.chart6.line().position('genre*sold').size(2);
      this.chart6.render();
    },
    drawChartC5(datas) {
      this.chart5 && this.chart5.destroy();
      let data = datas;

      this.chart5 = new G2.Chart({
        id: 'c5',
        height: 450,
        forceFit: true,
      });
      // Step 2: 载入数据源
      this.chart5.source(data,{
        sold: {
          formatter: function formatter(val) {
            val = val + '%';
            return val;
          }
        }
      });
      this.chart5.coord('theta', {
        radius: 0.75,
        // innerRadius: 0.6
      });
      this.chart5.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      });
      this.chart5.intervalStack().position('sold').color('genre').label('sold', {
          formatter: function formatter(val, item) {
            return item.point.genre + '\n ' + val;
          },
          offset: -40,
          // autoRotate: false,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
      }).tooltip('genre*sold', function(genre, sold) {
        sold = sold + '%';
        return {
          name: genre,
          value: sold
        };
      }).style({
        lineWidth: 1,
        stroke: '#fff'
      });
      this.chart5.render();
    },
    drawChartC4(datas) {
      this.chart4 && this.chart4.destroy();
      let data = datas;

      this.chart4 = new G2.Chart({
        id: 'c4',
        height: 450,
        forceFit: true,
      });
      // Step 2: 载入数据源
      this.chart4.source(data,{
        sold: {
          formatter: function formatter(val) {
            val = val + '%';
            return val;
          }
        }
      });
      this.chart4.coord('theta', {
        radius: 0.75,
        innerRadius: 0.6
      });
      this.chart4.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      });
      this.chart4.intervalStack().position('sold').color('genre').label('sold', {
        formatter: function formatter(val, item) {
          return item.point.genre + ': ' + val;
        }
      }).tooltip('genre*sold', function(genre, sold) {
        sold = sold + '%';
        return {
          name: genre,
          value: sold
        };
      }).style({
        lineWidth: 1,
        stroke: '#fff'
      });
      this.chart4.render();
    },
    drawChartC3(datas) {
      this.chart3 && this.chart3.destroy();
      let data = datas;

      this.chart3 = new G2.Chart({
        id: 'c3',
        height: 450,
        width: 1000,
      });
      // Step 2: 载入数据源
      this.chart3.source(data);
      this.chart3.axis('genre', {
        label: {
          offset: 12
        }
      });
      this.chart3.coord().transpose();
      this.chart3.interval().position('genre*sold').color('genre')
      this.chart3.render();
    },
    drawChartC1(datas) {
      this.chart && this.chart.destroy();
      let data = datas;
      this.chart = new G2.Chart({
        id: 'c1',
        // forceFit: true,
        width: 1000,
        height: 300,
        // padding: 20
      });
      // Step 2: 载入数据源
      this.chart.source(data);
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart.interval().position('genre*sold').color('genre')
      // Step 4: 渲染图表
      this.chart.render();
    },
    drawChartC2(datas) {
      this.chart2 && this.chart2.destroy();
      let data = datas;
      this.chart2 = new G2.Chart({
        id: 'c2',
        // forceFit: true,
        width: 1000,
        height: 250
      });
      // Step 2: 载入数据源
      this.chart2.source(data, {
        genre: {
          alias: "项目",
          type: "cat",
          // range: [0, 1]
        },
        sold: {
          alias: "数量值(人)"
        }
      });
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      this.chart2
        .line()
        .position("genre*sold")
        .size(2);
      this.chart2
        .point()
        .position("genre*sold")
        // .color('genre')
        .shape("circle")
        .label("genre", {
          // offset: 20,
          label: {
            fill: "#000"
          }
        });
      this.chart2.animate(false);
      // Step 4: 渲染图表
      this.chart2.render();
    }
  },
  mounted(){
    this.drawChartC1(this.data);
    this.drawChartC2(this.data);
    this.drawChartC3(this.data);
    this.drawChartC4(this.data2);
    this.drawChartC5(this.data2);
    this.drawChartC6(this.data);
  }
};
</script>

<style lang="less">
.demo {
  &-g2 {
    padding: 15px;
    .el-row {
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      min-height: 36px;
      margin-bottom: 15px;
      padding: 0 !important;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
  }
}
</style>
