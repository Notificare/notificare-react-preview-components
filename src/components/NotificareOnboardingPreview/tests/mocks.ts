import { NotificareOnboardingApplicationInfo } from '~/models';

export const INVALID_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo = {
  websitePushConfig: {
    launchConfig: {
      applicationName: 'My App',
    },
  },
};

export const DIALOG_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo = {
  websitePushConfig: {
    icon: 'https://push-test.notifica.re/upload/website-push/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/0eda6e82ad04fedee79c0771b92ea30c121e84167f0e2ec6e4064997b4e36a23',
    launchConfig: {
      applicationName: 'My App',
      autoOnboardingOptions: {
        message: 'Would you like to receive notifications from our website?',
        cancelButton: 'No, thanks',
        acceptButton: 'Yes',
      },
    },
  },
};

export const FLOATING_BUTTON_BOTTOM_END_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo =
  {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
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
  };

export const FLOATING_BUTTON_BOTTOM_START_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo =
  {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
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
  };

export const FLOATING_BUTTON_TOP_END_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo =
  {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
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
  };

export const FLOATING_BUTTON_TOP_START_ONBOARDING_APPLICATION_INFO_MOCK: NotificareOnboardingApplicationInfo =
  {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
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
  };
