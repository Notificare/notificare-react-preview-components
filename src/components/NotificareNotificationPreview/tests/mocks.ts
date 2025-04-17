import { CONFIG } from '../../../../config';
import { NotificareApplication } from '../models/notificare-application';
import { NotificareNotification } from '../models/notificare-notification';
import { NotificareNotificationConfigKeys } from '../models/notificare-notification-config';

/* Notifications */

export const invalidNotificationMock: NotificareNotification = {
  type: 'invalid-type', // has an invalid type
  title: 'Title',
  subtitle: 'Subtitle',
  message: 'Message',
  attachments: [
    {
      uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
      mimeType: 'image/jpeg',
    },
  ],
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
      data: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/151f8ffa26356ffb3b2a5971d9cdc85b06706387c151cac40e092a67023599e8',
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
      data: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/74595903e5fda1b2ac75fbd3396fb9fd11952a7f43f3f35334ed3b5b199d71f1',
    },
    {
      type: 're.notifica.content.PNG',
      data: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/74595903e5fda1b2ac75fbd3396fb9fd11952a7f43f3f35334ed3b5b199d71f1',
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
      data: 'https://push.notifica.re/pass/pkpass/6de00e24-9c49-4cd8-bb9b-ef8f7d77ec2c',
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

/* Application */

export const invalidApplicationMock: NotificareApplication = {
  name: '', // invalid app name
  icon: 'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
  domain: 'notificare.com',
};

export const applicationMock: NotificareApplication = {
  name: 'Demo Notificare',
  icon: 'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
  domain: 'notificare.com',
};

/* Config Keys */

export const configKeysMock: NotificareNotificationConfigKeys = {
  serviceKey: CONFIG.API_KEY,
};
