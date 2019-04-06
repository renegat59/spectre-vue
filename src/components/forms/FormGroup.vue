<template>
  <div class="form-group">
    <s-label v-if="label">
      {{ label }}
    </s-label>
    <slot></slot>
  </div>
</template>

<script>
import Label from './Label.vue';

export default {
  components: {
    's-label': Label,
  },
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
