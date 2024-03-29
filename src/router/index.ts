/**
 * @FileName        index
 * @CreatedTime     Fri, Aug 18, 2023 15:39
 * @LastModified    Fri, Aug 18, 2023 15:39
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     index
 */

import { createRouter, createWebHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import NProgress from 'nprogress';

import { setupLayouts } from 'virtual:generated-layouts'; //将route里面的路由变成嵌套路由

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router;
