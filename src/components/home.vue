<template>
  <div id="home">
    <topBar v-on:queryWanted="queryWanted" />
    <h1 class="text-center">Stock Grapher</h1>
    <h3 class="text-center">By Aarav Borthakur and Aarush Vailaya</h3>
    <br>
    <center>
      <p class="text-center">
        <span>This website allows you to find similar stocks based on a multitude of factors.</span>
        <br>
      <span>To get started, <a v-on:click="queryWanted()">click here</a>.</span>
      </p>
    </center>
  </div>
</template>

<script>
import topBar from './topBar.vue'

export default {
  name: 'home',
  components: { topBar },
  methods: {
    queryWanted (event) {
      event
      this.$emit('queryWanted')
    }
  }
}
</script>

<style scoped />