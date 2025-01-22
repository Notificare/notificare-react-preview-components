import { StoryFn, Meta } from '@storybook/react';
import WebPushMessage from './WebPushMessage';

export default {
  title: 'ReactComponentLibrary/WebPushMessage',
  component: WebPushMessage,
} as Meta<typeof WebPushMessage>;

const Template: StoryFn<typeof WebPushMessage> = (args) => <WebPushMessage {...args} />;

export const WebPushMessageWithMedia = Template.bind({});
WebPushMessageWithMedia.args = {
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

export const WebPushMessageWithNoMedia = Template.bind({});
WebPushMessageWithNoMedia.args = {
  title: 'Demo Notificare',
  subtitle: 'Subtitle',
  message: 'Message example',
};
