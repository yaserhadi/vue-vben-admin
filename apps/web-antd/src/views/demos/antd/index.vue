<script lang="ts" setup>
import { Page } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { Button, Card, message, notification, Space } from 'ant-design-vue';

type NotificationType = 'error' | 'info' | 'success' | 'warning';

function info() {
  message.info($t('page.demos.antd.message.infoText'));
}

function error() {
  message.error({
    content: $t('page.demos.antd.message.errorText'),
    duration: 2500,
  });
}

function warning() {
  message.warning($t('page.demos.antd.message.warningText'));
}
function success() {
  message.success($t('page.demos.antd.message.successText'));
}

function notify(type: NotificationType) {
  notification[type]({
    duration: 2500,
    message: $t('page.demos.antd.notification.message'),
    type,
  });
}
</script>

<template>
  <Page
    :description="$t('page.demos.antd.description')"
    :title="$t('page.demos.antd.title')"
  >
    <Card class="mb-5" :title="$t('page.demos.antd.buttons.title')">
      <Space>
        <Button>{{ $t('page.demos.antd.buttons.default') }}</Button>
        <Button type="primary">{{ $t('page.demos.antd.buttons.primary') }}</Button>
        <Button>{{ $t('page.demos.antd.buttons.info') }}</Button>
        <Button danger>{{ $t('page.demos.antd.buttons.error') }}</Button>
      </Space>
    </Card>
    <Card class="mb-5" :title="$t('page.demos.antd.message.title')">
      <Space>
        <Button @click="info">{{ $t('page.demos.antd.message.info') }}</Button>
        <Button danger @click="error">{{ $t('page.demos.antd.message.error') }}</Button>
        <Button @click="warning">{{ $t('page.demos.antd.message.warning') }}</Button>
        <Button @click="success">{{ $t('page.demos.antd.message.success') }}</Button>
      </Space>
    </Card>

    <Card class="mb-5" :title="$t('page.demos.antd.notification.title')">
      <Space>
        <Button @click="notify('info')">{{ $t('page.demos.antd.notification.info') }}</Button>
        <Button danger @click="notify('error')">{{ $t('page.demos.antd.notification.error') }}</Button>
        <Button @click="notify('warning')">{{ $t('page.demos.antd.notification.warning') }}</Button>
        <Button @click="notify('success')">{{ $t('page.demos.antd.notification.success') }}</Button>
      </Space>
    </Card>
  </Page>
</template>
