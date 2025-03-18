import './URLNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import Webshot from '../../../../shared/webshot/Webshot';
import NavigationBar from '../navigation-bar/NavigationBar';

interface URLNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.URL' }>;
  appName: string;
}

export default function URLNotification(props: URLNotificationProps) {
  const { notification, appName } = props;

  const url = notification.content[0].data;

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />

      <Webshot url={url} platform="Android" width={331} height={580} />
    </AndroidPhoneBackground>
  );
}
