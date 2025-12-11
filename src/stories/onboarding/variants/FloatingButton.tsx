import { NotificareOnboardingPreviewProps } from '~/components/NotificareOnboardingPreview/NotificareOnboardingPreview';

export const FLOATING_BUTTON_BOTTOM_END: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'end',
            vertical: 'bottom',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
};

export const FLOATING_BUTTON_BOTTOM_START: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'start',
            vertical: 'bottom',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
};

export const FLOATING_BUTTON_TOP_END: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'end',
            vertical: 'top',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
};

export const FLOATING_BUTTON_TOP_START: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'start',
            vertical: 'top',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
};

export const FLOATING_BUTTON_PERMISSION_GRANTED: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'end',
            vertical: 'bottom',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
  permissionStatus: 'granted',
};

export const FLOATING_BUTTON_PERMISSION_DENIED: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        floatingButtonOptions: {
          alignment: {
            horizontal: 'end',
            vertical: 'bottom',
          },
          permissionTexts: {
            default: 'Click here to enable push notifications',
            granted: "You've granted push notifications",
            denied: "You've denied push notifications",
          },
        },
      },
    },
  },
  permissionStatus: 'denied',
};
