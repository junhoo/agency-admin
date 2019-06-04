<template>
  <div class="index">
    <HeadNav :headTitle='headtitleIndex'></HeadNav>
    <LeftMenu @toindexData="sendleftData"></LeftMenu>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
import LeftMenu from "../components/LeftMenu";

export default {
  name: "index",
  components: {
    HeadNav,
    LeftMenu
  },
  data() {
    return {
      headtitleIndex: 0
    }
  },
  methods: {
    sendleftData(data){
      this.headtitleIndex=data;
    }
  }
};
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.rightContainer {
  box-sizing: border-box;
  position: fixed;
  top: 100px;
  left: 200px;
  right: 0;
  bottom: 0;
  width: calc(100% - 200px);
  height: calc(100% - 100px);
  overflow: auto;
  background-color: #061220;
  padding-left: 58px;
  padding-right: 28px;
}
</style>

