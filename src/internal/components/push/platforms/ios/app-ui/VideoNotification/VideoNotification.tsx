import './VideoNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../../../utils/push-previews/notification';
import { VideoRichContent } from '../../../shared/VideoRichContent/VideoRichContent';
import { TitleBar } from '../TitleBar/TitleBar';

export function VideoNotification({ notification }: VideoNotificationProps) {
  const videoData = notification.content[0];
  const application = useApplication();

  return (
    <div data-testid="ios-app-ui-video-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />
      <VideoRichContent videoData={videoData} width="100%" height="566px" />
    </div>
  );
}

export interface VideoNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Video' }>;
}
