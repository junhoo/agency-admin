<template>
  <div class="home">
    <dialogs :dialogVisibledata='dialogVisibledata' @userMsg="userMsgh" :init="showCount"></dialogs>
    <div class="head">
       <img src="../../assets/img/PCimg/logo.png" alt="">
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="盾付宝钱包" name="first">
              <item-first></item-first>
            </el-tab-pane>
            <el-tab-pane label="交易端代理" name="second">
              <item-second></item-second>
            </el-tab-pane>
            <el-tab-pane label="API接入" name="third">
              <item-third></item-third>
            </el-tab-pane>
            <el-tab-pane name="fourth" @click="clickBtn()"><span slot="label"><i v-if="this.isIcon" class="el-icon-s-check"></i> {{tab5Text}}</span></el-tab-pane>
            <el-tab-pane disabled label="" name="five">
              <bond></bond>
            </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import itemFirst from '@/views/pcmodule/tabitem/itemFirst.vue'
import itemSecond from '@/views/pcmodule/tabitem/itemSecond.vue'
import itemThird from '@/views/pcmodule/tabitem/itemThird.vue'
import bond from '@/views/pcmodule/tabitem/bond.vue'
import Dialogs from '@/components/Dialog.vue'

export default {
  name: 'home',
  components: {
    itemFirst,
    itemSecond,
    itemThird,
    bond,
    Dialogs
  },
  data () {
    return {
      activeName: null,
      dialogVisibledata: false,
      userMsg: {},
      showCount: 0,
      tab5Text: '登录',
      isIcon: false
    }
  },
  created () {
    if (sessionStorage.getItem('activeName')) {
      this.activeName = sessionStorage.getItem('activeName')
    } else {
      this.activeName = 'third'
    }
    if (JSON.parse(localStorage.getItem('userMsg'))) {
      this.userMsg = JSON.parse(localStorage.getItem('userMsg'))
      this.tab5Text = this.userMsg.mobile
      this.isIcon = true
    }
  },
  methods: {
    userMsgh (data) {
      this.userMsg = JSON.parse(data)
      this.tab5Text = this.userMsg.mobile
      this.isIcon = true
    },
    handleClick (tab, event) {
      sessionStorage.removeItem('activeName')
      if (tab.index === '3') {
        this.clickBtn()
      } else {
        this.dialogVisibledata = false
      }
    },
    clickBtn () {
      this.dialogVisibledata = false
      setTimeout(() => {
        this.showCount = this.showCount + 1
        this.dialogVisibledata = !this.dialogVisibledata
      }, 200)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  background-color: #252744;
  min-width: 960px;
   .head{
      width: 100%;
      height: 93px;
      position: relative;
      img{
          height: 40px;
          position: absolute;
          left: 15.6%;
          top: 26px;
          z-index: 9999;
      }
      .tab{
        position: relative;
        width: 100%;
        height: 100%;
        .login{
          display: inline-block;
          width: 50%;
          height: 30px;
          background-color: #fff;
        }
      }
   }
}
</style>
<style lang="scss">
#tab-fourth{
  color: #23E0C7 !important
}
.el-tabs__header{
  position: absolute !important;
  width: 40%;
  right: 0;
  padding-top: 30px !important;
}
.el-tabs__item{
  color: #FFFFFF !important
}
.el-tabs__nav-wrap::after{
  background-color: transparent !important
}
.el-tabs__item.is-active{
  color: #fff !important
}
.el-tabs__active-bar{
  background-color: #00CAD8 !important;
  height: 1px !important
}
.el-tabs__header{
  z-index: 9999;
}
</style>
