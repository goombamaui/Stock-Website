<template>
  <div id="app">
    <topBar />
      <h1 class="text-center">Stock Grapher</h1>
      <h3 class="text-center">By Aarav Borthakur and Aarush Vailaya</h3>
    <p class="text-center">
      <span>This website allows you to find similar stocks based on a multitude of factors.</span>
      <br>
      <span>To get started, <a href="/query">click here</a> </span>
    </p>
  </div>
</template>

<script>
import topBar from './components/topBar.vue'

export default {
  name: 'app',
  components: {
    topBar
  }
}
</script>

<style />
