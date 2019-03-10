import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-text', () => {
  it('shold add an appropriate text class', () => {
    const wrapper = shallowMount({
      template: '<div v-text.left>Hello</div>',
    });
    expect(wrapper.classes()).toContain('text-left');
  });

  it('shold add text class for each modifier passed to directive', () => {
    const wrapper = shallowMount({
      template: '<div v-text.left.bold.capitalize>Hello</div>',
    });
    expect(wrapper.classes()).toContain('text-left');
    expect(wrapper.classes()).toContain('text-bold');
    expect(wrapper.classes()).toContain('text-capitalize');
  });

  it('should ignore unexisting modifiers', () => {
    const wrapper = shallowMount({
      template: '<div v-text.foo>Hello</div>',
    });
    expect(wrapper.classes()).toEqual([]);
  });
});
