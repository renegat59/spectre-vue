import Vue from 'vue';
import { textStyles } from '../consts';

Vue.directive('text-style', {
  bind(el, binding) {
    Object.keys(binding.modifiers)
      .filter(modifier => textStyles.indexOf(modifier) !== -1)
      .forEach(modifier => el.classList.add(`text-${modifier}`));
  },
});
