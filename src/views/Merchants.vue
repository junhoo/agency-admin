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
          <div class="percent">30%</div>
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
      <ve-line
        :data="chartData"
        :settings="chartSettings">
      </ve-line>
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
        <ve-histogram
          :data="xxxchartData"
          :settings="xxxchartSettings">
        </ve-histogram>
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
export default {
  name: 'merchants',
  mounted () {
  },
  data () {
    this.xxxchartSettings = {
      metrics: ['访问用户', '下单用户'],
      dimension: ['日期']
    }
    this.chartSettings = {
      metrics: ['下单用户'],
      area: true
    }
    // this.backgroundColor = 'gray'
    return {
      chartData: {
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
      xxxchartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
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
  border-bottom: 2px solid transparent !important;
}

/deep/ .el-table__body-wrapper {
  background-color: #061220 !important;  
}

/deep/ .el-table--enable-row-transition .el-table__body td {
  padding: 0;
}

.container {
  box-sizing: border-box;
  display: flex;
  .content {
    position: relative;
    height: 60px;
    width: 22%;
    border-right: 1.2px solid #051E33;
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
  border: 2px solid #06476d;
  .title-box {
    color: #fff;
    text-align: left;
    height: 40px;
    line-height: 40px;
    .icon {
      float: left;
      width: 36px;
      height: 40px;
      background: url('~imgurl/logo.png') no-repeat center;
      background-size: 20px;
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
    border: 2px #06476d solid;
    .title-box {
      color: #fff;
      text-align: left;
      height: 40px;
      line-height: 40px;
      border-bottom: 2px #06476d solid;
      .icon {
        float: left;
        width: 36px;
        height: 40px;
        background: url('~imgurl/logo.png') no-repeat center;
        background-size: 20px;
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
