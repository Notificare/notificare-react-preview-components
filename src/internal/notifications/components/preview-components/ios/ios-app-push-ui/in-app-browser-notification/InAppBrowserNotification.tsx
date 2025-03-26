import './InAppBrowserNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../../shared-components/webshot/Webshot';
import InAppBrowserBar from '../in-app-browser-bar/InAppBrowserBar';

export default function InAppBrowserNotification({ notification }: URLNotificationProps) {
  const url = notification.content[0].data;

  return (
    <>
      <InAppBrowserBar url={url} />
      <Webshot url={url} platform="iOS" width={338} height={564} />
    </>
  );
}

interface URLNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.InAppBrowser' }
  >;
}
