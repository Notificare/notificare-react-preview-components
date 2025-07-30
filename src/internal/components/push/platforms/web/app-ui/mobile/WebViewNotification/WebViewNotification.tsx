import { VerifiedNotification } from '~/internal/schemas/notificare-notification';

import './WebViewNotification.css';

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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.WebView' }>;
}
