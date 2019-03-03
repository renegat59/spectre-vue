<template>
  <component :is="tag" :class="[center ? 'navbar-center' : 'navbar-section']">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "section"
    },
    center: {
      type: Boolean,
      default: false
    }
  }
};
</script>

