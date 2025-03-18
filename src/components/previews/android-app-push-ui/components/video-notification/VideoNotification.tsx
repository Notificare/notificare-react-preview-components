import './VideoNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import VideoRichContent from '../../../../shared/video-rich-content/VideoRichContent';
import NavigationBar from '../navigation-bar/NavigationBar';

interface VideoNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Video' }>;
  appName: string;
}

export default function VideoNotification(props: VideoNotificationProps) {
  const { notification, appName } = props;

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <VideoRichContent videoData={notification.content[0]} width="100%" height="580px" />
    </AndroidPhoneBackground>
  );
}
