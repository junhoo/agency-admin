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
import recMessages from "./views/amodule/RecMessages.vue";
import information from "./views/amodule/Information.vue";

// B方后台
import BIndex from './views/bmodule/Index.vue';
import BTradingChart from './views/bmodule/TradingChart.vue';
import BUserChart from './views/bmodule/UserChart.vue';
import BEarnings from './views/bmodule/Earnings.vue';
import Bdeal from "./views/bmodule/Deal.vue";
import Bdetail from "./views/bmodule/DealDetail.vue";
import manage from "./views/bmodule/Manage.vue";
import Binformation from "./views/bmodule/Information.vue";
import BInforDtetail from "./views/bmodule/InforDtetail.vue";
import generalize from "./views/bmodule/Generalize.vue";
// PC 官 网
import Mobile from './views/pcmodule/mobile.vue'
import Home from './views/pcmodule/Home.vue'
import Register from './views/pcmodule/tabitem/register.vue'
import Bond from './views/pcmodule/tabitem/bond.vue'

Vue.use(Router)
const routes =  [
  { path: '/', redirect: '/home' },
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
      { path: '/a_rec_messages', name: 'recMessages', component: recMessages},
      { path: '/a_information', name: 'information', component: information}
    ]
  },
  {
    path: '/bindex',
    name: 'bindex',
    component: BIndex,
    children: [
      { path: '/b_earnings', name: 'BEarnings', component: BEarnings },
      { path: '/b_tradingchart', name: 'BTradingChart', component: BTradingChart },
      { path: '/b_userchart', name: 'BUserChart', component: BUserChart },
      { path: '/b_deal', name: 'Bdeal', component: Bdeal},
      { path: '/b_detail', name: 'detail', component: Bdetail},
      { path: '/b_manage', name: 'manage', component: manage},
      { path: '/b_information', name: 'Binformation', component: Binformation},
      { path: '/b_inforDtetail', name: 'InforDtetail', component: BInforDtetail},
      { path: '/b_generalize', name: 'generalize', component: generalize},
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/bond',
    name: 'Bond',
    component: Bond
  }
]

export default new Router({
  routes
})
