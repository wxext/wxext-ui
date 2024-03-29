<template>
  <div :class="classes">122 index </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const prefixCls = 'vi-test';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });
</script>
<style lang="scss">
  @include prefixCls(test) {
    background: #000;
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
