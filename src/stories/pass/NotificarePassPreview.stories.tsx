import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificarePassPreview } from '~/components/NotificarePassPreview/NotificarePassPreview';
import {
  GIFT_CARD,
  GIFT_CARD_WITH_WIDE_PROGRAM_LOGO,
  LOYALTY,
  LOYALTY_WITH_WIDE_PROGRAM_LOGO,
  OFFER,
  OFFER_WITH_WIDE_TITLE_IMAGE,
  EVENT_TICKET,
  EVENT_TICKET_WITH_WIDE_LOGO,
  TRANSIT_PASS_WITH_SINGLE_LEG_ITINERARY,
  TRANSIT_PASS_WITH_MULTIPLE_LEG_ITINERARY,
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
  name: 'Offer -  with wide title image',
  args: OFFER_WITH_WIDE_TITLE_IMAGE,
};

/* GIFT CARD */

export const GiftCard: Story = {
  args: GIFT_CARD,
};

export const GiftCardWithWideProgramLogo: Story = {
  name: 'Gift Card -  with wide program logo',
  args: GIFT_CARD_WITH_WIDE_PROGRAM_LOGO,
};

/* EVENT TICKET */

export const EventTicket: Story = {
  args: EVENT_TICKET,
};

export const EventTicketWithWideLogo: Story = {
  name: 'Event Ticket -  with wide logo',
  args: EVENT_TICKET_WITH_WIDE_LOGO,
};

/* TRANSIT PASS */

export const TransitPassWithSingleLegItinerary: Story = {
  name: 'Transit Pass -  with single leg itinerary',
  args: TRANSIT_PASS_WITH_SINGLE_LEG_ITINERARY,
};

export const TransitPassWithMultipleLegItinerary: Story = {
  name: 'Transit Pass -  with multiple leg itinerary',
  args: TRANSIT_PASS_WITH_MULTIPLE_LEG_ITINERARY,
};
