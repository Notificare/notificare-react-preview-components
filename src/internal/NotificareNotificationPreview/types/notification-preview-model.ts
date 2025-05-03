export type NotificationPreviewModel = {
  platform?: NotificationPreviewModelPlatform;
  displayMode?: NotificationPreviewModelDisplayMode;
  webDevice?: NotificationPreviewModelWebDevice;
  webMobileType?: NotificationPreviewModelWebMobileType;
  webDesktopOS?: NotificationPreviewModelWebDesktopOS;
};

export type NotificationPreviewModelPlatform = 'ios' | 'android' | 'web';
export type NotificationPreviewModelDisplayMode = 'lockscreen' | 'lockscreen-expanded' | 'app-ui';
export type NotificationPreviewModelWebDevice = 'desktop' | 'phone';
export type NotificationPreviewModelWebMobileType = 'iphone' | 'android';
export type NotificationPreviewModelWebDesktopOS = 'macOS';
