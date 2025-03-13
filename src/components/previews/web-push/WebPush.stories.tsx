import { StoryFn, Meta } from '@storybook/react';
import WebPush from './WebPush';

export default {
  title: 'ReactComponentLibrary/WebPush',
  component: WebPush,
} as Meta<typeof WebPush>;

const Template: StoryFn<typeof WebPush> = (args) => (
  <WebPush key={JSON.stringify(args.notification)} {...args} />
);

export const WebPushWithMedia = Template.bind({});
WebPushWithMedia.args = {
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
  appName: 'Demo Notificare',
  appDomain: 'notificare.domain.com',
};

export const WebPushWithNoMedia = Template.bind({});
WebPushWithNoMedia.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  appName: 'Demo Notificare',
  appDomain: 'notificare.domain.com',
};

export const WebPushWithNoActions = Template.bind({});
WebPushWithNoActions.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message:
      'Message example example andsanndksakda asnkdanskdknasdans kadsdasdasdas das asndakdsan',
    attachments: [
      {
        uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
        mimeType: 'image/jpeg',
      },
    ],
  },
  appName: 'Demo Notificare',
  appDomain: 'notificare.domain.com',
};
