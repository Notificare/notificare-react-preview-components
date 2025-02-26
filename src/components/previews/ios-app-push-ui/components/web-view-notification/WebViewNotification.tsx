import './WebViewNotification.css';
import { hasActions } from '../../../../../helpers/notification-utils';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import TitleBar from '../title-bar/TitleBar';

interface WebViewNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.WebView' }>;
  appName: string;
}

export default function WebViewNotification(props: WebViewNotificationProps) {
  const { notification, appName } = props;

  const htmlContent = notification.content[0].data;

  return (
    <IOSPhoneBackground theme="dark">
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
    </IOSPhoneBackground>
  );
}
