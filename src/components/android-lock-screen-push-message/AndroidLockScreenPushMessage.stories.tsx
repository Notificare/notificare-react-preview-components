import { StoryFn, Meta } from '@storybook/react';
import AndroidLockScreenPushMessage from './AndroidLockScreenPushMessage';

export default {
  title: 'ReactComponentLibrary/AndroidLockScreenPushMessage',
  component: AndroidLockScreenPushMessage,
} as Meta<typeof AndroidLockScreenPushMessage>;

const Template: StoryFn<typeof AndroidLockScreenPushMessage> = (args) => (
  <AndroidLockScreenPushMessage {...args} />
);

export const AndroidLockScreenPushMessageWithMedia = Template.bind({});
AndroidLockScreenPushMessageWithMedia.args = {
  title: 'Demo Notificare',
  subtitle: 'Subtitle',
  message: 'Message example',
  attachments: [
    {
      uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
      mimeType: 'image/jpeg',
    },
  ],
};

export const AndroidLockScreenPushMessageWithNoMedia = Template.bind({});
AndroidLockScreenPushMessageWithNoMedia.args = {
  title: 'Demo Notificare',
  subtitle: 'Subtitle',
  message: 'Message example',
};
