import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

export const GooglePlaySearchStore = NotificareNotificationPreviewTemplate.bind({});
GooglePlaySearchStore.args = {
  notification: {
    type: 're.notifica.notification.Store',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.GooglePlaySearch',
        data: 'Subway Surfers',
      },
    ],
  },
  variant: 'android-app-ui',
};
GooglePlaySearchStore.storyName = 'Store - Google Play Search';

export const AppStore = NotificareNotificationPreviewTemplate.bind({});
AppStore.args = {
  notification: {
    type: 're.notifica.notification.Store',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.AppStore',
        data: {
          identifier: '544007664',
          campaignToken: '',
          affiliateToken: '',
          providerToken: '',
        },
      },
    ],
  },
  variant: 'ios-app-ui',
};
AppStore.storyName = 'Store - App Store';
