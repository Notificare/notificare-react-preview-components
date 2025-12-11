import { NotificareOnboardingPreviewProps } from '~/components/NotificareOnboardingPreview/NotificareOnboardingPreview';

export const DIALOG: Partial<NotificareOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
        autoOnboardingOptions: {
          message: 'Would you like to receive notifications from our website?',
          cancelButton: 'No, thanks',
          acceptButton: 'Yes',
        },
      },
    },
  },
};
