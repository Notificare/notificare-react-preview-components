import './URLNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import Webshot from '../../../../shared/webshot/Webshot';
import TitleBar from '../title-bar/TitleBar';

interface URLNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.URL' }>;
  appName: string;
}

export default function URLNotification(props: URLNotificationProps) {
  const { notification, appName } = props;

  const url = notification.content[0].data;

  return (
    <IOSPhoneBackground theme="dark">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <Webshot url={url} platform="iOS" width={338} height={601} />
    </IOSPhoneBackground>
  );
}
