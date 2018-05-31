<template>
    <el-main class="container--index">
        <div class="container">
            <h3>创建项目</h3>
            <h5>欢迎使用天富星-移动端快速构建平台。创建项目，使用天富星提供的各类资源，通过简单的操作便可以完成一个APP基础框架的搭建。</h5>
            <div class="official-resource">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px'}">
                            <!-- <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image"> -->
                            <div style="padding: 10px;">
                                <span>天富星移动端</span>
                                <div class="bottom clearfix">
                                    <span class="version">v0.0.2</span>
                                    <el-button type="text" class="button" @click="$router.push({path:'/apps/create'})">创建应用</el-button>
                                    <!-- <el-button type="text" class="button" @click="create('app')" v-loading.fullscreen.lock="fullscreenLoading">立即创建</el-button> -->
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card :body-style="{ padding: '0px'}">
                            <!-- <img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image"> -->
                            <div style="padding: 10px;">
                                <span>金服微服务模版</span>
                                <div class="bottom clearfix">
                                    <span class="version">v1.0.2</span>
                                    <!-- <el-button type="text" class="button" @click="create('service')" v-loading.fullscreen.lock="fullscreenLoading">立即创建</el-button> -->
                                    <el-button type="text" class="button">立即创建</el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <!-- <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
                                                        <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col> -->
                </el-row>
            </div>
        </div>
    </el-main>
</template>

<script>
    import {
        mapGetters
    } from "vuex";
    export default {
        data() {
            return {};
        },
        computed: {
            // ...mapGetters({
            //     homeData: "frontend/home/getHomeData"
            // })
        },
        mounted() {
            // if (!this.homeData.product) {
            //     this.showLoading = true;
            // }
            // this.$store.dispatch("user/userInfo");
        },
    };
</script>

<style scoped lang="less">
    .container--index {
        .container {
            .official-resource {
                .el-card {
                    // width: 200px;
                    .version {
                        font-size: 13px;
                        color: #999;
                    }
                    .bottom {
                        margin-top: 13px;
                        line-height: 12px;
                    }
                    .button {
                        padding: 0;
                        float: right;
                    }
                    .image {
                        width: 100%;
                        display: block;
                    }
                    .clearfix:before,
                    .clearfix:after {
                        display: table;
                        content: "";
                    }
                    .clearfix:after {
                        clear: both;
                    }
                }
            }
        }
    }
</style>