<template>
  <div id="app">

    <h1>Testing Vue2 Phaser3</h1>
    <start-phaser> </start-phaser>
    <h1>Footer</h1>
    {{keys}}
  </div>
</template>
<script>
import startPhaser from "./components/startPhaser";
import PubSub from 'pubsub-js'
let TOPIC = "MOVE"

export default {
  name: "App",
  components: {
    startPhaser,
  },
  data() {
    return {
      keys: {}
    } 
  },
  methods: {
    sendKey(key) {
        this.keys = key
    }
  }, 
  mounted() {
  PubSub.subscribe(TOPIC, (msg,data) => {
    //console.log(msg, data)
    this.sendKey(data.key);
});

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
