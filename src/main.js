import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VCharts from 'v-charts'
import './plugins/element.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import {
  Row, Menu, Submenu, MenuItem, Tabs, TabPane, Table, TableColumn, Dialog, Input, Dropdown, DropdownMenu, DropdownItem,Form,FormItem, DatePicker,
} from 'element-ui'


Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(VCharts)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use( DatePicker)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
