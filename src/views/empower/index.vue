<template>
  <div :class="classes">
    <a-page-header title="授权中心" style="padding: 0; padding-bottom: 20px"> </a-page-header>
    <a-list :grid="{ gutter: 24, column: 1 }" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card :title="item.title">
            <div v-if="item.id === 0">
              <a-list :grid="{ gutter: 17, column: 3 }" :data-source="datas">
                <template #renderItem="{ item }">
                  <a-list-item style="text-align: center">
                    <a-card :title="item.name" style="height: 166px">
                      <a-space :size="10">
                        <a-button type="primary" size="large" shape="round" style="margin-top: 10px; margin-bottom: 6px">
                          <template #icon><AppstoreAddOutlined /></template>
                          {{ item.name }}
                        </a-button>
                      </a-space>
                      <div style="padding-top: 14px; text-align: left">
                        {{ item.des }}
                      </div>
                    </a-card>
                  </a-list-item>
                </template>
              </a-list>
            </div>
            <div v-if="item.id === 1">
              <a-list
                :grid="{ gutter: 20, column: 1 }"
                :data-source="[
                  {
                    name: '按月授权',
                    des: '通过贡献值兑换授权时长',
                  },
                ]"
              >
                <template #renderItem="{ item }">
                  <a-list-item style="text-align: center">
                    <a-card :title="item.name" style="height: 166px">
                      <a-space :size="10">
                        <a-button type="primary" size="large" shape="round" style="margin-top: 10px; margin-bottom: 6px">
                          <template #icon><AppstoreAddOutlined /></template>
                          {{ item.name }}
                        </a-button>
                      </a-space>
                      <div style="padding-top: 14px; text-align: left">
                        {{ item.des }}
                      </div>
                    </a-card>
                  </a-list-item>
                </template>
              </a-list>
            </div>
            <div v-if="item.id === 2">
              <a-list size="small" :data-source="data1">
                <a-list-item>编写一个应用获得500贡献值<a-button type="link">去创建</a-button></a-list-item>
                <a-list-item>定期评选优秀应用奖励贡献值<a-button type="link">去查看</a-button></a-list-item>
                <a-list-item>发布应用开发教程获得100贡献值</a-list-item>
                <a-list-item>定期评选优秀教程奖励贡献值</a-list-item>
                <a-list-item>定期评选优秀教程奖励贡献值</a-list-item>
                <a-list-item>赞赏获得等额贡献值<a-button type="link">去赞赏</a-button></a-list-item>
                <a-list-item>评审应用获取贡献值</a-list-item>
                <a-list-item>有其他贡献的</a-list-item>
              </a-list>
            </div>
            <div v-if="item.id === 3">
              <a-list size="small" :data-source="data1">
                <a-list-item>赞赏支持应用开发者</a-list-item>
                <a-list-item>500贡献值兑换一个永久名额</a-list-item>
                <a-list-item>100贡献值兑换一个月设备授权</a-list-item>
                <a-list-item>13贡献值兑换一个月账号授权</a-list-item>
                <a-list-item>成为评审员 </a-list-item>
                <a-list-item>其他</a-list-item>
              </a-list>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const prefixCls = 'vi-empower';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });

  interface DataItem {
    name: string;
    des: string;
  }

  const data1: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const datas: DataItem[] = [
    {
      name: '临时授权',
      des: '开发者测试,免费使用',
    },
    {
      name: '按月授权',
      des: '通过贡献值兑换授权时长',
    },
    {
      name: '名额授权',
      des: '通过名额进行授权,贡献值可兑换永久名额',
    },
  ];

  interface DataItem2 {
    title: string;
    id: number;
  }
  const data: DataItem2[] = [
    {
      id: 0,
      title: '账号授权',
    },
    {
      id: 1,
      title: '设备授权',
    },
    {
      id: 2,
      title: '获取贡献值',
    },
    {
      id: 3,
      title: '使用贡献值',
    },
  ];
</script>
<style lang="scss">
  @include prefixCls(empower) {
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
mmm
