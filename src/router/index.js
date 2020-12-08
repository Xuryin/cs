import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';

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
        path: '/shop',
        name: 'shop',
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

/* 解决重复点击路由的报错 */
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
