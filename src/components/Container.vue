<template>
  <div :class="[
  'container',
  this.grid ? `grid-${grid}` : ''
  ]">
    <slot></slot>
  </div>
</template>

<script>
import { screenSizes } from '../consts';
import { inArray } from '../utils/validators';

export default {
  props: {
    grid: {
      type: String,
      validator: inArray(screenSizes),
    },
  },
};
</script>
