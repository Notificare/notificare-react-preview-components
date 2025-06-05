import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { getPushAPIHost } from '~/internal/network/api';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './DigitalCardNotification.css';

export function DigitalCardNotification({ notification }: DigitalCardNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="android-app-ui-passbook-notification">
      <NavigationBar
        title={notification.title || application.name}
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

export interface DigitalCardNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.Passbook' }
  >;
}
