import { NotificareNotification } from '~/models';

/* Notifications */

export const invalidNotificationMock: NotificareNotification = {
  type: 'invalid-type', // has an invalid type
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message',
};

export const alertNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Alert',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message',
};

export const rateNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Rate',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message example',
};

export const webViewNotificationMock: NotificareNotification = {
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
};

export const html5VideoNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Video',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message example',
  content: [
    {
      type: 're.notifica.content.HTML5Video',
      data: 'https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/75fa502cbaeb5293b7c8f30e8080f11ca98cc54ab627a6a3dff2b715a683a52e',
    },
  ],
};

export const vimeoVideoNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Video',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message example',
  content: [
    {
      type: 're.notifica.content.Vimeo',
      data: '75196023',
    },
  ],
};

export const youtubeVideoNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Video',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message example',
  content: [
    {
      type: 're.notifica.content.YouTube',
      data: '3t_EN-HZVLw',
    },
  ],
};

export const imageNotificationMock: NotificareNotification = {
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
};

export const inAppBrowserNotificationMock: NotificareNotification = {
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
};

export const webPageNotificationMock: NotificareNotification = {
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
};

export const mapNotificationMock: NotificareNotification = {
  type: 're.notifica.notification.Map',
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message example',
  content: [
    {
      type: 're.notifica.content.Marker',
      data: {
        title: 'Place A',
        description: 'Some description about the place',
        latitude: 5.098765,
        longitude: 6.08875,
      },
    },
    {
      type: 're.notifica.content.Marker',
      data: {
        title: 'Place B',
        description: 'Some description about the place',
        latitude: -2.098765,
        longitude: -4.08875,
      },
    },
  ],
};

export const passbookNotificationMock: NotificareNotification = {
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
};

export const appRecommendationNotificationMock: NotificareNotification = {
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
};
