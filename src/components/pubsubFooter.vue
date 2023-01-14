<template>
  <div class="test">
    <h3 >Footer</h3>
    Keys: {{ keys }}<br />
    Last event: {{ events }}<br />
    {{ eventArray }}<br />
  </div>
</template>

<script>
export default {
  name: "pubsub-footer",
  props: {
    keys: {
      type: String,
    },
    events: {
      type: String,
    },
    eventArray: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.test {
    background-color: #ffffff;  
}
  

</style>