<template>
  <div :class="classes">
    <a-page-header title="设置中心" sub-title="添加后把代码下载到对应插件目录" style="padding: 0; padding-bottom: 20px">
      <template #tags>
        <a-tag color="red">服务错误,请查看是否已启动服务:http://127.0.0.1:8203/api?json</a-tag>
      </template>
    </a-page-header>
    <a-list :grid="{ gutter: 24, column: 1 }" :data-source="data">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-card :title="item.title">
            <div v-if="item.id === 0"> xxxx </div>
            <div style="width: 660px; padding-top: 20px" v-if="item.id === 1">
              <a-form :model="formState" :label-col="{ style: { width: '100px' } }" :wrapper-col="{ span: 14 }">
                <a-form-item label="通知名称">
                  <a-input v-model:value="formState.name" size="middle" />
                </a-form-item>
                <a-form-item label="通知地址">
                  <a-input v-model:value="formState.name" size="middle" />
                </a-form-item>
                <a-form-item label="包含消息">
                  <a-input v-model:value="formState.name" size="middle" />
                </a-form-item>
                <a-form-item label="匹配规则">
                  <a-input v-model:value="formState.name" size="middle" />
                </a-form-item>
              </a-form>
            </div>

            <div v-if="item.id === 1">
              <a-tag color="orange" style="margin: 0 auto; display: flex"
                >勾选需要通知的事件(不勾选则全部通知)（包含消息和匹配正则才通知不需要设置时留空即可）</a-tag
              >
              <a-checkbox-group v-model:value="checkboxgroup" style="width: 100%; padding: 16px 0 4px 0">
                <a-row>
                  <a-col :span="4" v-for="(item, $index) in plainOptions" :key="$index">
                    <a-checkbox :value="item.value">{{ item.label }}</a-checkbox>
                  </a-col>
                </a-row>
              </a-checkbox-group>
            </div>
            <div v-if="item.id === 2">
              <a-checkbox v-model:checked="checked">忽略错误</a-checkbox>

              <a-alert message="注意" type="info" style="margin-top: 20px; margin-bottom: 10px" show-icon>
                <template #icon><smile-outlined /></template>
                <template #description>
                  默认不忽略错误,http服务需要返回200状态码表示收到了,否则5秒后重试(2次)<br />

                  出错次数超过30此停止该推送<br />
                  如果忽略错误,推送失败不会重发,不记错误次数
                </template>
              </a-alert>
              <a-alert description="设置有问题请更新到最新版" type="error" show-icon>
                <template #icon><smile-outlined /></template>
              </a-alert>
            </div>
          </a-card>
        </a-list-item>
      </template>
    </a-list>
    <div style="text-align: center">
      <a-button type="primary" size="middle">保存设置</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, UnwrapRef, reactive } from 'vue';

  const prefixCls = 'vi-setting';
  const classes = computed(() => {
    return [`${prefixCls}`];
  });
  const checked = ref(false);
  const checkboxgroup = ref([]);

  interface DataItem {
    id: number;
    title: string;
  }
  const data: DataItem[] = [
    {
      id: 0,
      title: '异步http推送设置',
    },
    {
      id: 1,
      title: '添加通知',
    },
    {
      id: 2,
      title: '错误设置',
    },
  ];

  const plainOptions: any = [
    {
      label: '  文本消息 ',
      value: 0,
    },
    {
      label: '  图片消息 ',
      value: 1,
    },
    {
      label: '  语音消息 ',
      value: 2,
    },
    {
      label: '  好友确认消息 ',
      value: 3,
    },
    {
      label: '  名片消息 ',
      value: 4,
    },
    {
      label: '  视频消息 ',
      value: 5,
    },
    {
      label: '  动画表情 ',
      value: 6,
    },
    {
      label: '  位置消息 ',
      value: 7,
    },
    {
      label: '  分享链接 ',
      value: 8,
    },
    {
      label: '  群版本更新 ',
      value: 9,
    },
    {
      label: '  群成员信息更新 ',
      value: 10,
    },
    {
      label: '    群成员增加 ',
      value: 11,
    },
    {
      label: '  群成员减少 ',
      value: 12,
    },
    {
      label: '  联系人信息更新 ',
      value: 13,
    },
    {
      label: '  收款结果 ',
      value: 14,
    },
    {
      label: '  好友验证结果 ',
      value: 15,
    },
    {
      label: '  创建群聊结果 ',
      value: 16,
    },
    {
      label: '  xml资源路径 ',
      value: 17,
    },
    {
      label: '  登录信息-授权 ',
      value: 18,
    },
    {
      label: '  登录信息-连接 ',
      value: 19,
    },
    {
      label: '  登录信息-登录二维码变化 ',
      value: 20,
    },
    {
      label: '  微信登录-授权信息 ',
      value: 21,
    },
    {
      label: '  登录信息-微信退出 ',
      value: 22,
    },
    {
      label: '  发起语音通过 ',
      value: 23,
    },
    {
      label: '  拒绝语音通话 ',
      value: 24,
    },
    {
      label: '  接受语音通话 ',
      value: 25,
    },
    {
      label: '  授权无效 ',
      value: 26,
    },
    {
      label: '  插件连接断开 ',
      value: 27,
    },
    {
      label: '  微信连接断开 ',
      value: 28,
    },
    {
      label: '  http推送异常关闭 ',
      value: 29,
    },
    {
      label: '  系统提示点击确定 ',
      value: 30,
    },
    {
      label: '  插件发出的通知 ',
      value: 31,
    },
    {
      label: '  微信系统消息 ',
      value: 32,
    },
  ];

  interface FormState {
    name: string;
  }
  const formState: UnwrapRef<FormState> = reactive({
    name: '',
  });
</script>
<style lang="scss">
  @include prefixCls(setting) {
  }
</style>
<!-- vim: set ft=vue ff=unix et sw=2 ts=2 sts=2 tw=300: -->
