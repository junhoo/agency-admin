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
      <div class="symbol">-</div>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-model="form.date1"
        style="width: 100%;"
        size="small"
      ></el-date-picker>
      <el-button type="primary" size="small">立即创建</el-button>
      <el-button size="small">取消</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  nama: "deal",
  data() {
    return {
      input2: "",
      form: {
        date1: "",
        date2: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  .my-form {
    display: flex;
    align-items: center;
    .el-input {
      width: 117px;
    }
    .el-date-editor {
      width: 113px !important;
    }
    .start{
        width: 67px;
        padding: 0 13px;
        box-sizing: border-box;
        font-size: 12px;
    }
    .symbol{
        width: 17px;
    }
  }
}
</style>
