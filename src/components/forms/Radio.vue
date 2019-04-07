<template>
  <div>
    <label v-for="(val, key) in options" :class="['form-radio', ...formElementClasses]" :key="key">
      <input type="radio" :name="name" :value="key" v-model="selectedValue">
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
      selectedValue: ''
    }
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  created() {
    this.selectedValue = this.value;
  }
});
</script>

<style>
</style>
