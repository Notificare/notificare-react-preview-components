import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const invalid: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 'invalid-type', // has an invalid type
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message',
    attachments: [
      {
        uri: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'ios-lockscreen',
};
