import './URLNotification.css';
import { useEffect, useState } from 'react';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { fetchWebsiteMarkup } from '../../../../helpers/fetchWebsiteMarkup';
import { markupHasNotificareOpenActionQueryParameter } from '../../../../helpers/markupHasNotificareOpenActionQueryParameter';
import { hasActions } from '../../../../helpers/notification-utils';
import { useOptions } from '../../../OptionsProvider/OptionsProvider';
import { Webshot } from '../../../shared-components/Webshot/Webshot';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function URLNotification({ notification, appName }: URLNotificationProps) {
  const url = notification.content[0].data;

  const [websiteMarkup, setWebsiteMarkup] = useState('');

  const { serviceKey } = useOptions();

  useEffect(function loadWebsiteMarkup() {
    (async () => {
      try {
        const response = await fetchWebsiteMarkup(serviceKey, url);
        setWebsiteMarkup(response);
      } catch (error) {
        console.error('Error fetching website markup:\n\n', error);
      }
    })();
  }, []);

  return (
    <div data-testid="android-app-ui-url-notification">
      <NavigationBar
        appName={appName}
        title={notification.title}
        showOptions={
          hasActions(notification) && !markupHasNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="Android" width={338} height={570} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.URL' }>;
  appName: string;
}
