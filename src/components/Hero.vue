<template>
  <div :class="['hero', sizeClass]">
    <div class="hero-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const sizeValidator = {
  type: String,
  validator: value => ["sm", "lg"].indexOf(value) !== -1
};

export default {
  props: {
    size: sizeValidator
  },
  computed: {
    sizeClass() {
      return sizeValidator.validator(this.size) ? `hero-${this.size}` : "";
    }
  }
};
</script>
