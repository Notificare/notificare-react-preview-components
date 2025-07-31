import { VideoRichContent } from '~/internal/components/push/platforms/shared/VideoRichContent/VideoRichContent';
import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './VideoNotification.css';

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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Video' }>;
}
