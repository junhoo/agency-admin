<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu
        mode="vertical"
        background-color="#12223B"
        text-color="#fff"
        active-text-color="#409eff"
        class="el-menu-vertical-demo"
      >
        <div class="meun-logo"></div>
        <router-link v-for="(item, index) in items" :key="index" :to="item.path">
          <el-menu-item @click="toindexData(item.index)" :index="item.path">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "leftmenu",
  data() {
    return {
      items: [
        {
          icon: "fa-money",
          name: "收益钱包",
          path: "b_earnings",
          index: 0
        },
        {
          icon: "fa-money",
          name: "交易数据分析图",
          path: "",
          index: 1
        },
        {
          icon: "fa-money",
          name: "名下用户分析图",
          path: "",
          index: 2
        },
        {
          icon: "fa-money",
          name: "交易员接单流水",
          path: "b_deal",
          index: 3
        },
        {
          icon: "fa-money",
          name: "交易员信息管理",
          path: "b_information",
          index: 4
        },
        {
          icon: "fa-money",
          name: "推广渠道",
          path: "b_generalize",
          index: 5
        },
        {
          icon: "fa-money",
          name: "我的信息管理",
          path: "b_manage",
          index: 6
        },
        
      ]
    };
  },
  methods: {
    toindexData(index) {
      this.$emit("toindexData", index);
    }
  }
};
</script>

<style scoped>
.menu_page {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  background-color: #12223b;
  z-index: 99;
}
.el-menu {
  border: none;
}
.fa-margin {
  margin-right: 5px;
}
.meun-logo {
  height: 100px;
  background-color: #061220;
  background: url("~imgurl/logo.png") no-repeat center;
  background-size: 102px 56px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-vertical-demo {
  width: 35px;
}
.el-submenu .el-menu-item {
  min-width: 200px;
}

.hiddenDropdown,
.hiddenDropname {
  display: none;
}
a {
  text-decoration: none;
}
</style>
