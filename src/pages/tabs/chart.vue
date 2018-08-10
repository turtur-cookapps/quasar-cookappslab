<template>
  <q-page class="flex flex-left">
    <barchart :data="this.chartData"></barchart>
  </q-page>
</template>

<style>
</style>

<script>

import barchart from './component/barchart'

export default {
  components: {
    barchart
  },
  data () {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }
    }
  },
  mounted () {

  }
}
</script>
