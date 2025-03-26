import './VideoNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import VideoRichContent from '../../../../shared-components/video-rich-content/VideoRichContent';
import TitleBar from '../title-bar/TitleBar';

export default function VideoNotification({ notification, appName }: VideoNotificationProps) {
  const videoData = notification.content[0];

  return (
    <>
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <VideoRichContent videoData={videoData} width="100%" height="601px" />
    </>
  );
}

interface VideoNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Video' }>;
  appName: string;
}
