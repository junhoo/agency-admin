<template>
  <div class="container">
    <router-link :to="{path:'/b_deal'}">
      <div class="el-icon-back"></div>
    </router-link>

    <el-form ref="form" :model="form" label-width="80px" class="my-form">
      <div class="right">
        <div class="start">起始日期</div>
        <el-date-picker
          class="my-btn"
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
        ></el-date-picker>
        <div class="symbol">一</div>
        <el-date-picker
          class="my-btn"
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
        ></el-date-picker>
        <el-dropdown class="first">
          <el-button type="primary" size="small">
            全部类型
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in dropdownList" :key="index">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown>
          <el-button type="primary" size="small">
            交易金额
            <i class="el-icon-d-caret el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item,index) in dropdownList" :key="index">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
      <el-table-column prop="date" label="订单号" width="100%" align="center"></el-table-column>
      <el-table-column prop="name" label="交易员UID" width="100%" align="center"></el-table-column>
      <el-table-column prop="address" label="姓名" align="center"></el-table-column>
      <el-table-column prop="address" label="用户ID" align="center"></el-table-column>
      <el-table-column prop="address" label="类型" align="center">
        <template>
          <span style="color:red">买入</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="交易金额" align="center"></el-table-column>
      <el-table-column prop="address" label="代理提成" align="center"></el-table-column>
      <el-table-column prop="address" label="交易总金额" align="center"></el-table-column>
      <el-table-column prop="address" label="代理提成" align="center"></el-table-column>
    </el-table>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普"
        }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 16px 0 0 0;
  box-sizing: border-box;
  .el-icon-back {
    font-size: 18px;
    color: #4c5974;
    font-weight: bold;
    margin-bottom: 11px;
  }
  .my-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-right: 16px;
    .right {
      display: flex;
      align-items: center;
      .el-input {
        width: 223px;
      }
      .el-date-editor {
        width: 113px !important;
      }
      .start {
        width: 67px;
        font-size: 12px;
        text-align: left;
        color: #555f79;
      }
      .symbol {
        width: 17px;
        text-align: center;
      }
      .el-button--primary {
        width: 77px;
        height: 25px;
        padding: 0;
        border-radius: 2px;
        background-color: #059e7e;
        border-color: #059e7e;
        margin-left: 10px;
        .el-icon--right {
          margin-left: 0;
        }
      }
      .first {
        .el-button--primary {
          background-color: #3986e2;
          border-color: #3986e2;
        }
      }
    }
  }
}
</style>
