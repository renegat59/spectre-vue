import { shallowMount } from '@vue/test-utils';
import Row from '@/components/Row.vue';

describe('Row.vue', () => {
  it("Has class 'columns'", () => {
    const wrapper = shallowMount(Row);
    expect(wrapper.classes()).toContain('columns');
  });
  it("Has a default slot", () => {
    const wrapper = shallowMount(Row, {
      slots: {
        default: '<div class="column"></div>'
      }
    });
    expect(wrapper.findAll(".column").length).toBe(1);
  });
});
