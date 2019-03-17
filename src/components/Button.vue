<template>
  <component v-if="tag !== 'input'" :is="tag" class="btn">
    <slot></slot>
  </component>
  <input v-else class="btn" :type="inputType" :value="inputValue">
</template>

<script>
// A. <button>Submit</button>
// B. <a href="#">Submit</a>
// C. <input type="submit" />
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    inputType: {
      type: String,
      default: "button"
    },
    to: {
      type: String
    },
    href: {
      type: String,
      default: "#"
    }
  },
  computed: {
    inputValue() {
      return this.tag === "input" && this.$slots.default[0]
        ? this.$slots.default[0].text
        : null;
    }
  }
};
</script>
