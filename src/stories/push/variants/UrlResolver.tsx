import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const URL_RESOLVER_WITH_URL_SCHEME: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URLResolver',
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

export const URL_RESOLVER_WITH_HTTP_URL: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URLResolver',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://notificare.com/',
      },
    ],
  },
};

export const URL_RESOLVER_WITH_HTTP_URL_AND_WEB_VIEW_QUERY_PARAMETER: Partial<NotificareNotificationPreviewProps> =
  {
    notification: {
      type: 're.notifica.notification.URLResolver',
      title: '30% off on selected products',
      subtitle: 'From shirts, shoes, and much more!',
      message:
        "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
      content: [
        {
          type: 're.notifica.content.URL',
          data: 'https://notificare.com?notificareWebView=1',
        },
      ],
    },
  };
