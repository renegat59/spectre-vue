import '@/directives';
import { shallowMount } from '@vue/test-utils';

describe('Directive v-color', () => {
  it('should append the bg-color class', () => {
    const wrapper = shallowMount({
      template: '<div v-color:bg="\'warning\'" class="test">hello</div>'
    });
    expect(wrapper.classes()).toContain('bg-warning');
    expect(wrapper.classes()).toContain('test');
  });

  it('should add the text-color class', () => {
    const wrapper = shallowMount({
      template: '<div v-color:text="\'error\'" class="test">hello</div>'
    });
    expect(wrapper.classes()).toContain('text-error');
    expect(wrapper.classes()).toContain('test');
  });

  it('should ignore inexisting colors', () => {
    const wrapper = shallowMount({
      template: '<div v-color:text="\'sth\'">hello</div>'
    });
    expect(wrapper.classes()).toEqual([]);
  });

  it('should ignore wrong args', () => {
    const wrapper = shallowMount({
      template: '<div v-color:sth="\'error\'">hello</div>'
    });
    expect(wrapper.classes()).toEqual([]);
  });

  it('should by default set the text color if no arg is set', () => {
    const wrapper = shallowMount({
      template: '<div v-color="\'error\'">hello</div>'
    });
    expect(wrapper.classes()).toContain('text-error');
  });


  it('should change the color when bound variable is changed', () => {
    const wrapper = shallowMount({
      template: '<div v-color:bg="color">hello</div>',
      data: () => {
        return {
          color: 'error'
        }
      }
    });
    expect(wrapper.classes()).toContain('bg-error');
    wrapper.setData({ color: 'success' });
    expect(wrapper.classes()).toContain('bg-success');
    expect(wrapper.classes()).not.toContain('bg-error');
  });
});
