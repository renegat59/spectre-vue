import Navbar from '@/components/Navbar.vue';
import { shallowMount } from '@vue/test-utils';

describe('Navbar.vue', () => {
  describe('basic Navbar rendegring', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Navbar, {
        slots: {
          default: '<section class="navbar-section"></section>',
        },
      });
    });

    it("Has class 'navbar'", () => {
      expect(wrapper.classes()).toContain('navbar');
    });

    it('Has a default slot', () => {
      expect(wrapper.findAll('.navbar-section').length).toBe(1);
    });
  });

  it("Has a 'tag' prop to set the navbar HTML tag", () => {
    const wrapper = shallowMount(Navbar, {
      propsData: {
        tag: 'div',
      },
    });
    expect(wrapper.element.nodeName).toBe('DIV');
  });
});
