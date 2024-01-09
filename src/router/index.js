import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/components/home-page/home.vue';
import Login from '@/components/templates/login/login.vue';
import Register from '@/components/templates/register/register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home/login',
    name: 'home.login',
    component: Login,
  },
  {
    path: '/home/register',
    name: 'home.register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
