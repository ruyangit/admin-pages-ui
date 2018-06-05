<template>
  <el-row :gutter="20" class="profile">
    <el-col :span="6">
      <el-form label-position="top" class="edit-profile-avatar">
        <el-form-item label="Profile picture">
          <img class="avatar" width="200" height="200" src="/static/images/user/face.jpg">
        </el-form-item>
        <el-form-item>
          <el-button>Upload new picture</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12">
      <div class="profile-info">
        <div>基本信息</div>
        <div style="padding:25px 0 35px;">
        <div><span><i class="el-icon-menu"></i> ruyangit@gmail.com</span></div>
        <div>
          <span><i class="el-icon-tickets"></i> 个人用户</span>
          <el-tooltip class="item" effect="dark" content="企业用户使用更多权益" placement="top">
            <el-button type="text">升级</el-button>
          </el-tooltip>
          <span style="margin-left:15px;"><i class="el-icon-mobile-phone"></i> 已经绑定手机：138****000</span>
          <el-tooltip class="item" effect="dark" content="该手机号已实名绑定" placement="top">
            <el-button type="text">绑定信息</el-button>
          </el-tooltip>
        </div>
        <div>
          <span><i class="el-icon-date"></i> 注册时间：</span>
          <span>2018-06-05 12:23:00</span>
        </div>
        </div>
      </div>
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公共邮箱">
          <el-select v-model="value4" clearable placeholder="请选择">
            <el-option v-for="item in 5" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="我的站点">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">更新信息</el-button>
        </el-form-item>
        <!-- <el-form-item style="margin-bottom: 0px;">
              <span style="color: #f56c6c;">你当前还能够免费创建 2 个应用</span>
            </el-form-item> -->
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          app: "",
          name: "",
          desc: "",
          tpl: "1"
        }
      };
    },
    methods: {
      onSubmit() {
        console.log("submit!");
        // this.$emit('on-dialog-apps-click', false);
        this.$router.push({
          path: "/apps"
        });
      },
      onCancel() {
        // this.$emit('on-dialog-apps-click', false);
      }
    }
  };
</script>

<style scoped>

</style>