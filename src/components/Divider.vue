<template>
  <div :class="`divider${this.vertical ? '-vert' : ''}`" :data-content="content"></div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    content: String
  }
};
</script>
