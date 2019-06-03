<template>
  <div class="home">
    <section class="container">
      <div class="content">
        <p class="money">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <p class="money green">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <p class="money purple">1862,325</p>
        <p class="name">用户数量</p>
      </div>
      <div class="content">
        <div class="money light-blue">
          1862,325
          <div class="percent">30%</div>
        </div>
        <p class="name">用户数量</p>
      </div>
    </section>

    <section class="chart-top">
      <div class="title-box">
        <div class="icon"></div>
        <div class="text">代理收益趋势</div>
        <div class="date">日期</div>
      </div>
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
    </section>

    <section class="chart-box">
      <div class="mid-content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">项目方充值提现额排行</div>
          <div class="date">日期</div>
        </div>
      </div>
      <div class="mid-content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">充值提现趋势</div>
          <div class="date">日期</div>
        </div>
      </div>
    </section>

    <section class="chart-box chart-bottom">
      <div class="mid-content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">项目方充值提现额排行</div>
          <div class="date">日期</div>
        </div>
      </div>
      <div class="mid-content">
        <div class="title-box">
          <div class="icon"></div>
          <div class="text">充值提现趋势</div>
          <div class="date">日期</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    // this.chartSettings = {
    //   metrics: ['下单用户'],
    //   dimension: ['日期'],
    //   title: 'aaa',
    //   series: {
    //     itemStyle: {
    //       color: 'red'
    //     }
    //   }
    // }
    this.backgroundColor = 'gray'
    return {
      chartData: {
        columns: ['日期', '下单用户'],
        rows: [
          { '日期': '1/1', '下单用户': 1093 },
          { '日期': '1/2', '下单用户': 3230 },
          { '日期': '1/3', '下单用户': 2623 },
          { '日期': '1/4', '下单用户': 1423 },
          { '日期': '1/5', '下单用户': 3492 },
          { '日期': '1/6', '下单用户': 4293 }
        ]
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}

.container {
  box-sizing: border-box;
  margin-top: 30px;
  display: flex;
  .content {
    position: relative;
    height: 60px;
    width: 22%;
    border-right: 1.2px solid #051E33;
    &:last-child {
      border: 0;
    }
    .money {
      position: relative;
      height: 42px;
      line-height: 42px;
      font-size: 21px;
      color: #fff;
      .percent {
        position: absolute;
        top: 0; 
        right: 25px;
        font-size: 8px;
      }
    }
    .name {
      font-size: 12px;
      color: #7380A0;
      margin-bottom: 6px;
    }
    .green {
      color: #37EC6B;
    }
    .purple {
      color: #8C51F5;
    }
    .light-blue {
      color: #3BCCC9;
    }
  }
}

.chart-top {
  margin-top: 40px;
  .title-box {
    color: #fff;
    padding-left: 36px;
    text-align: left;
    height: 40px;
    line-height: 40px;
    .icon {
      float: left;
      width: 36px;
      height: 40px;
      background: url('~imgurl/logo.png') no-repeat center;
      background-size: 20px;
    }
    .text {
      float: left;
    }
    .date {
      color: #3884E0;
      float: right;
    }
  }
}

.chart-box {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
  .mid-content {
    width: 48.5%;
    height: 221px;
    .title-box {
      color: #fff;
      padding-left: 36px;
      text-align: left;
      height: 40px;
      line-height: 40px;
      .icon {
        float: left;
        width: 36px;
        height: 40px;
        background: url('~imgurl/logo.png') no-repeat center;
        background-size: 20px;
      }
      .text {
        float: left;
      }
      .date {
        color: #3884E0;
        float: right;
      }
    }
  }
}

.chart-bottom {
  margin-top: 27px;
}
</style>
