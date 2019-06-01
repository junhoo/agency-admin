import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js'
// import ElementUI from 'element-ui';
import { Row, Menu, Submenu, MenuItem } from 'element-ui'

Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
