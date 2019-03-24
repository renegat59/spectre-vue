import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button.vue', () => {
  describe('basic Button rendering', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(Button, {
        slots: {
          default: 'Submit',
        },
      });
    });
    it("Has class 'btn'", () => {
      expect(wrapper.classes()).toContain('btn');
    });

    it('Should render <button> if no tag is specified', () => {
      expect(wrapper.is('button')).toBe(true);
    });

    it('Has a default slot when it is a <button>', () => {
      expect(wrapper.text()).toBe('Submit');
    });

    it("Adds size class when 'size' prop is set", () => {
      expect(wrapper.classes()).not.toContain('btn-lg');
      wrapper.setProps({ size: 'lg' });
      expect(wrapper.classes()).toContain('btn-lg');
      wrapper.setProps({ size: 'sm' });
      expect(wrapper.classes()).not.toContain('btn-lg');
      expect(wrapper.classes()).toContain('btn-sm');
    });

    it("Adds type class when 'type' prop is set", () => {
      expect(wrapper.classes()).not.toContain('btn-primary');
      wrapper.setProps({ type: 'primary' });
      expect(wrapper.classes()).toContain('btn-primary');
      wrapper.setProps({ type: 'success' });
      expect(wrapper.classes()).not.toContain('btn-primary');
      expect(wrapper.classes()).toContain('btn-success');
    });

    it("Adds form class when 'form' prop is set", () => {
      expect(wrapper.classes()).not.toContain('btn-block');
      wrapper.setProps({ form: 'block' });
      expect(wrapper.classes()).toContain('btn-block');
      wrapper.setProps({ form: 'action' });
      expect(wrapper.classes()).not.toContain('btn-block');
      expect(wrapper.classes()).toContain('btn-action');
    });

    it("Can combine 'type', 'form' and 'size' props", () => {
      wrapper.setProps({
        form: 'block',
        size: 'sm',
        type: 'primary',
      });
      expect(wrapper.classes()).toContain('btn-sm');
      expect(wrapper.classes()).toContain('btn-block');
      expect(wrapper.classes()).toContain('btn-primary');
    });

    it('Can can have states loading, active or disabled', () => {
      wrapper.setProps({
        loading: true,
      });
      expect(wrapper.classes()).toContain('loading');
      wrapper.setProps({
        loading: false,
      });
      expect(wrapper.classes()).not.toContain('loading');
      wrapper.setProps({
        active: true,
      });
      expect(wrapper.classes()).toContain('active');
      wrapper.setProps({
        active: false,
      });
      expect(wrapper.classes()).not.toContain('active');
      wrapper.setProps({
        disabled: true,
      });
      expect(wrapper.classes()).toContain('disabled');
      wrapper.setProps({
        disabled: false,
      });
      expect(wrapper.classes()).not.toContain('disabled');
    });
  });

  describe('Input button rendering', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Button, {
        propsData: {
          tag: 'input',
        },
        slots: {
          default: 'Submit',
        },
      });
    });

    it('Should render <input> when specified', () => {
      expect(wrapper.is('input')).toBe(true);
    });

    it('Ignores the children', () => {
      expect(wrapper.text()).not.toBe('Submit');
    });

    it('Sets the input value correctly', () => {
      expect(wrapper.attributes('value')).toBe('Submit');
    });

    it('Can have specified input type', () => {
      expect(wrapper.attributes('type')).toBe('button');
      wrapper.setProps({
        inputType: 'submit',
      });
      expect(wrapper.attributes('type')).toBe('submit');
    });
  });

  describe('Link button rendering', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallowMount(Button, {
        propsData: {
          tag: 'a',
        },
        slots: {
          default: 'Submit',
        },
      });
    });
    it('Should render <a> when specified', () => {
      expect(wrapper.is('a')).toBe(true);
    });

    it('Has a default slot when it is an <a>', () => {
      expect(wrapper.text()).toBe('Submit');
    });

    it('By default points to #, but can be changed', () => {
      expect(wrapper.attributes('href')).toBe('#');
      wrapper.setProps({
        href: 'https://www.google.com',
      });
      expect(wrapper.attributes('href')).toBe('https://www.google.com');
    });
  });

  describe('Interactions with the button', () => {
    it('Can bind the @click action', () => {
      const onClick = jest.fn();
      const wrapper = shallowMount(Button, {
        listeners: {
          click: onClick,
        },
      });
      wrapper.trigger('click');
      expect(onClick).toHaveBeenCalled();
    });
  });
});
