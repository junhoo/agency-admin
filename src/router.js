import Vue from 'vue'
import Router from 'vue-router'
// A 方 后 台
import Merchants from './views/amodule/Merchants.vue'
import AIndex from './views/amodule/Index.vue'
import POSManagement from './views/amodule/POSManagement.vue'
import AddManagement from './views/amodule/AddManagement.vue'
import Earnings from './views/amodule/Earnings.vue'
import deal from './views/amodule/Deal.vue'
import dealData from './views/amodule/Deal_data.vue'
import dealDetail from './views/amodule/Deal_detail.vue'
import information from './views/amodule/Information.vue'
// B 方 后 台
import BIndex from './views/bmodule/Index.vue'
import BEarnings from './views/bmodule/Earnings.vue'
import TraderInformation from './views/bmodule/TraderInformation.vue'
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
      { path: '/a_information', name: 'information', component: information},
    ]
  },
  {
    path: '/bindex',
    name: 'bindex',
    component: BIndex,
    children: [
      { path: '/b_earnings', name: 'BEarnings', component: BEarnings },
      { path: '/b_traderInformation', name: 'TraderInformation', component: TraderInformation }
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
