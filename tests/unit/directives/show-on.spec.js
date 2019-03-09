import Vue from 'vue';
import '@/directives';

describe('Directive v-show-on', () => {
  it('should show on XS', () => {
    const vm = new Vue({
      template: '<div><span v-show-on.xs>hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="show-xs">hello</span>');
  });
});
