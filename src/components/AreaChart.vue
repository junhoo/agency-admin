<template>
   <div>
     <apexchart height="350" type="area" :options="chartOptions" :series="series" />
   </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  watch: {
    list (val) {
      this.series[0].data = val
    }
  },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }]
    }
  }
}
</script>

<style lang="scss">
.apexcharts-menu-icon, .apexcharts-menu {
  opacity: 0;
}
</style>
