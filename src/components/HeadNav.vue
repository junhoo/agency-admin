<template>
    <header class="head-nav">
        <div class="content">
          <div class="icon-left"></div>
          <p class="nav-name">收益钱包</p>
        </div>
        <div class="content">
          <p>欢迎你xx代理</p>
          <div class="icon-right"></div>
        </div>
    </header>
</template>

<script>
export default {
  name: "head-nav",
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    setDialogInfo(cmditem) {
      if (!cmditem) {
        console.log("test");
        this.$message("菜单选项缺少command属性");
        return;
      }
      switch (cmditem) {
        case "info":
          this.showInfoList();
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    showInfoList() {
      // 个人信息
      this.$router.push("/infoshow");
    },
    logout() {
      // 清除token
      localStorage.removeItem("eleToken");
      this.$store.dispatch("clearCurrentState");

      // 页面跳转
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.head-nav {
  position: relative;
  height: 100px;
  color: #fff;
  background: #09192F;
  border-bottom: 1px solid #1f2d3d;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  box-sizing: border-box;
  .nav-name {
    color: #3986E2;
    font-size: 14px;
    margin-left: 55px;
  }
  .content {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    .icon-left {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #37EC6B;
      // background: url('~imgurl/logo.png') no-repeat center;
      // background-size: 10px;
      margin-left: 40px;
    }
    .icon-right {
      width: 30px;
      height: 40px;
      background: url('~imgurl/siginout.png') no-repeat center;
      background-size: 18px 18px;
      margin-left: 16px;
      margin-right: 40px;
    }
  }
}
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  vertical-align: middle;
  font-size: 22px;
  font-family: "Microsoft YaHei";
  letter-spacing: 3px;
}
.user {
  line-height: 60px;
  text-align: right;
  float: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.name {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.comename {
  font-size: 12px;
}
.avatarname {
  color: #409eff;
  font-weight: bolder;
}
.username {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}
</style>
