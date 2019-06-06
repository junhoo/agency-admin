<template>
  <div>
    <!-- <apexchart height="350" type="area" :options="chartOptions" :series="series" /> -->
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
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
        this.series[0].data = newName.midList1
        this.series[1].data = newName.midList2
      },
       deep:true
      }

  },
  data () {
    return {
      series: [
        {
          name: '买入金额',
          data: []
        }, {
          name: '卖出金额',
          data: []
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
