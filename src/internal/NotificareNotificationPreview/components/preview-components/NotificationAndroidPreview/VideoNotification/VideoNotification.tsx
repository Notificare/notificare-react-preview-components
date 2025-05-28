import './VideoNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import VideoRichContent from '../../../shared-components/VideoRichContent/VideoRichContent';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function VideoNotification(props: VideoNotificationProps) {
  const { notification, appName } = props;

  return (
    <div data-testid="android-app-ui-video-notification">
      <NavigationBar
        appName={appName}
        title={notification.title}
        showOptions={hasActions(notification)}
      />
      <VideoRichContent videoData={notification.content[0]} width="100%" height="570px" />
    </div>
  );
}

interface VideoNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Video' }>;
  appName: string;
}
