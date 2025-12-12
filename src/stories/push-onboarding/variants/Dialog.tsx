import { NotificarePushOnboardingPreviewProps } from '~/components/NotificarePushOnboardingPreview/NotificarePushOnboardingPreview';

export const DIALOG: Partial<NotificarePushOnboardingPreviewProps> = {
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
