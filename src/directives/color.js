import Vue from 'vue';
import { colors } from '../consts';

// the directives should look like v-color:bg="color"

Vue.directive('color', {
  bind(el, binding) {
    const type = binding.arg || 'text';
    if (['bg', 'text'].indexOf(type) !== -1
      && colors.indexOf(binding.value) !== -1) {
      el.classList.add(`${type}-${binding.value}`);
    }
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      const type = binding.arg || 'text';
      if (['bg', 'text'].indexOf(type) !== -1
        && colors.indexOf(binding.value) !== -1) {
        el.classList.add(`${type}-${binding.value}`);
        el.classList.remove(`${type}-${binding.oldValue}`);
      }
    }
  },
});
