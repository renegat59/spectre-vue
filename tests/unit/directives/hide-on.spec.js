import Vue from 'vue';
import '@/directives';
import {shallowMount} from '@vue/test-utils';

describe('Directive v-hide-on', () => {
  it('should hide on XS', () => {
    const wrapper = shallowMount({
      template: '<div v-hide-on.xs>hello</div>'
    });
    expect(wrapper.classes()).toContain('hide-xs');
  });
});
