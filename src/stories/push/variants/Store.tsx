import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const googlePlaySearchStore: Partial<NotificareNotificationPreviewProps> = {
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

export const appStore: Partial<NotificareNotificationPreviewProps> = {
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
