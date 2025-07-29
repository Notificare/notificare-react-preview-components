import { useApplication } from '~/internal/context/application';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import {
  hasActions,
  markupContainsNotificareOpenActionQueryParameter,
} from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './WebViewNotification.css';

export function WebViewNotification({ notification }: WebViewNotificationProps) {
  const application = useApplication();
  const html = notification.content[0].data;

  return (
    <div data-testid="android-app-ui-web-view-notification">
      <NavigationBar
        title={notification.title || application.name}
        showOptions={
          hasActions(notification) && !markupContainsNotificareOpenActionQueryParameter(html)
        }
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
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.WebView' }>;
}
