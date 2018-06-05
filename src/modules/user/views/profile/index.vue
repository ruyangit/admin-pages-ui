<template>
    <el-container>
        <el-main>
            <el-tabs tab-position="left" @tab-click="handleClick">
                <el-tab-pane label="通知">
                    <el-table :data="tableData" style="width: 100%" v-loading="loading">
                        <el-table-column prop="title" label="标题" width="180">
                        </el-table-column>
                        <el-table-column prop="summary" label="摘要">
                        </el-table-column>
                        <el-table-column prop="date" label="时间" width="180">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="公告">维护中...</el-tab-pane>
                <el-tab-pane label="私信">维护中...</el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
export default {
  name: "user-profile",
  data() {
    return {
      loading: false,
      tableData: [
        {
          date: "2016-05-02",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-01",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          title: "王小虎",
          summary: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      this.loading = true;
      console.log(tab, event);
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped lang="less">
</style>