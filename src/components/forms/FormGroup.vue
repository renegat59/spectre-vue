<template>
  <div class="form-group">
    <label v-if="label" class="form-label">
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>

</style>
