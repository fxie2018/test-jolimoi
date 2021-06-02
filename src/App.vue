<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  data(){
    return {
    }
  },
}
</script>

<style>
  @import './style/common.css';
  #app{
    max-width: 1500px;
    margin: 0 auto;
  }
</style>
