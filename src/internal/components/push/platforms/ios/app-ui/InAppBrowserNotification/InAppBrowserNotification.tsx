import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { InAppBrowserBar } from './InAppBrowserBar/InAppBrowserBar';

import './InAppBrowserNotification.css';

export function InAppBrowserNotification({ notification }: URLNotificationProps) {
  const url = notification.content[0].data;

  return (
    <div data-testid="ios-app-ui-in-app-browser-notification">
      <InAppBrowserBar url={url} />
      <Webshot url={url} platform="iOS" width={338} height={564} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<
    VerifiedNotification,
    { type: 're.notifica.notification.InAppBrowser' | 're.notifica.notification.URLResolver' }
  >;
}
