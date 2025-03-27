import './WebViewNotification.css';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function WebViewNotification(props: WebViewNotificationProps) {
  const { notification, appName } = props;

  const htmlContent = notification.content[0].data;

  return (
    <>
      <NavigationBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />

      <iframe
        className="notificare__android-app-push-ui-web-view-content"
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
