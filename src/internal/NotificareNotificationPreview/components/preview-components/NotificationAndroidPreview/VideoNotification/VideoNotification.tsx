import './VideoNotification.css';
import { useApplication } from '../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import { VideoRichContent } from '../../../shared-components/VideoRichContent/VideoRichContent';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function VideoNotification({ notification }: VideoNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="android-app-ui-video-notification">
      <NavigationBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />
      <VideoRichContent videoData={notification.content[0]} width="100%" height="570px" />
    </div>
  );
}

export interface VideoNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Video' }>;
}
