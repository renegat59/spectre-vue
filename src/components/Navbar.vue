<template>
  <component :is="tag" class="navbar">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'header',
    },
  },
};
</script>
