<template>
    <div style="padding:10px">
        <div class="container-block">
            <h4>联系人管理</h4>
            <div class="tools-head">
                <el-button size="mini" type="primary" icon="el-icon-plus">添加联系人</el-button>
                <el-button size="mini" plain disabled>删除联系人</el-button>
                <div class="pull-right">
                    <el-button size="mini" type="primary" icon="el-icon-refresh" @click="loading=!loading"></el-button>
                    <el-input placeholder="请输入联系人进行搜索" v-model="input1" size="mini" style="width:350px;">
                        <el-select v-model="selsect1" slot="prepend">
                            <el-option label="会员账户" value="1"></el-option>
                            <el-option label="订单编号" value="2"></el-option>
                            <el-option label="电话号码" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <div class="data-body">
                <el-table :border="true" v-loading="loading" header-cell-class-name="table-header-column" :data="tableData" style="width: 100%">
                    <el-table-column type="selection" width="35">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="120" sortable>
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                    <el-table-column prop="id" label="状态" width="100">
                        <template slot-scope="scope">
                  <!-- <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                  </el-button> -->
                  <div style="color:#5FB333;">
                  <i class="el-icon-circle-check"></i>
                   <span> 已审核</span></div>
</template>
            </el-table-column>
            <el-table-column
              prop="id"
              label="操作"
              width="120">
<template slot-scope="scope">
    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
        <i class="el-icon-edit-outline"></i> 编辑
    </el-button>
    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
        <i class="el-icon-news"></i> 审核
    </el-button>
</template>
            </el-table-column>
          </el-table>
        </div>
        <div class="data-footer">
         <div class="data-footer-pagination">
           <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
         </div>
          </div>
      </div>
      <el-dialog title="联系人管理" :visible.sync="visible">
          <ru-address-from></ru-address-from>
          <div slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="visible = false">确 定</el-button>
        </div>
      </el-dialog>
      
    </div>
</template>

<script>
import RuAddressFrom from "./from.vue";
export default {
//   name: "ru-address",
  data() {
    return {
      loading: false,
      input1: "",
      selsect1: "1",
      tableData: [],
      visible: false
    };
  },
  components: {
    RuAddressFrom
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      this.tableData.push({
        id: i + 1,
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      });
    }
    // this.handleTip();
  },
  methods: {
    deleteRow(index, rows) {
      // rows.splice(index, 1);
      console.log(index);
      console.log(rows);
      this.visible = true;
    }
  }
};
</script>

<style lang="less">
.tools-head {
  position: relative;
  margin-bottom: 10px;
  .el-select {
    width: 100px;
  }
  .pull-right {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.data-body {
  margin-bottom: 10px;
  .table {
    &-header {
      &-column {
        background-color: #fafafa;
      }
    }
  }
  .el-table {
    & th,
    & td {
      padding: 8px 0;
    }
    & th {
      border-bottom: 0px;
    }
    &--border,
    &--group {
      border: 0px;
      border-bottom: 1px solid #ebeef5;
    }
    &--border {
      & th,
      & td {
        border-right: 1px solid #fff;
      }
    }
    &::before,
    &::after {
      background-color: #fff;
    }
  }
}
.data-footer {
  text-align: right;
  &-pagination {
  }
}
</style>