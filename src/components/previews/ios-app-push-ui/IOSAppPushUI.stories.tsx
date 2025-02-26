import { StoryFn, Meta } from '@storybook/react';
import IOSAppPushUI from './IOSAppPushUI';

export default {
  title: 'ReactComponentLibrary/IOSAppPushUI',
  component: IOSAppPushUI,
} as Meta<typeof IOSAppPushUI>;

const Template: StoryFn<typeof IOSAppPushUI> = (args) => <IOSAppPushUI {...args} />;

export const IOSAppPushUITextAlert = Template.bind({});
IOSAppPushUITextAlert.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  appName: 'Demo Notificare',
};

export const IOSAppPushUITextAlertWithSingleAction = Template.bind({});
IOSAppPushUITextAlertWithSingleAction.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUITextAlertWithMultipleActions = Template.bind({});
IOSAppPushUITextAlertWithMultipleActions.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIWebView = Template.bind({});
IOSAppPushUIWebView.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIWebViewWithActions = Template.bind({});
IOSAppPushUIWebViewWithActions.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIHTML5Video = Template.bind({});
IOSAppPushUIHTML5Video.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIVimeoVideo = Template.bind({});
IOSAppPushUIVimeoVideo.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIYouTubeVideo = Template.bind({});
IOSAppPushUIYouTubeVideo.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIWebPage = Template.bind({});
IOSAppPushUIWebPage.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIImage = Template.bind({});
IOSAppPushUIImage.args = {
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
    ],
  },
  appName: 'Demo Notificare',
};

export const IOSAppPushUIRate = Template.bind({});
IOSAppPushUIRate.args = {
  notification: {
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  appName: 'Demo Notificare',
};

export const IOSAppPushUIDigitalCard = Template.bind({});
IOSAppPushUIDigitalCard.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIInAppBrowser = Template.bind({});
IOSAppPushUIInAppBrowser.args = {
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
  appName: 'Demo Notificare',
};

export const IOSAppPushUIAppRecommendation = Template.bind({});
IOSAppPushUIAppRecommendation.args = {
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
  appName: 'Demo Notificare',
};
