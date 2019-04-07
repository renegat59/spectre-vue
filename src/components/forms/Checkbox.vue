<template>
  <div>
    <label v-for="(val, key) in options" :class="['form-checkbox', ...formElementClasses]" :key="key">
      <input type="checkbox" :name="name" :value="key" v-model="selecteValues">
      <i class="form-icon"></i> {{ val }}
    </label>
  </div>
</template>

<script>
import Vue from 'vue';
import FormElement from './FormElement';
export default Vue.extend({
  mixins: [FormElement],
  data() {
    return {
      selecteValues: []
    }
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    values: {
      type: Array,
      default: []
    }
  },
  created() {
    this.selecteValues = this.values;
  }
});
</script>

<style>
</style>
