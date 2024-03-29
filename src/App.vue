<template>
  <a-config-provider :locale="locale" component-size="small">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import zhCN from 'ant-design-vue/es/locale/zh_CN';

  const locale = ref(zhCN);
</script>

<style></style>
