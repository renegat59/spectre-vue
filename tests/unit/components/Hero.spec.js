import Hero from '@/components/Hero.vue';
import { shallowMount } from '@vue/test-utils';

describe('Hero.vue', () => {

  describe('basic Hero rendering', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Hero, {
        slots: {
          default: '<p>Hero Paragraph</p>'
        }
      });
    });

    it("Has class 'hero'", () => {
      expect(wrapper.classes()).toContain('hero');
    });

    it("Has a default slot", () => {
      expect(wrapper.findAll("p").length).toBe(1);
    });
  });

  it("Accepts size prop and sets the appropriate class", () => {
    const wrapper = shallowMount(Hero, {
      propsData: {
        size: 'lg'
      }
    });
    expect(wrapper.classes()).toContain('hero-lg');
  });

  // it("Ignores not supported sizes", () => {
  //   let wrapper = shallowMount(Hero, {
  //     propsData: {
  //       size: 'not-supported'
  //     }
  //   });
  //   expect(wrapper.classes()).not.toContain('hero-not-supported');
  // });

});
