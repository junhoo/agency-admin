import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import about from './views/About.vue'
import Index from './views/Index.vue'

Vue.use(Router);
const routes =  [
  {
    path: '/',
    name: 'index',
    component: Index,
  }
]

export default new Router({
  routes
});
