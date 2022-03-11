<template>
  <div id="app">

    <h1>Testing Vue2 Phaser3</h1>
    <start-phaser> </start-phaser>
    <h1>Footer</h1>
  </div>
</template>
<script>
import startPhaser from "./components/startPhaser";

export default {
  name: "App",
  components: {
    startPhaser,
  },
  data() {
    return {} 
  }    
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
