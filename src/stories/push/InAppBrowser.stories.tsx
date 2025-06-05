import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

export const InAppBrowser = NotificareNotificationPreviewTemplate.bind({});
InAppBrowser.args = {
  notification: {
    type: 're.notifica.notification.InAppBrowser',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://notificare.com/',
      },
    ],
  },
  variant: 'android-app-ui',
};
InAppBrowser.storyName = 'InAppBrowser';
