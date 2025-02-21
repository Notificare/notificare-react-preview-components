import { StoryFn, Meta } from '@storybook/react';
import IOSLockScreenExpandedPush from './IOSLockScreenExpandedPush';

export default {
  title: 'ReactComponentLibrary/IOSLockScreenExpandedPush',
  component: IOSLockScreenExpandedPush,
} as Meta<typeof IOSLockScreenExpandedPush>;

const Template: StoryFn<typeof IOSLockScreenExpandedPush> = (args) => (
  <IOSLockScreenExpandedPush {...args} />
);

export const IosLockScreenExpandedPushWithMedia = Template.bind({});
IosLockScreenExpandedPushWithMedia.args = {
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

export const IosLockScreenExpandedPushWithoutMedia = Template.bind({});
IosLockScreenExpandedPushWithoutMedia.args = {
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
