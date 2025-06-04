import './WebViewNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import {
  hasActions,
  markupContainsNotificareOpenActionQueryParameter
} from '../../../../../../utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function WebViewNotification({ notification }: WebViewNotificationProps) {
  const application = useApplication();
  const html = notification.content[0].data;

  return (
    <div data-testid="android-app-ui-web-view-notification">
      <NavigationBar
        title={notification.title || application.name}
        showOptions={hasActions(notification) && !markupContainsNotificareOpenActionQueryParameter(html)}
      />

      <iframe
        className="notificare__push__android__web-view__app-ui__content"
        srcDoc={html}
        sandbox="allow-same-origin"
      />
    </div>
  );
}

export interface WebViewNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.WebView' }>;
}
