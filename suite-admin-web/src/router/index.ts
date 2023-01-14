import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { routerArray } from './routers';
import { createRouterGuards } from './router-guards';


export const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: "/dashboard",
    meta: {
      title: 'Root',
    },
  };
  
  export const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/user/login/login.vue'),
    meta: {
      title: '登录',
    },
  };

// 需要验证权限
export const asyncRoutes = [...routerArray];

// 普通路由 无需验证权限
export const constantRouter: any[] = [LoginRoute, RootRoute];

const router =  createRouter({
    history: createWebHashHistory(''),
    routes: [...routerArray, ...constantRouter],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;