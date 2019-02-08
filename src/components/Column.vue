<template>
  <div :class="['column', columnsClass, autoOffsetClass]">
    <slot></slot>
  </div>
</template>

<script>
import { screenSizes } from "../consts.js";
export default {
  data() {
    return {
      defaultColumns: 12
    };
  },
  props: {
    /**
     * columns can be either one of those:
     * - Number (one number for all the scren sizes),
     * - String 'auto' which will create a class column column-auto
     * - Object that defines number or 'auto' per screen size.
     *   Example:
     *   {
     *      xs: 12,
     *      md: 6,
     *      xl: 4
     *   }
     * - Array with the first element being a default number of columns and second
     *   being the object as specified above. Example:
     *   [6, {xs: 12}]
     */
    columns: {
      //should we really do a validation here?
    },
    autoOffset: {
      validator: function(value) {
        return ["l", "r", "x"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    columnsClass() {
      //case 'auto'
      if (this.columns === "auto") return "col-auto";
      //case number 1-12
      const columnsNumber = parseInt(this.columns);
      if (!isNaN(columnsNumber)) {
        return this.columnNumberClass(columnsNumber);
      }
      //case of object with sizes
      if (typeof this.columns == "object") {
        return this.columnSizesClass(this.columns);
      }
      //case of Array with number and object
      console.log(this.columns);
      if (Array.isArray(this.columns) && this.columns.length == 2) {
        let colClass = '';
        if(this.columns[0] === 'auto') {
          colClass += 'col-auto';
        } else {
          const defaultColumnNumber = parseInt(this.columns[0]);
          if (!isNaN(defaultColumnNumber)) {
            colClass += this.columnNumberClass(defaultColumnNumber);
          }
        }

        const screenSizeCols = this.columns[1];
        if (typeof screenSizeCols == "object") {
          colClass += this.columnSizesClass(screenSizeCols);
        }
        return colClass;
      }
      return '';
    },
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
          .filter(size => screenSizes.indexOf(size) !== -1 || size === 'auto')
          .map(size => `col-${size}-${this.columns[size]}`);
      }
    },
};
</script>

<style>
</style>
