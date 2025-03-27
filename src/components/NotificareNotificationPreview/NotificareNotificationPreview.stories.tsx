import { StoryFn, Meta } from '@storybook/react';
import NotificareNotificationPreview from './NotificareNotificationPreview';

export default {
  title: 'ReactComponentLibrary/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} as Meta<typeof NotificareNotificationPreview>;

const Template: StoryFn<typeof NotificareNotificationPreview> = (args) => (
  <NotificareNotificationPreview {...args} />
);

/* iOS Lock Screen */

export const IOSLockScreenWithMedia = Template.bind({});
IOSLockScreenWithMedia.args = {
  notification: {
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
  showControls: true,
  variant: 'ios-lockscreen',
};

export const IOSLockScreenWithMediaExpanded = Template.bind({});
IOSLockScreenWithMediaExpanded.args = {
  notification: {
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
  showControls: true,
  variant: 'ios-lockscreen-expanded',
};

export const IOSLockScreenWithoutMedia = Template.bind({});
IOSLockScreenWithoutMedia.args = {
  notification: {
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
  showControls: true,
  variant: 'ios-lockscreen',
};

/* Android Lock Screen */

export const AndroidLockScreenWithMedia = Template.bind({});
AndroidLockScreenWithMedia.args = {
  notification: {
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
};

export const AndroidLockScreenWithoutMedia = Template.bind({});
AndroidLockScreenWithoutMedia.args = {
  notification: {
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
};

export const AndroidLockScreenWithMediaExpanded = Template.bind({});
AndroidLockScreenWithMediaExpanded.args = {
  notification: {
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
};

export const AndroidLockScreenWithoutMediaExpanded = Template.bind({});
AndroidLockScreenWithoutMediaExpanded.args = {
  notification: {
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
};

/* Android App UI */

export const AndroidAppUITextAlert = Template.bind({});
AndroidAppUITextAlert.args = {
  notification: {
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
};

export const AndroidAppUITextAlertWithActions = Template.bind({});
AndroidAppUITextAlertWithActions.args = {
  notification: {
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
};

export const AndroidAppUIRate = Template.bind({});
AndroidAppUIRate.args = {
  notification: {
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
};

export const AndroidAppUIWebView = Template.bind({});
AndroidAppUIWebView.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
};

export const AndroidAppUIWebViewWithActions = Template.bind({});
AndroidAppUIWebViewWithActions.args = {
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
};

export const AndroidAppUiHTML5Video = Template.bind({});
AndroidAppUiHTML5Video.args = {
  notification: {
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
};

export const AndroidAppUIVimeoVideo = Template.bind({});
AndroidAppUIVimeoVideo.args = {
  notification: {
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
};

export const AndroidAppUIYouTubeVideo = Template.bind({});
AndroidAppUIYouTubeVideo.args = {
  notification: {
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
};

export const AndroidAppUIImage = Template.bind({});
AndroidAppUIImage.args = {
  notification: {
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
};

export const AndroidAppUIInAppBrowser = Template.bind({});
AndroidAppUIInAppBrowser.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
};

export const AndroidAppUIWebPage = Template.bind({});
AndroidAppUIWebPage.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
};

export const AndroidAppUIMap = Template.bind({});
AndroidAppUIMap.args = {
  notification: {
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
};

export const AndroidAppUIDigitalCard = Template.bind({});
AndroidAppUIDigitalCard.args = {
  notification: {
    type: 're.notifica.notification.Passbook',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.PKPass',
        data: 'https://pass.notifica.re/#/66fd0d51cdf98bc9d9399b66/rsqmkvj5urpzzlovinykm34ewdh2',
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
};

export const AndroidAppUIAppRecommendation = Template.bind({});
AndroidAppUIAppRecommendation.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'android-app-ui',
};

/* iOS App UI */

export const IOSAppUITextAlert = Template.bind({});
IOSAppUITextAlert.args = {
  notification: {
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
};

export const IOSAppUITextAlertWithSingleAction = Template.bind({});
IOSAppUITextAlertWithSingleAction.args = {
  notification: {
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
};

export const IOSAppUITextAlertWithMultipleActions = Template.bind({});
IOSAppUITextAlertWithMultipleActions.args = {
  notification: {
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
};

export const IOSAppUIWebView = Template.bind({});
IOSAppUIWebView.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
};

export const IOSAppUIWebViewWithActions = Template.bind({});
IOSAppUIWebViewWithActions.args = {
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
};

export const IOSAppUiHTML5Video = Template.bind({});
IOSAppUiHTML5Video.args = {
  notification: {
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
};

export const IOSAppUIVimeoVideo = Template.bind({});
IOSAppUIVimeoVideo.args = {
  notification: {
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
};

export const IOSAppUIYouTubeVideo = Template.bind({});
IOSAppUIYouTubeVideo.args = {
  notification: {
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
};

export const IOSAppUIWebPage = Template.bind({});
IOSAppUIWebPage.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
};

export const IOSAppUIImage = Template.bind({});
IOSAppUIImage.args = {
  notification: {
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
};

export const IOSAppUIRate = Template.bind({});
IOSAppUIRate.args = {
  notification: {
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
};

export const IOSAppUIDigitalCard = Template.bind({});
IOSAppUIDigitalCard.args = {
  notification: {
    type: 're.notifica.notification.Passbook',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.PKPass',
        data: 'https://pass.notifica.re/#/66fd0d51cdf98bc9d9399b66/rsqmkvj5urpzzlovinykm34ewdh2',
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
};

export const IOSAppUIInAppBrowser = Template.bind({});
IOSAppUIInAppBrowser.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
};

export const IOSAppUIAppRecommendation = Template.bind({});
IOSAppUIAppRecommendation.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'ios-app-ui',
};

/* Web macOS */

export const WebMacOSWithMediaAndActions = Template.bind({});
WebMacOSWithMediaAndActions.args = {
  notification: {
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
};

export const WebMacOSWithoutMedia = Template.bind({});
WebMacOSWithoutMedia.args = {
  notification: {
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
};

/* Web Android App UI */

export const WebAndroidAppUITextAlert = Template.bind({});
WebAndroidAppUITextAlert.args = {
  notification: {
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
  variant: 'web-android-app-ui',
};

export const WebAndroidAppUIWebView = Template.bind({});
WebAndroidAppUIWebView.args = {
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
};

export const WebAndroidAppUIMap = Template.bind({});
WebAndroidAppUIMap.args = {
  notification: {
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
};

export const WebAndroidAppUIURL = Template.bind({});
WebAndroidAppUIURL.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-android-app-ui',
};

export const WebAndroidAppUiHTML5Video = Template.bind({});
WebAndroidAppUiHTML5Video.args = {
  notification: {
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
};

export const WebAndroidAppUIVimeoVideo = Template.bind({});
WebAndroidAppUIVimeoVideo.args = {
  notification: {
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
};

export const WebAndroidAppUIYouTubeVideo = Template.bind({});
WebAndroidAppUIYouTubeVideo.args = {
  notification: {
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
};

export const WebAndroidAppUIImage = Template.bind({});
WebAndroidAppUIImage.args = {
  notification: {
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
};

/* Web Iphone App UI */

export const WebIphoneAppUITextAlert = Template.bind({});
WebIphoneAppUITextAlert.args = {
  notification: {
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
};

export const WebIphoneAppUIWebView = Template.bind({});
WebIphoneAppUIWebView.args = {
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
};

export const WebIphoneAppUIMap = Template.bind({});
WebIphoneAppUIMap.args = {
  notification: {
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
};

export const WebIphoneAppUIURL = Template.bind({});
WebIphoneAppUIURL.args = {
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
  application: {
    appName: 'Demo Notificare',
    appIcon:
      'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
    appDomain: 'notificare.com',
  },
  variant: 'web-iphone-app-ui',
};

export const WebIphoneAppUiHTML5Video = Template.bind({});
WebIphoneAppUiHTML5Video.args = {
  notification: {
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
};

export const WebIphoneAppUIVimeoVideo = Template.bind({});
WebIphoneAppUIVimeoVideo.args = {
  notification: {
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
};

export const WebIphoneAppUIYouTubeVideo = Template.bind({});
WebIphoneAppUIYouTubeVideo.args = {
  notification: {
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
};

export const WebIphoneAppUIImage = Template.bind({});
WebIphoneAppUIImage.args = {
  notification: {
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
};
