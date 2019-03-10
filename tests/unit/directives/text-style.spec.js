
import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-text-style', () => {
  it('should add an appropriate text class', () => {
    const wrapper = shallowMount({
      template: '<div v-text-style.left>Hello</div>',
    });
    expect(wrapper.classes()).toContain('text-left');
  });

  it('should add text class for each modifier passed to directive', () => {
    const wrapper = shallowMount({
      template: '<div v-text-style.left.bold.capitalize>Hello</div>',
    });
    expect(wrapper.classes()).toContain('text-left');
    expect(wrapper.classes()).toContain('text-bold');
    expect(wrapper.classes()).toContain('text-capitalize');
  });

  it('should ignore unexisting modifiers', () => {
    const wrapper = shallowMount({
      template: '<div v-text-style.foo>Hello</div>',
    });
    expect(wrapper.classes()).toEqual([]);
  });
});
