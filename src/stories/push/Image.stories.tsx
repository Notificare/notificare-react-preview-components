import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

export const ImageSingle = NotificareNotificationPreviewTemplate.bind({});
ImageSingle.args = {
  notification: {
    type: 're.notifica.notification.Image',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.PNG',
        data: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
    ],
  },
  variant: 'android-app-ui',
};
ImageSingle.storyName = 'Image - single image';

export const ImageMultiple = NotificareNotificationPreviewTemplate.bind({});
ImageMultiple.args = {
  notification: {
    type: 're.notifica.notification.Image',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.PNG',
        data: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
      {
        type: 're.notifica.content.PNG',
        data: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/c60831b542d92ec19842750038e160cef3563caa20d7e4b2702d7f4451364f25`,
      },
    ],
  },
  variant: 'android-app-ui',
};
ImageMultiple.storyName = 'Image - two images';
