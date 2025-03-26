import { useState } from 'react';
import './InAppBrowserNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import Webshot from '../../../../shared-components/webshot/Webshot';
import InAppBrowserBar from './in-app-browser-bar/InAppBrowserBar';

export default function InAppBrowserNotification({ notification }: InAppBrowserNotificationProps) {
  const [isPageTitleLoading, setIsPageTitleLoading] = useState(true);
  const [isWebshotLoading, setIsWebshotLoading] = useState(true);

  const url = notification.content[0].data;

  return (
    <>
      <InAppBrowserBar
        url={url}
        onLoadingChange={setIsPageTitleLoading}
        canShow={!isWebshotLoading}
      />
      <Webshot
        url={url}
        platform="Android"
        width={339}
        height={580}
        onLoadingChange={setIsWebshotLoading}
        canShow={!isPageTitleLoading}
      />
    </>
  );
}

interface InAppBrowserNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.InAppBrowser' }
  >;
  appName: string;
}
