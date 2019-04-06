<template>
  <input class="form-input" v-bind="$attrs" v-on="computedListeners">
</template>

<script>
export default {
  computed: {
    computedListeners() {
      return Object.assign({}, this.$listeners, {
        input: e => this.$emit('input', e.target.value),
      });
    },
  },
};
</script>
