<template>
  <div>
    <apexchart type="area" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
export default {
  props: {
    objs: Object
  },
  watch: {
    objs: {
      handler(newName) {
        this.series[0].data = newName.midList1;
        this.series[1].data = newName.midList2;
      },
      deep: true
    }
  },
  data() {
    return {
      series: [
        {
          name: "充值",
          data: []
        },
        {
          name: "提现",
          data: []
        }
      ],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },

        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      }
    };
  }
};
</script>

<style scoped>
</style>
