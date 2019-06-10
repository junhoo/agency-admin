import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'
import './plugins/element.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'

import {
  Row, Col,
  Menu,
  Submenu,
  MenuItem,
  Tabs, TabPane, Select, Option,
  Table, TableColumn, Radio, RadioGroup,
  Dialog, Input, Dropdown, DropdownMenu, DropdownItem, Form, FormItem, DatePicker,Pagination
} from 'element-ui'

Vue.use(VueApexCharts)
Vue.use(Row)
Vue.use(Col)
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
Vue.use(Select)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(Option)
Vue.use(FormItem)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Pagination)

Vue.component('apexchart', VueApexCharts)
// 导入请求
import {
  getHttp,
  postHttp,
} from './plugins/http'
Vue.prototype.$get = getHttp
Vue.prototype.$post = postHttp

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
