import Vue from 'vue';
import Router from 'vue-router';
import Merchants from './views/Merchants.vue';
import Index from './views/Index.vue'
import earnings from "./views/earnings.vue";

Vue.use(Router);
const routes =  [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      // { path: '', component: Home },
      { path: '/merchants', name: 'merchants', component: Merchants },
      { path: '/earnings', name: 'earnings', component: earnings }
    ]
  }
]

export default new Router({
  routes
});
