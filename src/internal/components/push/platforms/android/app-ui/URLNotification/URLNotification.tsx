import './URLNotification.css';
import { useEffect, useState } from 'react';
import { useApplication } from '../../../../../../context/application';
import { useOptions } from '../../../../../../context/options';
import { fetchWebsiteMarkup } from '../../../../../../network/requests/website-markup';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import {
  hasActions,
  markupContainsNotificareOpenActionQueryParameter
} from '../../../../../../utils/push-previews/notification';
import { Webshot } from '../../../../../shared/Webshot/Webshot';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function URLNotification({ notification }: URLNotificationProps) {
  const application = useApplication()
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
        title={notification.title || application.name}
        showOptions={
          hasActions(notification) && !markupContainsNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="Android" width={338} height={570} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.URL' }>;
}
