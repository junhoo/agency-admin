<template>
  <div id="shareDetail">
    <div class="page">
      <div class="title">
          <div class="logo">
              <img src="../../assets/img/logo2.png" alt="">
          </div>
        <div class="tip">注册成为盾付宝交易员</div>
      </div>
      <img src="../../assets/img/PCimg/indexBg1.png" alt="" class="page1">
      <div class="toRegister">
          <el-form :model="ruleForm">
            <el-form-item label="手机号：">
              <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码：">
              <el-input v-model="ruleForm.yzm" placeholder="请输入验证码"></el-input><span class="getcode" @click="countDown()">{{codeText}}</span>
            </el-form-item>
            <el-form-item label="设置密码：">
              <el-input type="password" v-model.number="ruleForm.password" placeholder="请输入设置密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input type="password" v-model.number="ruleForm.ispassword" placeholder="请输入确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="checkData()">立即注册  <i class="el-icon-right"></i></el-button>
            </el-form-item>
          </el-form>
      </div>
      <div class="download">
       <a :href="url" class="downBtn ios"></a>
        <a :href="url" class="downBtn andr"></a>
      </div>
    </div>
    <div class="page">
      <img src="../../assets/img/PCimg/indexBg2.png" alt="" class="page2">
      <div class="download download2">
        <a :href="url" class="downBtn ios"></a>
        <a :href="url" class="downBtn andr"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
  export default {
    name: "Share",
    data() {
      return {
        ruleForm: {
          phone: '',
          yzm: '',
          password: '',
          ispassword: ''
        },
        url:'https://fir.im/ragw',
        codeText: '发送验证码',
        totalTime: 60
      }
    },
    created () {
    },
    methods: {
      countDown () {
        if (this.ruleForm.phone === '') {
          Message.warning('请输入手机号')
          return false
        }
        this.getCode()
        this.codeText = this.totalTime + 's'
        let clock = window.setInterval(() => {
          this.totalTime--
          this.codeText = this.totalTime + 's'
          if (this.totalTime < 0) { // 当倒计时小于0时清除定时器
            window.clearInterval(clock)
            this.codeText = '重新发送'
            this.totalTime = 60
          }
        }, 1000)
      },
      getCode () {
          var data = {
            mobile: this.ruleForm.phone,
            type: 1
          }
          this.$post('/api/agency/sendsms', data).then(res => {
              if (res !== 0) {
                  alert(45)
              }
          })
      },
      checkData () {
          if (this.ruleForm.yzm === '') {
              Message.warning('验证码不能为空')
          } else if (this.ruleForm.password === '') {
              Message.warning('设置密码不能为空')
          } else if (this.ruleForm.ispassword === '') {
              Message.warning('确认密码不能为空')
              if (this.ruleForm.password !== this.ruleForm.ispassword) {
                  Message.warning('两次密码输入不一致')
              }
          } else {
              this.submitForm()
          }
      },
      submitForm(formName) {
          console.log(formName)
      },
    }
  };
</script>
<style lang="scss" scoped>
.el-form{
    /deep/ .el-form-item{
        display: flex;
        .el-form-item__label{
            flex: 7;
            text-align: left;
            padding: 0;
            color: #fff;
            font-size: 15px;
        }
        .el-form-item__content{
            position: relative;
            flex: 16;
            .el-input__inner{
                background-color: transparent;
                border: none;
                color: #fff;
                font-size: 14px;
                border-radius: 0;
                padding: 0 4px;
                border-bottom: 1px solid rgba(255, 255, 255, .5);
                &::placeholder{
                    color: rgba(255, 255, 255, .5)
                }
            }
            .el-button--primary{
                width: 100%;
                border-radius: 23px;
                background-color: #fff;
                font-size: 16px;
                color: #00419F;
                font-weight: 600;
                margin-top: 20px;
                .el-icon-right{
                    font-weight: 600;
                    margin-left: 10px;
                }
            }
        }
    }
}
#shareDetail{
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  position: fixed;
  .page1{
    width: 100%;
    margin-top: 0
  }
  .page2{
    width: 100%;
    margin-top: -60px;
    margin-bottom: -100px
  }
  .page{
    width: 100%;
    margin-bottom: 10px;
    position: relative;
    .title{
      position: absolute;
      width: 100%;
      top: 5%;
      padding: 0 21px;
      box-sizing: border-box;
      .tip{
        color: #fff;
        font-size: 26px;
        text-align: center
      }
      .logo{
          text-align: center;
          margin-bottom: 20px;
          img{
              width: 48px
          }
      }
    }
    .toRegister{
      position: absolute;
      width: 90%;
      top: 20%;
      left: 50%;
      transform: translate(-50%);
      background-color: rgba(255, 255, 255, .2);
      border-radius: 10px;
      padding: 39px 25px 14px;
      box-sizing: border-box;
      .getcode{
          position: absolute;
          top: 0;
          right: 0;
          font-size: 12px;
          color: #0044A4;
          border-radius: 17px;
          display: inline-block;
          height: 34px;
          line-height: 34px;
          background-color: #fff;
          width: 42%;
          text-align: center
      }
    }
    .download{
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0 40px;
      .downBtn{
        flex: 1;
        display: inline-block;
        height: 67px;
        border-radius: 2px;
        z-index: 999
      }
      .andr{
        background: url('../../assets/img/PCimg/Android-icon.png') center / 100%  no-repeat;
        margin-left: 40px;
      }
      .ios{
        background: url('../../assets/img/PCimg/iOS-icon.png') center / 100%  no-repeat
      }
    }
  }
}
</style>
