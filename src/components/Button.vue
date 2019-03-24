<template>
  <component
    v-if="tag !== 'input'"
    :is="tag"
    :href="tag === 'a' ? this.href : null"
    :class="[
    'btn',
    typeClass,
    sizeClass,
    formClass,
    stateClasses
  ]"
    v-on="buttonListeners"
  >
    <slot></slot>
  </component>
  <input
    v-else
    :class="[
    'btn',
    typeClass,
    sizeClass,
    formClass,
    stateClasses
  ]"
    :type="inputType"
    :value="inputValue"
    v-on="buttonListeners"
  >
</template>

<script>
// A. <button>Submit</button>
// B. <a href="#">Submit</a>
// C. <input type="submit" />

import { isArray } from '../utils/validators';

export default {
  props: {
    type: {
      type: String,
      validator: value => inArray(value, ['primary', 'link', 'success', 'error']),
    },
    size: {
      type: String,
      validator: value => inArray(value, ['lg', 'sm']),
    },
    form: {
      type: String,
      validator: value => inArray(value, ['block', 'action']),
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },

    tag: {
      type: String,
      default: 'button',
    },

    /**
     * Used if tag="input", otherwise ignored
     */
    inputType: {
      type: String,
      default: 'button',
    },

    /**
     * Used to build the Vue Router link, otherwise ignored.
     * It's not implemented yet
     */
    to: {
      type: String,
      validator: (value) => {
        throw 'Not implemented';
      },
    },

    /**
     * Used if tag="a", otherwise ignored
     */
    href: {
      type: String,
      default: '#',
    },
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
      return {
        active: this.active,
        disabled: this.disabled,
        loading: this.loading,
      };
    },
    buttonListeners() {
      return this.$listeners;
    },
  },
};
</script>
