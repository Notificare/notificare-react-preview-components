import './WebViewNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { markupHasNotificareOpenActionQueryParameter } from '../../../../helpers/markupHasNotificareOpenActionQueryParameter';
import { hasActions } from '../../../../helpers/notification-utils';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function WebViewNotification(props: WebViewNotificationProps) {
  const { notification, appName } = props;

  const html = notification.content[0].data;

  return (
    <div data-testid="android-app-ui-web-view-notification">
      <NavigationBar
        appName={appName}
        title={notification.title}
        showOptions={hasActions(notification) && !markupHasNotificareOpenActionQueryParameter(html)}
      />

      <iframe
        className="notificare__push__android__web-view__app-ui__content"
        srcDoc={html}
        sandbox="allow-same-origin"
      />
    </div>
  );
}

interface WebViewNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.WebView' }>;
  appName: string;
}
