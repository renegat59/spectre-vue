<template>
  <div
    class="columns"
    :class="{'col-gapless': gapless, 'col-oneline': oneline}">

  </div>
</template>

<script>
export default {
  props: {
    gapless:{
      type: Boolean,
      default: false
    },
    oneline:{
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>

</style>
