<template>
  <div class="container">
    <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
      <el-form-item label="邮箱账号" prop="name">
        <el-input v-model="ruleForm.email" placeholder="请填写商户邮箱"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="name">
        <el-input v-model="ruleForm.Contacts" placeholder="请填写商户联系人"></el-input>
      </el-form-item>
      <el-form-item label="微信账号" prop="name">
        <el-input v-model="ruleForm.wechat" placeholder="请填写商户微信"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="name" class="phoneT">
        <el-input v-model="ruleForm.phone" placeholder="请填写商户手机号码"></el-input>
        <el-input v-model="ruleForm.phone" class="code" placeholder="输入验证码"></el-input>
        <el-button size="small" type="success" @click="getCode()">获取验证码</el-button>
      </el-form-item>
      <el-form-item label="机构名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请填写机构名称"></el-input>
      </el-form-item>
      <el-form-item label="官方链接" prop="name">
        <el-input v-model="ruleForm.link" placeholder="请填写商户链接（选填）"></el-input>
      </el-form-item>
      <el-form-item label="机构简介" prop="name">
        <el-input type="textarea" v-model="ruleForm.ref" placeholder="请填写机构简介（选填）"></el-input>
      </el-form-item>
      <el-form-item label-width='180px' label="用户提现手续费扣除方式" class="payWay">
       <el-radio-group v-model="ruleForm.radio">
         <el-radio :label="0">用户支付</el-radio>
         <el-radio :label="1">项目方支付</el-radio>
       </el-radio-group>
      </el-form-item>
      <el-form-item label="" class="submitbtn">
         <el-button type="success" @click="submit(0)">取消</el-button>
         <el-button type="primary" @click="submit(1)">确定添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 弹框 -->
    <el-dialog title="设置资金密码" :visible.sync="dialogVisible" width="400px" :modal-append-to-body='false' center>
      <div class="dialogContant">机构介绍文字机构介绍文字，机构介绍文字介绍文字机构介绍文字，机构介绍文字机构绍文字。机构介绍文字机构介绍文字机构介机构介绍文字机，构介绍文字机构介。绍文构介绍文字机构介绍文字机构介绍文字机构文字，机构介绍文字机构介绍文字，阿斯达阿斯达三大撒大声道阿斯达三大撒打算阿萨</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AddManagement",
  data() {
    return {
      dialogVisible:false,
      ruleForm: {
         email: '',
         Contacts: '',
         wechat: '',
         phone: '',
         name: '',
         link: '',
         ref: '',
         radio: 0,
       },
       rules: {
         email: [
           { required: true, message: '请输入活动名称', trigger: 'blur' },
           { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
         ],
       }
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
      this.dialogVisible = true
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCode () {},
    submit (index) {}
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 40%;
  position: relative;
  padding-top: 30px
}
</style>
<style lang='scss'>
.el-dialog{
    background-color: #12223B;
    margin-top: 30vh;
    border-radius: 6px
}
.el-dialog__title{
    color: #fff;
}
.el-dialog__body{
  padding: 25px 25px 60px !important;
}
/* 输入框 */
.el-form-item{
  .el-form-item__label{
    color: #fff;
    font-size: 12px
  }
  .el-form-item__content{
    .el-input, .el-textarea{
      .el-input__inner, .el-textarea__inner{
        font-size: 12px;
        color: #fff;
        background-color: #12223B;
        border: 1px solid #06476D;
        border-radius: 2px;
        padding-left: 15px !important;
        &::placeholder{
          color: #4A556E;
        }
      }
    }
  }
}
.phoneT{
  position: relative;
  .el-form-item__content{
    display: flex;
    .el-input{
      margin-right: 8px;
      width: 50%
    }
    .code{
      width: 30%;
    }
  }
  .el-button--success{
    background-color: #059E7E;
    border-radius: 2px;
    color: #FEFEFF;
    font-size: 12px;
    border: none;
    height: 30px;
    position: absolute;
    top: 6px;
    right: 2px
  }
}
.payWay{
  .el-radio{
    .el-radio__label{
      font-size: 12px;
      color: #47526B
    }
    .el-radio__input{
      .el-radio__inner{
        background-color: transparent;
        border-color: #06476D
      }
    }
    .is-checked{
      .el-radio__inner{
        background-color: #214E84;
        &::after{
          background-color: #3986E2;
        }
      }
    }
  }
}
.submitbtn{
  .el-form-item__content{
    display: flex;
    .el-button{
      flex: 1;
      margin-right: 30px;
      background-color: #2F71BF;
      border-color: #2F71BF;
      font-size: 12px;
      color: #FFF
    }
    .el-button--success{
      background-color: transparent;
      border-color: #2F71BF;
      color: #2F71BF
    }
  }
}
</style>
