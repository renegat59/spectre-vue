import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-cursor', () => {
  it('Should get the appropriate c-* class', () => {
    const wrapper = shallowMount({
      template: '<div v-cursor="\'hand\'" class="test">hello</div>',
    });

    expect(wrapper.classes()).toContain('c-hand');
  });

  it('Should only allow the available cursors and ignore unknown', () => {
    const wrapper = shallowMount({
      template: '<div v-cursor="\'foo\'" class="test">hello</div>',
    });
    expect(wrapper.classes()).toEqual(['test']);
  });


  it('should change the cursor when bound variable is changed', () => {
    const wrapper = shallowMount({
      template: '<div v-cursor="cursor">hello</div>',
      data: () => ({
        cursor: 'hand',
      }),
    });
    expect(wrapper.classes()).toContain('c-hand');
    wrapper.setData({ cursor: 'not-allowed' });
    expect(wrapper.classes()).not.toContain('c-hand');
    expect(wrapper.classes()).toContain('c-not-allowed');
  });
});
