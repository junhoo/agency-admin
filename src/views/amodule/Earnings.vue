<template>
  <div class="container">
    <div class="title">每笔交易带来1/10000的收益</div>
    <div class="content">
      <div class="box">
        <div class="left">
          <span>{{totalNum}}</span>
          <span>积分余额</span>
        </div>
        <div class="right">
          <el-button type="primary" @click="chengeUsdt">兑换USDT</el-button>
        </div>
      </div>
      <div class="box">
        <div class="left">
          <span>{{totalUsdt}}</span>
          <span style="color:#059E7E;">USDT余额</span>
        </div>
        <div class="right">
          <el-button type="primary" @click="getCash">提现USDT</el-button>
        </div>
      </div>
      <div class="box three">
        <div class="left">
          <div class="usdt">
            <span>1</span>
            <span>USDT</span>
            <span>≈积分/</span>
            <span>{{rate}}</span>
          </div>
          <div class="jf">USDT实时价格</div>
        </div>
      </div>
    </div>

    <!-- tab切换 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="积分兑换记录" name="first">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{background:'#12223B',color:'#606266'}"
          align="center"
        >
          <el-table-column prop="id" label="订单号" align="center"></el-table-column>
          <el-table-column prop="amount_all_income" label="总积分" align="center"></el-table-column>
          <el-table-column prop="operating_amount" label="兑换积分数" align="center"></el-table-column>
          <el-table-column prop="operating_amount" label="获得USDT数" align="center"></el-table-column>
          <el-table-column prop="add_time" label="兑换时间" align="center"></el-table-column>
          <el-table-column prop="amount_income" label="剩余积分" align="center"></el-table-column>
          <el-table-column prop="status" label="兑换状态" align="center"></el-table-column>
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
          <el-table-column prop="date" label="订单号" align="center"></el-table-column>
          <el-table-column prop="name" label="发起时间" align="center"></el-table-column>
          <el-table-column prop="address" label="提现金额" align="center"></el-table-column>
          <el-table-column prop="address" label="矿工费" align="center"></el-table-column>
          <el-table-column prop="address" label="实际到账" align="center"></el-table-column>
          <el-table-column prop="address" label="钱包地址" align="center"></el-table-column>
          <el-table-column prop="address" label="区块确认数" align="center"></el-table-column>
          <el-table-column prop="address" label="交易状态" align="center">
            <template>
              <span style="color:red;">审核中</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <!-- 设置资金密码弹框 -->
    <el-dialog
      title="设置资金密码"
      :visible.sync="dialogVisible1"
      width="285px"
      :modal-append-to-body="false"
      center
    >
      <div class="mobile">
        <span>验证手机：{{setPassword.mobile}}</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="setPassword.code"></el-input>
        <el-button type="primary" @click="getCode(setPassword.mobile,2)">获取验证码</el-button>
      </div>
      <div class="tips" style="marginTop:16px;">注：为确保资金安全，请先验证手机，并设置您的资金密码。</div>
      <div class="password" style="marginTop:16px;">设置资金密码</div>
      <el-input size="small" placeholder="请输入6位数密码" v-model="setPassword.password" class="input"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setpassword" style="marginTop:16px;">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 兑换USDT弹框 -->

    <el-dialog
      title="兑换USDT"
      :visible.sync="dialogVisible2"
      width="285px"
      :modal-append-to-body="false"
      center
    >
      <div class="mobile">
        <span>兑换积分数</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入要兑换的数量" v-model="usdtData.jf_num"></el-input>
        <el-button type="primary" @click="allChange">全部兑换</el-button>
      </div>
      <div class="password" style="marginTop:16px">可获得USDT个数</div>
      <el-input size="small" placeholder="数量（USDT)" v-model="usdtNum" class="input"></el-input>
      <div class="tips" style="marginTop:16px;">可用积分数：{{totalNum}}</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="usdtAffirm">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 我要提币弹框 -->

    <el-dialog
      title="我要提币"
      :visible.sync="dialogVisible3"
      width="285px"
      :modal-append-to-body="false"
      center
    >
      <div class="mobile">
        <span>提币地址</span>
      </div>
      <el-input size="small" placeholder="输入或粘贴钱包地址" v-model="input3" class="input"></el-input>
      <div class="mobile" style="marginTop:16px">
        <span>提币数量</span>
      </div>
      <div class="text" style="marginTop:16px">
        <el-input size="small" placeholder="输入提币数量" v-model="input"></el-input>
        <el-button type="primary">全部</el-button>
      </div>
      <div class="password" style="marginTop:16px;">资金密码</div>
      <el-input size="small" placeholder="输入资金密码" v-model="input3" class="input"></el-input>
      <div class="tips" style="marginTop:16px;">每笔提现收取: 1USDT矿工费</div>
      <div class="tips">实际到账: 0.0001USDT</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3=false">确 定</el-button>
        <div class="tips" style="marginTop:33px;color: #5c6680;">提币须知：</div>
        <div class="tips" style="color: #5c6680;">1.请认真检查转出地址正确无误，否则导致的损失平台概不负责</div>
        <div class="tips" style="color: #5c6680;">2.提现超过10个USDT以上，需提交平台审核</div>
        <div class="tips" style="color: #5c6680;">3.提现到上述地址后，将在2个区块确认后到账</div>
      </span>
    </el-dialog>

    <!-- 分页 -->
    <div class="paging">
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          layout="prev, pager, next"
          :pager-count="5"
          :total="total"
          @current-change="currentPage"
          :page-size="pageNum"
          style="background: transparent;"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
import { Message } from "element-ui";
export default {
  name: "earnings",
  data() {
    return {
      input: "",
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      activeName: "first",
      input3: "",
      tableData: [],
      // 页码
      pageSize: 1,
      // 页容量
      pageNum: 10,
      total: 0,
      // 是否设置资金密码
      setStatus: "",
      // usdt费率
      rate: "",
      // 积分余额
      totalNum: "",
      // usdt余额
      totalUsdt: "",
      // 设置资金密码
      setPassword: {
        code: "",
        password: "",
        mobile: ""
      },
      // 兑换usdt
      usdtData: {
        jf_num: ""
      }
    };
  },
  created() {
    this.getList(1);
  },
  methods: {
    // 分页事件
    currentPage(value) {
      // console.log('33');
      this.pageSize = value;
      this.getList();
    },
    // tab栏切换事件
    handleClick(event) {
      var index = parseInt(event.index);
      if (index === 0) {
        this.getList(1);
      } else if (index === 1) {
        this.getList(2);
      }
    },
    // 获取钱包列表
    getList(tp) {
      const data = {
        token: localStorage.getItem("token"),
        page: this.pageSize,
        limit: this.pageNum,
        type: tp
      };

      this.$post("/api/awallet/wallet", data)
        .then(res => {
          console.log(res);
          let mobile = localStorage.getItem("userMsg");
          this.setPassword.mobile = JSON.parse(mobile).mobile;
          this.setStatus = res.data.pay_password;
          this.tableData = res.data.data;
          this.rate = res.data.rate;
          this.totalNum = res.data.amount_total;
          this.totalUsdt = res.data.usdt_num;
          this.total = res.data.total;
        })
        .catch(e => {});
    },
    // 获取验证码
    getCode(mob, tp) {
      this.$post("/api/agency/sendsms", { mobile: mob, type: tp }).then(res => {
        console.log(res);
      });
    },

    // 设置资金密码
    setpassword() {
      this.dialogVisible1 = false;
      const data = {
        token: localStorage.getItem("token"),
        mobile: this.setPassword.mobile,
        code: parseInt(this.setPassword.code),
        pay_password: this.setPassword.password
      };
      this.$post("/api/auser/modifyPayPassword", data).then(res => {
        if (res.code === 0) {
          this.setPassword.code = "";
          this.setPassword.password = "";
          this.setStatus = 1;
          Message({
            message: res.data,
            type: "success"
          });
        }
      });
    },
    // 兑换USDT
    chengeUsdt() {
      let status = parseInt(this.setStatus);
      if (status === 0) {
        this.dialogVisible1 = true;
      } else if (status === 1) {
        this.dialogVisible2 = true;
      }
    },
    // 全部兑换积分
    allChange() {
      this.usdtData.jf_num = this.totalNum;
    },
    // 兑换USDT确认提交
    usdtAffirm() {
      this.dialogVisible2 = false;
      const data = {
        token: localStorage.getItem("token"),
        convert_num: this.usdtData.jf_num
      };

      this.$post("/api/awallet/exchangeUsdt", data).then(res => {
        if (res.code === 0) {
          Message({
            message: res.msg,
            type: "success"
          }).catch(e => {});
        }
      });
    },

    // 提币USDT
    getCash() {
      let status = parseInt(this.setStatus);
      if (status === 0) {
        this.dialogVisible1 = true;
      } else if (status === 1) {
        this.dialogVisible3 = true;
      }
    }
  },
  computed: {
    usdtNum() {
      let usdtNum = "";
      if (this.usdtData.jf_num === "") {
        usdtNum = "";
      } else {
        usdtNum = (this.usdtData.jf_num / this.rate).toFixed(2);
      }
      return usdtNum;
    }
  }
};
</script>

<style lang="scss" scoped>
.paging {
  display: flex;
  align-items: center;
  margin-top: 30px;
  flex-direction: row-reverse;
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

/deep/ .my-btn,
.start {
  .el-input__inner {
    padding: 15px 10px 15px 30px !important;
  }
}
/deep/ .el-table__empty-block {
  background: #061220;
}

/deep/ .el-table--border,
.el-table--group {
  border: 2px solid #06476d;
}

/deep/ .el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: 2px solid #06476d;
}

/deep/ .is-leaf {
  border-right: none !important;
  border-bottom: 2px solid #06476d !important;
}
.rightContainer {
  padding-top: 0;
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
          span:nth-of-type(2) {
            color: #059e7e;
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
  .mobile {
    font-size: 12px;
    color: #5c6680;
    margin-bottom: 15px;
  }
  .text {
    display: flex;
    align-items: center;
    .el-input {
      width: 170px;
      background-color: #0e1b2f;
      color: #2b374f;
      font-size: 12px;
      margin-right: 10px;
      border-radius: 2px;
    }
    button {
      width: 70px;
      height: 25px;
      background-color: #059e7e;
      font-size: 12px;
      color: #fff;
      border: 2px;
      line-height: 25px;
      border-radius: 2px;
    }
  }
  .tips {
    color: #047e65;
    font-size: 12px;
    font-size: 12px;
    line-height: 22px;
  }
  .password {
    color: #5c6680;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .input {
    width: 239px;
    background-color: #0e1b2f;
    color: #2b374f;
    font-size: 12px;
    margin-right: 10px;
    border-radius: 2px;
  }
  .el-button--primary {
    width: 242px;
    height: 32px;
    padding: 0;
    border-radius: 2px;
  }
}
</style>
<style lang="scss" scoped>
/deep/ .el-dialog__footer {
  text-align: left;
}
/deep/ .el-form-item__label {
  color: #fff;
}

/* 输入框样式 */
/deep/ .el-input__inner {
  background-color: #0c2040;
  color: #708193;
  font-size: 12px;
  border: none;
  padding: 0 15px !important;
}
/deep/ .el-input__inner::placeholder {
  color: #2b374f;
}
/deep/ .el-input__inner:hover {
  border-color: none;
}
/* tab栏样式 */
/deep/ .el-tabs__item.is-active {
  color: #fff;
}
/deep/ .el-tabs__nav-wrap::after {
  display: none;
}
/* 表格样式 */
/deep/ .el-table--border,
.el-table--group {
  border: 2px solid #06476d;
}
/deep/ .el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: 2px solid #06476d;
}
/deep/ .is-leaf {
  border-right: none !important;
  border-bottom: 2px solid #06476d !important;
}
/deep/ .el-table tr {
  background-color: #061220;
}
/deep/ .el-table--border td {
  border: none;
}
/deep/ .el-table .hidden-columns {
  display: none;
}
/deep/ .el-table::before {
  display: none;
}
/deep/ .el-table--border::after,
/deep/ .el-table--group::after {
  display: none;
}
/deep/ .el-table {
  color: #7380a0;
}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
/* 弹框样式 */
/deep/ .el-dialog {
  background-color: #12223b;
  margin-top: 30vh;
}
/deep/ .el-dialog__body {
  padding: 25px 25px 0px !important;
}
/deep/ .el-dialog__title {
  color: #fff;
  font-size: 12px;
}
/deep/ .el-dialog--center .el-dialog__footer {
  text-align: left;
}
// 文本域样式

/deep/ .el-textarea__inner {
  background-color: #0c2040;
  border-color: #0c2040;
}
// .my-btn,
// .start {
//   .el-input__inner {
//     padding: 15px 10px 15px 30px !important;
//     background-color: transparent;
//   }
// }
</style>
