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

const serviceKey = import.meta.env.VITE_SERVICE_KEY;
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

/* Text Alert */

export const TextAlertWithAttachment = Template.bind({});
TextAlertWithAttachment.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    attachments: [
      {
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/3db6e2b6f2a22ef7c3099180d9e2b95469efee10ba655455117586613a5f56f9`,
        mimeType: 'image/jpeg',
      },
    ],
  },
  variant: 'android-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
TextAlertWithAttachment.storyName = 'Text Alert with Attachment';

export const TextAlertWithoutAttachment = Template.bind({});
TextAlertWithoutAttachment.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
  },
  variant: 'android-lockscreen',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
TextAlertWithoutAttachment.storyName = 'Text Alert without Attachment';

export const TextAlertWithSingleAction = Template.bind({});
TextAlertWithSingleAction.args = {
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
TextAlertWithSingleAction.storyName = 'Text Alert with single Action';

export const TextAlertWithMultipleActions = Template.bind({});
TextAlertWithMultipleActions.args = {
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
TextAlertWithMultipleActions.storyName = 'Text Alert with multiple Actions';

export const TextAlertWithAttachmentAndActions = Template.bind({});
TextAlertWithAttachmentAndActions.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: '30% off on selected products',
    subtitle: 'From shirts, shoes, and much more!',
    message:
      "Visit our website now and find out more about the new discounts on our products. Don't miss out!",
    attachments: [
      {
        uri: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/3db6e2b6f2a22ef7c3099180d9e2b95469efee10ba655455117586613a5f56f9`,
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
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};
TextAlertWithAttachmentAndActions.storyName = 'Text Alert with Attachment and Actions';

/* Rate */

export const Rate = Template.bind({});
Rate.args = {
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

/* Web View */

export const WebView = Template.bind({});
WebView.args = {
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

export const WebViewWithActions = Template.bind({});
WebViewWithActions.args = {
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

export const WebViewWithActionsAndActionableMarkup = Template.bind({});
WebViewWithActionsAndActionableMarkup.args = {
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
WebViewWithActionsAndActionableMarkup.storyName = 'Webview with Actions and Actionable Markup';

/* HTML5 Video */

export const HTML5Video = Template.bind({});
HTML5Video.args = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/75fa502cbaeb5293b7c8f30e8080f11ca98cc54ab627a6a3dff2b715a683a52e`,
      },
    ],
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

/* Vimeo Video */

export const VimeoVideo = Template.bind({});
VimeoVideo.args = {
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

/* YouTube Video */

export const YouTubeVideo = Template.bind({});
YouTubeVideo.args = {
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
YouTubeVideo.storyName = 'YouTube Video';

/* Image */

export const Image = Template.bind({});
Image.args = {
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
        data: `${getPushAPIHost()}/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/c60831b542d92ec19842750038e160cef3563caa20d7e4b2702d7f4451364f25`,
      },
    ],
  },
  variant: 'android-app-ui',
  serviceKey: serviceKey,
  googleMapsAPIKey: googleMapsAPIKey,
  showControls: true,
};

/* In-app browser */

export const InAppBrowser = Template.bind({});
InAppBrowser.args = {
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
InAppBrowser.storyName = 'In-app Browser';

/* Web Page (URL) */

export const WebPage = Template.bind({});
WebPage.args = {
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
WebPage.storyName = 'Web Page (URL)';

export const WebPageWithActions = Template.bind({});
WebPageWithActions.args = {
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
WebPageWithActions.storyName = 'Web Page (URL) with Actions';

export const WebPageWithActionsAndActionableMarkup = Template.bind({});
WebPageWithActionsAndActionableMarkup.args = {
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
WebPageWithActionsAndActionableMarkup.storyName =
  'Web Page (URL) with Actions and Actionable Markup';

/* Map */

export const Map = Template.bind({});
Map.args = {
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

/* Passbook */

export const Passbook = Template.bind({});
Passbook.args = {
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

/* Store */

export const GooglePlaySearchStore = Template.bind({});
GooglePlaySearchStore.args = {
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
GooglePlaySearchStore.storyName = 'Store - Google Play Search';

export const AppStore = Template.bind({});
AppStore.args = {
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
AppStore.storyName = 'Store - App Store';
