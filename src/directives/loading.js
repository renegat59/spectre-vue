import Vue from 'vue';

Vue.directive('loading', {
  bind(el, binding) {
    const value = typeof(binding.value) !== 'undefined' ? binding.value : true;
    let type = Object.keys(binding.modifiers)[0] || '';
    if (value) {
      el.classList.add(`loading${type === 'lg' ? '-lg' : ''}`);
    }
  },
  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      const value = typeof(binding.value) !== 'undefined' ? binding.value : true;
      let type = Object.keys(binding.modifiers)[0] || '';
      if (!value) {
        el.classList.remove(`loading${type === 'lg' ? '-lg' : ''}`);
      } else {
        el.classList.add(`loading${type === 'lg' ? '-lg' : ''}`);
      }
    }
  }
});
