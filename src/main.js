import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VCharts from 'v-charts'
import './plugins/element.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import { Row, Menu, Submenu, MenuItem } from 'element-ui'

Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(VCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
