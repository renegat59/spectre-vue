<template>
  <div>
    <label v-for="(value, key) in values" class="form-radio" :key="key">
      <input type="radio" name="gender" checked>
      <i class="form-icon"></i> {{ value }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    values: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
