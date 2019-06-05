<template>
  <div class="merchants-body">
    <section class="container">
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
    </section>

    <section class="chart-top">
      <div class="title-box">
        <div class="icon"></div>
        <div class="text">代理收益趋势</div>
        <div class="date">日期</div>
      </div>
      <!-- :background-color="backgroundColor" -->

      <!-- 波浪图 -->
      <common-apexchart></common-apexchart>
    </section>

    <section class="chart-box chart-mid">
      <!-- 上左 -->
      <div class="content left">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">项目方充值提现额排行</div>
          <div class="date">日期</div>
        </div>

        <!-- 柱状图 -->
        <common-mid></common-mid>
      </div>
      <!-- 上右 -->
      <div class="content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">充值提现趋势</div>
          <div class="date">日期</div>
        </div>
      </div>
    </section>

    <section class="chart-box chart-bottom">
      <!-- 下左 -->
      <div class="content left">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">收益贡献明细</div>
          <div class="date">日期</div>
        </div>
        <el-table
          :data="tableData"
          border
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
          <div class="date">日期</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonApexchart from 'components/Apexchart'
import CommonMid from 'components/midchart'
export default {
  name: 'merchants',
  components: {
    CommonApexchart,
    CommonMid
  },
  mounted () {
    // this.getTop()
    // this.getMid()
  },
  data () {
    return {
      topseries: [],
      topchartOptions: {},
      midseries: [],
      midchartOptions: {},
      topchartData: {
        columns: ['日期', '下单用户'],
        rows: [
          { '日期': '1000', '下单用户': 1093 },
          { '日期': '2000', '下单用户': 3230 },
          { '日期': '5000', '下单用户': 2623 },
          { '日期': '6000', '下单用户': 1423 },
          { '日期': '8000', '下单用户': 3492 },
          { '日期': '9000', '下单用户': 4293 }
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
        }
      ]
    }
  },
  methods: {
    getTop () {
      this.topseries = [{
        name: "STOCK ABC",
        data: topseries.monthDataSeries1.prices
      }],
      this.topchartOptions = {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        series: [{
          name: "STOCK ABC",
          data: topseries.monthDataSeries1.prices
        }],
        title: {
          text: 'Fundamental Analysis of Stocks',
          align: 'left'
        },
        subtitle: {
          text: 'Price Movements',
          align: 'left'
        },
        labels: topseries.monthDataSeries1.dates,
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      }
    },

    getMid () {
      this.midseries = [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
        // , {
        //   name: 'Free Cash Flow',
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        // }
      ],
      this.midchartOptions = {
        // colors: '#008FFB',
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
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
          categories: ['小米', '小米', '小米', '小米', '小米', '小米', '小米', '小米', '小米'],
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
    }
  }
}
</script>

<style lang="scss" scoped>

.merchants-body {
  width: 100%;
  height: 100%;
}

/deep/ .el-table--border, .el-table--group {
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

/deep/ .el-table td, .el-table th.is-leaf {
  padding-top: 32px;
}

.container {
  box-sizing: border-box;
  display: flex;
  .content {
    position: relative;
    height: 60px;
    width: 22%;
    border-right: 1.2px solid #051E33;
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
        background: url('~imgurl/go_up.png') no-repeat left top 46%;
        background-size: 15px;
        .text {
          padding-left: 15px;
          color: #37EC6B;
        }
      }
    }
    .name {
      font-size: 12px;
      color: #7380A0;
      margin-bottom: 6px;
    }
    .green {
      color: #37EC6B;
    }
    .purple {
      color: #8C51F5;
    }
    .light-blue {
      color: #3BCCC9;
    }
  }
}

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
      background: url('~imgurl/table_icon.png') no-repeat center;
      background-size: 15px;
    }
    .text {
      float: left;
    }
    .date {
      color: #3884E0;
      float: right;
    }
  }
}

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
        background: url('~imgurl/table_icon.png') no-repeat center;
        background-size: 15px;
      }
      .text {
        float: left;
      }
      .date {
        color: #3884E0;
        float: right;
      }
    }
  }
}

.chart-bottom {
  margin-top: 27px;
  .left {
    overflow-y: scroll;
  }
}
// /deep/ .el-table__body-wrapper {
//   overflow-y: scroll;
// }
</style>
