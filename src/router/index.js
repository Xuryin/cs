import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import { validLogin } from '@utils/tools';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/userCenter',
        name: 'userCenter',
        redirect: '/recharge',
        component: () => import('@/views/userCenter.vue'),
        children: [
          {
            path: '/recharge',
            name: 'recharge',
            component: () => import('@/components/recharge/index'),
          },
          {
            path: '/recaption',
            name: 'recaption',
            component: () => import('@/components/recaption/index'),
          }
        ]
      },
      {
        path: '/replacing',
        name: 'replacing',
        component: () => import('@/components/replacing/index'),
      },
      {
        path: '/boxDetail',
        name: 'boxDetail',
        component: () => import('@/components/boxDetail/index'),
      },
      {
        path: '/exchange',
        name: 'exchange',
        component: () => import('@/components/replacing/index'),
      },
      {
        path: `helper/:id`,
        name: 'helper',
        component: () => import('@/views/helper'),
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

import { state } from '../store/index'

/* 解决重复点击路由的报错 */
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location)
    .catch(err => err);
};

const unallowedRouter = ['recharge', 'recaption']

// 登录拦截
router.beforeEach((to, from, next) => {
  if (unallowedRouter.includes(to.name) && !validLogin()) {
    router.push({ name: 'Home' });
    router.app.$options.store.commit('changeModalStates', {index: 1, name: 'password'})
  } else {
    next()
  }
});

export default router;
