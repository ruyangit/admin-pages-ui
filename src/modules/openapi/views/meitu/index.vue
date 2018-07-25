<template>
<div class="demo-meitu">
  <div class="demo-page">
    <a href="javascript:;" @click="autoBtn">随机</a><br> <br> 
    <a href="javascript:;" @click="prevBtn">上一页</a><br> <br> 
  <a href="javascript:;" @click="nextBtn">下一页</a><br> <br> 
  <a href="javascript:;" @click="topBtn">置顶</a><br> <br> 
  </div>
  <div v-for="(item,index) in data" :key="index">
    <img :src="item.url" style="width:95%;"/>
  </div>
</div>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    meituApi(page) {
      const loading = this.$loading({
        target: document.querySelector(".demo-meitu")
      });
      request({
        url: "meituApi?page=" + page,
        method: "get"
      }).then(response => {
        this.data = response;
        loading.close();
      });
    },

    nextBtn() {
      this.$router.push({
        path: "/meitu/" + (parseInt(this.$route.params.id) + 1)
      });
      document.querySelector(".body-main").scrollTo(0,0)
    },
    prevBtn() {
      if (parseInt(this.$route.params.id) > 1){
        this.$router.push({
          path: "/meitu/" + (parseInt(this.$route.params.id) - 1)
        });
        document.querySelector(".body-main").scrollTo(0,0)
        }
    },
    autoBtn(){
      this.meituApi(0)
    },
    topBtn() {
      const sTop = document.querySelector(".body-main").scrollTop;
      this.scrollTop(document.querySelector(".body-main"), sTop, 0, 1000);
    },
    scrollTop(el, from = 0, to, duration = 500, endCallback) {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback) {
            return window.setTimeout(callback, 1000 / 60);
          };
      }
      const difference = Math.abs(from - to);
      const step = Math.ceil(difference / duration * 50);
      function scroll(start, end, step) {
        if (start === end) {
          endCallback && endCallback();
          return;
        }

        let d = start + step > end ? end : start + step;
        if (start > end) {
          d = start - step < end ? end : start - step;
        }

        if (el === window) {
          window.scrollTo(d, d);
        } else {
          el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
      }
      scroll(from, to, step);
    }
  },
  watch: {
    $route() {
      this.meituApi(this.$route.params.id);
    }
  },
  mounted() {
    this.meituApi(this.$route.params.id);
  }
};
</script>

<style lang="less">
.demo {
  &-meitu {
    padding: 15px;
    min-height: 500px;
  }
  &-page {
    position: fixed;
    right: 30px;
    bottom: 50px;
  }
}
</style>