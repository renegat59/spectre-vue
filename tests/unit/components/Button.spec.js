import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  describe('basic Button rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(Button, {
        slots: {
          default: 'Submit',
        },
      });
    });
    it("Has class 'btn'", () => {
      expect(wrapper.classes()).toContain('btn');
    });

    it('Has a default slot', () => {
      console.log(wrapper.element);
      expect(wrapper).toBe('Submit');
    });

    it('should render <button> if no tag is specified', () => {
      expect(wrapper.is('button')).toBe(true);
    });
  });
});
