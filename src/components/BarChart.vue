<template>
  <div>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"/>
  </div>
</template>

<script>
export default {
  props: {
    objs: Object,
    ccc: Array
  },
  watch: {
    objs: {
      handler(newName) {
        this.series[0].data = newName.midList1
        this.series[1].data = newName.midList2
        this.chartOptions.xaxis.categories = newName.name_list
        // console.log('====')
        // console.log(newName.name_list)
        // console.log(this.chartOptions.xaxis.categories)
      },
        deep: true
      },
    ccc: {
      handler(newName) {
        console.log('====')
        console.log(newName)
        this.chartOptions.xaxis.categories = newName
        console.log('+++')
        console.log(this.chartOptions.xaxis.categories)
      },
        deep: true
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
          // categories: []
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          },
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                color: '#f5f5f5',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                cssClass: 'apexcharts-yaxis-label',
            }
          },
          axisBorder: {
            show: true,
            color: '#f5f5f5',
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#f5f5f5',
            width: 6,
            offsetX: 0,
            offsetY: 0
          },
          crosshairs: {
            show: true,
            position: 'back',
            stroke: {
                color: '#f5f5f5',
                width: 1,
                dashArray: 0,
            },
          }
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
