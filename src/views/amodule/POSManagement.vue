<template>
  <div class="container">
    <!-- 搜索查询 -->
    <ul class="search">
      <li class="iteminput">
        <input type="text" placeholder="输入联系人/机构名称" v-model="queryName">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="queryUser"></i>
      </li>
      <li class="iteminput">
        <span>起始日期</span>
      </li>
      <li class="iteminput">
        <el-date-picker popper-class="xiala" v-model="startTime" type="date" placeholder="选择日期"></el-date-picker>
      </li>
      <li class="iteminput">
        <span class="line"></span>
      </li>
      <li class="iteminput">
        <el-date-picker popper-class="xiala" v-model="endTime" type="date" placeholder="选择日期"></el-date-picker>
      </li>
      <li class="iteminput iteminput5">
        <span class="subSearch" @click="addMerchant">添加商户</span>
      </li>
    </ul>
    <!-- 表格 -->
    <div v-if="dataShow" class="tableBox">
      <el-table
        :data="userList"
        border
        style="width: 100%"
        :header-cell-style="{background:'#12223B',color:'#606266'}"
        align="center"
      >
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="organization_name" label="代理名称" align="center"></el-table-column>
        <el-table-column prop="organization_info" label="代理简介" align="center"></el-table-column>
        <el-table-column prop="website" label="官网地址" align="center"></el-table-column>
        <el-table-column prop="contacts" label="联系人" align="center"></el-table-column>
        <el-table-column prop="tel" label="手机号" align="center"></el-table-column>
        <el-table-column prop="wechat" label="微信号" align="center"></el-table-column>
        <el-table-column prop="third_uid" label="用户ID" align="center"></el-table-column>
        <el-table-column prop="add_time" label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="add_time" label="添加时间" align="center"></el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="pages">
        <el-pagination
          :current-page="1"
          :page-sizes="[10]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          background
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>

    <!-- 无数据 -->
    <div v-else class="nodata">
      <img src="~imgurl/noData.png" alt>
    </div>
    <!-- 弹框 -->
    <el-dialog
      title="机构详细信息"
      :visible.sync="dialogVisible"
      width="400px"
      :modal-append-to-body="false"
      center
    >
      <div class="dialogContant">
        {{text}}
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "POSManagement",
  data() {
    return {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjA0OTAwMDksInRpbWUiOiIxNTYwMjIyMTg0Mjg2MSJ9.U5plEtm0k9I2WCzRp7qT7zd8_7gJuENc2ae3dcm5WtM",
      dialogVisible: false,
      userList: [],
      inputName: "",
      startTime: "",
      endTime: "",
      queryName: "",
      dataShow: true,
      // 页码
      pageSize: 1,
      // 页数
      pageNum: 10,
      total: 0,
      text:''
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
      this.text = row.organization_name
    },
    addMerchant() {
      this.$router.push({
        path: "/a_add_management",
        query: {
          index: 5
        }
      });
      sessionStorage.setItem("addManagement", "true");
    },
    // 商户管理列表篇
    getUserList() {
      const data = {
        token: this.token,
        page: this.pageSize,
        limit: this.pageNum
      };
      this.$post("/api/auser/userList", data).then(res => {
        console.log(res);
        this.userList = res.data.data;
        this.pageSize = res.data.current_page;
        this.pageNum = res.data.per_page;
        this.total = res.data.total;
      });
    },
    // 页码改变事件
    handleCurrentChange(current) {
      console.log(current);
      this.pageSize = current;
      this.getUserList();
    },
    // 搜索商户列表
    queryUser() {
      // console.log('3333');
      let start = this.startTime;
      let end = this.endTime;
      if (this.startTime) {
        start =
          this.startTime.getFullYear() +
          "-" +
          (this.startTime.getMonth() + 1) +
          "-" +
          this.startTime.getDate();
      }
      if (this.endTime) {
        end =
          this.endTime.getFullYear() +
          "-" +
          (this.endTime.getMonth() + 1) +
          "-" +
          this.endTime.getDate();
      }
      const data = {
        token: this.token,
        page: this.pageSize,
        limit: this.pageNum,
        start: start,
        end: end,
        name: this.queryName
      };

      this.$post("/api/auser/userList", data).then(res => {
        console.log(res);
        this.userList = res.data.data;
        this.pageSize = res.data.current_page;
        this.pageNum = res.data.per_page;
        this.total = res.data.total;
      });
    }
  },
  created() {
    this.getUserList();
  }
};
</script>

<style lang="scss" scoped>
/* 样式框 */
/deep/ .el-input__inner {
  height: 32px;
  line-height: 32px;
  background-color: transparent;
  border-radius: 3px;
  color: #708193;
  font-size: 12px !important;
  border: 1px solid #555F79;
  padding: 0 30px !important;
}
/deep/ .el-input__inner::placeholder{
    color: #555F79
}

.container {
  height: 100%;
  width: 100%;
  position: relative;
  .search {
    height: 100px;
    line-height: 100px;
    display: flex;
    .iteminput {
      font-size: 12px;
      color: #555f79;
      position: relative;
      margin-right: 20px;
      input {
        color: #555f79;
        font-size: 12px;
        padding: 2px 12px;
        height: 26px;
        line-height: 26px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #555f79;
        &::placeholder {
          color: #555f79;
        }
      }
      i {
        position: absolute;
        top: 4%;
        right: -12px;
        margin-right: 20px;
        width: 15px;
        color: #555f79;
        font-weight: 600;
        font-size: 14px;
      }
      .subSearch {
        display: inline-block;
        font-size: 12px;
        color: #fff;
        background-color: #059e7e;
        border-radius: 3px;
        width: 118px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .line {
        display: inline-block;
        width: 25px;
        height: 1px;
        background-color: #555f79;
      }
    }
    .iteminput5 {
      padding-top: 2px;
    }
  }
  .dialogContant {
    font-size: 12px;
    color: #5c6680;
    background-color: #0e1b2f;
    border-radius: 17px;
    padding: 39px 31px 50px 24px;
  }
  .nodata {
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
  }
  /deep/ .el-table__empty-block {
    background: #061220;
  }
  .pages {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
}
</style>
<style>
.el-table--border,
.el-table--group {
  border: 2px solid #06476d;
}
.el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: 2px solid #06476d;
}
.is-leaf {
  border-right: none !important;
  border-bottom: 2px solid #06476d !important;
}
.el-table tr {
  background-color: #061220;
}
.el-table--border td {
  border: none;
}
.el-table .hidden-columns {
  display: none;
}
.el-table::before {
  display: none;
}
.el-table--border::after,
.el-table--group::after {
  display: none;
}
.el-table {
  color: #7380a0;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
.el-dialog {
  background-color: #12223b;
  margin-top: 30vh;
  border-radius: 6px;
}
.el-dialog__title {
  color: #fff;
}
.el-dialog__body {
  padding: 25px 25px 60px !important;
}

.el-input__icon{
  color: #555F79;
  font-weight: 600;
  font-size: 13px !important;
}
.xiala {
}
</style>
