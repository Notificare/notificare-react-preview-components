import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const alertWithAttachment: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    attachments: [
      {
        uri: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/3db6e2b6f2a22ef7c3099180d9e2b95469efee10ba655455117586613a5f56f9`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'android-lockscreen',
};

export const alertWithoutAttachment: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
  },
  variant: 'android-lockscreen',
};

export const alertWithSingleAction: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    actions: [
      {
        type: 're.notifica.action.Browser',
        label: 'Visit website',
        target: 'https://ncclothing.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'ios-app-ui',
};

export const alertWithMultipleActions: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    actions: [
      {
        type: 're.notifica.action.Browser',
        label: 'Visit website',
        target: 'https://ncclothing.com/',
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

export const alertWithAttachmentAndMultipleActions: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    attachments: [
      {
        uri: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/3db6e2b6f2a22ef7c3099180d9e2b95469efee10ba655455117586613a5f56f9`,
        mimeType: 'image/jpeg',
      },
    ],
    actions: [
      {
        type: 're.notifica.action.Browser',
        label: 'Visit website',
        target: 'https://ncclothing.com/',
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
  variant: 'web-desktop-macos',
};
