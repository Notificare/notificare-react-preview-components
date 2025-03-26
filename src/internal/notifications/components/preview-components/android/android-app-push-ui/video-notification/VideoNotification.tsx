import './VideoNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import VideoRichContent from '../../../../shared-components/video-rich-content/VideoRichContent';
import NavigationBar from '../navigation-bar/NavigationBar';

export default function VideoNotification(props: VideoNotificationProps) {
  const { notification, appName } = props;

  return (
    <>
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <VideoRichContent videoData={notification.content[0]} width="100%" height="580px" />
    </>
  );
}

interface VideoNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Video' }>;
  appName: string;
}
