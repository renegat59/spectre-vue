import Vue from 'vue';
import App from './App.vue';
import { showOn } from './directives';

Vue.directive('show-on', showOn);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
