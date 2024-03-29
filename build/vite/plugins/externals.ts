/**
 * @FileName        externals
 * @CreatedTime     Wed, Aug 16, 2023 14:52
 * @LastModified    Wed, Aug 16, 2023 14:52
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     externals
 */

import { viteExternalsPlugin } from 'vite-plugin-externals';

export const ViteExternals = () => {
  return viteExternalsPlugin({
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'vue-demi': 'VueDemi',
    dayjs: 'dayjs',
    pinia: 'Pinia',
    'ant-design-vue': 'antd',
    nprogress: 'NProgress',
  });
};
