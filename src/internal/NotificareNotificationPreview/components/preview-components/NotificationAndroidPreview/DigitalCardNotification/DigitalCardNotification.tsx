import './DigitalCardNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function DigitalCardNotification({
  notification,
  appName,
}: DigitalCardNotificationProps) {
  const passUrl = notification.content[0].data;

  return (
    <>
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
    </>
  );
}

interface DigitalCardNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Passbook' }
  >;
  appName: string;
}
