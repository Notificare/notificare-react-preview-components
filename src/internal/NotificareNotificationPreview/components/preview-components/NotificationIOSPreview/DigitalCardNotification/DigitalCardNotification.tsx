import './DigitalCardNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../shared-components/Webshot/Webshot';
import TitleBar from '../TitleBar/TitleBar';

export default function DigitalCardNotification({
  notification,
  appName,
}: DigitalCardNotificationProps) {
  return (
    <div data-testid="ios-app-ui-passbook-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />

      <Webshot
        url={`https://push.notifica.re/pass/web/${notification.content[0].data.split('/')[5]}`}
        platform="iOS"
        width={338}
        height={566}
      />
    </div>
  );
}

interface DigitalCardNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Passbook' }
  >;
  appName: string;
}
