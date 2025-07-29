import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificareInAppMessagePreview } from '~/components';
import { BANNER, CARD, FULLSCREEN, INVALID } from './variants';

const meta = {
  title: 'Public Components/In-app messaging/NotificareInAppMessagePreview',
  component: NotificareInAppMessagePreview,
} satisfies Meta<typeof NotificareInAppMessagePreview>;
export default meta;

type Story = StoryObj<typeof meta>;

/* STORIES */

/* BANNER */
export const Banner: Story = {
  args: BANNER,
};

/* CARD */
export const Card: Story = {
  args: CARD,
};

/* FULLSCREEN */
export const Fullscreen: Story = {
  args: FULLSCREEN,
};

/* INVALID */

export const Invalid: Story = {
  args: INVALID,
};
