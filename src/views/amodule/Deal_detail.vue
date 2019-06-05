<template>
  <div class="container">
    <div class="el-icon-back"></div>
    <el-form ref="form" :model="form" label-width="80px" class="my-form">
      <div class="left">累计收益积分：568555.02</div>
      <div class="right">
        <div class="start">起始日期</div>
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
        ></el-date-picker>
        <div class="symbol">一</div>
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
          size="small"
        ></el-date-picker>
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" size="small" style="marginLeft:10px"></el-input>
        <el-dropdown>
          <el-button type="primary">
            全部交易类型
            <i class="el-icon-arrow-down el-icon--right"></i>
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
      <el-table-column prop="name" label="总积分" width="100%" align="center"></el-table-column>
      <el-table-column prop="address" label="兑换积分数" align="center"></el-table-column>
      <el-table-column prop="address" label="获得USDT数" align="center"></el-table-column>
      <el-table-column prop="address" label="兑换时间" align="center"></el-table-column>
      <el-table-column prop="address" label="剩余积分" align="center"></el-table-column>
      <el-table-column prop="address" label="兑换状态" align="center"></el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <template scope>
          <router-link :to="{path:'/dealDetail'}">
            <span style="color:#3986E2">查看详细流水</span>
          </router-link>
        </template>
      </el-table-column>
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
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
  .el-icon-back{
      font-size: 18px;
      font-weight: bold;
      color: #4C5974;
  }
  .my-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-right: 16px;
    .left {
        color: #059E7E;
    }
    .right {
      display: flex;
      align-items: center;
      .el-input {
        width: 177px;
      }
      .el-date-editor {
        width: 113px !important;
      }
      .start {
        width: 67px;
        font-size: 12px;
        text-align: center;
      }
      .symbol {
        width: 17px;
        text-align: center;
      }
      .el-button--primary {
        width: 105px;
        height: 25px;
        padding: 0;
        border-radius: 2px;
        background-color: #3986E2;
        border-color: #3986E2;
        margin-left: 10px;
        .el-icon--right {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
