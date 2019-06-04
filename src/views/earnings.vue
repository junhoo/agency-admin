<template>
  <div class="container">
    <div class="title">每笔交易带来1/10000的收益</div>
    <div class="content">
      <div class="box">
        <div class="left">
          <span>9500</span>
          <span>积分余额</span>
        </div>
        <div class="right">
          <el-button type="primary">兑换USDT</el-button>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span>9500</span>
          <span style="color:#059E7E;">积分余额</span>
        </div>
        <div class="right">
          <el-button type="primary">兑换USDT</el-button>
        </div>
      </div>
      <div class="box three">
        <div class="left">
          <div class="usdt">
            <span>1</span>
            <span>USDT</span>
            <span>≈6.878/</span>
            <span>积分</span>
          </div>
          <div class="jf">USDT实时价格</div>
        </div>
      </div>
    </div>

    <!-- tab切换 -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="积分兑换记录" name="first">
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
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="USDT提现记录" name="second">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{background:'#12223B',color:'#606266'}"
          align="center"
        >
          <el-table-column prop="date" label="订单号" width="100%" align="center"></el-table-column>
          <el-table-column prop="name" label="发起时间" width="100%" align="center"></el-table-column>
          <el-table-column prop="address" label="提现金额" align="center"></el-table-column>
          <el-table-column prop="address" label="矿工费" align="center"></el-table-column>
          <el-table-column prop="address" label="实际到账" align="center"></el-table-column>
          <el-table-column prop="address" label="钱包地址" align="center"></el-table-column>
          <el-table-column prop="address" label="区块确认数" align="center"></el-table-column>
          <el-table-column prop="address" label="交易状态" align="center">
            <template>
              <span style="color:red;" @click="dialogVisible = true">审核中</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 弹框 -->
    <el-dialog title="设置资金密码" :visible.sync="dialogVisible" width="285px" :modal-append-to-body='false'>
      <div class="mobile">
          <span>验证手机：153****4544</span>
      </div>
      <div>
          <input type="text">
          <span>获取验证码</span>
      </div>
      <div>注：为确保资金安全，请先验证手机，并设置您的资金密码。</div>
      <div>设置资金密码</div>
      <input type="text" placeholder="请输入6位数密码">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "earnings",
  data() {
    return {
      dialogVisible:false,
      activeName: "first",
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
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-table--border, .el-table--group {
  border: 2px solid #06476d;
}

/deep/ .el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: 2px solid #06476d;
}

/deep/ .is-leaf {
  border-right: none !important;
  border-bottom: 2px solid #06476d !important;
}

.container {
  height: 100%;
  width: 100%;
  .title {
    height: 26px;
    line-height: 26px;
    color: #437ea9;
  }
  .content {
    height: 79px;
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    .box {
      margin-right: 12px;
      margin-bottom: 50px;
      height: 79px;
      width: 33.3%;
      background-color: #081832;
      display: flex;
      justify-content: space-between;
      padding: 0 24px 0 29px;
      box-sizing: border-box;
      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        span:nth-of-type(1) {
          font-size: 21px;
          color: #fff;
        }
        span:nth-of-type(2) {
          font-size: 12px;
          color: #2f70be;
          margin-top: 14px;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .el-button--primary {
          width: 73px;
          height: 23px;
          padding: 0;
          border-radius: 1px;
          font-size: 12px;
        }
      }
      &:nth-of-type(2) {
        .el-button--primary {
          background-color: #059e7e;
        }
      }
      &:nth-of-type(3) {
        margin-right: 0;
        .usdt {
          span:nth-of-type(1),
          span:nth-of-type(3) {
            font-size: 21px;
            color: #fff;
          }
          span:nth-of-type(4) {
            color: #2f70be;
          }
        }
        .jf {
          color: #7380a0;
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
<style>
.el-tabs__item.is-active {
  color: #fff;
}
.el-tabs__nav-wrap::after {
  display: none;
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
.el-dialog{
    background-color: #12223B;
    margin-top: 30vh;
}
.el-dialog__title{
    color: #fff;
}
</style>
