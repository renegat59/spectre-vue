import { shallowMount } from '@vue/test-utils';
import Row from '@/components/Row.vue';

describe('Row.vue', () => {
  describe('basic Row rendering', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Row, {
        slots: {
          default: '<div class="column"></div>',
        },
      });
    });

    it("Has class 'columns'", () => {
      expect(wrapper.classes()).toContain('columns');
    });

    it('Has a default slot', () => {
      expect(wrapper.findAll('.column').length).toBe(1);
    });
  });
});
