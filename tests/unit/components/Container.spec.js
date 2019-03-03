import { shallowMount } from '@vue/test-utils';
import Container from '@/components/Container.vue';

describe('Container.vue', () => {

  describe('basic Container rendering', () => {

    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Container, {
        slots: {
          default: '<div class="columns"></div>'
        }
      });
    });

    it("Has class 'container'", () => {
      expect(wrapper.classes()).toContain('container');
    });

    it("Has a default slot", () => {
      expect(wrapper.findAll(".columns").length).toBe(1);
    });
  });


  it("Has 'grid' property to set grid size'", () => {
    const wrapper = shallowMount(Container, {
      propsData: {
        grid: 'xl'
      }
    });
    expect(wrapper.classes()).toContain('grid-xl');
  });
});
