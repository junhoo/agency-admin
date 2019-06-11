<template>
  <div class="container">
    <div class="top">
      <div class="password">
        <el-button type="primary" size="small" @click="dialogVisible3 = true">修改登录密码</el-button>
        <el-button type="primary" size="small" @click="dialogVisible1 = true">修改资金密码</el-button>
      </div>
      <div class="register">
        <span>注册手机</span>
        <div class="input">
          <el-input v-model="input" placeholder="请输入手机号" size="small"></el-input>
        </div>
        <el-button type="primary" size="small" @click="dialogVisible2 = true">换绑</el-button>
      </div>
    </div>
    <div class="main">
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        class="form"
        :label-position="labelPosition"
      >
        <el-form-item label="代理ID">
          <el-input v-model="form.agency_id" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.contacts" size="small"></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form.WeChat" size="small"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" size="small"></el-input>
        </el-form-item>
        <el-form-item label="保证金">
          <el-input v-model="form.cash" size="small"></el-input>
        </el-form-item>
        <el-form-item label="代理名称">
          <el-input v-model="form.agency_name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="奖励比例">
          <el-input v-model="form.award" size="small"></el-input>
        </el-form-item>
        <el-form-item label="机构简介">
          <el-input type="textarea" v-model="form.brief" size="small"></el-input>
        </el-form-item>
      </el-form>
    </div>

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
        <el-button type="primary" @click="getCcode(setPassword.mobile,1)">获取验证码</el-button>
      </div>
      <div class="tips" style="marginTop:16px;">注：为确保资金安全，请先验证手机，并设置您的资金密码。</div>
      <div class="password" style="marginTop:20px;">设置资金密码</div>
      <el-input size="small" placeholder="请输入6位数密码" v-model="setPassword.password" class="input"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setpassword" style="marginTop:16px;">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 更换手机号弹框 -->
    <el-dialog
      title="更换手机号"
      :visible.sync="dialogVisible2"
      width="285px"
      :modal-append-to-body="false"
      center
    >
      <div class="mobile">
        <span>验证手机：{{mobileChange.old_mobile}}</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="mobileChange.old_code"></el-input>
        <el-button type="primary" @click="getCode(mobileChange.old_mobile,1)">获取验证码</el-button>
      </div>
      <div class="tips" style="marginTop:16px;">注：为确保资金安全，请先验证手机。</div>
      <div class="password" style="marginTop:16px;">新的手机号</div>
      <el-input
        size="small"
        placeholder="请输入新的手机号码"
        v-model="mobileChange.new_mobile"
        class="input"
      ></el-input>
      <div class="text1" style="marginTop:10px">
        <el-input size="small" placeholder="输入新的手机验证码" v-model="mobileChange.new_code"></el-input>
        <el-button type="primary" class="btn" @click="getCode(mobileChange.new_mobile,1)">获取验证码</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitChange" style="marginTop:16px;">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改登录密码弹框 -->
    <el-dialog
      title="修改登录密码"
      :visible.sync="dialogVisible3"
      width="300px"
      :modal-append-to-body="false"
      center
    >
      <div class="mobile">
        <span>验证手机：{{changeLogin.mobile}}</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="changeLogin.code"></el-input>
        <el-button type="primary" @click="getCode(changeLogin.mobile,1)">获取验证码</el-button>
      </div>
      <div class="tips" style="marginTop:16px;">注：为确保资金安全，请先验证手机。</div>
      <div class="password" style="marginTop:16px;">设置登录密码</div>
      <el-input
        size="small"
        placeholder="请输入6-20位登录密码"
        v-model="changeLogin.password"
        class="input"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="changePassword" style="marginTop:16px;">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      input: "",
      input3: "",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjA0OTAwMDksInRpbWUiOiIxNTYwMjIyMTg0Mjg2MSJ9.U5plEtm0k9I2WCzRp7qT7zd8_7gJuENc2ae3dcm5WtM",
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      labelPosition: "left",
      form: {
        agency_id: "",
        contacts: "",
        WeChat: "",
        email: "",
        cash: "",
        agency_name: "",
        award: "",
        brief: ""
      },
      // 手机换绑
      mobileChange: {
        old_mobile: "153****4544",
        old_code: "",
        new_mobile: "",
        new_code: ""
      },
      // 修改登录密码
      changeLogin: {
        code: "",
        password: "",
        mobile: "153****4544"
      },
      // 设置资金密码
      setPassword:{
        code: "",
        password: "",
        mobile: "153****4544"
      }
    };
  },
  created() {
    this.getInfro();
  },
  methods: {
    // 信息管理列表
    getInfro() {
      this.$post("/api/auser/agencyInfo", { token: this.token }).then(res => {
        this.form.agency_id = res.data.id;
        this.form.contacts = res.data.contacts;
        this.form.WeChat = res.data.wechat_no;
        this.form.email = res.data.email;
        this.form.cash = res.data.deposit;
        this.form.agency_name = res.data.agency_name;
        this.form.award = res.data.bonus_rate;
        this.form.brief = res.data.agency_info;
      });
    },
    // 获取验证码
    getCode(mob, tp) {
      this.$post("/api/agency/sendsms", { mobile: mob, type: tp }).then(
        res => {}
      );
    },
    // 手机换绑提交事件
    submitChange() {
      this.dialogVisible2 = false;
      const data = {
        token: this.token,
        old_mobile: this.mobileChange.old_mobile,
        old_code: this.mobileChange.old_code,
        new_mobile: this.mobileChange.new_mobile,
        new_code: this.mobileChange.new_code
      };
      this.$post("/api/auser/modifyMobile", data).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.msg,
            type: "success"
          });
        }
      });
    },
    // 修改登陆密码
    changePassword() {
      this.dialogVisible3 = false;
      const data = {
        token: this.token,
        mobile:this.changeLogin.mobile,
        code:this.changeLogin.code,
        password:this.changeLogin.password
      };
      this.$post('/api/auser/modifyLoginPassword',data).then(res=>{
        if (res.code === 0) {
          this.$message({
            message: res.msg,
            type: "success"
          });
        }
      })
    },
    // 设置资金密码
    setpassword(){
      this.dialogVisible1 = false;
      const data = {
        token:this.token,
        mobile:this.setPassword.mobile,
        code:this.setPassword.code,
        pay_password:this.setPassword.password
      }
      this.$post('/api/auser/modifyPayPassword',data).then(res=>{
        if (res.code === 0) {
          this.$message({
            message: res.msg,
            type: "success"
          });
        }
      })
    }
  }
};
</script>


<style lang="scss" scoped>
/deep/ .el-input__inner{
  background-color: #0C2040 !important;
  border-color: #0C2040;
  color: #91A4B6
}
/deep/ .el-textarea__inner{
  background-color: #0C2040 !important;
  border-color: #0C2040;
  color: #91A4B6;
}
.container {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 148px;
    background-color: #081832;
    overflow: hidden;
    padding-left: 25px;
    box-sizing: border-box;
    .password {
      margin-top: 33px;
      .el-button--primary {
        margin-right: 10px;
        border-radius: 2px;
        &:nth-child(2) {
          background-color: #059e7e;
          border-color: #059e7e;
        }
      }
    }
    .register {
      display: flex;
      align-items: center;
      margin-top: 29px;
      span {
        display: inline-block;
        color: #fff;
        font-size: 12px;
        width: 55px;
        line-height: 12px;
      }
      .input {
        width: 107px;
        margin-right: 16px;
        margin-left: 11px;
      }
      .el-button--primary {
        border-radius: 2px;
      }
    }
  }
  .main {
    width: 100%;
    height: 452px;
    background-color: #081832;
    margin-top: 12px;
    .form {
      width: 507px;
      height: 100%;
      padding: 35px 0 0 24px;
      box-sizing: border-box;

      .el-form-item {
        margin-bottom: 0;

        &:last-child {
          margin-top: 10px;
        }
      }
    }
  }

  .el-dialog__wrapper {
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
    .text1 {
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
        background-color: #3986e2;
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
      //
      line-height: 14px;
      height: 14px;
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
}
</style>




