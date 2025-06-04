import './RateNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { Webshot } from '../../../../../shared/Webshot/Webshot';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function RateNotification({
  notification,
}: RateNotificationProps) {
  const application = useApplication();

  // TODO: the package name should be URL encoded.

  return (
    <div data-testid="android-app-ui-rate-notification">
      <NavigationBar title={notification.title || application.name} showOptions={false} />
      <Webshot
        url={`https://play.google.com/store/apps/details?id=${application.androidPackageName}&hl=en`}
        platform={'Android'}
        width={338}
        height={570}
      />
    </div>
  );
}

export interface RateNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Rate' }>;
}
