import './RateNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../shared-components/Webshot/Webshot';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function RateNotification({
  notification,
  appName,
  appAndroidPackageName,
}: RateNotificationProps) {
  return (
    <div data-testid="android-app-ui-rate-notification">
      <NavigationBar appName={appName} title={notification.title} showOptions={false} />
      <Webshot
        url={`https://play.google.com/store/apps/details?id=${appAndroidPackageName}&hl=en`}
        platform={'Android'}
        width={338}
        height={570}
      />
    </div>
  );
}

interface RateNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Rate' }>;
  appName: string;
  appAndroidPackageName: string;
}
