<template>
  <div
    :class="['columns', {'col-gapless': gapless, 'col-oneline': oneline}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gapless: {
      type: Boolean,
      default: false,
    },
    oneline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
