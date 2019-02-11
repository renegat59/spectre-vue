import { screenSizes } from './consts';

//the directives should look like v-show-on.xs.xl and v-hide-on.xs.xl

export const showOn = {
  bind(el, binding, vnode) {
    Object.keys(binding.modifiers)
      .filter(modifier => screenSizes.indexOf(modifier) !== -1)
      .forEach(modifier => el.classList.add(`show-${modifier}`));
  }
};

export const hideOn = {
  bind(el, binding, vnode) {
    Object.keys(binding.modifiers)
      .filter(modifier => screenSizes.indexOf(modifier) !== -1)
      .forEach(modifier => el.classList.add(`hide-${modifier}`));
  }
};
