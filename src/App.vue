<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar";

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }


</style>
