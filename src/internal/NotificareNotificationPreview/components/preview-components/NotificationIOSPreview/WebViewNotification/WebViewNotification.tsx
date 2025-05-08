import './WebViewNotification.css';
import { markupHasNotificareOpenActionQueryParameter } from '../../../../helpers/markupHasNotificareOpenActionQueryParameter';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import TitleBar from '../TitleBar/TitleBar';

export default function WebViewNotification({ notification, appName }: WebViewNotificationProps) {
  const html = notification.content[0].data;

  return (
    <div data-testid="ios-app-ui-web-view-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
        showOptions={hasActions(notification) && !markupHasNotificareOpenActionQueryParameter(html)}
      />
      <iframe
        className="notificare__push__ios__web-view__app-ui__content"
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
