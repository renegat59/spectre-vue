import Vue from 'vue';
import { shapes } from '../consts';


Vue.directive('shape', {
  bind(el, binding) {
    if (shapes.indexOf(binding.arg) !== -1) {
      el.classList.add(`s-${binding.arg}`);
    }
  },
});
