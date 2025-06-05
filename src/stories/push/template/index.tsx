import { StoryFn } from '@storybook/react';
import { NotificareNotificationPreview } from '~/components';

export const NotificareNotificationPreviewTemplate: StoryFn<
  typeof NotificareNotificationPreview
> = (args) => {
  const defaultArgs = {
    applicationId: '618d0f4edc09fbed1864e8d0',
    showControls: true,
    serviceKey: import.meta.env.VITE_SERVICE_KEY,
    googleMapsAPIKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  };

  return <NotificareNotificationPreview {...defaultArgs} {...args} />;
};
