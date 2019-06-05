<template>
    <el-row class="menu_page">
         <el-col>
             <el-menu
                mode="vertical"
                background-color="#12223B"
                text-color="#fff"
                active-text-color="#409eff"
                class="el-menu-vertical-demo">
                <div class="meun-logo"></div>
                <router-link v-for="(item, index) in items" :key="index" :to="item.path">
                    <el-menu-item @click="toindexData(item.index)"
                        :index='item.path'>
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
          path: "earnings",
          index: 0
        },
        {
          icon: "fa-asterisk",
          name: "商户交易数据",
          path: "merchants",
          index: 1
        },
        {
          icon: "fa-asterisk",
          name: "交易流水记录",
          path: "deal",
          index: 2
        },
        {
          icon: "fa-asterisk",
          name: "商户管理",
          path: "/addManagement",
          index: 3
        },
        {
          icon: "fa-asterisk",
          name: "信息管理",
          path: "information",
          index: 4
        }
      ]
    };
  },
  methods: {
    toindexData(index){
      this.$emit("toindexData", index)
    }
  },
};
</script>
<style scoped>
.menu_page {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  background-color: #12223B;
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
  background: url('~imgurl/logo.png') no-repeat center;
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
