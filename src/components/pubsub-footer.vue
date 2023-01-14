<template>
  <div>
    <h3>Footer</h3>
    Keys: {{ keys }}<br />
    Last event: {{ events }}<br />
    {{ eventArray }}<br />
  </div>
</template>

<script>
export default {
  name: "myProduct",
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
