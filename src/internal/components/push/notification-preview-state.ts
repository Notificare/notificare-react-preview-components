export type NotificationPreviewPlatform = 'android' | 'ios' | 'web';
export type NotificationPreviewDisplayMode = 'lockscreen' | 'lockscreen-expanded' | 'app-ui';
export type NotificationPreviewFormFactor = 'desktop' | 'phone';
export type NotificationPreviewDesktopOperatingSystem = 'macos';
export type NotificationPreviewMobileOperatingSystem = 'android' | 'ios';

export type NotificationPreviewState =
  | NotificationPreviewStateMobile
  | NotificationPreviewStateWebDesktop
  | NotificationPreviewStateWebMobile;

export interface NotificationPreviewStateMobile {
  platform: Extract<NotificationPreviewPlatform, 'android' | 'ios'>;
  displayMode: NotificationPreviewDisplayMode;
}

export interface NotificationPreviewStateWebDesktop {
  platform: Extract<NotificationPreviewPlatform, 'web'>;
  displayMode: NotificationPreviewDisplayMode;
  formFactor: Extract<NotificationPreviewFormFactor, 'desktop'>;
  os: NotificationPreviewDesktopOperatingSystem;
}

export interface NotificationPreviewStateWebMobile {
  platform: Extract<NotificationPreviewPlatform, 'web'>;
  displayMode: NotificationPreviewDisplayMode;
  formFactor: Extract<NotificationPreviewFormFactor, 'phone'>;
  os: NotificationPreviewMobileOperatingSystem;
}
