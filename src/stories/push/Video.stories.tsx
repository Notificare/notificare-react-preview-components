import { Meta } from '@storybook/react';
import { NotificareNotificationPreview } from '~/components';
import { NotificareNotificationPreviewTemplate } from './template';

export default {
  title: 'Public Components/Push/NotificareNotificationPreview',
  component: NotificareNotificationPreview,
} satisfies Meta<typeof NotificareNotificationPreview>;

/* HTML5 Video */

export const VideoHTML5 = NotificareNotificationPreviewTemplate.bind({});
VideoHTML5.args = {
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
VideoHTML5.storyName = 'Video - HTML5';

/* Vimeo Video */

export const VideoVimeo = NotificareNotificationPreviewTemplate.bind({});
VideoVimeo.args = {
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
VideoVimeo.storyName = 'Video - Vimeo';

/* YouTube Video */

export const VideoYouTube = NotificareNotificationPreviewTemplate.bind({});
VideoYouTube.args = {
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
VideoYouTube.storyName = 'Video - YouTube';
