import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const url: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URL',
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

export const urlWithAction: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URL',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://notificare.com/',
      },
    ],
    actions: [
      {
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'android-app-ui',
};

export const urlWithActionsAndActionableMarkup: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.URL',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://ntc.re/q6YYsq177y',
      },
    ],
    actions: [
      {
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'android-app-ui',
};
