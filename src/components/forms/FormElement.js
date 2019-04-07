export default {
  props: {
    name: {
      type: String
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
