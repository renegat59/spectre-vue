import { shallowMount } from '@vue/test-utils';
import Column from '@/components/Column.vue';
import { screenSizes, autoOffsets } from '@/consts';

describe('Column.vue', () => {
  describe('basic Column rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(Column, {
        slots: {
          default: '<p class="paragraph"></p>',
        },
      });
    });
    it("Has class 'column'", () => {
      expect(wrapper.classes()).toContain('column');
    });

    it('Has a default slot', () => {
      expect(wrapper.findAll('.paragraph').length).toBe(1);
    });
  });

  it("Has 'col' property to set number of columns'", () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        col: 6,
      },
    });
    expect(wrapper.classes()).toContain('col-6');
  });

  it("Allow to set 'auto' number of columns'", () => {
    const wrapper = shallowMount(Column, {
      propsData: {
        col: 'auto',
      },
    });
    expect(wrapper.classes()).toContain('col-auto');
  });

  it("Has properties xs, sm, md, lg and xl to set number of columns in different screen sizes'", () => {
    screenSizes.map((size, index) => {
      const propsData = {};
      propsData[size] = index + 1;
      const wrapper = shallowMount(Column, { propsData });
      expect(wrapper.classes()).toContain(`col-${size}-${index + 1}`);
    });
  });

  it("Allow auto number of columns in different screen sizes'", () => {
    screenSizes.map((size) => {
      const propsData = {};
      propsData[size] = 'auto';
      const wrapper = shallowMount(Column, { propsData });
      expect(wrapper.classes()).toContain(`col-${size}-auto`);
    });
  });

  it('Has autoOffset property to set auto offset classes', () => {
    autoOffsets.map((autoOffset) => {
      const wrapper = shallowMount(Column, {
        propsData: { autoOffset },
      });
      expect(wrapper.classes()).toContain(`col-m${autoOffset}-auto`);
    });
  });
});
