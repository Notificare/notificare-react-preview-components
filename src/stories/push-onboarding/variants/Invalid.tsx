import { NotificarePushOnboardingPreviewProps } from '~/components/NotificarePushOnboardingPreview/NotificarePushOnboardingPreview';

export const INVALID: Partial<NotificarePushOnboardingPreviewProps> = {
  applicationInfo: {
    websitePushConfig: {
      launchConfig: {
        applicationName: 'My App',
      },
    },
  },
};
