<template>
    <el-container >
        <div class="container--header">
        <h1>
            <router-link to="/">
                <svg-icon type="skye-logo" className="skye-logo" />
            </router-link>
        </h1>
        <ul class="nav" v-show="!isLoginPage">
            <!-- <li class="nav-item nav-algolia-search" v-show="isComponentPage">
                                                                                    <algolia-search></algolia-search>
                                                                                </li> -->
            <li class="nav-item">
                <router-link active-class="active" :to="`/apps`">我的应用</router-link>
            </li>
            <li class="nav-item">
                <router-link active-class="active" :to="`/notification`">通知</router-link>
            </li>
            <!-- gap -->
            <li class="nav-item">
                <div class="nav-gap"></div>
            </li>
            <!-- 用户信息 -->
            <li class="nav-item nav-user">
                <el-dropdown trigger="click" class="nav-dropdown" :class="{ 'is-active': userDropdownVisible }" @command="handleCommand">
                    <span>我的工作台 <i class="el-icon-arrow-down el-icon--right"></i> </span>
                    <el-dropdown-menu slot="dropdown" class="nav-dropdown-list" @input="handleUserDropdownToggle">
                        <!-- <el-dropdown-item v-for="item in 5" :key="item" @click.native="switchVersion(item)"> -->
                        <el-dropdown-item command="/">基本信息</el-dropdown-item>
                        <el-dropdown-item disabled>密钥管理</el-dropdown-item>
                        <el-dropdown-item disabled>安全设置</el-dropdown-item>
                        <el-dropdown-item divided command="/apps/create"><i class="el-icon-plus"></i> 添加新应用</el-dropdown-item>
                        <el-dropdown-item divided command="/login">退出工作台</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </li>
            <!-- 语言选择器 -->
            <!-- <li class="nav-item lang-item">
                    <el-dropdown trigger="click" class="nav-dropdown nav-lang" :class="{ 'is-active': langDropdownVisible }">
                        <span>中文<i class="el-icon-arrow-down el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown" class="nav-dropdown-list" @input="handleLangDropdownToggle">
                            <el-dropdown-item v-for="(value, key) in 3" :key="key">
                                {{ value }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li> -->
        </ul>
        <!-- <el-menu mode="horizontal" class="nav work">
                                <li class="nav-item">
                                    <div class="nav-gap"></div>
                                </li>
                                <el-menu-item index="work" v-popover:popoverWork>
                                    <span slot="title">我的工作台</span>
                                </el-menu-item>
                            </el-menu> -->
        <!-- <el-menu mode="horizontal" :router="true">
                                <el-menu-item index="/apps">
                                    <span slot="title">我的应用</span>
                                </el-menu-item>
                                <el-menu-item index="/notification">
                                    <span slot="title">通知</span>
                                </el-menu-item>
                            </el-menu>
                            <el-popover ref="popoverWork" placement="bottom" width="300" trigger="click">
                                <el-container>
                                    <el-header>用户头像，用户昵称，用户帐号
                                    </el-header>
                                    <el-main>基本资料，密钥管理，安全设置
                                    </el-main>
                                    <el-footer>
                                        <router-link to="login">退出工作台</router-link>
                                    </el-footer>
                                </el-container>
                            </el-popover> -->
                            </div>
    </el-container>
</template>

<script>
    export default {
        name: 'main-header',
        data() {
            return {
                userDropdownVisible: true,
                langDropdownVisible: true,
            }
        },
        methods: {
            handleUserDropdownToggle(visible) {
                this.userDropdownVisible = visible;
            },
            handleLangDropdownToggle(visible) {
                this.langDropdownVisible = visible;
            },
            handleCommand(command) {
                this.$message('click on item ' + command);
                this.$router.push({
                    path: command
                });
            }
        },
        computed: {
            isLoginPage() {
                console.log(this.$route.name);
                return /^Login/.test(this.$route.name);
            }
        }
    };
</script>

<style scoped lang="less">
    @height: 60px;
    .container--header {
        padding:  0 20px 20px;
        height: @height;
        width: 100%;
        box-sizing: border-box;
        background-color: #f5f7fa;
        border-bottom: 1px solid #e6e9f0;
        h1 {
            margin: 0;
            float: left;
        }
        .skye-logo {
            height: @height;
            width: 120px;
        }
        .nav {
            float: right;
            height: 100%;
            line-height: @height;
            background: transparent; // @utils-clearfix;
            padding: 0;
            margin: 0;
        }
        .nav-gap {
            position: relative;
            width: 1px;
            height: @height;
            padding: 0 20px;
            &::before {
                content: '';
                position: absolute;
                top: calc(50% - 8px);
                width: 1px;
                height: 16px;
                background: #ebebeb;
            }
        } // .nav-logo,
        // .nav-logo-small {
        //     vertical-align: sub;
        // }
        // .nav-logo-small {
        //     display: none;
        // }
        .nav-item {
            margin: 0;
            float: left;
            list-style: none;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            &.nav-algolia-search {
                cursor: default;
            }
            &.lang-item,
            &:last-child {
                cursor: default; // margin-left: 34px;
                span {
                    opacity: .8;
                }
                .nav-lang {
                    cursor: pointer;
                    display: inline-block;
                    height: 100%;
                    color: #888;
                    &:hover {
                        color: #409EFF;
                    }
                    &.active {
                        font-weight: bold;
                        color: #409EFF;
                    }
                }
            }
            a {
                text-decoration: none;
                color: #888;
                display: block;
                padding: 0 22px;
                &.active,
                &:hover {
                    color: #333;
                }
                &.active::after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    bottom: 0;
                    left: calc(50% - 7px);
                    width: 14px;
                    height: 4px;
                    background: #409EFF;
                }
            }
        }
        .nav-dropdown {
            margin-bottom: 6px;
            padding-left: 18px;
            width: 100%;
            span {
                display: block;
                width: 100%;
                font-size: 14px;
                color: #888;
                line-height: 40px;
                transition: .2s;
                padding-bottom: 6px;
                user-select: none;
                &:hover {
                    cursor: pointer;
                }
            }
            i {
                transition: .2s;
                font-size: 12px;
                color: #979797;
                transform: translateY(-2px);
            }
            &.is-active {
                span,
                i {
                    color: #409EFF;
                }
                i {
                    transform: rotateZ(180deg) translateY(3px);
                }
            }
            &:hover {
                span,
                i {
                    color: #409EFF;
                }
            }
        } // .el-menu {
        //     float: right;
        //     height: 100%;
        //     background: transparent;
        //     padding: 0;
        //     margin: 0;
        //     border-right: 0;
        // }
        // .el-menu--horizontal {
        //     border-bottom: 0;
        //     &>.el-menu-item {
        //         border-bottom: 0;
        //         &.is-active {
        //             color: #409eff;
        //             border-bottom: 0;
        //             &::after {
        //                 content: "";
        //                 display: inline-block;
        //                 position: absolute;
        //                 bottom: 0;
        //                 left: calc(50% - 7px);
        //                 width: 14px;
        //                 height: 4px;
        //                 background: #409eff;
        //             }
        //         }
        //     }
        // }
        // .el-menu-item:focus,
        // .el-menu-item:hover {
        //     background-color: transparent;
        // }
        // .work {
        //     &.el-menu--horizontal {
        //         &>.el-menu-item {
        //             &.is-active {
        //                 color: #909399;
        //                 &::after {
        //                     display: none;
        //                 }
        //             }
        //         }
        //     }
        // }
    }
</style>