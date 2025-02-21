import { StoryFn, Meta } from '@storybook/react';
import AndroidLockScreenPush from './AndroidLockScreenPush';

export default {
  title: 'ReactComponentLibrary/AndroidLockScreenPush',
  component: AndroidLockScreenPush,
} as Meta<typeof AndroidLockScreenPush>;

const Template: StoryFn<typeof AndroidLockScreenPush> = (args) => (
  <AndroidLockScreenPush {...args} />
);

export const AndroidLockScreenPushWithMedia = Template.bind({});
AndroidLockScreenPushWithMedia.args = {
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
  appIcon:
    'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
};

export const AndroidLockScreenPushWithNoMedia = Template.bind({});
AndroidLockScreenPushWithNoMedia.args = {
  notification: {
    type: 're.notifica.notification.Alert',
    title: 'Demo Notificare',
    subtitle: 'Subtitle',
    message: 'Message example',
  },
  appName: 'Demo Notificare',
  appIcon:
    'https://push.notifica.re/upload/notifications/b77ca471199bf01369377693f0252dd54910373b13a040a380bbe64555149a24/3ce0bdb115367a19cd5ae7f0195e43a6c2f3ba9830a97e0ce9fe96f1d3a32063',
};
