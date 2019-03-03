<template>
  <component :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "section"
    }
  }
};
</script>

<style>
</style>
