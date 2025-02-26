import './VideoNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import VideoRichContent from '../../../../shared/video-rich-content/VideoRichContent';
import TitleBar from '../title-bar/TitleBar';

interface VideoNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Video' }>;
  appName: string;
}

export default function VideoNotification(props: VideoNotificationProps) {
  const { notification, appName } = props;

  const videoData = notification.content[0];

  return (
    <IOSPhoneBackground theme="dark">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <VideoRichContent videoData={videoData} width="100%" height="601px" />
    </IOSPhoneBackground>
  );
}
