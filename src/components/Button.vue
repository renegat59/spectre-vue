<template>
  <component
    v-if="tag !== 'input'"
    :is="tag"
    :class="[
    'btn',
    typeClass,
    sizeClass,
    formClass,
    stateClasses
  ]"
  >
    <slot></slot>
  </component>
  <input v-else :class="[
    'btn',
    typeClass,
    sizeClass,
    formClass,
    stateClasses
  ]" :type="inputType" :value="inputValue">
</template>

<script>
const buttonTypes = ["primary", "link", "success", "error"];
const buttonSizes = ["lg", "sm"];
const buttonForms = ["block", "action"];

// A. <button>Submit</button>
// B. <a href="#">Submit</a>
// C. <input type="submit" />
export default {
  props: {
    type: {
      type: String,
      validator: value => buttonTypes.indexOf(value) !== -1
    },
    size: {
      type: String,
      validator: value => buttonSizes.indexOf(value) !== -1
    },
    form: {
      type: String,
      validator: value => buttonForms.indexOf(value) !== -1
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },

    tag: {
      type: String,
      default: "button"
    },

    /**
     * Used if tag="input", otherwise ignored
     */
    inputType: {
      type: String,
      default: "button"
    },

    /**
     * Used to build the Vue Router link, otherwise ignored
     */
    to: {
      type: String
    },

    /**
     * Used if tag="a", otherwise ignored
     */
    href: {
      type: String,
      default: "#"
    }
  },
  computed: {
    inputValue() {
      return this.$slots.default[0] ? this.$slots.default[0].text : null;
    },
    typeClass() {
      return this.type ? `btn-${this.type}` : null;
    },
    formClass() {
      return this.form ? `btn-${this.form}` : null;
    },
    sizeClass() {
      return this.size ? `btn-${this.size}` : null;
    },
    stateClasses() {
      //Do it nicer:
      // return `${this.active && "active"} ${this.disabled && "disabled"} ${this
      //   .disabled && "disabled"}`.trim();
    }
  }
};
</script>
