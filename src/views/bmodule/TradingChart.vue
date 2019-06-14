<template>
  <div class="merchants-body">
    <header class="container">
      <div class="content">
        <p class="money">{{profitData.purchase_amount}}</p>
        <p class="name">本周买入金额</p>
      </div>
      <div class="content">
        <p class="money green">{{profitData.purchase_num}}</p>
        <p class="name">本周买入单数</p>
      </div>
      <div class="content">
        <p class="money purple">{{profitData.seller_amount}}</p>
        <p class="name">本周卖出金额</p>
      </div>
      <div class="content">
        <div class="money light-blue">
          {{profitData.seller_num}}
          <div class="percent">
            <!-- 30% -->
            <p class="text">30%</p>
          </div>
        </div>
        <p class="name">本周卖出单数</p>
      </div>
    </header>

    <!-- 时间控件 -->
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
              v-model="formInfo.date1"
              size="small"
              :editable="false"
              value-format="yyyy-MM"
              format="yyyy-MM"
            ></el-date-picker>
          </el-form>

          <p class="black">—</p>

          <div class="time-icon"></div>
          <el-form ref="topForm" label-width="20px" class="my-form" style="margin-right: 10px;">
            <el-date-picker
              type="date"
              placeholder="2019-06"
              v-model="formInfo.date2"
              size="small"
              :editable="false"
              value-format="yyyy-MM"
              format="yyyy-MM"
            ></el-date-picker>
          </el-form>
        </div>
      </div>

      <!-- 图形 -->
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
    </section>

  </div>
</template>

<script>
export default {
  name: "BTradingChart",
  mounted() {
    // 顶部数据
    this.formInfo.toplist = [100, 100, 80, 80, 50, 50, 70, 91];
    this.series[0].data = [20, 40, 80, 80, 50, 50, 70, 91];
    this.series[1].data = [50, 60, 80, 80, 50, 50, 70, 91];
  },
  data() {
    return {
      profitData: {},
      formInfo: {
        date1: "",
        date2: "",
        toplist: []
      },
      series: [
        {
          name: '买入金额',
          data: []
        }, {
          name: '卖出金额',
          data: []
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '22%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      }
    };
  },
  created() {
    this.getProfitData()
  },
  methods: {
    getProfitData () {
      var data = {
        token: localStorage.getItem("token")
      }
      console.log(data)
      this.$post('/api/bwallet/getStatics', data).then(res => {
        var data = res.data
        console.log(res)
        this.profitData = data
      })
    }
  },
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
  border: none;
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
