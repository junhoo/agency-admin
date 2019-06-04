<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px" class="my-form">
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2" size="small"></el-input>
      <div class="start">起始日期</div>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="form.date1"
        style="width: 100%;"
        size="small"
      ></el-date-picker>
      <div class="symbol">一</div>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="form.date1"
        style="width: 100%;"
        size="small"
      ></el-date-picker>
      <el-dropdown>
        <el-button type="primary" @click.native="toData">
          全部商户
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item,index) in dropdownList" :key="index" >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-form>
  </div>
</template>

<script>
export default {
  nama: "deal",
  data() {
    return {
      dropdownList: ["黄金糕", "狮子头", "螺蛳粉", "双皮奶", "蚵仔煎"],
      input2: "",
      form: {
        date1: "",
        date2: ""
      }
    };
  },
  methods:{
     toData(){
        
        this.$router.push('/dealData')
     } 
  },
  mounted(){

  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 16px 0 0 0;
  box-sizing: border-box;
  .my-form {
    display: flex;
    align-items: center;
    .el-input {
      width: 177px;
    }
    .el-date-editor {
      width: 113px !important;
    }
    .start {
      width: 67px;
      font-size: 12px;
      text-align: center;
    }
    .symbol {
      width: 17px;
      text-align: center;
    }
    .el-button--primary {
      width: 77px;
      height: 25px;
      padding: 0;
      border-radius: 2px;
      background-color: #059e7e;
      border-color: #059e7e;
      margin-left: 10px;
      .el-icon--right {
        margin-left: 0;
      }
    }
  }
}
</style>
