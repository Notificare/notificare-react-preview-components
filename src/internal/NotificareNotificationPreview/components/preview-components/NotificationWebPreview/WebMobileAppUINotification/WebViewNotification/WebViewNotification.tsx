import './WebViewNotification.css';

import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';

export function WebViewNotification({ notification }: WebViewNotificationProps) {
  return (
    <iframe
      className="notificare__web__phone__web-view__app-ui__content"
      srcDoc={notification.content[0].data}
      sandbox="allow-same-origin"
      data-testid="web-mobile-app-ui-web-view-notification"
    />
  );
}

export interface WebViewNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.WebView' }>;
}
