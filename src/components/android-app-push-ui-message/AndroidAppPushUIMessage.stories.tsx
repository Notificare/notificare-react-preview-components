import { StoryFn, Meta } from '@storybook/react';
import AndroidAppPushUIMessage from './AndroidAppPushUIMessage';

export default {
  title: 'ReactComponentLibrary/AndroidAppPushUIMessage',
  component: AndroidAppPushUIMessage,
} as Meta<typeof AndroidAppPushUIMessage>;

const Template: StoryFn<typeof AndroidAppPushUIMessage> = (args) => (
  <AndroidAppPushUIMessage {...args} />
);

export const AndroidAppPushUIMessageTextAlert = Template.bind({});
AndroidAppPushUIMessageTextAlert.args = {
  title: 'Demo Notificare',
  subtitle: 'Subtitle',
  message: 'Message example',
};
