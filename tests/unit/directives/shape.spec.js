import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-shape', () => {
  it('should add class s-rounded then argument is rounded', () => {
    const wrapper = shallowMount({
      template: '<div v-shape:rounded>Hello</div>'
    });
    expect(wrapper.classes()).toContain('s-rounded');
  });

  it('should add class s-circle then argument is circle', () => {
    const wrapper = shallowMount({
      template: '<div v-shape:circle>Hello</div>'
    });
    expect(wrapper.classes()).toContain('s-circle');
  });
});
