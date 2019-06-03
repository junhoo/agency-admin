import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import {
  Row, Menu, Submenu, MenuItem,Tabs,TabPane,Table, TableColumn, Dialog,} from 'element-ui'

Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use( Dialog)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
