<template>
  <div id="query">
    <topBar v-on:homeWanted="homeWanted" />
    <center>
        <input type="text" placeholder="Revenue USD Mil" size="30">
        <input type="text" placeholder="Gross Margin %" size="30">
        <input type="text" placeholder="Operating Income USD Mil" size="30">
        <input type="text" placeholder="Operating Margin %" size="30">
        <input type="text" placeholder="Net Income USD Mil" size="30">
        <input type="text" placeholder="Earnings Per Share USD" size="30">
        <input type="text" placeholder="Dividents USD" size="30">
        <input type="text" placeholder="Payout Ratio %" size="30">
        <input type="text" placeholder="Shares Mil" size="30">
        <input type="text" placeholder="Book Value Per Share * USD" size="30">
        <input type="text" placeholder="Operating Cash Flow USD Mil" size="30">
        <input type="text" placeholder="Cap Spending USD Mil" size="30">
        <input type="text" placeholder="Free Cash Flow USD Mil" size="30">
        <input type="text" placeholder="Free Cash Flow Per Share * USD" size="30">
        <input type="text" placeholder="Working Capital USD Mil" size="30">
        <input type="text" placeholder="Margins % of Sales" size="30">
    </center>
  </div>


</template>

<script>
import topBar from './topBar.vue'

export default {
  name: 'query',
  components: { topBar },
  methods: {
    homeWanted (event) {
      event
      this.$emit('homeWanted')
    }
  }
}
</script>

<style>

</style>