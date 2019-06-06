<template>
   <div>
     <!-- <apexchart height="350" type="area" :options="chartOptions" :series="series" /> -->
     <apexchart type=bar height=350 :options="chartOptions" :series="series" />
   </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 1
      // chartOptions: {
      //   chart: {
      //     id: 'vuechart-example2'
      //   },
      //   xaxis: {
      //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      //   }
      // },
      // series: [{
      //   name: 'series-1',
      //   data: [30, 40, 35, 50, 49, 60, 70, 91]
      // }],
      series: [{
        name: '买入金额',
        itemStyle : {  
          normal : { 
            color: '#f5f5f5',
            // color: function(){  
            //   return '#f5f5f5';   
            // },  
            label : {
              show : false  
            },  
            labelLine : {  
              show : false  
            }
          }
        },
        data: [40, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: '卖出金额',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }],
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
