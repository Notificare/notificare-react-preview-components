import './DigitalCardNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import TitleBar from '../title-bar/TitleBar';

interface DigitalCardNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Passbook' }>;
  appName: string;
}

export default function DigitalCardNotification(props: DigitalCardNotificationProps) {
  const { notification, appName } = props;

  const passUrl = notification.content[0].data;

  return (
    <IOSPhoneBackground theme="dark">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <iframe
        className="notificare__ios-app-push-ui-digital-card-rich-content"
        src={passUrl}
        sandbox="allow-same-origin"
      />
    </IOSPhoneBackground>
  );
}
