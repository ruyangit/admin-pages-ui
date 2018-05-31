<template>
    <el-container>
        <el-header class="apps--header">
            <el-button type="primary" plain @click="$router.push({path:'/apps/create'})">创建应用</el-button>
        </el-header>
        <el-main class="apps--list">
            <el-row :gutter="20">
                <el-col :span="6" v-for="(o,i) in 4" :key="i">
                    <el-card shadow="hover" class="card">
                        <div class="item">
                            <router-link :to="`/apps/${i}/info`">
                                <div class="cover"></div>
                                <div class="info">
                                    <div class="name">天富星</div>
                                    <div class="tpl">模版：VSD</div>
                                    <div class="date">2018-04-30</div>
                                </div>
                            </router-link>
                        </div>
                        <el-button size="mini" icon="el-icon-delete" class="delete"></el-button>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
    };
</script>

<style scoped lang="less">
    .clearfix {
        &::before,
        &::after {
            display: table;
            content: "";
        }
        &::after {
            clear: both;
        }
    }
    .apps--header {
        position: relative;
        button {
            position: absolute;
            top: 15px;
        }
    }
    .apps--list {
        .card {
            position: relative
        }
        .item {
            position: relative;
            display: block;
            .cover {
                background: #555;
                width: 80px;
                height: 80px;
                border-radius: 10px;
            }
            .info {
                position: absolute;
                box-sizing: border-box;
                left: 100px;
                top: 0; // right: 14px;
                // bottom: 14px;
                line-height: 26px;
                color: #363539;
                .name {
                    font-size: 16px;
                }
                .tpl {
                    font-size: 14px;
                }
                .date {
                    font-size: 14px;
                    color: #6F7376;
                }
            }
        }
        .delete {
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
</style>