import Vue from 'vue';
import Router from 'vue-router';
// A方后台
import Merchants from './views/amodule/Merchants.vue';
import AIndex from './views/amodule/Index.vue';
import POSManagement from './views/amodule/POSManagement.vue';
import AddManagement from './views/amodule/AddManagement.vue';
import Earnings from "./views/amodule/Earnings.vue";
import deal from "./views/amodule/Deal.vue";
import dealData from "./views/amodule/Deal_data.vue";
import dealDetail from "./views/amodule/Deal_detail.vue";
import information from "./views/amodule/Information.vue";

// B方后台
import BIndex from './views/bmodule/Index.vue';
import BEarnings from './views/bmodule/Earnings.vue';

Vue.use(Router)
const routes =  [
  { path: '/', redirect: '/aindex' },
  {
    path: '/aindex',
    name: 'aindex',
    component: AIndex,
    children: [
      { path: '/a_pos_management', name: 'POSManagement', component: POSManagement },
      { path: '/a_add_management', name: 'AddManagement', component: AddManagement },
      { path: '/a_merchants', name: 'merchants', component: Merchants },
      { path: '/a_earnings', name: 'earnings', component: Earnings},
      { path: '/a_deal', name: 'deal', component: deal},
      { path: '/a_deal_data', name: 'dealData', component: dealData},
      { path: '/a_deal_detail', name: 'dealDetail', component: dealDetail},
      { path: '/a_information', name: 'information', component: information},
    ]
  },
  {
    path: '/bindex',
    name: 'bindex',
    component: BIndex,
    children: [
      { path: '/b_earnings', name: 'BEarnings', component: BEarnings }
    ]
  }
]

export default new Router({
  routes
})
