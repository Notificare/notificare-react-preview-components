import { useState } from 'react';
import './InAppBrowserNotification.css';
import { BasePushMessage } from '../../../../../schemas/basePushMessageSchema';
import AndroidPhoneBackground from '../../../../shared/android-phone-background/AndroidPhoneBackground';
import Webshot from '../../../../shared/webshot/Webshot';
import InAppBrowserBar from '../in-app-browser-bar/InAppBrowserBar';

interface InAppBrowserNotificationProps {
  notification: Extract<BasePushMessage, { type: 're.notifica.notification.InAppBrowser' }>;
  appName: string;
}

export default function InAppBrowserNotification(props: InAppBrowserNotificationProps) {
  const { notification } = props;

  const [isPageTitleLoading, setIsPageTitleLoading] = useState(true);
  const [isWebshotLoading, setIsWebshotLoading] = useState(true);

  const url = notification.content[0].data;

  return (
    <AndroidPhoneBackground theme="light">
      <InAppBrowserBar
        url={url}
        onLoadingChange={setIsPageTitleLoading}
        canShow={!isWebshotLoading}
      />
      <Webshot
        url={url}
        platform="Android"
        width={339}
        height={550}
        onLoadingChange={setIsWebshotLoading}
        canShow={!isPageTitleLoading}
      />
    </AndroidPhoneBackground>
  );
}
