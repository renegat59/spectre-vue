import { shallowMount } from '@vue/test-utils';
import Divider from '@/components/Divider.vue';

describe('Divider.vue', () => {
  it('Renders div with divider class', () => {
    const wrapper = shallowMount(Divider);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.classes()).toContain('divider');
    wrapper.setProps({ vertical: true });
    expect(wrapper.classes()).toContain('divider-vert');
  });

  it('Has the data attribute to show the content', () => {
    const wrapper = shallowMount(Divider, {
      propsData: {
        content: 'Hello',
      },
    });
    expect(wrapper.attributes('data-content')).toBe('Hello');
  });
});
