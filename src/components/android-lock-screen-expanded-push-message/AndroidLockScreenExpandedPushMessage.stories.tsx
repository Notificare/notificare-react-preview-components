import { StoryFn, Meta } from '@storybook/react';
import AndroidLockScreenExpandedPushMessage from './AndroidLockScreenExpandedPushMessage';

export default {
  title: 'ReactComponentLibrary/AndroidLockScreenExpandedPushMessage',
  component: AndroidLockScreenExpandedPushMessage,
} as Meta<typeof AndroidLockScreenExpandedPushMessage>;

const Template: StoryFn<typeof AndroidLockScreenExpandedPushMessage> = (args) => (
  <AndroidLockScreenExpandedPushMessage {...args} />
);

export const AndroidLockScreenExpandedPushMessageWithMedia = Template.bind({});
AndroidLockScreenExpandedPushMessageWithMedia.args = {
  title: 'Title example',
  subtitle: 'Subtitle',
  message: 'Message example',
  attachments: [
    {
      uri: 'https://push.notifica.re/upload/notification/ba85caa4d851e6b2412338ec41a57e7b991b9c01d55baf2e8c6b33804afb5662/784d409a74b20ee3b889c074eb3b72349b57049a399fc8d0869d657551dbbcea',
      mimeType: 'image/jpeg',
    },
  ],
};

export const AndroidLockScreenExpandedPushMessageWithNoMedia = Template.bind({});
AndroidLockScreenExpandedPushMessageWithNoMedia.args = {
  title: 'Title example',
  subtitle: 'Subtitle',
  message: 'Message example',
};
