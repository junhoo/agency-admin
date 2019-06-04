import Vue from 'vue'
import router from './router'
import VCharts from 'v-charts'
import './plugins/element.js'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import {
  Input, Row,
  Menu,
  Submenu,
  MenuItem,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Dialog
} from 'element-ui'
import App from './App.vue'
Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use( Dialog)
Vue.use(VCharts)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
