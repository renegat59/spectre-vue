<template>
  <textarea
    class="form-input"
    v-bind="$attrs"
    v-on="computedListeners"
    :rows="rows"
    :cols="cols">
  </textarea>
</template>

<script>
import { isNumber } from '../../utils/validators';

export default {
  props: {
    rows: {
      type: [Number, String],
      validator: isNumber,
    },
    cols: {
      type: [Number, String],
      validator: isNumber,
    },
  },
  computed: {
    computedListeners() {
      return Object.assign({}, this.$listeners, {
        input: e => this.$emit('input', e.target.value),
      });
    },
  },
};
</script>
