export default {
  props: {
    name: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formElementClasses() {
      const classes = [];
      if (this.inline) {
        classes.push('form-inline');
      }
      return classes;
    },
  },
};
