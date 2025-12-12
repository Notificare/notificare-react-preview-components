import { NotificarePushOnboardingPreviewProps } from '~/components/NotificarePushOnboardingPreview/NotificarePushOnboardingPreview';

export const FLOATING_BUTTON_BOTTOM_END: Partial<NotificarePushOnboardingPreviewProps> = {
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

export const FLOATING_BUTTON_BOTTOM_START: Partial<NotificarePushOnboardingPreviewProps> = {
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

export const FLOATING_BUTTON_TOP_END: Partial<NotificarePushOnboardingPreviewProps> = {
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

export const FLOATING_BUTTON_TOP_START: Partial<NotificarePushOnboardingPreviewProps> = {
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

export const FLOATING_BUTTON_PERMISSION_GRANTED: Partial<NotificarePushOnboardingPreviewProps> = {
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

export const FLOATING_BUTTON_PERMISSION_DENIED: Partial<NotificarePushOnboardingPreviewProps> = {
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
