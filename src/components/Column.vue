<template>
  <div
    :class="['column',
    autoOffsetClass,
    this.col ? `col-${col}` : '',
    this.xs ? `col-xs-${xs}` : '',
    this.sm ? `col-sm-${sm}` : '',
    this.md ? `col-md-${md}` : '',
    this.lg ? `col-lg-${lg}` : '',
    this.xl ? `col-xl-${xl}` : '',
  ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { screenSizes, autoOffsets } from "../consts";

const columnsTypedef = {
  type: [String, Number],
  validator: value =>
    value === "auto" || (Number.isInteger(value) && value > 0 && value <= 12)
};

export default {
  data() {
    return {
      defaultColumns: 12
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
      validator(value) {
        return autoOffsets.indexOf(value) !== -1;
      }
    }
  },
  computed: {
    autoOffsetClass() {
      return this.autoOffset ? `col-m${this.autoOffset}-auto` : "";
    }
  },
  methods: {
    columnNumberClass(cols) {
      return cols > 0 && cols <= 12 ? `col-${cols}` : "";
    },
    columnSizesClass(screenSizeColumns) {
      return Object.keys(screenSizeColumns)
        .filter(size => screenSizes.indexOf(size) !== -1 || size === "auto")
        .map(size => `col-${size}-${this.columns[size]}`);
    }
  }
};
</script>

<style>
</style>
