import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '../components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

export const MapWithSingleMarker = NotificareNotificationPreviewTemplate.bind({});
MapWithSingleMarker.args = {
  notification: {
    type: 're.notifica.notification.Map',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.Marker',
        data: {
          title: 'Place A',
          description: 'Some description about the place',
          latitude: 41.611765,
          longitude: -8.2837,
        },
      },
    ],
  },
  variant: 'android-app-ui',
};
MapWithSingleMarker.storyName = 'Map - with single marker';

export const MapWithTwoMarkers = NotificareNotificationPreviewTemplate.bind({});
MapWithTwoMarkers.args = {
  notification: {
    type: 're.notifica.notification.Map',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.Marker',
        data: {
          title: 'Place A',
          description: 'Some description about the place',
          latitude: 52.098765,
          longitude: 6.08875,
        },
      },
      {
        type: 're.notifica.content.Marker',
        data: {
          title: 'Place B',
          description: 'Some description about the place',
          latitude: 52.293365,
          longitude: 6.0187,
        },
      },
    ],
  },
  variant: 'android-app-ui',
};
MapWithTwoMarkers.storyName = 'Map - with two markers';
