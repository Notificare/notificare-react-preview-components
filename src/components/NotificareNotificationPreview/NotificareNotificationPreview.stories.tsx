import { StoryFn, Meta } from '@storybook/react';
import { CONFIG } from '../../../config';
import NotificareNotificationPreview from './NotificareNotificationPreview';

export default {
  title: 'ReactComponentLibrary/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} as Meta<typeof NotificareNotificationPreview>;

const Template: StoryFn<typeof NotificareNotificationPreview> = (args) => (
  <NotificareNotificationPreview {...args} />
);

/* Invalid Notification OR Application */

export const InvalidNotification = Template.bind({});
InvalidNotification.args = {
  notification: {
    _id: '1',
    time: '2024-04-03T14:30:00Z',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const InvalidApplication = Template.bind({});
InvalidApplication.args = {
  notification: {
    _id: '1',
    time: '2024-04-03T14:30:00Z',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message',
  },
  application: {
    appName: '', // invalid app name
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const InvalidNotificationAndApplication = Template.bind({});
InvalidNotificationAndApplication.args = {
  notification: {
    _id: '1',
    time: '2024-04-03T14:30:00Z',
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
  },
  application: {
    appName: '', // invalid app name
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* iOS Lock Screen */

export const IOSLockScreenWithMedia = Template.bind({});
IOSLockScreenWithMedia.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSLockScreenWithMediaExpanded = Template.bind({});
IOSLockScreenWithMediaExpanded.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen-expanded',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSLockScreenWithoutMedia = Template.bind({});
IOSLockScreenWithoutMedia.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* Android Lock Screen */

export const AndroidLockScreenWithMedia = Template.bind({});
AndroidLockScreenWithMedia.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidLockScreenWithoutMedia = Template.bind({});
AndroidLockScreenWithoutMedia.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidLockScreenWithMediaExpanded = Template.bind({});
AndroidLockScreenWithMediaExpanded.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-lockscreen',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidLockScreenWithoutMediaExpanded = Template.bind({});
AndroidLockScreenWithoutMediaExpanded.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-lockscreen-expanded',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* Android App UI */

export const AndroidAppUITextAlert = Template.bind({});
AndroidAppUITextAlert.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUITextAlertWithActions = Template.bind({});
AndroidAppUITextAlertWithActions.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIRate = Template.bind({});
AndroidAppUIRate.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebView = Template.bind({});
AndroidAppUIWebView.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebViewWithActions = Template.bind({});
AndroidAppUIWebViewWithActions.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebViewWithActionsAndActionableMarkup = Template.bind({});
AndroidAppUIWebViewWithActionsAndActionableMarkup.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUI_HTML5Video = Template.bind({});
AndroidAppUI_HTML5Video.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIVimeoVideo = Template.bind({});
AndroidAppUIVimeoVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIYouTubeVideo = Template.bind({});
AndroidAppUIYouTubeVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIImage = Template.bind({});
AndroidAppUIImage.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIInAppBrowser = Template.bind({});
AndroidAppUIInAppBrowser.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebPage = Template.bind({});
AndroidAppUIWebPage.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebPageWithActions = Template.bind({});
AndroidAppUIWebPageWithActions.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIWebPageWithActionableMarkupAndActions = Template.bind({});
AndroidAppUIWebPageWithActionableMarkupAndActions.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIMap = Template.bind({});
AndroidAppUIMap.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIDigitalCard = Template.bind({});
AndroidAppUIDigitalCard.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const AndroidAppUIAppRecommendation = Template.bind({});
AndroidAppUIAppRecommendation.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* iOS App UI */

export const IOSAppUITextAlert = Template.bind({});
IOSAppUITextAlert.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUITextAlertWithSingleAction = Template.bind({});
IOSAppUITextAlertWithSingleAction.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUITextAlertWithMultipleActions = Template.bind({});
IOSAppUITextAlertWithMultipleActions.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIWebView = Template.bind({});
IOSAppUIWebView.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIWebViewWithActions = Template.bind({});
IOSAppUIWebViewWithActions.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIMap = Template.bind({});
IOSAppUIMap.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUI_HTML5Video = Template.bind({});
IOSAppUI_HTML5Video.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIVimeoVideo = Template.bind({});
IOSAppUIVimeoVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIYouTubeVideo = Template.bind({});
IOSAppUIYouTubeVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIWebPage = Template.bind({});
IOSAppUIWebPage.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.URL',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://www.wikipedia.org/',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIImage = Template.bind({});
IOSAppUIImage.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIRate = Template.bind({});
IOSAppUIRate.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIDigitalCard = Template.bind({});
IOSAppUIDigitalCard.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIInAppBrowser = Template.bind({});
IOSAppUIInAppBrowser.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const IOSAppUIAppRecommendation = Template.bind({});
IOSAppUIAppRecommendation.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* Web macOS */

export const WebMacOSWithMediaAndActions = Template.bind({});
WebMacOSWithMediaAndActions.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Telephone',
        label: 'Make a call',
        target: 'tel:0500666858',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-desktop-macos',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebMacOSWithoutMedia = Template.bind({});
WebMacOSWithoutMedia.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-desktop-macos',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* Web Android App UI */

export const WebAndroidAppUITextAlert = Template.bind({});
WebAndroidAppUITextAlert.args = {
  notification: {
    _id: '1',
    time: '2024-04-03T14:30:00Z',
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    attachments: [
      {
        uri: 'https://t4.ftcdn.net/jpg/01/19/56/47/360_F_119564758_3Zj8GjaFFt9MVNkZYR7LvAGz6KS1JIqD.jpg',
        mimeType: 'image/jpeg',
      },
    ],
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Browser',
        label: 'Visit website',
        target: 'https://ncclothing.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'NC Clothing',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'nc-clothing.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIWebView = Template.bind({});
WebAndroidAppUIWebView.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIMap = Template.bind({});
WebAndroidAppUIMap.args = {
  notification: {
    _id: '',
    time: '',
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
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIURL = Template.bind({});
WebAndroidAppUIURL.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.URL',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.URL',
        data: 'https://www.wikipedia.org/',
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUI_HTML5Video = Template.bind({});
WebAndroidAppUI_HTML5Video.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIVimeoVideo = Template.bind({});
WebAndroidAppUIVimeoVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIYouTubeVideo = Template.bind({});
WebAndroidAppUIYouTubeVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebAndroidAppUIImage = Template.bind({});
WebAndroidAppUIImage.args = {
  notification: {
    _id: '',
    time: '',
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
        data: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/cd896ef556ffea7645f22d7a86592da2c25a47aa69701ea0ae1e4d6e89f84c2d',
      },
    ],
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

/* Web Iphone App UI */

export const WebIphoneAppUITextAlert = Template.bind({});
WebIphoneAppUITextAlert.args = {
  notification: {
    _id: '',
    time: '',
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    attachments: [
      {
        uri: 'https://i0.wp.com/touristjourney.com/wp-content/uploads/2020/10/shutterstock_1706807566-scaled.jpg?fit=2560%2C1707&ssl=1',
        mimeType: 'image/jpeg',
      },
    ],
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '2',
        type: 're.notifica.action.Callback',
        label: 'Button B',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        _id: '3',
        type: 're.notifica.action.Callback',
        label: 'Button C',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIWebView = Template.bind({});
WebIphoneAppUIWebView.args = {
  notification: {
    _id: '',
    time: '',
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
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIMap = Template.bind({});
WebIphoneAppUIMap.args = {
  notification: {
    _id: '',
    time: '',
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
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIURL = Template.bind({});
WebIphoneAppUIURL.args = {
  notification: {
    _id: '',
    time: '',
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUI_HTML5Video = Template.bind({});
WebIphoneAppUI_HTML5Video.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIVimeoVideo = Template.bind({});
WebIphoneAppUIVimeoVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIYouTubeVideo = Template.bind({});
WebIphoneAppUIYouTubeVideo.args = {
  notification: {
    _id: '',
    time: '',
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
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};

export const WebIphoneAppUIImage = Template.bind({});
WebIphoneAppUIImage.args = {
  notification: {
    _id: '',
    time: '',
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
        data: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/cd896ef556ffea7645f22d7a86592da2c25a47aa69701ea0ae1e4d6e89f84c2d',
      },
    ],
    actions: [
      {
        _id: '1',
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
  configKeys: {
    serviceKey: CONFIG.API_KEY,
  },
  showControls: true,
};
