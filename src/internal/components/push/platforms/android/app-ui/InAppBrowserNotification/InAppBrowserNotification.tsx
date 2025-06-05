import { useState } from 'react';
import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { InAppBrowserBar } from './InAppBrowserBar/InAppBrowserBar';

import './InAppBrowserNotification.css';

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
