export type Locale = 'en-US' | 'zh-CN' | 'ar-SA';

export const messages: Record<Locale, Record<string, string>> = {
  'en-US': {
    cancel: 'Cancel',
    collapse: 'Collapse',
    confirm: 'Confirm',
    expand: 'Expand',
    prompt: 'Prompt',
    reset: 'Reset',
    submit: 'Submit',
  },
  'zh-CN': {
    cancel: '取消',
    collapse: '收起',
    confirm: '确认',
    expand: '展开',
    prompt: '提示',
    reset: '重置',
    submit: '提交',
  },
  'ar-SA': {
    cancel: 'إلغاء',
    collapse: 'طي',
    confirm: 'تأكيد',
    expand: 'توسيع',
    prompt: 'تنبيه',
    reset: 'إعادة تعيين',
    submit: 'إرسال',
  },
};

export const getMessages = (locale: Locale) => messages[locale];
