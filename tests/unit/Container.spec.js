import { shallowMount } from '@vue/test-utils';
import Container from '@/components/Container.vue';

describe('Container.vue', () => {
  it("Has class 'container'", () => {
    const wrapper = shallowMount(Container);
    expect(wrapper.classes()).toContain('container');
  });
  it("Has a default slot", () => {
    const wrapper = shallowMount(Container, {
      slots: {
        default: '<div class="columns"></div>'
      }
    });
    expect(wrapper.findAll(".columns").length).toBe(1);
  });
});
