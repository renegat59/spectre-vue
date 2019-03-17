import { shallowMount } from '@vue/test-utils';
import NavbarSection from '@/components/NavbarSection.vue';

describe('NavbarSection.vue', () => {
  describe('basic NavbarSection rendering', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(NavbarSection, {
        slots: {
          default: '<a href="#">Link</a>',
        },
      });
    });

    it("Has class 'navbar-section'", () => {
      expect(wrapper.classes()).toContain('navbar-section');
    });

    it('Has a default slot', () => {
      expect(wrapper.findAll('a').length).toBe(1);
    });
  });

  it("Has a 'tag' prop to set the navbar section HTML tag", () => {
    const wrapper = shallowMount(NavbarSection, {
      propsData: {
        tag: 'div',
      },
    });
    expect(wrapper.is('div')).toBe(true);
  });

  it("Has a 'center' boolean prop to set the section in the center", () => {
    const wrapper = shallowMount(NavbarSection, {
      propsData: {
        center: true,
      },
    });
    expect(wrapper.findAll('.navbar-center').length).toBe(1);
  });
});
