<template>
  <div
    :class="['column',
    autoOffsetClass,
    col ? `col-${col}` : '',
    xs ? `col-xs-${xs}` : '',
    sm ? `col-sm-${sm}` : '',
    md ? `col-md-${md}` : '',
    lg ? `col-lg-${lg}` : '',
    xl ? `col-xl-${xl}` : '',
  ]"
  >
    <slot></slot>
  </div>
</template>

<script>
import { screenSizes, autoOffsets } from "../consts";

const columnsTypedef = {
  type: [String, Number],
  validator: value => {
    const intValue = parseInt(value);
    return value === "auto" || (Number.isInteger(intValue) && intValue > 0 && intValue <= 12);
  }
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
      validator: value => autoOffsets.indexOf(value) !== -1
    }
  },
  computed: {
    autoOffsetClass() {
      return this.autoOffset ? `col-m${this.autoOffset}-auto` : "";
    }
  },
  methods: {}
};
</script>

<style>
</style>
