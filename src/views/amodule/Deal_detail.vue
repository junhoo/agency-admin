<template>
  <div class="container">
    <router-link :to="{path:'/a_deal_data'}">
      <div class="el-icon-back"></div>
    </router-link>

    <el-form ref="form" :model="form" label-width="80px" class="my-form">
      <div class="left">累计收益积分：568555.02</div>
      <div class="right">
        <div class="start" @click="getInfo">起始日期</div>
        <el-date-picker
          class="my-btn"
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
        <div class="symbol">一</div>
        <el-date-picker
          class="my-btn"
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
          value-format="yyyy-MM-dd"
          @change="handleDatePick"
        ></el-date-picker>
        <el-input
          placeholder="输入用户ID"
          prefix-icon="el-icon-search"
          v-model="input2"
          size="small"
          style="marginLeft:10px"
          class="my-btn"
        ></el-input>
        <el-dropdown>
          <el-button type="primary" size="small">
            全部交易类型
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in dropdownList" :key="index">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="search-box" @click="seek">搜索</div>
      </div>
    </el-form>

    <!-- 表格 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :header-cell-style="{background:'#12223B',color:'#606266'}"
      align="center"
    >
      <el-table-column prop="order_no" label="订单号" align="center"></el-table-column>
      <el-table-column prop="organization_name" label="项目方名称" width="100%" align="center"></el-table-column>
      <el-table-column prop="id" label="项目方id" align="center"></el-table-column>
      <el-table-column prop="uid" label="用户id" width="100%" align="center"></el-table-column>
      <el-table-column prop="user_name" label="用户名" align="center"></el-table-column>
      <el-table-column prop="order_type" label="交易类型" align="center"></el-table-column>
      <el-table-column prop="bonus_amount" label="交易金额" align="center"></el-table-column>
      <el-table-column prop="add_time" label="添加时间" align="center"></el-table-column>
      <el-table-column prop="order_amount" label="代理提成" align="center"></el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="paging">
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          layout="prev, pager, next"
          :pager-count="5"
          :total="totalPage"
          @current-change="currentPage"
          style="background: transparent;">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  nama: "deal",
  data() {
    return {
      dropdownList: ["黄金糕", "狮子头", "螺蛳粉", "双皮奶", "蚵仔煎"],
      input2: "",
      form: {
        date1: "",
        date2: ""
      },
      page: 0,
      totalPage: 0,
      tableData: [],
      reqParam: {}
    }
  },
  mounted () {
    this.reqParam = this.$route.query
    this.getInfo()
  },
  methods: {
    currentPage (index) {
      this.page = index
      this.getInfo()
    },
    handleDatePick () {
      this.getInfo()
    },
    seek () {
      if (this.input2 !== '') {
        this.getInfo()
      }
    },
    getInfo () {
      var param = {
        id: (this.reqParam.id).toString(),
        user_id: (this.reqParam.userId).toString(),
        name: this.input2,
        page: this.page,
        // order_type: 1,
        limit: 10,
        start: this.form.date1,
        end: this.form.date2,
        token: localStorage.getItem('token')
      }
      const url = 'http://agency.service.168mi.cn' + '/api/aorder/tradingDetail'
      this.$post(url, param)
        .then(res => {
          var _res = res.data
          this.tableData = _res.data
          this.totalPage = _res.total
          this.input2 = ''
        })
    }
  }
};
</script>

<style lang="scss" scoped>
/** 基础页数 */
/deep/ .el-pagination button:disabled {
  background-color: transparent;
}
/deep/ .el-pager li {
  color: #C0C4CC;
  background-color: transparent;
}
/deep/ .el-pager li.active {
  color: #409EFF;
}
/deep/ .el-pagination .btn-next {
  color: #C0C4CC;
  background-color: transparent;
}
/deep/ .el-pagination .btn-prev {
  color: #C0C4CC;
  background-color: transparent;
}

/deep/ .el-input--small .el-input__inner {
  background: transparent;
  border-radius: 3px;
  padding-right: 0;
  border: 1px solid #555F79;
}

.container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* 默认列表背景样式 */
  /deep/ .el-table__empty-block {
    background: #061220;
  }
    /* 日期选择框 */
  /deep/ .my-btn, .start {
    .el-input__inner {
      height: 32px;
      line-height: 32px;
      background-color: transparent;
      border-radius: 3px;
      color: #555f79 !important;
      font-size: 12px !important;
      border: 1px solid #555F79;
      padding-left: 30px !important;
      padding-right: 0 !important;
      &::placeholder{
        color: #555f79 !important;
      }
    }
  }
  .el-icon-back {
    font-size: 18px;
    font-weight: bold;
    color: #4c5974;
  }
  .my-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-right: 16px;
    .left {
      color: #059e7e;
    }
    .right {
      display: flex;
      align-items: center;
      .el-input {
        width: 177px;
      }
      .el-date-editor {
        width: 150px !important;
      }
      .start {
        width: 67px;
        font-size: 12px;
        text-align: center;
        color: #555f79;
      }
      .symbol {
        width: 17px;
        text-align: center;
      }
      .el-button--primary {
        width: 105px;
        height: 25px;
        padding: 0;
        background-color: #3986e2;
        border-color: #3986e2;
        margin-left: 10px;
        .el-icon--right {
          margin-left: 0;
        }
      }
    }
    .search-box {
      width: 60px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      text-align: center;
      color: #fff;
      background-color: #3986e2;
      border-color: #3986e2;
      margin-left: 10px;
      border-radius: 2px;
    }
  }
  .paging {
    display: flex;
    align-items: center;
    margin-top: 30px;
    flex-direction: row-reverse;
  }
}
</style>
