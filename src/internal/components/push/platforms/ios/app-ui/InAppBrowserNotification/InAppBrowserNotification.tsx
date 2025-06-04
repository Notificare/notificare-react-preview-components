import './InAppBrowserNotification.css';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { Webshot } from '../../../../../shared/Webshot/Webshot';
import { InAppBrowserBar } from './InAppBrowserBar/InAppBrowserBar';

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
    NotificareNotificationSchema,
    { type: 're.notifica.notification.InAppBrowser' }
  >;
}
