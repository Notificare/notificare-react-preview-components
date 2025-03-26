export type NotificationPreviewVariant = {
  platform?: 'ios' | 'android' | 'web';
  mobileVariant?: 'lockscreen' | 'lockscreen-expanded' | 'app-ui';
  webDevice?: 'desktop' | 'phone';
  webMobileType?: 'iphone' | 'android';
  webDesktopOS?: 'macOS';
};
