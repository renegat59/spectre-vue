import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-show-on', () => {
  it('should show on XS', () => {
    const wrapper = shallowMount({
      template: '<div v-show-on.xs>hello</div>',
    });
    expect(wrapper.classes()).toContain('show-xs');
  });
});
