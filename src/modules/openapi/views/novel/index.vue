<template>
    <div class="demo-novel">
        <!-- {{data}} -->
        <novel-item v-for="item in data" :key="item.bid" :item="item" />
    </div>
</template>

<script>
import request from "../../utils/request";
import NovelItem from "./item";
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    novelApi() {
      const loading = this.$loading({
        target: document.querySelector(".demo-novel")
      });
      request({
        url: "/novelApi",
        method: "get"
      }).then(response => {
        // console.log(response);
        this.data = response;
        loading.close();
      });
    }
  },
  mounted() {
    this.novelApi();
  },
  components:{
      NovelItem
  }
};
</script>

<style lang="less">
.demo {
  &-novel {
    padding: 15px;
    min-height: 500px;
     
    
  }
}
</style>