import { mount } from '@vue/test-utils';
import Container from '@/components/Container.vue';

describe('Container.vue', () => {
  it("has class 'container'", () => {
    const wrapper = mount(Container);
    expect(wrapper.classes()).toContain('container');
  });
});
