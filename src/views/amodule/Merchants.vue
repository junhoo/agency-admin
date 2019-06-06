<template>
  <div class="merchants-body">
    <header class="container">
      <div class="content">
        <p class="money">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <p class="money green">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <p class="money purple">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <div class="money light-blue">
          1862,325
          <div class="percent">
            <!-- 30% -->
            <p class="text">30%</p>
          </div>
        </div>
        <p class="name">用户数量</p>
      </div>
    </header>

    <!-- 顶部图 -->
    <section class="chart-top">
      <div class="title-box">
        <div class="icon"></div>
        <div class="text">代理收益趋势</div>

        <div class="date-box">
          <div class="hint">起始日期</div>
          <div class="time-icon"></div>

          <el-form ref="topForm" label-width="20px" class="my-form">
            <el-date-picker
              type="date"
              placeholder="2018-05"
              v-model="topForm.date1"
              size="small"
              :editable="false"
            ></el-date-picker>
          </el-form>

          <p class="black">—</p>

          <div class="time-icon"></div>
          <el-form ref="topForm" label-width="20px" class="my-form" style="margin-right: 10px;">
            <el-date-picker
              type="date"
              placeholder="2019-06"
              v-model="topForm.date2"
              size="small"
              :editable="false"
            ></el-date-picker>
          </el-form>
        </div>
      </div>

      <!-- 波浪图 -->
      <top-chart :list="topForm.toplist"></top-chart>
    </section>

    <!-- 中部图-->
    <section class="chart-box chart-mid">
      <!-- 中左 -->
      <div class="content left">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">项目方充值提现额排行</div>

          <div class="date-box">
            <div class="hint">日期</div>
            <div class="time-icon"></div>
            <el-form ref="midForm" label-width="20px" class="my-form" style="margin-right: 10px;">
              <el-date-picker
                type="date"
                placeholder="2019-06"
                v-model="midForm.date1"
                size="small"
                :editable="false"
              ></el-date-picker>
            </el-form>
          </div>
        </div>

        <!-- 柱状图 -->
        <common-mid :objs="midForm.list"></common-mid>
      </div>

      <!-- 中右 -->
      <div class="content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">充值提现趋势</div>
          <div class="time-icon"></div>

          <div class="date-box">
            <div class="hint">日期</div>
            <div class="time-icon"></div>
            <el-form ref="midForm" label-width="20px" class="my-form" style="margin-right: 10px;">
              <el-date-picker
                type="date"
                placeholder="2019-06"
                v-model="midForm.date2"
                size="small"
                :editable="false"
              ></el-date-picker>
            </el-form>
          </div>
        </div>

        <common-right :objs="midForm.list"></common-right>
      </div>
    </section>

    <!-- 底部表格 -->
    <section class="chart-box chart-bottom">
      <!-- 下左 -->
      <div class="content left">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">收益贡献明细</div>

          <div class="date-box">
            <div class="hint">日期</div>
            <div class="time-icon"></div>

            <el-form
              ref="bottForm"
              :model="bottForm"
              label-width="20px"
              class="my-form"
              style="margin-right: 10px;"
            >
              <el-date-picker
                type="date"
                placeholder="2019-06"
                v-model="bottForm.date1"
                size="small"
                :editable="false"
              ></el-date-picker>
            </el-form>
          </div>
        </div>

        <el-table
          :data="bottForm.tableData1"
          border
          height="250"
          style="width: 100%"
          :header-cell-style="{background:'#061220',color:'#fff'}"
          align="center"
        >
          <el-table-column prop="date" label="排行" width="100%" align="center"></el-table-column>
          <el-table-column prop="name" label="项目方名称" width="100%" align="center"></el-table-column>
          <el-table-column prop="address" label="充值总金额" align="center"></el-table-column>
          <el-table-column prop="address" label="体现总金额" align="center"></el-table-column>
          <el-table-column prop="address" label="贡献利润" align="center"></el-table-column>
        </el-table>
      </div>

      <!-- 下右 -->
      <div class="content right">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">充值提现笔数</div>

          <div class="date-box">
            <div class="hint">日期</div>
            <div class="time-icon"></div>
            <el-form ref="bottForm" label-width="20px" class="my-form" style="margin-right: 10px;">
              <el-date-picker
                type="date"
                placeholder="2019-06"
                v-model="bottForm.data2"
                size="small"
                :editable="false"
              ></el-date-picker>
            </el-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopChart from "components/Apexchart";
import CommonMid from "components/midchart";
import CommonRight from "components/RightChart";
export default {
  name: "merchants",
  components: {
    TopChart,
    CommonMid,
    CommonRight
  },
  mounted() {
    // 顶部数据
    this.topForm.toplist = [100, 100, 80, 80, 50, 50, 70, 91];
    // 中部数据
    this.midForm.list.midList1 = [20, 40, 80, 80, 50, 50, 70, 91];
    this.midForm.list.midList2 = [50, 60, 80, 80, 50, 50, 70, 91];
    // 底部数据
    this.bottForm.tableData1 = this.tableData;
  },
  data() {
    return {
      // 顶部
      topForm: {
        date1: "",
        date2: "",
        toplist: []
      },
      // 中部
      midForm: {
        data1: [],
        data2: [],
        list: {
          midList1: [],
          midList2: []
        }
      },
      // 底部表格
      bottForm: {
        data1: [],
        data2: [],
        tableData1: [],
        tableData2: []
      },
      // 顶部图数据
      topseries: [],
      topchartOptions: {},

      // 中间图数据
      midseries: [],
      midchartOptions: {},

      topchartData: {
        columns: ["日期", "下单用户"],
        rows: [
          { 日期: "1000", 下单用户: 1093 },
          { 日期: "2000", 下单用户: 3230 },
          { 日期: "5000", 下单用户: 2623 },
          { 日期: "6000", 下单用户: 1423 },
          { 日期: "8000", 下单用户: 3492 },
          { 日期: "9000", 下单用户: 4293 }
        ]
      },
      tableData: [
        {
          date: "1",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "2",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "3",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "4",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "5",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "6",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "7",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "8",
          name: "ASDAS",
          address: "3242342"
        },
        {
          date: "9",
          name: "ASDAS",
          address: "3242342"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.merchants-body {
  width: 100%;
  height: 100%;
}

/deep/ .apexcharts-legend {
  // position: absolute !important;
  // top: -300px !important;
  // position: fixed !important;
  // top: 0 !important;
}

/deep/ .el-table--border,
.el-table--group {
  border: 0;
}

/deep/ .is-leaf {
  border-right: none !important;
  border-bottom: 1.2px solid transparent !important;
  padding-top: 32px;
}

/deep/ .el-table__body-wrapper {
  background-color: #061220 !important;
}

/deep/ .el-table--enable-row-transition .el-table__body td {
  padding: 0;
}

/deep/ .el-table td,
.el-table th.is-leaf {
  padding-top: 32px;
}

/deep/ .el-date-editor.el-input {
  padding-left: 5px;
  width: 72px;
}

/deep/ .my-form {
  margin-top: -2px;
}

/deep/ .el-input__inner {
  padding: 0 !important;
  background: url("~imgurl/pulldown_icon.png") no-repeat center right;
  background-size: 16px;
  height: 40px;
  line-height: 40px;
}

/deep/ .el-input__inner::placeholder {
  color: #3884e0 !important;
  font-size: 15px;
}

/deep/ .el-input__prefix {
  display: none;
}

/deep/ .el-table th.gutter {
  background: #061220;
}

.container {
  box-sizing: border-box;
  display: flex;
  .content {
    position: relative;
    height: 60px;
    width: 22%;
    border-right: 1.2px solid #051e33;
    text-align: center;
    &:last-child {
      border: 0;
    }
    .money {
      position: relative;
      height: 42px;
      line-height: 42px;
      font-size: 21px;
      color: #fff;
      .percent {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 8px;
        background: url("~imgurl/go_up.png") no-repeat left top 46%;
        background-size: 15px;
        .text {
          padding-left: 15px;
          color: #37ec6b;
        }
      }
    }
    .name {
      font-size: 12px;
      color: #7380a0;
      margin-bottom: 6px;
    }
    .green {
      color: #37ec6b;
    }
    .purple {
      color: #8c51f5;
    }
    .light-blue {
      color: #3bccc9;
    }
  }
}

// 顶部表格布局
.chart-top {
  margin-top: 40px;
  border: 1.2px solid #06476d;
  .title-box {
    color: #fff;
    text-align: left;
    height: 40px;
    line-height: 40px;
    .icon {
      float: left;
      width: 36px;
      height: 40px;
      background: url("~imgurl/table_icon.png") no-repeat center;
      background-size: 15px;
    }
    .text {
      float: left;
    }
    .date-box {
      display: flex;
      float: right;
      .start {
        margin-left: 10px;
      }
      .end {
        margin-right: 10px;
      }
      .time-icon {
        width: 15px;
        background: url("~imgurl/time.png") no-repeat center;
        background-size: 15px;
      }
      .hint {
        font-size: 15px;
        margin-right: 10px;
        color: #3884e0;
      }
      .content {
        display: flex;
        .time-box {
          padding-left: 5px;
          padding-right: 16px;
          background: url("~imgurl/pulldown_icon.png") no-repeat center right;
          background-size: 16px;
        }
      }
      .black {
        margin: 0 5px;
        color: #3884e0;
      }
    }
  }
}

// 表格公共布局
.chart-box {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  .content {
    width: 48.5%;
    // height: 221px;
    border: 1.2px #06476d solid;
    .title-box {
      color: #fff;
      text-align: left;
      height: 40px;
      line-height: 40px;
      border-bottom: 1.2px #06476d solid;
      .icon {
        float: left;
        width: 36px;
        height: 40px;
        background: url("~imgurl/table_icon.png") no-repeat center;
        background-size: 15px;
      }
      .text {
        float: left;
      }
      .date-box {
        float: right;
        display: flex;
        .time-icon {
          width: 15px;
          background: url("~imgurl/time.png") no-repeat center;
          background-size: 15px;
        }
        .hint {
          font-size: 15px;
          margin-right: 5px;
          color: #3884e0;
        }
      }
      .date {
        color: #3884e0;
        float: right;
      }
    }
  }
}

.chart-bottom {
  margin-top: 27px;
  .left {
  }
}
</style>
