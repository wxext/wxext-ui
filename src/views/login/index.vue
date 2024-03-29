<template>
  <div :class="classes">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="账号/邮箱" name="email" :rules="[{ required: true, message: 'Please input your email!' }]">
        <a-input v-model:value="formState.email" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<script setup lang="ts">
  import { computed } from 'vue';
  // import { UsersService } from '@/api';
  import router from '@/router';

  const prefixCls = 'vi-login';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });

  interface FormState {
    email: string;
    password: string;
    remember: boolean;
  }

  const formState = reactive<FormState>({
    email: '',
    password: '',
    remember: true,
  });
  const onFinish = () => {
    setTimeout(() => {
      router.push('/');
    }, 1000);
    // UsersService.loginIn(values)
    //   .then(() => {
    //     message.success('登录成功');
    //   })
    //   .catch((e: any) => {
    //     console.log('logger-[e]', e);
    //   });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
<style lang="scss">
  @include prefixCls(login) {
    width: 520px;
    margin: 80px auto;
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
