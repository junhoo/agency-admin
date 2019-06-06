<template>
   <div>
     <!-- <apexchart height="350" type="area" :options="chartOptions" :series="series" /> -->
     <apexchart type=bar height=350 :options="chartOptions" :series="series" />
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
      series: [
        {
          name: '买入金额',
          data: [40, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: '卖出金额',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'	
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },

        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          },
          // axisLine: {
          //   lineStyle: {
          //       type: 'solid',
          //       color: '#fff',
          //       width: '8'
          //   }
          // }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
