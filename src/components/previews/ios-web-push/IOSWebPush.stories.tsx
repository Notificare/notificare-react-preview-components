import { StoryFn, Meta } from '@storybook/react';
import IOSWebPush from './IOSWebPush';

export default {
  title: 'ReactComponentLibrary/IOSWebPush',
  component: IOSWebPush,
} as Meta<typeof IOSWebPush>;

const Template: StoryFn<typeof IOSWebPush> = (args) => <IOSWebPush {...args} />;

export const IOSWebPushTextAlert = Template.bind({});
IOSWebPushTextAlert.args = {
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
  appName: 'Demo Notificare',
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushWebView = Template.bind({});
IOSWebPushWebView.args = {
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
  appName: 'Demo Notificare',
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushMap = Template.bind({});
IOSWebPushMap.args = {
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
  appName: 'Demo Notificare',
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushURL = Template.bind({});
IOSWebPushURL.args = {
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
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushHTML5Video = Template.bind({});
IOSWebPushHTML5Video.args = {
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
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushVimeoVideo = Template.bind({});
IOSWebPushVimeoVideo.args = {
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
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushYouTubeVideo = Template.bind({});
IOSWebPushYouTubeVideo.args = {
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
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};

export const IOSWebPushImage = Template.bind({});
IOSWebPushImage.args = {
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
  appName: 'Demo Notificare',
  appIcon:
    'https://push.notifica.re/upload/website-push/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/f40400ffc0f75f545058e6ba25d97c800b48e7e2b6add5acd2b5bfe84ce7b564',
};
