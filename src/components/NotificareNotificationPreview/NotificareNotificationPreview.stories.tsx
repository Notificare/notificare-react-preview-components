import { StoryFn, Meta } from '@storybook/react';
import { getPushAPIHost } from '../../config/api';
import { NotificareNotificationPreview } from './NotificareNotificationPreview';

const meta: Meta<typeof NotificareNotificationPreview> = {
  title: 'ReactComponentLibrary/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
};
export default meta;

const Template: StoryFn<typeof NotificareNotificationPreview> = (args) => (
  <NotificareNotificationPreview {...args} />
);

/* Option Keys */

// @ts-expect-error import.meta.env is not being detected
const serviceKey = import.meta.env.VITE_SERVICE_KEY;
// @ts-expect-error import.meta.env is not being detected
const googleMapsAPIKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

/* Invalid Notification */

export const InvalidNotification = Template.bind({});
InvalidNotification.args = {
  notification: {
    type: 'invalid-type', // has an invalid type
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message',
    attachments: [
      {
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'ios-lockscreen',
  showControls: true,
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
};

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
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'ios-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'ios-lockscreen-expanded',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const IOSLockScreenWithoutMedia = Template.bind({});
IOSLockScreenWithoutMedia.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'ios-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'android-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidLockScreenWithoutMedia = Template.bind({});
AndroidLockScreenWithoutMedia.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'android-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'android-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidLockScreenWithoutMediaExpanded = Template.bind({});
AndroidLockScreenWithoutMediaExpanded.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'android-lockscreen-expanded',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidAppUIRate = Template.bind({});
AndroidAppUIRate.args = {
  notification: {
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
  applicationId: '618d0f4edc09fbed1864e8d0',
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidAppUIWebViewWithActionsAndActionableMarkup = Template.bind({});
AndroidAppUIWebViewWithActionsAndActionableMarkup.args = {
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidAppUI_HTML5Video = Template.bind({});
AndroidAppUI_HTML5Video.args = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/151f8ffa26356ffb3b2a5971d9cdc85b06706387c151cac40e092a67023599e8`,
      },
    ],
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
      {
        type: 're.notifica.content.PNG',
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
    ],
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidAppUIWebPageWithActions = Template.bind({});
AndroidAppUIWebPageWithActions.args = {
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const AndroidAppUIWebPageWithActionableMarkupAndActions = Template.bind({});
AndroidAppUIWebPageWithActionableMarkupAndActions.args = {
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: `${getPushAPIHost()}/pass/pkpass/79af019c-b575-478c-bb35-14b32e5bfcf1`,
      },
    ],
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Go to Notificare website',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const IOSAppUIMap = Template.bind({});
IOSAppUIMap.args = {
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const IOSAppUI_HTML5Video = Template.bind({});
IOSAppUI_HTML5Video.args = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/151f8ffa26356ffb3b2a5971d9cdc85b06706387c151cac40e092a67023599e8`,
      },
    ],
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: 'https://www.wikipedia.org/',
      },
    ],
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
      {
        type: 're.notifica.content.PNG',
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
    ],
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const IOSAppUIRate = Template.bind({});
IOSAppUIRate.args = {
  notification: {
    type: 're.notifica.notification.Rate',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
  applicationId: '618d0f4edc09fbed1864e8d0',
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
        data: `${getPushAPIHost()}/pass/pkpass/79af019c-b575-478c-bb35-14b32e5bfcf1`,
      },
    ],
  },
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'ios-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
        mimeType: 'image/jpeg',
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
  variant: 'web-desktop-macos',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const WebMacOSWithoutMedia = Template.bind({});
WebMacOSWithoutMedia.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  variant: 'web-desktop-macos',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

/* Web Android App UI */

export const WebAndroidAppUITextAlert = Template.bind({});
WebAndroidAppUITextAlert.args = {
  notification: {
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
        type: 're.notifica.action.Browser',
        label: 'Visit website',
        target: 'https://ncclothing.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: 'https://www.wikipedia.org/',
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const WebAndroidAppUI_HTML5Video = Template.bind({});
WebAndroidAppUI_HTML5Video.args = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/151f8ffa26356ffb3b2a5971d9cdc85b06706387c151cac40e092a67023599e8`,
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
      {
        type: 're.notifica.content.PNG',
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
    ],
    actions: [
      {
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        type: 're.notifica.action.Callback',
        label: 'Button B',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
      {
        type: 're.notifica.action.Callback',
        label: 'Button C',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: 'https://www.wikipedia.org/',
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

export const WebIphoneAppUI_HTML5Video = Template.bind({});
WebIphoneAppUI_HTML5Video.args = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `${getPushAPIHost()}/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/151f8ffa26356ffb3b2a5971d9cdc85b06706387c151cac40e092a67023599e8`,
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
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
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
      {
        type: 're.notifica.content.PNG',
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/415863c38a028df745ec58a3c305394d0a8722ccf771b3855abd39b557b67da0`,
      },
    ],
    actions: [
      {
        type: 're.notifica.action.Callback',
        label: 'Button A',
        target: 'https://notificare.com/',
        camera: false,
        keyboard: false,
      },
    ],
  },
  variant: 'web-iphone-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
