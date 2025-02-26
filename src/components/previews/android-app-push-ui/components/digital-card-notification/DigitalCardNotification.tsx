import './DigitalCardNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import NavigationBar from '../navigation-bar/NavigationBar';

interface DigitalCardNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.Passbook' }>;
  appName: string;
}

export default function DigitalCardNotification(props: DigitalCardNotificationProps) {
  const { notification, appName } = props;

  const passUrl = notification.content[0].data;

  return (
    <AndroidPhoneBackground theme="light">
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <iframe
        className="notificare__android-app-push-ui-digital-card-rich-content"
        src={passUrl}
        sandbox="allow-same-origin"
      />
    </AndroidPhoneBackground>
  );
}
