<template>
  <div id="app">
    <div v-if="page === 'home'">
      <home v-on:queryWanted="queryWanted" />
    </div>
    <div v-else-if="page === 'query'">
      <query v-on:homeWanted="homeWanted" />
    </div>
  </div>
</template>

<script>
import home from './components/home.vue'
import query from './components/query.vue'

export default {
  name: 'app',
  components: {
    home,
    query
  },
  methods: {
    queryWanted: function(event) {
      event
      this.page = 'query'
    },
    homeWanted: function(event) {
      event
      this.page = 'home'
    }
  },
  data: function () {
    return {
      page: 'home'
    }
  }
}
</script>

<style />