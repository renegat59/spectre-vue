import { shallowMount } from '@vue/test-utils';
import Column from '@/components/Column.vue';
import { screenSizes, autoOffsets } from '@/consts';

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

  it("Has 'col' property to set number of columns'", () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        col: 6
      }
    });
    expect(wrapper.classes()).toContain('col-6');
  });

  it("Allow to set 'auto' number of columns'", () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        col: 'auto'
      }
    });
    expect(wrapper.classes()).toContain('col-auto');
  });

  it("Has properties xs, sm, md, lg and xl to set number of columns in different screen sizes'", () => {
    screenSizes.map((size, index) => {
      let propsData = {};
      propsData[size] = index+1;
      const wrapper = shallowMount(Column, { propsData });
      expect(wrapper.classes()).toContain(`col-${size}-${index+1}`);
    });
  });

  it("Allow auto number of columns in different screen sizes'", () => {
    screenSizes.map((size) => {
      let propsData = {};
      propsData[size] = 'auto';
      const wrapper = shallowMount(Column, { propsData });
      expect(wrapper.classes()).toContain(`col-${size}-auto`);
    });
  });

  it("Has autoOffset property to set auto offset classes", () => {
    autoOffsets.map((autoOffset) => {
      const wrapper = shallowMount(Column, {
        propsData: { autoOffset }
      });
      expect(wrapper.classes()).toContain(`col-m${autoOffset}-auto`);
    })
  });
});
