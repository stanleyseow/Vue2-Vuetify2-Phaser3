<template>
  <div>
    <div id="phaser-div" class="phaser"></div>
  </div>
</template>

<script>
import Game from "../game/index";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log("start Phaser when mounted") ;
    window.Phaser = new Game(); 
  },
  methods: {},
  watch: {},
  computed: {},
};
</script>

<style scoped>
.phaser {
  display: flex;
  background: grey;
}
</style>
