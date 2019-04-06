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
export default {
  props: {
    rows: {
      type: Number,
    },
    cols: {
      type: Number,
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
