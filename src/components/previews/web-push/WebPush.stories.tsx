import { StoryFn, Meta } from '@storybook/react';
import WebPush from './WebPush';

export default {
  title: 'ReactComponentLibrary/WebPush',
  component: WebPush,
} as Meta<typeof WebPush>;

const Template: StoryFn<typeof WebPush> = (args) => <WebPush {...args} />;

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
