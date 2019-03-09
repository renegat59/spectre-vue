import Vue from 'vue';
import '@/directives';

describe('Directive v-hide-on', () => {
  it('should hide on XS', () => {
    const vm = new Vue({
      template: '<div><span v-hide-on.xs>hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="hide-xs">hello</span>');
  });
});
