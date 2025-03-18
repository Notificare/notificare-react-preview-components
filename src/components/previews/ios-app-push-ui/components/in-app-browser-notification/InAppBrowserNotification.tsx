import './InAppBrowserNotification.css';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import IOSPhoneBackground from '../../../../shared/ios-phone-background/IOSPhoneBackground';
import Webshot from '../../../../shared/webshot/Webshot';
import InAppBrowserBar from '../in-app-browser-bar/InAppBrowserBar';

interface URLNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.InAppBrowser' }>;
}

export default function InAppBrowserNotification(props: URLNotificationProps) {
  const { notification } = props;

  const url = notification.content[0].data;

  return (
    <IOSPhoneBackground theme="dark">
      <InAppBrowserBar url={url} />
      <Webshot url={url} platform="iOS" width={338} height={564} />
    </IOSPhoneBackground>
  );
}
