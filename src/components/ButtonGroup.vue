<template>
  <div :class="['btn-group', {
    'btn-group-block': block
  }]">
  <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>
