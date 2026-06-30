import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificarePassPreview } from '~/components/NotificarePassPreview/NotificarePassPreview';
import {
  LOYALTY,
  LOYALTY_WITH_WIDE_PROGRAM_LOGO,
  OFFER,
  OFFER_WITH_WIDE_TITLE_IMAGE,
} from './variants';

const meta = {
  title: 'Public Components/Wallet/NotificarePassPreview',
  component: NotificarePassPreview,
} satisfies Meta<typeof NotificarePassPreview>;
export default meta;

type Story = StoryObj<typeof meta>;

/* STORIES */

/* LOYALTY */
export const Loyalty: Story = {
  args: LOYALTY,
};

export const LoyaltyWithWideProgramLogo: Story = {
  args: LOYALTY_WITH_WIDE_PROGRAM_LOGO,
};

/* OFFER */
export const Offer: Story = {
  args: OFFER,
};

export const OfferWithWideTitleImage: Story = {
  args: OFFER_WITH_WIDE_TITLE_IMAGE,
};
