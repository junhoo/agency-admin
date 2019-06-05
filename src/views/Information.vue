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
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="保证金">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="代理名称">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="奖励比例">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="机构简介">
          <el-input type="textarea" v-model="form.desc" size="small"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 设置资金密码弹框 -->
    <el-dialog
      title="设置资金密码"
      :visible.sync="dialogVisible1"
      width="285px"
      :modal-append-to-body="false"
    >
      <div class="mobile">
        <span>验证手机：153****4544</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="input"></el-input>
        <el-button type="primary">获取验证码</el-button>
      </div>
      <div class="tips">注：为确保资金安全，请先验证手机，并设置您的资金密码。</div>
      <div class="password">设置资金密码</div>
      <el-input size="small" placeholder="请输入6位数密码" v-model="input3" class="input"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 更换手机号弹框 -->
    <el-dialog
      title="更换手机号"
      :visible.sync="dialogVisible2"
      width="285px"
      :modal-append-to-body="false"
    >
      <div class="mobile">
        <span>验证手机：153****4544</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="input"></el-input>
        <el-button type="primary">获取验证码</el-button>
      </div>
      <div class="tips">注：为确保资金安全，请先验证手机。</div>
      <div class="password">新的手机号</div>
      <el-input size="small" placeholder="请输入新的手机号码" v-model="input3" class="input"></el-input>
      <div class="text1" style="marginTop:10px">
        <el-input size="small" placeholder="输入新的手机验证码" v-model="input"></el-input>
        <el-button type="primary" class="btn">获取验证码</el-button>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改登录密码弹框 -->
    <el-dialog
      title="修改登录密码"
      :visible.sync="dialogVisible3"
      width="285px"
      :modal-append-to-body="false"
    >
      <div class="mobile">
        <span>验证手机：153****4544</span>
      </div>
      <div class="text">
        <el-input size="small" placeholder="输入验证码" v-model="input"></el-input>
        <el-button type="primary">获取验证码</el-button>
      </div>
      <div class="tips">注：为确保资金安全，请先验证手机。</div>
      <div class="password">设置登录密码</div>
      <el-input size="small" placeholder="请输入6-20位登录密码" v-model="input3" class="input"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible3 = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      input3: "",
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3:false,
      labelPosition: "left",
      form: {
        name: "",
        desc: ""
      },
      input: ""
    };
  }
};
</script>


<style lang="scss" scoped>
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
      margin-bottom: 13px;
      margin-top: 10px;
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




