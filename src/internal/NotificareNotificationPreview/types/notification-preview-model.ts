export type NotificationPreviewModel = {
  platform?: NotificationPreviewPlatform;
  displayMode?: NotificationPreviewDisplayMode;
  webDevice?: NotificationPreviewWebDevice;
  webMobileType?: NotificationPreviewWebMobileType;
  webDesktopOS?: NotificationPreviewWebDesktopOS;
};

export type NotificationPreviewPlatform = 'ios' | 'android' | 'web';
export type NotificationPreviewDisplayMode = 'lockscreen' | 'lockscreen-expanded' | 'app-ui';
export type NotificationPreviewWebDevice = 'desktop' | 'phone';
export type NotificationPreviewWebMobileType = 'iphone' | 'android';
export type NotificationPreviewWebDesktopOS = 'macOS';
