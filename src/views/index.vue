<template>
  <div :class="classes"> index </div>
</template>

<route lang="yaml">
redirect: /home
</route>

<script setup lang="ts">
  import { computed } from 'vue';

  const prefixCls = 'vi-index';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });
</script>
<style lang="scss">
  $-prefix-cls: 'vi-index';
  .#{$-prefix-cls} {
    background: red;
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
