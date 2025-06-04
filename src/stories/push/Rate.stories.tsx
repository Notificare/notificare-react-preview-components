import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '../../components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

/* Rate */

export const Rate = NotificareNotificationPreviewTemplate.bind({});
Rate.args = {
  notification: {
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'android-app-ui',
  applicationId: '618d0f4edc09fbed1864e8d0',
};
