import { shallowMount } from '@vue/test-utils';
import ButtonGroup from '@/components/ButtonGroup.vue';

describe('ButtonGroup.vue', () => {
  describe('Basic Rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(ButtonGroup, {
        slots: {
          default: '<button class="btn">Submit</button>',
        },
      });
    });
    it("Has class 'btn-group'", () => {
      expect(wrapper.classes()).toContain('btn-group');
    });

    it('Has a default slot', () => {
      expect(wrapper.findAll('.btn').length).toBe(1);
    });

    it('Can be block', () => {
      wrapper.setProps({ block: true });
      expect(wrapper.classes()).toContain('btn-group-block');
    });
  });
});
