<template>
  <div :class="['hero', sizeClass]">
    <div class="hero-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inArray } from '../utils/validators';

const sizeValidator = {
  type: String,
  validator: inArray(['sm', 'lg']),
};

export default {
  props: {
    size: sizeValidator,
  },
  computed: {
    sizeClass() {
      return sizeValidator.validator(this.size) ? `hero-${this.size}` : '';
    },
  },
};
</script>
