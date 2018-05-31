<template>
    <el-main class="apps-info">
        <el-row :gutter="20">
            <el-col :span="6">
                <ul class="sidernavs-list">
                    <li>
                        <router-link class="sider-item" exact-active-class="actived" tag="a" to="/apps/1/info">
                             <svg-icon type="info" className="sider-item-icon" />
                            <span class="sider-item-label">应用配置</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sider-item" exact-active-class="actived" tag="a" to="/apps/0/info">
                             <svg-icon type="code" className="sider-item-icon" />
                            <span class="sider-item-label">仓库管理</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sider-item" exact-active-class="actived" tag="a" to="/apps/4/info">
                             <svg-icon type="build" className="sider-item-icon" />
                            <span class="sider-item-label">应用打包</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sider-item" exact-active-class="actived" tag="a" to="/apps/5/info">
                             <svg-icon type="member" className="sider-item-icon" />
                            <span class="sider-item-label">权限管理</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link class="sider-item" exact-active-class="actived" tag="a" to="/apps/6/info">
                             <svg-icon type="third" className="sider-item-icon" />
                            <span class="sider-item-label">应用插件</span>
                        </router-link>
                    </li>
                </ul>
            </el-col>
            <el-col :span="18">
                <el-form ref="form" :model="form" label-position="top">
                    <el-form-item>
                        <span slot="label">模版语言</span>
                        <el-radio-group v-model="form.tpl">
                            <el-radio-button label="1">VUEJS</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item>
                        <el-row :gutter="20">
                            <el-col :span="16">
                                <el-form-item label="应用名称">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="应用编码">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="显示名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="项目说明">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="应用启动图">
                        <el-upload class="apps-start-upload" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="Ios配置" name="first">
                                <el-form-item label="Bundle Identifier">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="Display Name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-tab-pane>
                            <el-tab-pane label="Android配置" name="second">
                                <el-form-item label="Package Name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="Display Name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-tab-pane>
                        </el-tabs>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </el-main>
</template>

<script>
    export default {
        name: 'apps-create',
        data() {
            return {
                activeName: 'first',
                form: {
                    app: '',
                    name: '',
                    desc: '',
                    tpl: '1'
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
                // this.$emit('on-dialog-apps-click', false);
                this.$router.push({
                    path: '/apps'
                });
            },
            onCancel() {
                // this.$emit('on-dialog-apps-click', false);
            }
        }
    };
</script>

<style scoped lang="less">
    .apps-info {
        ul.sidernavs-list {
            list-style: none;
            padding: 0;
            margin-top: 0;
            margin-bottom: 0;
            li {
                display: list-item; // padding-left: 60px;
                // font-size: 14px;
                // height: 40px;
                // line-height: 40px;
                &>a {
                    display: block;
                    &.actived {
                        color: #2f3033;
                        border-left-color: #008afe;
                        background-color: #e1edfa;
                    }
                }
                .sider-item {
                    height: 45px;
                    padding: 0 27px;
                    margin: 0 0 5px;
                    line-height: 45px;
                    color: #8d9199;
                    border-left: 3px solid transparent;
                    border-right: 3px solid transparent;
                    font-size: 14px;
                    white-space: nowrap;
                    .sider-item-icon {
                        width: 30px;
                        height: 30px;
                        margin-right: 15px;
                        vertical-align: middle;
                    }
                    .sider-item-label {
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>