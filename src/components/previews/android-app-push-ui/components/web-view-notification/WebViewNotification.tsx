import './WebViewNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import NavigationBar from '../navigation-bar/NavigationBar';

interface WebViewNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.WebView' }>;
  appName: string;
}

export default function WebViewNotification(props: WebViewNotificationProps) {
  const { notification, appName } = props;

  const htmlContent = notification.content[0].data;

  return (
    <AndroidPhoneBackground theme="light">
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
    </AndroidPhoneBackground>
  );
}
