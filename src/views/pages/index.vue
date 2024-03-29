<template>
  <div :class="classes">
    <a-page-header title="页面展示" sub-title="添加后把代码下载到对应插件目录" style="padding: 0; padding-bottom: 20px">
      <template #extra>
        <a-button key="1" type="primary" size="middle">启动新微信</a-button>
        <a-button key="1" type="primary" size="middle">刷新状态</a-button>
      </template>
      <template #tags>
        <a-tag color="red">服务错误,请查看是否已启动服务:http://127.0.0.1:8203/api?json</a-tag>
      </template>
    </a-page-header>
    <a-table bordered :data-source="dataSource" :columns="columns" size="small">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'name'">
          <div class="editable-cell"> xxxx </div>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-popconfirm v-if="dataSource.length" title="Sure to delete?">
            <a>Delete</a>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const prefixCls = 'vi-pages';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '30%',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
    },
  ];

  type DataItem = {
    key: string;
    name: string;
    age: number;
    address: string;
  };

  const dataSource: Ref<DataItem[]> = ref([
    {
      key: '0',
      name: 'Edward King 0',
      age: 32,
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: 32,
      address: 'London, Park Lane no. 1',
    },
  ]);
</script>
<style lang="scss">
  @include prefixCls(pages) {
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
