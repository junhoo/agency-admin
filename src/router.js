import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Index from './views/Index.vue'

Vue.use(Router);
const routes =  [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      { path: '', component: Home },
      { path: '/home', name: 'home', component: Home }
    ]
  }
]

export default new Router({
  routes
});
