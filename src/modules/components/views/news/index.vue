<template>
    <div class="demo-news">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="汽车" name="auto">
                <news-item v-for="item in data.auto" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="推荐" name="dy">
                <news-item v-for="item in data.dy" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="推荐" name="ent">
                <news-item v-for="item in data.ent" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="财经" name="money">
                <news-item v-for="item in data.money" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="推荐" name="sports">
                 <news-item v-for="item in data.sports" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="科技" name="tech">
                <news-item v-for="item in data.tech" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="新闻" name="toutiao">
                 <news-item v-for="item in data.toutiao" :key="item.docid" :item="item" />
            </el-tab-pane>
            <el-tab-pane label="新闻" name="war">
                <news-item v-for="item in data.war" :key="item.docid" :item="item" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import request from "../../utils/request";
import NewsItem from "./item";
export default {
  data() {
    return {
      data: {},
      activeName: "auto"
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    journalismApi() {
      const loading = this.$loading({
        target: document.querySelector(".demo-news")
      });
      request({
        url: "/journalismApi",
        method: "get"
      }).then(response => {
        // console.log(response);
        this.data = response;
        loading.close();
      });
    }
  },
  mounted() {
    this.journalismApi();
  },
  components:{
      NewsItem
  }
};
</script>

<style lang="less">
.demo {
  &-news {
    padding: 15px;
    min-height: 500px;
    .el-tabs--border-card {
      border: 0;
      box-shadow: none;
      & > .el-tabs__header {
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
}
</style>