<template>
<el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
</template>

<script>
export default {
  name: "ru-address-from",
    data(){
        return {
            form:{
                name:'',
                region:'',
            }
        }
    }
};
</script>

<style >
</style>