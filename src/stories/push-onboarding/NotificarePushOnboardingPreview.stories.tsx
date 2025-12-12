import { Meta, StoryObj } from '@storybook/react-vite';
import { NotificarePushOnboardingPreview } from '~/components';
import { NotificarePushOnboardingPreviewProps } from '~/components/NotificarePushOnboardingPreview/NotificarePushOnboardingPreview';
import { DIALOG } from '~/stories/push-onboarding/variants/Dialog';
import {
  FLOATING_BUTTON_BOTTOM_END,
  FLOATING_BUTTON_BOTTOM_START,
  FLOATING_BUTTON_PERMISSION_DENIED,
  FLOATING_BUTTON_PERMISSION_GRANTED,
  FLOATING_BUTTON_TOP_END,
  FLOATING_BUTTON_TOP_START,
} from '~/stories/push-onboarding/variants/FloatingButton';
import { INVALID } from '~/stories/push-onboarding/variants/Invalid';

const defaultArgs: Partial<NotificarePushOnboardingPreviewProps> = {
  applicationId: '618d0f4edc09fbed1864e8d0',
  serviceKey: import.meta.env.VITE_SERVICE_KEY,
};

const meta = {
  title: 'Public Components/Push Onboarding/NotificarePushOnboardingPreview',
  component: NotificarePushOnboardingPreview,
  args: defaultArgs,
} satisfies Meta<typeof NotificarePushOnboardingPreview>;
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
