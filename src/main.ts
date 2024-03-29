import { createApp } from 'vue';
import * as antIcons from '@ant-design/icons-vue';

import App from './App.vue';
import router from './router';
import piniaStore from './store';

import 'uno.css';

import Antd from 'ant-design-vue';

//vue3的挂载方式
const app = createApp(App);

Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key]);
});

app.use(Antd);
app.use(router);
app.use(piniaStore);
app.mount('#app');
