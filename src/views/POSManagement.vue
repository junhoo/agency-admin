<template>
  <div class="container">
    <!-- 搜索查询 -->
    <ul class="search">
      <li class="iteminput">
        <input type="text" placeholder="输入联系人/机构名称">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </li>
      <li class="iteminput">
          <el-date-picker
            popper-class="xiala"
            v-model="startTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
      </li>
      <li class="iteminput">
        <span class="line"></span>
      </li>
      <li class="iteminput">
          <el-date-picker
            popper-class="xiala"
            v-model="endTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
      </li>
       <li class="iteminput iteminput5">
         <span class="subSearch" @click="addMerchant()">添加商户</span>
      </li>
    </ul>
    <!-- 表格 -->
    <div v-if="dataShow" class="tableBox">
      <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{background:'#12223B',color:'#606266'}"
          align="center"
        >
          <el-table-column prop="date" label="机构ID" width="100%" align="center"></el-table-column>
          <el-table-column prop="name" label="联系人" width="100%" align="center"></el-table-column>
          <el-table-column prop="address" label="联系电话" align="center"></el-table-column>
          <el-table-column prop="address" label="电子地址" align="center"></el-table-column>
          <el-table-column prop="address" label="兑换时间" align="center"></el-table-column>
          <el-table-column prop="address" label="机构名称" align="center"></el-table-column>
          <el-table-column prop="address" label="官方链接" align="center"></el-table-column>
          <el-table-column prop="address" label="操作" align="center">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="加入时间" align="center"></el-table-column>
        </el-table>
    </div>

    <!-- 无数据 -->
    <div v-else class="nodata">
      <img src="../assets/img/noData.png" alt="">
    </div>
    <!-- 弹框 -->
    <el-dialog title="设置资金密码" :visible.sync="dialogVisible" width="400px" :modal-append-to-body='false' center>
      <div class="dialogContant">机构介绍文字机构介绍文字，机构介绍文字介绍文字机构介绍文字，机构介绍文字机构绍文字。机构介绍文字机构介绍文字机构介机构介绍文字机，构介绍文字机构介。绍文构介绍文字机构介绍文字机构介绍文字机构文字，机构介绍文字机构介绍文字，阿斯达阿斯达三大撒大声道阿斯达三大撒打算阿萨</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "POSManagement",
  data() {
    return {
      dialogVisible:false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      inputName: '',
      startTime: '',
      endTime: '',
      dataShow: true
    };
  },
  methods: {
    handleClick (row) {
      console.log(row)
      this.dialogVisible = true
    },
    addMerchant () {
      this.$router.push({
        path: '/AddManagement',
        query: {
          index: 5
        }
      })
      sessionStorage.setItem('addManagement', 'true')
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  position: relative;
  .search{
    height: 100px;
    line-height: 100px;
    display: flex;
    .iteminput{
      position: relative;
      margin-right: 20px;
      input{
        color: #555F79;
        font-size: 17px;
        padding: 2px 12px;
        height: 26px;
        line-height: 26px;
        background-color: transparent;
        border-radius: 3px;
        border: 1px solid #555F79;
        &::placeholder{
          color: #555F79
        }
      }
      i{
        position: absolute;
        top: 30%;
        right: 0px;
        margin-right: 20px;
        width: 15px;
        color: #555F79;
        font-weight: 600;
        font-size: 17px
      }
      .subSearch{
        display: inline-block;
        font-size: 18px;
        color: #fff;
        background-color: #059E7E;
        border-radius: 3px;
        width: 118px;
        height: 30px;
        line-height: 30px;
        text-align: center
      }
      .line{
        display: inline-block;
        width: 25px;
        height: 1px;
        background-color: #555F79
      }
    }
    .iteminput5{
      padding-top: 2px
    }
  }
  .dialogContant{
    font-size: 17px;
    color: #5C6680;
    background-color: #0E1B2F;
    border-radius: 17px;
    padding: 39px 31px 50px 24px
  }
  .nodata{
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px
  }
}
</style>
<style>
.el-table--border,
.el-table--group {
  border: 2px solid #06476d;
}
.el-table__header-wrapper th:nth-last-of-type(2) {
  border-right: 2px solid #06476d;
}
.is-leaf {
  border-right: none !important;
  border-bottom: 2px solid #06476d !important;
}
.el-table tr {
  background-color: #061220;
}
.el-table--border td {
  border: none;
}
.el-table .hidden-columns {
  display: none;
}
.el-table::before {
  display: none;
}
.el-table--border::after,
.el-table--group::after {
  display: none;
}
.el-table {
  color: #7380a0;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
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
.el-input__inner{
  color: #555F79;
  font-size: 17px;
  padding: 15px 10px 15px 30px !important;
  height: 26px;
  line-height: 26px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid #555F79;
}
.el-input__inner::placeholder{
    color: #555F79
}
.el-input__icon{
  color: #555F79;
  font-weight: 600;
  font-size: 17px;
}
.xiala{
}
</style>
