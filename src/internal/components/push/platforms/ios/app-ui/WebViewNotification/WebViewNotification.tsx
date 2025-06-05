import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import {
  hasActions,
  markupContainsNotificareOpenActionQueryParameter
} from '~/internal/utils/push-previews/notification';
import { TitleBar } from '../TitleBar/TitleBar';

import './WebViewNotification.css';

export function WebViewNotification({ notification }: WebViewNotificationProps) {
  const html = notification.content[0].data;
  const application = useApplication();

  return (
    <div data-testid="ios-app-ui-web-view-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={hasActions(notification) && !markupContainsNotificareOpenActionQueryParameter(html)}
      />
      <iframe
        className="notificare__push__ios__web-view__app-ui__content"
        srcDoc={html}
        sandbox="allow-same-origin"
      />
    </div>
  );
}

export interface WebViewNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.WebView' }>;
}
