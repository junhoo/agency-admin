<template>
    <div class="register">
        <div class="title">快速注册</div>
        <div class="formBox">
            <el-form label-position="left" label-width="80px" :model="form">
                <el-form-item label="联系人">
                    <el-input v-model="form.name" placeholder="请填写联系人"></el-input><i v-show="isShow == 0" class="el-icon-remove">请填写联系人</i>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="form.phone" placeholder="请填写手机号码"></el-input><i v-show="isShow == 1" class="el-icon-remove">请填写手机号</i>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-input class="codeinput" v-model="form.yzcode" placeholder="请填写验证码"></el-input><i v-show="isShow == 2" class="el-icon-remove">请填写验证码</i>
                    <span v-if="totalTime == 60" class="code" @click="countDown()">{{content}}</span>
                    <span v-else class="code">{{content}}</span>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email" placeholder="请填写邮箱"></el-input><i v-show="isShow == 3" class="el-icon-remove">请填写邮箱地址</i>
                </el-form-item>
                <el-form-item label="微信号">
                    <el-input v-model="form.wechat" placeholder="请填写微信号"></el-input><i v-show="isShow == 4" class="el-icon-remove">请填写微信号</i>
                </el-form-item>
                <el-form-item label="设置密码">
                    <el-input type="password" v-model="form.password" placeholder="请填写登录密码"></el-input><i v-show="isShow == 5" class="el-icon-remove">请填写登录密码</i>
                </el-form-item>
                <el-form-item label="代理选择">
                  <el-select v-model="form.value" placeholder="请选择后台类型" :change="selecValue(form.value)">
                    <el-option v-for="item in form.region"  :label="item.label" :key="item.value" :value="item.value"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="代理名称">
                    <el-input v-model="form.dlName" placeholder="代理名称"></el-input><i v-show="isShow == 6" class="el-icon-remove">请填写代理名称</i>
                </el-form-item>
                <el-form-item label="代理简介">
                    <el-input type="textarea" v-model="form.ref" placeholder="代理简介（选填）"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="checkData()">注册代理</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      form: {
        name: '',
        phone: '',
        password: '',
        yzcode: '',
        email: '',
        wechat: '',
        region: [{
          value: 1,
          label: '盾付宝 项目方代理'
        }, {
          value: 2,
          label: '盾付宝 交易端代理'
        }],
        value: null, // 代理类型 1项目方 2交易端
        dlName: '',
        ref: ''
      },
      content: '发送验证码', // 按钮里显示的内容
      totalTime: 60,
      isShow: null,
      topath: '/aindex'
    }
  },
  created () {
    this.form.value = this.$route.query.value
  },
  methods: {
    selecValue (value) {
      // console.log(this.form.value)
      // this.form.value = value
    },
    countDown () {
      if (this.form.phone === '') {
        this.isShow = 1
        return false
      }
      this.getCode()
      this.content = this.totalTime + 's'
      let clock = window.setInterval(() => {
        this.totalTime--
        this.content = this.totalTime + 's'
        if (this.totalTime < 0) { // 当倒计时小于0时清除定时器
          window.clearInterval(clock)
          this.content = '重新发送'
          this.totalTime = 60
        }
      }, 1000)
    },
    getCode () {
      var data = {
        mobile: this.form.phone,
        type: 1
      }
      this.$post('/api/agency/sendsms', data).then(res => {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
        // console.log(res, 'az')
      })

    },
    checkData () {
      if (this.form.name === '') {
        this.isShow = 0
      } else if (this.form.phone === '') {
        this.isShow = 1
      } else if (this.form.yzcode === '') {
        this.isShow = 2
      } else if (this.form.email === '') {
        this.isShow = 3
      } else if (this.form.wechat === '') {
        this.isShow = 4
      } else if (this.form.password === '') {
        this.isShow = 5
      } else if (this.form.password === '') {
        this.isShow = 6
      } else {
        this.isShow = null
        this.onSubmit()
      }
    },
    onSubmit () {
      if(this.form.value === 1){
        this.topath = '/bindex'

      }
      var data = {
        mobile: this.form.phone,
        email: this.form.email,
        password: this.form.password,
        code: this.form.yzcode,
        contacts: this.form.name,
        wechat_no: this.form.wechat,
        agency_name: this.form.dlName,
        agency_info: this.form.ref,
        agency_type: this.form.value
      }
      this.$post('/api/agency/register', data).then(res => {
        this.$message({
          message: '注册成功',
          type: 'success'
        })
        sessionStorage.setItem('activeName', 'five')
        this.$router.push({
           path: this.topath
         })
        var data = res.data.data
        localStorage.setItem('token', data.token)
        localStorage.setItem('userMsg', JSON.stringify(data))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
html, body, #app{
  background-color: #fff !important
}
.register{
  text-align: center;
  min-width: 1008px;
  background-color: #fff;
  height: 100%;
  padding-top: 131px;
  padding-bottom: 20%;
  width: 100%;
  .title{
    font-size: 24px;
    color: #070707;
    margin-bottom: 50px;
  }
  .formBox{
      position: absolute;
      left: 48%;
      transform: translateX(-50%);
      width: 25%;
    /deep/ .el-form{
      .el-form-item{
        margin-bottom: 18px !important;
        .el-select{
            width: 100%;
        };
        .el-form-item__content{
            position: relative;
            .code{
                position: absolute;
                width: 23%;
                right: 0;
                font-size: 14px;
                color: #fff;
                display: inline-block;
                padding: 0 20px;
                text-align: center;
                background-color: #1087FD
            }
            .codeinput{
              position: absolute;
              left: 0;
              width: 55%
            }
            .el-button--primary{
              width: 100%
            }
            .el-icon-remove{
              position: absolute;
              right: -113px;
              top: 10px;
              color: #FF8800;
            }
        }
      }
    }
  }
}
</style>
