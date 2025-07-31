export type NotificationPreviewPlatform = 'android' | 'ios' | 'web';
export type NotificationPreviewDisplayMode = 'lockscreen' | 'lockscreen-expanded' | 'app-ui';
export type NotificationPreviewFormFactor = 'desktop' | 'phone';
export type NotificationPreviewDesktopOperatingSystem = 'macos';
export type NotificationPreviewMobileOperatingSystem = 'android' | 'ios';

export type NotificationPreviewState =
  | NotificationPreviewStateMobile
  | NotificationPreviewStateWebDesktop
  | NotificationPreviewStateWebMobile;

export type NotificationPreviewStateMobile = {
  platform: Extract<NotificationPreviewPlatform, 'android' | 'ios'>;
  displayMode: NotificationPreviewDisplayMode;
};

export type NotificationPreviewStateWebDesktop = {
  platform: Extract<NotificationPreviewPlatform, 'web'>;
  displayMode: NotificationPreviewDisplayMode;
  formFactor: Extract<NotificationPreviewFormFactor, 'desktop'>;
  os: NotificationPreviewDesktopOperatingSystem;
};

export type NotificationPreviewStateWebMobile = {
  platform: Extract<NotificationPreviewPlatform, 'web'>;
  displayMode: NotificationPreviewDisplayMode;
  formFactor: Extract<NotificationPreviewFormFactor, 'phone'>;
  os: NotificationPreviewMobileOperatingSystem;
};
