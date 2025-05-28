import './DigitalCardNotification.css';
import { getPushAPIHost } from '../../../../../network/api';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../shared-components/Webshot/Webshot';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function DigitalCardNotification({
  notification,
  appName,
}: DigitalCardNotificationProps) {
  return (
    <div data-testid="android-app-ui-passbook-notification">
      <NavigationBar
        appName={appName}
        title={notification.title}
        showOptions={hasActions(notification)}
      />
      <Webshot
        url={`${getPushAPIHost()}/pass/web/${notification.content[0].data.split('/')[5]}`}
        platform="Android"
        width={338}
        height={570}
      />
      )
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
