import Vue from 'vue';
import Router from 'vue-router';
import Merchants from './views/Merchants.vue';
import Index from './views/Index.vue';
import POSManagement from './views/POSManagement.vue';
import AddManagement from './views/AddManagement.vue';
import Earnings from "./views/Earnings.vue";
import deal from "./views/Deal.vue";
import dealData from "./views/Deal_data.vue";
import dealDetail from "./views/Deal_detail.vue";
import information from "./views/Information.vue";

Vue.use(Router)
const routes =  [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      { path: '/posManagement', name: 'POSManagement', component: POSManagement },
      { path: '/addManagement', name: 'AddManagement', component: AddManagement },
      { path: '/merchants', name: 'merchants', component: Merchants },
      { path: '/earnings', name: 'earnings', component: Earnings},
      { path: '/deal', name: 'deal', component: deal},
      { path: '/dealData', name: 'dealData', component: dealData},
      { path: '/dealDetail', name: 'dealDetail', component: dealDetail},
      { path: '/information', name: 'information', component: information},
    ]
  }
]

export default new Router({
  routes
})
