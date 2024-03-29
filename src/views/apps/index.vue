<template>
  <div :class="classes">
    <a-page-header title="应用中心" sub-title="查询匹配应用信息" style="padding: 0; padding-bottom: 20px">
      <template #extra>
        <a-space>
          <a-input-search v-model:value="value" placeholder="请输入应用名称" enter-button="搜索" size="middle" />
          <a-button type="primary" size="middle" @click="visible = true">创建应用</a-button>
        </a-space>
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

    <a-modal title="创建应用" @ok="onSubmit" v-model:visible="visible" width="700px">
      <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }" autocomplete="off">
        <a-form-item label="应用名称" name="name">
          <a-input v-model:value="value2" placeholder="请输入应用名称" size="middle" />
        </a-form-item>
        <a-form-item label="描述" name="name">
          <a-input v-model:value="value2" placeholder="请输入应用描述" size="middle" />
        </a-form-item>
        <a-form-item label="版本" name="name">
          <a-input v-model:value="value2" size="middle" />
        </a-form-item>
        <a-form-item label="安装说明" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange">GitHub项目地址,介绍详细使用说明 </a-tag>
        </a-form-item>
        <a-form-item label="管理地址" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 应用管理界面地址,用户进入这个地址配置应用 </a-tag>
        </a-form-item>
        <a-form-item label="下载地址" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> zip链接或者 GitHub仓库(/用户名/项目名/目录名) </a-tag>
        </a-form-item>
        <a-form-item label="启动程序" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 调试应用留空,dll留空 </a-tag>
        </a-form-item>
        <a-form-item label="运行参数" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 调试应用留空,dll直接填文件名 </a-tag>
        </a-form-item>
        <a-form-item label="输出编码" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 日志输出编码 </a-tag>
        </a-form-item>
        <a-form-item label="密钥" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 添加应用需要的密钥,可空 </a-tag>
        </a-form-item>
        <a-form-item label="价值" name="name">
          <a-input v-model:value="value2" size="middle" />
          <a-tag color="orange"> 添加应用需要的贡献值,可空 </a-tag>
        </a-form-item>
        <a-form-item label="可见" name="name">
          <a-input v-model:value="value2" size="middle" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const prefixCls = 'vi-apps';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });
  const value = ref('');

  interface FormState {
    name: string;
  }

  const visible = ref<boolean>(true);

  const value2 = ref('');

  const formState = reactive<FormState>({ name: '' });

  const onSubmit = () => {
    console.log('submit');
  };

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

  interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
  }
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
  @include prefixCls(apps) {
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
