import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '../../components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

export const Passbook = NotificareNotificationPreviewTemplate.bind({});
Passbook.args = {
  notification: {
    type: 're.notifica.notification.Passbook',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.PKPass',
        data: `https://push-test.notifica.re/pass/pkpass/79af019c-b575-478c-bb35-14b32e5bfcf1`,
      },
    ],
  },
  variant: 'android-app-ui',
};
