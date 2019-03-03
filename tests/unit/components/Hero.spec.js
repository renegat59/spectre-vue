import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

describe('Hero.vue', () => {
  it("Has class 'hero'", () => {
    const wrapper = shallowMount(Hero);
    expect(wrapper.classes()).toContain('hero');
  });

  it("Accepts size prop and sets the appropriate class", () => {
    let wrapper = shallowMount(Hero, {
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

  it("Has a default slot", () => {
    const wrapper = shallowMount(Hero, {
      slots: {
        default: '<p>Hero Paragraph</p>'
      }
    });
    expect(wrapper.findAll("p").length).toBe(1);
  });

});
