import { NotificareNotificationPreviewProps } from '~/components/NotificareNotificationPreview/NotificareNotificationPreview';

export const VIDEO_HTML5: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.HTML5Video',
        data: `https://push-test.notifica.re/upload/notification/73ba03436697e0b2b31d946dc4c7bb9f88c6cfb555b4b715a6706af2e7ca9748/75fa502cbaeb5293b7c8f30e8080f11ca98cc54ab627a6a3dff2b715a683a52e`,
      },
    ],
  },
  variant: 'android-app-ui',
};

/* Vimeo Video */

export const VIDEO_VIMEO: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.Vimeo',
        data: '75196023',
      },
    ],
  },
  variant: 'android-app-ui',
};

/* YouTube Video */

export const VIDEO_YOUTUBE: Partial<NotificareNotificationPreviewProps> = {
  notification: {
    type: 're.notifica.notification.Video',
    title: 'Title',
    subtitle: 'Subtitle',
    message: 'Message example',
    content: [
      {
        type: 're.notifica.content.YouTube',
        data: '3t_EN-HZVLw',
      },
    ],
  },
  variant: 'android-app-ui',
};
