import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-loading', () => {
  it('Should add the loading class if no value passed', () => {
    const wrapper = shallowMount({
      template: '<div v-loading>Hello</div>',
    });
    expect(wrapper.classes()).toContain('loading');
  });

  it('Should accept the "lg" modifier to show bigger spinner', () => {
    const wrapper = shallowMount({
      template: '<div v-loading.lg>Hello</div>',
    });
    expect(wrapper.classes()).toContain('loading-lg');
  });

  describe('Passing boolean argument', () => {
    const wrapper = shallowMount({
      template: '<div v-loading="isLoading">Hello</div>',
      data: () => ({
        isLoading: true,
      }),
    });

    it('Should add the loading class if passed value is true', () => {
      expect(wrapper.classes()).toContain('loading');
    });

    it('Should disappear the spinner when value changed to false', () => {
      wrapper.setData({ isLoading: false });
      expect(wrapper.classes()).not.toContain('loading');
      wrapper.setData({ isLoading: true });
      expect(wrapper.classes()).toContain('loading');
    });
  });
});
