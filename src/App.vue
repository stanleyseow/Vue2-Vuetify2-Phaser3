<template>
  <div id="app">
    <v-app>
      <Navbar />
      <start-phaser> </start-phaser>
      <h1>Footer</h1>
      Keys: {{ keys }}<br />
      Last event: {{ events }}<br />
      {{ eventArray }}<br />
    </v-app>
  </div>
</template>
<script>
import startPhaser from "./components/startPhaser.vue";
import Navbar from "./components/Navbar.vue";
import PubSub from "pubsub-js";

var TOPIC1 = "MOVE";
var TOPIC2 = "EVENT";

export default {
  name: "App",
  components: {
    startPhaser,
    Navbar,
  },
  data() {
    return {
      keys: {},
      events: {},
      eventArray: [],
    };
  },
  methods: {
    saveKey(msg, data) {
      this.keys = msg + ": " + data.key;
    },
    saveEvent(msg, data) {
      this.events = msg + ": " + data.event;
      this.eventArray.push(this.events);
    },
  },
  mounted() {
    PubSub.subscribe(TOPIC1, (msg, data) => {
      console.log(msg, data);
      this.saveKey(msg, data);
    });

    PubSub.subscribe(TOPIC2, (msg, data) => {
      console.log(msg, data);
      this.saveEvent(msg, data);
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
