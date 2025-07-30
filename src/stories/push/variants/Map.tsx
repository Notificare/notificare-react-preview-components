import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const MAP_WITH_SINGLE_MARKER: Partial<NotificareNotificationPreviewProps> = {
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

export const MAP_WITH_TWO_MARKERS: Partial<NotificareNotificationPreviewProps> = {
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
