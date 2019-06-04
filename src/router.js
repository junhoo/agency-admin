import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/Index.vue'
import earnings from "./views/Earnings.vue";
import deal from "./views/Deal.vue";

Vue.use(Router);
const routes =  [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      { path: '', component: Home },
      { path: '/home', name: 'home', component: Home },
      { path: '/earnings', name: 'earnings', component: earnings},
      { path: '/deal', name: 'deal', component: deal}
    ]
  }
]

export default new Router({
  routes
});
