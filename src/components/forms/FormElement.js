export default {
  props: {
    name: {
      type: String
    },
    value: {
      type: [String, Array]
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formElementClasses() {
      let classes = [];
      if(this.inline) {
        classes.push('form-inline')
      }
      return classes;
    }
  }
};
