import Vue from 'vue';
import Router from 'vue-router';
// A方后台
const Merchants = () => import('./views/amodule/Merchants.vue')
const AIndex = () => import('./views/amodule/Index.vue')
const POSManagement = () => import('./views/amodule/POSManagement.vue')
const AddManagement = () => import('./views/amodule/AddManagement.vue')
const Earnings = () => import('./views/amodule/Earnings.vue')
const deal = () => import('./views/amodule/Deal.vue')
const dealData = () => import('./views/amodule/Deal_data.vue')
const dealDetail = () => import('./views/amodule/Deal_detail.vue')
const recMessages = () => import('./views/amodule/RecMessages.vue')
const information = () => import('./views/amodule/Information.vue')

// B方后台
const BIndex = () => import('./views/bmodule/Index.vue')
const BTradingChart = () => import('./views/bmodule/TradingChart.vue')
const BUserChart = () => import('./views/bmodule/UserChart.vue')
const BEarnings = () => import('./views/bmodule/Earnings.vue')
const Bdeal = () => import('./views/bmodule/Deal.vue')
const Bdetail = () => import('./views/bmodule/DealDetail.vue')
const manage = () => import('./views/bmodule/Manage.vue')
const Binformation = () => import('./views/bmodule/Information.vue')
const BInforDtetail = () => import('./views/bmodule/InforDtetail.vue')
const generalize = () => import('./views/bmodule/Generalize.vue')

// PC官网
const Amobile = () => import('./views/pcmodule/amobile.vue')
const Bmobile = () => import('./views/pcmodule/bmobile.vue')
const Home = () => import('./views/pcmodule/Home.vue')
const Register = () => import('./views/pcmodule/tabitem/register.vue')
const Bond = () => import('./views/pcmodule/tabitem/bond.vue')
const ItemFirst = () => import('./views/pcmodule/tabitem/itemFirst.vue')
const ItemSecond = () => import('./views/pcmodule/tabitem/itemSecond.vue')
const ItemThird = () => import('./views/pcmodule/tabitem/itemThird.vue')

Vue.use(Router)
const routes =  [
  { path: '/', redirect: '/itemFirst' },
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
    path: '/amobile',
    name: 'amobile',
    component: Amobile
  },
  {
    path: '/bmobile',
    name: 'bmobile',
    component: Bmobile
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
  },
  {
    path: '/itemThird',
    name: 'ItemThird',
    component: ItemThird
  },
  {
    path: '/itemSecond',
    name: 'ItemSecond',
    component: ItemSecond
  },
  {
    path: '/itemFirst',
    name: 'ItemFirst',
    component: ItemFirst
  }
]

export default new Router({
  routes
})
