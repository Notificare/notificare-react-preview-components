import './WebViewNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import TitleBar from '../title-bar/TitleBar';

export default function WebViewNotification({ notification, appName }: WebViewNotificationProps) {
  const htmlContent = notification.content[0].data;

  return (
    <>
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <iframe
        className="notificare__ios-app-push-ui-web-view-content"
        srcDoc={htmlContent}
        sandbox="allow-same-origin"
      />
    </>
  );
}

interface WebViewNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.WebView' }>;
  appName: string;
}
