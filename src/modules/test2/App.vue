<template>
  <ru-layout id="app" sidebarActive="sb-1">
    test2 <a href="/user#/profile">Profile</a>
  </ru-layout>
</template>

<script>
import axios from "axios";
import request from "@/utils/request";
export default {
  name: "App",
  mounted() {
    //     axios.get('http://169.254.254.71:9999/seed/test/1')
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    request({
      url: "/book/6548683",
      method: "get"
    });
  }
};
</script>

<style lang="less">
</style>
