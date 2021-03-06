import Vue from 'vue';
import { screenSizes } from '../consts';

// the directives should look like v-show-on.xs.xl and v-hide-on.xs.xl

Vue.directive('show-on', {
  bind(el, binding) {
    Object.keys(binding.modifiers)
      .filter(modifier => screenSizes.indexOf(modifier) !== -1)
      .forEach(modifier => el.classList.add(`show-${modifier}`));
  },
});
