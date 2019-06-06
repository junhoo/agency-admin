<template>
   <div>
     <apexchart type=area height=350 :options="chartOptions" :series="series" />
   </div>
</template>

<script>
export default {
  props: {
    objs: Object
  },
  watch: {
    objs (val) {
      this.series[0].data = val.data1
      this.series[1].data = val.data2
    }
  },
  data () {
    return {
      series: [{
        name: '充值',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: '提现',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },

        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
            "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
            "2018-09-19T06:30:00"
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },

        }
      }
    }
  }
}
</script>

<style scoped>
</style>
