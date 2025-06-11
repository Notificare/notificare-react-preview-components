import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const inAppBrowser: Partial<NotificareNotificationPreviewProps> = {
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
