<template>
  <div :class="classes">
    <a-layout>
      <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint" style="background-color: #fff">
        <div class="logo">
          <img src="https://img.jutuike.com/assets/kfqrcode/89048/20240328/043a2c21fc153e39540a3e0f46ad1a0a.png" alt="" />
        </div>
        <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
          <a-menu-item :key="item.path" v-for="item in menuData">
            <router-link :to="item.path">
              <component :is="item.icon" />
              <span class="nav-text">{{ item.name }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }">
          <div class="vi-layout-default__userinfo">
            <a-space>
              圈圈｜millionfor@apache.org
              <a-button type="primary" shape="circle">
                <template #icon><LoginOutlined /></template>
              </a-button>
            </a-space>
          </div>
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div :style="{ padding: '24px', background: '#fff', minHeight: 'calc(100vh - 158px)' }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">Copyright © 2024-2025 xxxxx 版权所有 湘ICP备xxxxx号</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<route>
  { redirect: '/home', meta: { layout: true }  }
</route>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import router from '@/router';

  const prefixCls = 'vi-layout-default';

  const classes = computed(() => {
    return [`${prefixCls}`];
  });

  // 先临时处理，后续从路由拿
  const menuData: Array<{ path: string; name: string; icon: string }> = [
    {
      path: '/home',
      name: '概览',
      icon: 'HomeOutlined',
    },
    {
      path: '/pages',
      name: '页面展示',
      icon: 'RadarChartOutlined',
    },
    {
      path: '/test',
      name: '功能测试',
      icon: 'CloudServerOutlined',
    },
    {
      path: '/empower',
      name: '授权中心 ',
      icon: 'ClusterOutlined',
    },
    {
      path: '/apps',
      name: '应用中心',
      icon: 'FieldTimeOutlined',
    },
    {
      path: '/setting',
      name: '设置中心 ',
      icon: 'SettingOutlined',
    },
  ];

  const onCollapse = (collapsed: boolean, type: string) => {
    console.log(collapsed, type);
  };

  const onBreakpoint = (broken: boolean) => {
    console.log(broken);
  };

  const selectedKeys = ref<string[]>(['/home']);

  const init = () => {
    selectedKeys.value = [`${router.currentRoute.value.path}`];
  };

  init();
</script>
<style lang="scss">
  @include prefixCls(layout-default) {
    .ant-layout-sider-children .logo {
      padding-top: 4px;
      padding-left: 14px;
    }

    .site-layout-sub-header-background {
      background: #fff;
    }

    .site-layout-background {
      background: #fff;
    }

    [data-theme='dark'] .site-layout-sub-header-background {
      background: #141414;
    }
    .vi-layout-default__userinfo {
      position: absolute;
      right: 20px;
      top: 0;
    }
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
