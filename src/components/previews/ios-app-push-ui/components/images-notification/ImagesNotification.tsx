import './ImagesNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import TitleBar from '../title-bar/TitleBar';

interface ImagesNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Image' }>;
  appName: string;
}

export default function ImagesNotification(props: ImagesNotificationProps) {
  const { notification, appName } = props;

  const image = notification.content[0].data;

  return (
    <IOSPhoneBackground theme="dark">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <img
        className="notificare__ios-app-push-ui-images-notification-image"
        alt="Notification image"
        src={image}
      />
    </IOSPhoneBackground>
  );
}
