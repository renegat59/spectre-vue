import Vue from 'vue';
import '@/directives';

describe('Directive v-color', () => {
  it('should append the bg-color class', () => {
    const vm = new Vue({
      template: '<div><span v-color:bg="\'warning\'" class="test">hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="test bg-warning">hello</span>');
  });

  it('should add the text-color class', () => {
    const vm = new Vue({
      template: '<div><span v-color:text="\'error\'">hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="text-error">hello</span>');
  });

  it('should ignore inexisting colors', () => {
    const vm = new Vue({
      template: '<div><span v-color:text="\'sth\'">hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span>hello</span>');
  });

  it('should ignore wrong args', () => {
    const vm = new Vue({
      template: '<div><span v-color:sth="\'error\'">hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span>hello</span>');
  });

  it('should by default set the text color if no arg is set', () => {
    const vm = new Vue({
      template: '<div><span v-color="\'error\'">hello</span></div>',
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="text-error">hello</span>');
  });


  // Reactivity not working here...
  // TODO: try to write the test for changing the color
  it('should change the color when bound variable is changed', () => {
    const data = {
      color: 'error',
    };
    const vm = new Vue({
      template: '<div><span v-color:bg="color">hello</span></div>',
      data,
    }).$mount();
    expect(vm.$el.innerHTML).toBe('<span class="bg-error">hello</span>');
    // vm.color='success';
    // vm.$forceUpdate();
    // console.log(vm);
    // vm.set('color', 'success');
    Vue.set(vm, 'color', 'success');
    console.log(vm.color, vm.$el.innerHTML);
    expect(vm.$el.innerHTML).toBe('<span class="bg-success">hello</span>');
  });
});
