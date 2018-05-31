<template>
    <div class="container--layout">
        <main-header></main-header>
        <div class="container-router">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "user/getUserInfo"
    })
  },
  mounted() {
    // if (!this.homeData.product) {
    //     this.showLoading = true;
    // }
    // this.$store.dispatch("user/userInfo");
    
  },
  beforeCreate(){
// const loading = this.$loading({
//           lock: true,
//         //   text: 'Loading',
//         //   spinner: 'el-icon-loading',
//         //   background: 'rgba(0, 0, 0, 0.7)'
//         });
//         setTimeout(() => {
//           loading.close();
//         }, 2000);
  }
};
</script>