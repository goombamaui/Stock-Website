<template>
  <div id="topBar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" v-on:click="homeWanted">Stock Grapher</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a v-on:click="queryWanted">Stock Data</a></li>
          <li><a href="https://github.com/goomabmaui/Stock-Website">Github</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  methods: {
    homeWanted: function() {
      this.$emit("homeWanted")
    },
    queryWanted: function() {
      this.$emit("queryWanted")
    }
  }
}
</script>

<style scoped />