<template>
  <div class="container">
    <!-- 搜索查询 -->
    <ul class="search">
      <li class="iteminput">
        <input
          type="text"
          placeholder="输入手机号码/机构名称"
          v-model="queryName"
        >
        <i
          slot="suffix"
          class="el-input__icon el-icon-search"
        ></i>
      </li>
      <li class="iteminput">
        <span class="date-span">起始日期</span>
      </li>
      <li class="iteminput">
        <el-date-picker
          popper-class="xiala"
          v-model="startTime"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </li>
      <li class="iteminput">
        <span class="line"></span>
      </li>
      <li class="iteminput">
        <el-date-picker
          popper-class="xiala"
          v-model="endTime"
          type="date"
          placeholder="选择日期"
        ></el-date-picker>
      </li>
      <li class="iteminput">
        <el-dropdown>
          <el-button
            type="primary"
            size="small"
          >
            所有状态
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item,index) in dropdownList"
              :key="index"
            >{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li class="iteminput iteminput5">
        <span
          class="search-box"
          @click="queryUser"
        >搜索</span>
      </li>

    </ul>
    <!-- 表格 -->
    <div
      v-if="dataShow"
      class="tableBox"
    >
      <el-table
        :data="userList"
        border
        style="width: 100%"
        :header-cell-style="{background:'#12223B',color:'#606266'}"
        align="center"
      >
        <el-table-column
          prop="contacts"
          label="联系人"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="tel"
          label="联系电话"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="wechat"
          label="微信账号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="organization_name"
          label="机构名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="website"
          label="官网链接"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="organization_info"
          label="机构信息"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="add_time"
          label="填表时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="add_time"
          label="操作"
          width="150"
          align="center"
        >
          <div class="radio-box">
            <el-radio
              v-model="radio"
              label="1"
              @change="handleRadio"
            >未沟通</el-radio>
            <el-radio
              v-model="radio"
              label="2"
              @change="handleRadio"
            >已沟通</el-radio>
          </div>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="paging">
        <div class="block">
          <span class="demonstration"></span>
          <el-pagination
            layout="prev, pager, next"
            :pager-count="5"
            :total="total"
            @current-change="handleCurrentChange"
            style="background: transparent;"
          >
          </el-pagination>
        </div>
      </div>
    </div>

    <!-- 无数据 -->
    <div
      v-else
      class="nodata"
    >
      <img
        src="~imgurl/noData.png"
        alt
      >
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
  data () {
    return {
      dropdownList: ['炸酱面', '烤面筋'],
      radio: '1',
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
      pageNum: 3,
      total: 0,
      text: ''
    };
  },
  methods: {
    handleClick (row) {
      this.dialogVisible = true;
      this.text = row.organization_name
    },
    addMerchant () {
      this.$router.push({
        path: "/a_add_management",
        query: {
          index: 5
        }
      });
      sessionStorage.setItem("addManagement", "true");
    },

    // 默认信息
    getUserList () {
      const data = {
        token: localStorage.getItem('token'),
        page: this.pageSize,
        limit: this.pageNum
      };
      this.$post("/api/auser/receiveInfo", data).then(res => {
        console.log(res)
        var _res = res.data;
        this.userList = _res.data;
        this.total = _res.total;
      });
    },
    // 页码改变事件
    handleCurrentChange (current) {
      console.log('333');
      this.pageSize = current;
      this.getUserList();
    },
    // 搜索商户列表
    queryUser () {
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
        token: localStorage.getItem('token'),
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
    },
    handleRadio (type) {
    }
  },
  created () {
    this.getUserList()
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-button--primary {
  margin-left: 10px;
  background: #059e7e;
}

/deep/ .el-button--primary:focus, .el-button--primary:hover {
  background: #059e7e;
  border-color: #059e7e;
}

/** 单选框 */
/deep/ .el-radio {
  color: #717e9e;
  margin-right: 5px;
}
/deep/ .el-radio__inner {
  width: 12px;
  height: 12px;
  border: 1px solid #7380a0;
  background-color: #12223b;
}
/deep/ .el-radio__inner::after {
  width: 3px;
  height: 3px;
  background-color: #3986e2;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #26548f;
  background: #26548f;
}

/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #3986e2;
}

/* 输入样式框 */
/deep/ .el-dialog__body {
  padding: 0;
}
/deep/ .el-input__inner {
  height: 32px;
  line-height: 32px;
  background-color: transparent;
  border-radius: 3px;
  color: #708193;
  font-size: 12px !important;
  border: 1px solid #555f79;
  padding: 0 30px !important;
}

/deep/ .el-input__inner::placeholder {
  color: #555f79;
}

/** 时间选择框 */
/deep/ .el-date-editor.el-input {
  width: 150px;
}

/** 基础页数 */
/deep/ .el-pagination button:disabled {
  background-color: transparent;
}
/deep/ .el-pager li {
  color: #c0c4cc;
  background-color: transparent;
}
/deep/ .el-pager li.active {
  color: #409eff;
}
/deep/ .el-pagination .btn-next {
  color: #c0c4cc;
  background-color: transparent;
}
/deep/ .el-pagination .btn-prev {
  color: #c0c4cc;
  background-color: transparent;
}

.container {
  height: 100%;
  width: 100%;
  position: relative;
  .search {
    height: 60;
    line-height: 60px;
    display: flex;
    .iteminput {
      font-size: 12px;
      color: #555f79;
      position: relative;
      // margin-right: 20px;
      .date-span {
        display: inline-block;
        width: 70px;
        text-align: center;
      }
      input {
        color: #555f79;
        font-size: 12px;
        padding: 2px 12px;
        padding-right: 20px;
        height: 26px;
        line-height: 26px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #555f79;
        &::placeholder {
          color: #555f79;
        }
      }
      .el-icon-search {
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
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .search-box {
        display: inline-block;
        font-size: 12px;
        color: #fff;
        background-color: #059e7e;
        border-radius: 3px;
        width: 60px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .line {
        display: inline-block;
        width: 15px;
        height: 1px;
        margin: 0 5px;
        background-color: #555f79;
      }
    }
    .iteminput5 {
      padding-top: 2px;
      margin-left: 10px;
    }
  }
  .radio-box {
    display: flex;
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
  .paging {
    display: flex;
    align-items: center;
    margin-top: 30px;
    flex-direction: row-reverse;
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

.el-input__icon {
  color: #555f79;
  font-weight: 600;
  font-size: 13px !important;
}
.xiala {
}
</style>
