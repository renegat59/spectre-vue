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

export default {
  props: {
    grid: {
      type: String,
      validator: value => screenSizes.indexOf(value) !== -1,
    },
  },
};
</script>
