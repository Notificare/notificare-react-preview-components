import { StoryFn, Meta } from '@storybook/react';
import Controls from './Controls';

export default {
  title: 'ReactComponentLibrary/Controls',
  component: Controls,
} as Meta<typeof Controls>;

const Template: StoryFn<typeof Controls> = (args) => <Controls {...args} />;

export const ControlsTest = Template.bind({});
ControlsTest.args = {
  platform: 'android',
  mobileVariant: 'lockscreen',
};
