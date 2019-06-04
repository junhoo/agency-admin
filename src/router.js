import Vue from 'vue';
import Router from 'vue-router';
import Merchants from './views/Merchants.vue';
import Index from './views/Index.vue';
import earnings from './views/earnings.vue';
import POSManagement from './views/POSManagement.vue';
import AddManagement from './views/AddManagement.vue';

Vue.use(Router)
const routes =  [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      { path: '/earnings', name: 'earnings', component: earnings },
      { path: '/posManagement', name: 'POSManagement', component: POSManagement },
      { path: '/addManagement', name: 'AddManagement', component: AddManagement },
      { path: '/merchants', name: 'merchants', component: Merchants }
    ]
  }
]

export default new Router({
  routes
})
