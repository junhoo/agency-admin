<template>
  <div class="container">
    <el-form
      label-position="left"
      :model="addForm"
      :rules="rules"
      ref="addForm"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="邮箱账号" prop="name">
        <el-input v-model="addForm.email" placeholder="请填写商户邮箱"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="name">
        <el-input v-model="addForm.Contacts" placeholder="请填写商户联系人"></el-input>
      </el-form-item>
      <el-form-item label="微信账号" prop="name">
        <el-input v-model="addForm.wechat" placeholder="请填写商户微信"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="name" class="phoneT">
        <el-input v-model="addForm.phone" placeholder="请填写商户手机号码"></el-input>
        <el-input v-model="addForm.yzcode" class="code" placeholder="输入验证码"></el-input>
        <el-button size="small" type="success" @click="getCode()">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="机构名称" prop="name">
        <el-input v-model="addForm.name" placeholder="请填写机构名称"></el-input>
      </el-form-item>
      <el-form-item label="官方链接" prop="name">
        <el-input v-model="addForm.link" placeholder="请填写商户链接（选填）"></el-input>
      </el-form-item>
      <el-form-item label="机构简介" prop="name">
        <el-input type="textarea" v-model="addForm.ref" placeholder="请填写机构简介（选填）"></el-input>
      </el-form-item>
      <el-form-item label-width="180px" label="用户提现手续费扣除方式" class="payWay" style="marginBottom:0">
        <el-radio-group v-model="addForm.radio">
          <el-radio :label="2">用户支付</el-radio>
          <el-radio :label="1">项目方支付</el-radio>
        </el-radio-group>
        <span class="tips">注：提现手续费费率 3%</span>
      </el-form-item>
      <el-form-item label-width="180px" label="用户充值手续费扣除方式" class="payWay">
        <el-radio-group v-model="addForm.radio2">
          <el-radio :label="2">用户充值</el-radio>
          <el-radio :label="1">项目方充值</el-radio>
        </el-radio-group>
        <span class="tips">注：充值手续费费率 2%</span>
      </el-form-item>
      <el-form-item label class="submitbtn">
        <el-button type="success">取消</el-button>
        <el-button type="primary" @click="submitForm(addForm)">确定添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 弹框 -->
    <el-dialog
      title="设置资金密码"
      :visible.sync="dialogVisible"
      width="400px"
      :modal-append-to-body="false"
      center
    >
      <div
        class="dialogContant"
      >机构介绍文字机构介绍文字，机构介绍文字介绍文字机构介绍文字，机构介绍文字机构绍文字。机构介绍文字机构介绍文字机构介机构介绍文字机，构介绍文字机构介。绍文构介绍文字机构介绍文字机构介绍文字机构文字，机构介绍文字机构介绍文字，阿斯达阿斯达三大撒大声道阿斯达三大撒打算阿萨</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddManagement",
  data() {
    return {
      dialogVisible: false,
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjA0OTAwMDksInRpbWUiOiIxNTYwMjIyMTg0Mjg2MSJ9.U5plEtm0k9I2WCzRp7qT7zd8_7gJuENc2ae3dcm5WtM",
      addForm: {
        email: "",
        Contacts: "",
        wechat: "",
        phone: "",
        name: "",
        link: "",
        ref: "",
        radio: 2,
        radio2: 2,
        yzcode: ""
      },
      rules: {
        email: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleClick(row) {
      this.dialogVisible = true;
    },
    // 添加表单提交
    submitForm(formName) {
      console.log(formName);
      const data = {
        token: this.token,
        mobile: formName.mobile,
        email: formName.email,
        code: formName.yzcode,
        contacts: formName.Contacts,
        wechat_no: formName.wechat,
        recharge_rate_type: formName.radio2,
        withdraw_rate_type: formName.radio,
        organization_name: formName.name,
        organization_info: formName.ref,
        website: formName.link
      };
      this.$post("/api/auser/add", data).then(res => {
        console.log(res);
        if (res.code === 0) {
          this.$message({
            message: res.msg,
            type: "success"
          });
        }
      });
    },

    // 获取验证码
    getCode() {
      const data = {
        mobile: this.addForm.phone,
        type: 1
      };
      this.$post("/api/agency/sendsms", data).then(res => {
        // console.log(res);
      });
    },
    submit(index) {}
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 40%;
  position: relative;
  padding-top: 30px;
  .tips {
    color: #2a65ac;
    margin-left: 41px;
    font-size: 12px;
  }
}
</style>
<style lang='scss'>
.container {
  .el-dialog {
    background-color: #12223b;
    margin-top: 30vh;
    border-radius: 6px;
  }
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__body {
    padding: 25px 25px 60px !important;
  }
  /* 输入框 */
  .el-form-item {
    .el-form-item__label {
      color: #fff;
      font-size: 12px;
    }
    .el-form-item__content {
      .el-input,
      .el-textarea {
        .el-input__inner,
        .el-textarea__inner {
          font-size: 12px;
          color: #fff;
          background-color: #12223b;
          border: 1px solid #06476d;
          border-radius: 2px;
          padding-left: 15px !important;
          &::placeholder {
            color: #4a556e;
          }
        }
      }
    }
  }
  .phoneT {
    position: relative;
    .el-form-item__content {
      display: flex;
      .el-input {
        margin-right: 8px;
        width: 50%;
      }
      .code {
        width: 30%;
      }
    }
    .el-button--success {
      background-color: #059e7e;
      border-radius: 2px;
      color: #fefeff;
      font-size: 12px;
      border: none;
      height: 30px;
      position: absolute;
      top: 6px;
      right: 2px;
    }
  }
  .payWay {
    .el-radio {
      .el-radio__label {
        font-size: 12px;
        color: #47526b;
      }
      .el-radio__input {
        .el-radio__inner {
          background-color: transparent;
          border-color: #06476d;
        }
      }
      .is-checked {
        .el-radio__inner {
          background-color: #214e84;
          &::after {
            background-color: #3986e2;
          }
        }
      }
    }
  }
  .submitbtn {
    .el-form-item__content {
      display: flex;
      .el-button {
        flex: 1;
        margin-right: 30px;
        background-color: #2f71bf;
        border-color: #2f71bf;
        font-size: 12px;
        color: #fff;
      }
      .el-button--success {
        background-color: transparent;
        border-color: #2f71bf;
        color: #2f71bf;
      }
    }
  }
}
</style>
