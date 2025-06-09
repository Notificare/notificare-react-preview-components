import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const webView: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.WebView',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML',
        data: '<p>Example</p>',
      },
    ],
  },
  variant: 'android-app-ui',
};

export const webViewWithMultipleActions: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.WebView',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML',
        data: '<p>Example</p>',
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
      {
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  variant: 'android-app-ui',
};

export const webViewWithMultipleActionsAndActionableMarkup: Partial<NotificareNotificationPreviewProps> =
  {
    notification: {
      type: 're.notifica.notification.WebView',
      title: 'Title',
      subtitle: 'Subtitle',
      message: 'Message example',
      content: [
        {
          type: 're.notifica.content.HTML',
          data: '<div> <p>Example</p> <a href="/?notificareOpenAction=Go">Go</a> </div>',
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
        {
          type: 're.notifica.action.Telephone',
          label: 'Make a call',
          target: 'tel:0500666858',
        },
      ],
    },
    variant: 'android-app-ui',
  };
