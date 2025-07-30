import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const URL_SCHEME: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URLScheme',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'com.domain://domain.com',
      },
    ],
  },
};
