import { VideoRichContent } from '~/internal/components/push/platforms/shared/VideoRichContent/VideoRichContent';
import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { TitleBar } from '../TitleBar/TitleBar';

import './VideoNotification.css';

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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Video' }>;
}
