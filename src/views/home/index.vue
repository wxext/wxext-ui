<template>
  <div :class="classes">
    <a-page-header title="推荐应用" sub-title="添加后把代码下载到对应插件目录" style="padding: 0; padding-bottom: 20px">
      <template #extra>
        <a-button key="1" type="primary" size="middle">刷新状态</a-button>
      </template>
      <template #tags>
        <a-tag color="red">服务错误,请查看是否已启动服务:http://127.0.0.1:8203/api?json</a-tag>
      </template>
    </a-page-header>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item style="text-align: center">
          <a-card :title="item.name" style="height: 150px">
            <a-space :size="10">
              <a-button size="middle">添加</a-button>
              <a-button size="middle" type="primary">安装</a-button>
            </a-space>
            <div style="padding-top: 14px; text-align: left">
              {{ item.des }}
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  interface DataItem {
    des: string;
    version: string;
    url: string;
    user: string;
    name: string;
  }
  const data: DataItem[] = [
    {
      name: 'www',
      des: 'JavaScript测试应用,通过浏览器使用',
      version: '1.0.0.0',
      url: 'https://github.com/wxext/ext-js-demo',
      user: 'qqqqqqq',
    },
    {
      name: '关键词回复',
      des: '关键词回复管理,需要nodejs环境支持',
      version: '1.0.0.0',
      url: 'https://github.com/wxext/ext-nodejs-keyhelp',
      user: 'qqqqqqq',
    },
    {
      name: 'Python自动回复',
      des: '使用Python写的自动回复',
      version: '1.0.0.2',
      url: 'https://github.com/Ealeosd123/ext-python-autoreply',
      user: 'Ealeo2020',
    },
    {
      name: 'Python自动回复',
      des: '使用Python写的自动回复',
      version: '1.0.0.2',
      url: 'https://github.com/Ealeosd123/ext-python-autoreply',
      user: 'Ealeo2020',
    },
    {
      name: 'home',
      des: '业主群统计与查找,需要nodejs环境支持',
      version: '1.0.0.0',
      url: 'https://github.com/xuefer/ext-nodejs-home',
      user: 'XueferMoo',
    },
    {
      name: 'wxbot',
      des: '基于e小天的多微信号php社群系统',
      version: '1.0.0.0',
      url: 'https://github.com/fudaoji/wxbot',
      user: 'rocky_god',
    },
    {
      name: 'MCCheck',
      des: 'Java查询我的世界服务器人数信息',
      version: '1.0.0.0',
      url: 'https://github.com/RanWhite/ext-java-MCCheck',
      user: 'jsstrsrm',
    },
    {
      name: 'Welcome',
      des: '[java环境]支持自定义的进群欢迎',
      version: '1.0.0.0',
      url: 'https://github.com/RanWhite/ext-java-Welcome',
      user: 'jsstrsrm',
    },
    {
      name: 'SkyWelcome',
      des: 'java进群欢迎',
      version: '1.0.0.0',
      url: 'https://github.com/RanWhite/SkyWelcome',
      user: 'jsstrsrm',
    },
    {
      name: 'AntiRecall',
      des: '转发指定群的撤回消息',
      version: '1.0.0.0',
      url: 'https://github.com/lovexingqiba/ext-python-antirecall/blob/main/README.md',
      user: 'gyswjf007',
    },
    {
      name: 'EXTChatGPT',
      des: '基于ChatGPT和EXT框架的微信机器人',
      version: '1.0.0.0',
      url: 'https://github.com/lovexingqiba/ext-python-EXTChatGPT',
      user: 'gyswjf007',
    },
  ];

  const prefixCls = 'vi-home';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });
</script>

<style lang="scss">
  @include prefixCls(home) {
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
