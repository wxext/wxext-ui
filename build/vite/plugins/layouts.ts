/**
 * @FileName        layo.ts
 * @CreatedTime     Fri, Aug 18, 2023 15:48
 * @LastModified    Fri, Aug 18, 2023 15:48
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     layo.ts
 */

import * as path from 'path';
import Layouts from 'vite-plugin-vue-layouts';

const resolve = (dir: string) => path.join(__dirname, '..', dir);

export const ViteLayouts = () => {
  return Layouts({
    layoutsDirs: resolve('./../../src/layouts'),
    defaultLayout: 'default',
  });
};
