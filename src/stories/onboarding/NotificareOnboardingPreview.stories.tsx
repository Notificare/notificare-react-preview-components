import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificareOnboardingPreview } from '~/components';
import { NotificareOnboardingPreviewProps } from '~/components/NotificareOnboardingPreview/NotificareOnboardingPreview';
import { DIALOG } from '~/stories/onboarding/variants/Dialog';
import {
  FLOATING_BUTTON_BOTTOM_END,
  FLOATING_BUTTON_BOTTOM_START,
  FLOATING_BUTTON_PERMISSION_DENIED,
  FLOATING_BUTTON_PERMISSION_GRANTED,
  FLOATING_BUTTON_TOP_END,
  FLOATING_BUTTON_TOP_START,
} from '~/stories/onboarding/variants/FloatingButton';
import { INVALID } from '~/stories/onboarding/variants/Invalid';

const defaultArgs: Partial<NotificareOnboardingPreviewProps> = {
  applicationId: '618d0f4edc09fbed1864e8d0',
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
};

const meta = {
  title: 'Public Components/Onboarding/NotificareOnboardingPreview',
  component: NotificareOnboardingPreview,
  args: defaultArgs,
} satisfies Meta<typeof NotificareOnboardingPreview>;
export default meta;

type Story = StoryObj<typeof meta>;

/* STORIES */

/* DIALOG */
export const Dialog: Story = {
  args: DIALOG,
};

/* FLOATING BUTTON */
export const FloatingButtonBottomEnd: Story = {
  name: 'Floating Button - bottom-end alignment',
  args: FLOATING_BUTTON_BOTTOM_END,
};

export const FloatingButtonBottomStart: Story = {
  name: 'Floating Button - bottom-start alignment',
  args: FLOATING_BUTTON_BOTTOM_START,
};

export const FloatingButtonTopEnd: Story = {
  name: 'Floating Button - top-end alignment',
  args: FLOATING_BUTTON_TOP_END,
};

export const FloatingButtonTopStart: Story = {
  name: 'Floating Button - top-start alignment',
  args: FLOATING_BUTTON_TOP_START,
};

export const FloatingButtonPermissionGranted: Story = {
  name: 'Floating Button - permission granted',
  args: FLOATING_BUTTON_PERMISSION_GRANTED,
};

export const FloatingButtonPermissionDenied: Story = {
  name: 'Floating Button - permission denied',
  args: FLOATING_BUTTON_PERMISSION_DENIED,
};

export const Invalid: Story = {
  args: INVALID,
};
