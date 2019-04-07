<template>
  <label :class="['form-radio', ...formElementClasses]">
    <input
      type="radio"
      :checked="shouldBeChecked"
      :value="value"
      :name="name"
      :disabled="disabled"
      @change="updateInput"
    >
    <i class="form-icon"></i> {{ label }}
  </label>
</template>
<script>
import Vue from 'vue';
import FormElement from './FormElement';

export default Vue.extend({
  mixins: [FormElement],
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    value: {
      type: String,
    },
    modelValue: {
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    updateInput() {
      this.$emit('change', this.value);
    },
  },
});
</script>
