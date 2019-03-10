import Vue from 'vue';
import { cursors } from '../consts';


Vue.directive('cursor', {
  bind(el, binding) {
    if (cursors.indexOf(binding.value) !== -1) {
      el.classList.add(`c-${binding.value}`);
    }
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      if (cursors.indexOf(binding.value) !== -1) {
        el.classList.add(`c-${binding.value}`);
        el.classList.remove(`c-${binding.oldValue}`);
      }
    }
  },
});
