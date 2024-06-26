<template>
  <div>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { reactiveProp } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

