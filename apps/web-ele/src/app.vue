<script lang="ts" setup>
import { computed } from 'vue';

import { useElementPlusDesignTokens } from '@vben/hooks';
import { usePreferences } from '@vben/preferences';

import { ElConfigProvider } from 'element-plus';

import { elementLocale } from '#/locales';

defineOptions({ name: 'App' });

useElementPlusDesignTokens();
const { locale } = usePreferences();

const direction = computed(() =>
  String(locale.value).startsWith('ar') ? 'rtl' : 'ltr',
);
</script>

<template>
  <ElConfigProvider :locale="elementLocale" :direction="direction">
    <RouterView />
  </ElConfigProvider>
</template>
