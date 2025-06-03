import { useState } from 'react';
import './InAppBrowserNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { Webshot } from '../../../shared-components/Webshot/Webshot';
import { InAppBrowserBar } from './InAppBrowserBar/InAppBrowserBar';

export function InAppBrowserNotification({ notification }: InAppBrowserNotificationProps) {
  const [isPageTitleLoading, setIsPageTitleLoading] = useState(true);
  const [isWebshotLoading, setIsWebshotLoading] = useState(true);

  const url = notification.content[0].data;

  return (
    <div data-testid="android-app-ui-in-app-browser-notification">
      <InAppBrowserBar
        url={url}
        onLoadingChanged={setIsPageTitleLoading}
        canShow={!isWebshotLoading}
      />
      <Webshot
        url={url}
        platform="Android"
        width={338}
        height={570}
        onLoadingChanged={setIsWebshotLoading}
        canShow={!isPageTitleLoading}
      />
    </div>
  );
}

export interface InAppBrowserNotificationProps {
  notification: Extract<
    NotificareNotificationSchema,
    { type: 're.notifica.notification.InAppBrowser' }
  >;
}
