<template>
    <el-row class="menu_page">
         <el-col>
            <el-menu
              mode="vertical"
              text-color="#7380A0"
              active-text-color="#7380A0"
              background-color="#12223B"
              @select="handleSelect"
              class="el-menu-vertical-demo">
              <div class="meun-logo"></div>

              <router-link
                v-for="(item, index) in items"
                :key="index"
                :to="item.path">

                <el-menu-item
                  @click="toindexData(item.index)"
                  :index='item.path'>
                    <div class="child-item" :class="{ 'icon-active': item.select === true }">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                  </div>
                </el-menu-item>
              </router-link>
            </el-menu>
         </el-col>
    </el-row>
</template>

<script>
export default {
  name: "leftmenu",
  created () {
    var picks = sessionStorage.getItem('activaItem')
    this.items[picks].select = true
    this.addManagement = sessionStorage.getItem('addManagement')
  },
  data () {
    return {
      addManagement: false,
      items: [
        {
          icon: "icon-item1",
          name: "收益钱包",
          path: "a_earnings",
          index: 0,
          select: false
        },
        {
          icon: "icon-item2",
          name: "商户交易数据",
          path: "a_merchants",
          index: 1,
          select: false
        },
        {
          icon: "icon-item3",
          name: "交易流水记录",
          path: "a_deal_data",
          index: 2,
          select: false
        },
        {
          icon: "icon-item4",
          name: "商户管理",
          path: "a_pos_management",
          index: 3,
          select: false
        },
        {
          icon: "icon-item5",
          name: "信息管理",
          path: "a_information",
          index: 4,
          select: false
        }
      ]
    }
  },
  methods: {
    handleSelect (pick) {
      var array = this.items
      let atIndex = 0
      for (let i = 0; i < array.length; i++) {
        const item = array[i].path
        if (item === pick) {
          atIndex = i
        }
      }
      for (const iterator of this.items) {
        iterator.select = false
      }
      this.items[atIndex].select = true
      sessionStorage.setItem('activaItem', atIndex)
    },
    toindexData (index) {
      this.$emit("toindexData", index)
    }
  }
}
</script>

<style scoped>
.child-item {
  padding-left: 50px;
  background: #12223B;
}

.icon-active {
  background: #061220 !important;
}

.el-menu-item {
  padding: 0 !important;
}

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
  width: 220px;
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

.icon-item1 {
  padding-left: 24px;
  background: url('~imgurl/amenu_icon1.png') no-repeat center left;
  background-size: 18px 15px;
}

.icon-item2 {
  padding-left: 24px;
  background: url('~imgurl/amenu_icon2.png') no-repeat center left;
  background-size: 18px 15px;
}

.icon-item3 {
  padding-left: 24px;
  background: url('~imgurl/amenu_icon3.png') no-repeat center left;
  background-size: 18px 15px;
}

.icon-item4 {
  padding-left: 24px;
  background: url('~imgurl/amenu_icon4.png') no-repeat center left;
  background-size: 18px 15px;
}

.icon-item5 {
  padding-left: 24px;
  background: url('~imgurl/amenu_icon5.png') no-repeat center left;
  background-size: 18px 15px;
}
</style>
