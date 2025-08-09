<script lang="ts" setup>
import type {
  WorkbenchProjectItem,
  WorkbenchQuickNavItem,
  WorkbenchTodoItem,
  WorkbenchTrendItem,
} from '@vben/common-ui';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import {
  AnalysisChartCard,
  WorkbenchHeader,
  WorkbenchProject,
  WorkbenchQuickNav,
  WorkbenchTodo,
  WorkbenchTrends,
} from '@vben/common-ui';
import { preferences } from '@vben/preferences';
import { useUserStore } from '@vben/stores';
import { openWindow } from '@vben/utils';

import { $t } from '@vben/locales';

import AnalyticsVisitsSource from '../analytics/analytics-visits-source.vue';

const userStore = useUserStore();

// 这是一个示例数据，实际项目中需要根据实际情况进行调整
// url 也可以是内部路由，在 navTo 方法中识别处理，进行内部跳转
// 例如：url: /dashboard/workspace
const projectItems: WorkbenchProjectItem[] = [
  {
    color: '',
    content: $t('workspace.projects.github.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.github.group'),
    icon: 'carbon:logo-github',
    title: 'Github',
    url: 'https://github.com',
  },
  {
    color: '#3fb27f',
    content: $t('workspace.projects.vue.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.vue.group'),
    icon: 'ion:logo-vue',
    title: 'Vue',
    url: 'https://vuejs.org',
  },
  {
    color: '#e18525',
    content: $t('workspace.projects.html5.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.html5.group'),
    icon: 'ion:logo-html5',
    title: 'Html5',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
  },
  {
    color: '#bf0c2c',
    content: $t('workspace.projects.angular.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.angular.group'),
    icon: 'ion:logo-angular',
    title: 'Angular',
    url: 'https://angular.io',
  },
  {
    color: '#00d8ff',
    content: $t('workspace.projects.react.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.react.group'),
    icon: 'bx:bxl-react',
    title: 'React',
    url: 'https://reactjs.org',
  },
  {
    color: '#EBD94E',
    content: $t('workspace.projects.js.content'),
    date: '2021-04-01',
    group: $t('workspace.projects.js.group'),
    icon: 'ion:logo-javascript',
    title: 'Js',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
  },
];

// 同样，这里的 url 也可以使用以 http 开头的外部链接
const quickNavItems: WorkbenchQuickNavItem[] = [
  {
    color: '#1fdaca',
    icon: 'ion:home-outline',
    title: $t('workspace.quickNav.home'),
    url: '/',
  },
  {
    color: '#bf0c2c',
    icon: 'ion:grid-outline',
    title: $t('workspace.quickNav.dashboard'),
    url: '/dashboard',
  },
  {
    color: '#e18525',
    icon: 'ion:layers-outline',
    title: $t('workspace.quickNav.components'),
    url: '/demos/features/icons',
  },
  {
    color: '#3fb27f',
    icon: 'ion:settings-outline',
    title: $t('workspace.quickNav.systemManagement'),
    url: '/demos/features/login-expired', // 这里的 URL 是示例，实际项目中需要根据实际情况进行调整
  },
  {
    color: '#4daf1bc9',
    icon: 'ion:key-outline',
    title: $t('workspace.quickNav.permissionManagement'),
    url: '/demos/access/page-control',
  },
  {
    color: '#00d8ff',
    icon: 'ion:bar-chart-outline',
    title: $t('workspace.quickNav.charts'),
    url: '/analytics',
  },
];

const todoItems = ref<WorkbenchTodoItem[]>([
  {
    completed: false,
    content: $t('workspace.todo.reviewCode.content'),
    date: '2024-07-30 11:00:00',
    title: $t('workspace.todo.reviewCode.title'),
  },
  {
    completed: true,
    content: $t('workspace.todo.optimizePerformance.content'),
    date: '2024-07-30 11:00:00',
    title: $t('workspace.todo.optimizePerformance.title'),
  },
  {
    completed: false,
    content: $t('workspace.todo.securityCheck.content'),
    date: '2024-07-30 11:00:00',
    title: $t('workspace.todo.securityCheck.title'),
  },
  {
    completed: false,
    content: $t('workspace.todo.updateDependencies.content'),
    date: '2024-07-30 11:00:00',
    title: $t('workspace.todo.updateDependencies.title'),
  },
  {
    completed: false,
    content: $t('workspace.todo.fixUIIssues.content'),
    date: '2024-07-30 11:00:00',
    title: $t('workspace.todo.fixUIIssues.title'),
  },
]);
const trendItems: WorkbenchTrendItem[] = [
  {
    avatar: 'svg:avatar-1',
    content: `${$t('workspace.trends.actions.createdProject')} <a>Vue</a> ${$t('workspace.trends.actions.in')} <a>${$t('workspace.projects.github.group')}</a>`,
    date: $t('workspace.trends.timeAgo.justNow'),
    title: $t('workspace.trends.users.william'),
  },
  {
    avatar: 'svg:avatar-2',
    content: `${$t('workspace.trends.actions.followed')} <a>${$t('workspace.trends.users.william')}</a>`,
    date: $t('workspace.trends.timeAgo.oneHourAgo'),
    title: $t('workspace.trends.users.evan'),
  },
  {
    avatar: 'svg:avatar-3',
    content: `${$t('workspace.trends.actions.published')} <a>${$t('workspace.trends.content.personalUpdate')}</a>`,
    date: $t('workspace.trends.timeAgo.oneDayAgo'),
    title: $t('workspace.trends.users.chris'),
  },
  {
    avatar: 'svg:avatar-4',
    content: `${$t('workspace.trends.actions.publishedArticle')} <a>${$t('workspace.trends.content.vitePluginArticle')}</a>`,
    date: $t('workspace.trends.timeAgo.twoDaysAgo'),
    title: $t('workspace.trends.users.vben'),
  },
  {
    avatar: 'svg:avatar-1',
    content: `${$t('workspace.trends.actions.repliedToQuestion', { user: $t('workspace.trends.users.jack') })} <a>${$t('workspace.trends.content.projectOptimization')}</a>`,
    date: $t('workspace.trends.timeAgo.threeDaysAgo'),
    title: $t('workspace.trends.users.pete'),
  },
  {
    avatar: 'svg:avatar-2',
    content: `${$t('workspace.trends.actions.closedIssue')} <a>${$t('workspace.trends.content.runProject')}</a>`,
    date: $t('workspace.trends.timeAgo.oneWeekAgo'),
    title: $t('workspace.trends.users.jack'),
  },
  {
    avatar: 'svg:avatar-3',
    content: `${$t('workspace.trends.actions.published')} <a>${$t('workspace.trends.content.personalUpdate')}</a>`,
    date: $t('workspace.trends.timeAgo.oneWeekAgo'),
    title: $t('workspace.trends.users.william'),
  },
  {
    avatar: 'svg:avatar-4',
    content: `${$t('workspace.trends.actions.pushedCode')} <a>Github</a>`,
    date: '2021-04-01 20:00',
    title: $t('workspace.trends.users.william'),
  },
  {
    avatar: 'svg:avatar-4',
    content: `${$t('workspace.trends.actions.publishedArticle')} <a>${$t('workspace.trends.content.adminVbenArticle')}</a>`,
    date: '2021-03-01 20:00',
    title: $t('workspace.trends.users.vben'),
  },
];

const router = useRouter();

// 这是一个示例方法，实际项目中需要根据实际情况进行调整
// This is a sample method, adjust according to the actual project requirements
function navTo(nav: WorkbenchProjectItem | WorkbenchQuickNavItem) {
  if (nav.url?.startsWith('http')) {
    openWindow(nav.url);
    return;
  }
  if (nav.url?.startsWith('/')) {
    router.push(nav.url).catch((error) => {
      console.error('Navigation failed:', error);
    });
  } else {
    console.warn(`Unknown URL for navigation item: ${nav.title} -> ${nav.url}`);
  }
}
</script>

<template>
  <div class="p-5">
    <WorkbenchHeader
      :avatar="userStore.userInfo?.avatar || preferences.app.defaultAvatar"
    >
      <template #title>
        {{ $t('workspace.header.greeting', { name: userStore.userInfo?.realName }) }}
      </template>
      <template #description> {{ $t('workspace.header.weather') }} </template>
    </WorkbenchHeader>

    <div class="mt-5 flex flex-col lg:flex-row">
      <div class="mr-4 w-full lg:w-3/5">
        <WorkbenchProject :items="projectItems" :title="$t('workspace.sections.projects')" @click="navTo" />
        <WorkbenchTrends :items="trendItems" class="mt-5" :title="$t('workspace.sections.latestNews')" />
      </div>
      <div class="w-full lg:w-2/5">
        <WorkbenchQuickNav
          :items="quickNavItems"
          class="mt-5 lg:mt-0"
          :title="$t('workspace.sections.quickNav')"
          @click="navTo"
        />
        <WorkbenchTodo :items="todoItems" class="mt-5" :title="$t('workspace.sections.todo')" />
        <AnalysisChartCard class="mt-5" :title="$t('workspace.sections.visitSource')">
          <AnalyticsVisitsSource />
        </AnalysisChartCard>
      </div>
    </div>
  </div>
</template>
