<template>
  <div class="itemThird">
    <div class="unit unit1">
      <div class="bannerbox">
        <h3 class="title">API接入</h3>
        <div class="txt"><span>使用我们提供的API，轻松为您的<br>项目方提供安全的在线支付方案</span></div>
      </div>
    </div>
    <div class="mainbox">
      <el-container style="height:500px">
        <el-aside width="200px">
          <div class="item" v-for="(item, index) in apiData.tabData" :class="{'active': activeIndex == index}" :key="index" @click="checkouttab(index)">
            <span>{{item}}</span><i class="el-icon-arrow-right"></i>
          </div>
        </el-aside>
        <el-main>
          <div class="itemContant">
            <span>{{apiData.mainContant[activeIndex]}}</span>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'itemThird',
  data () {
    return {
      apiData: {
        tabData: ['云主机', '产品简介', '产品定价', '安全', '哈哈', '含糊'],
        mainContant: ['云主机', '产品简介', '产品定价', '安全', '哈哈', '含糊']
      },
      activeIndex: 0
    }
  },
  methods: {
    checkouttab (idx) {
      this.activeIndex = idx
    }
  }
}
</script>

<style lang="scss" scoped>
.itemThird{
  height: 100%;
  width: 100%;
  min-width: 1080px;
  background-color: #fff;
  .unit{
    height: 242px;
    background: url('~@/assets/img/PCimg/item2-bg.png') center / 100% no-repeat;
    margin-top: 0;
    padding-left: 30.31%;
    .bannerbox{
      text-align: left;
      .title{
        font-size: 26px;
        font-weight: 400;
        color: #fff;
        padding-top: 91px;
        margin-bottom: 20px
      }
      .txt{
        font-size: 12px;
        color: #79A5C0;
        padding: 0 0 53px;
        line-height: 20px
      }
    }
    ul{
      padding: 0;
      display: flex;
      justify-content: space-between;
    }
  }
  .mainbox{
    background-color: #fff;
    height: 100%;
    width: 100%;
    padding: 30px;
    .el-aside{
      padding: 20px;
      border: 1px solid #ccc;
      .item{
        padding: 20px 0;
        text-align: left;
        display: flex;
        justify-content: space-between
      }
      .active{
        color: #000;
        font-weight: 600
      }
    }
  }
}
</style>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
