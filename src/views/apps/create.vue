<template>
    <el-main class="apps-create">
        <el-row :gutter="20">
            <el-col :span="6">
                <p>创建项目</p>
                <p>欢迎使用天富星-移动端快速构建平台。</p>
            </el-col>
            <el-col :span="18">
                <el-form ref="form" :model="form" label-position="top">
                    <el-form-item>
                        <span slot="label">选择一个模版语言</span>
                        <el-radio-group v-model="form.tpl">
                            <el-radio-button label="1">VUEJS</el-radio-button>
                            <el-radio-button label="2" disabled>REACT</el-radio-button>
                            <el-radio-button label="3" disabled>WEB</el-radio-button>
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
                                 <el-form-item label="显示名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="项目说明">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button @click="onCancel">取消</el-button>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 0px;">
                        <span style="color: #f56c6c;">你当前还能够免费创建 2 个应用</span>
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
    .apps--craete {
    }
</style>