import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './RateNotification.css';

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
