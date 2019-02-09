import { shallowMount } from '@vue/test-utils';
import Column from '@/components/Column.vue';

describe('Column.vue', () => {
  it("Has class 'column'", () => {
    const wrapper = shallowMount(Column);
    expect(wrapper.classes()).toContain('column');
  });
  it("Has a default slot", () => {
    const wrapper = shallowMount(Column, {
      slots: {
        default: '<p class="paragraph"></p>'
      }
    });
    expect(wrapper.findAll(".paragraph").length).toBe(1);
  });
});
