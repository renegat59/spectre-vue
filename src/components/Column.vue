<template>
  <div
    :class="[
    'column',
    autoOffsetClass,
    col ? `col-${col}` : '',
    ...colClasses
  ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { screenSizes, autoOffsets } from '../consts';
import { inArray } from '../utils/validators';

const columnsTypedef = {
  type: [String, Number],
  validator: (value) => {
    const intValue = Number.parseInt(value, 10);
    return (
      value === 'auto'
      || (Number.isInteger(intValue) && intValue > 0 && intValue <= 12)
    );
  },
};

export default {
  data() {
    return {
      defaultColumns: 12,
    };
  },
  props: {
    col: columnsTypedef,
    xs: columnsTypedef,
    sm: columnsTypedef,
    md: columnsTypedef,
    lg: columnsTypedef,
    xl: columnsTypedef,
    autoOffset: {
      validator: value => inArray(value, autoOffsets),
    },
  },
  computed: {
    autoOffsetClass() {
      return this.autoOffset ? `col-m${this.autoOffset}-auto` : '';
    },
    colClasses() {
      return screenSizes
        .map(size => (size ? `col-${size}-${this[size]}` : ''))
        .filter(el => el !== '');
    },
  },
  methods: {},
};
</script>
