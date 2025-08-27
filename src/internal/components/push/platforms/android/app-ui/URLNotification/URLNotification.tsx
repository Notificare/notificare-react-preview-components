import { useEffect, useState } from 'react';
import { Webshot } from '~/internal/components/shared/Webshot/Webshot';
import { useApplication } from '~/internal/context/application';
import { useOptions } from '~/internal/context/options';
import { fetchWebsiteMarkup } from '~/internal/network/requests/website-markup';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import {
  hasActions,
  markupContainsNotificareOpenActionQueryParameter,
} from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './URLNotification.css';

export function URLNotification({ notification }: URLNotificationProps) {
  const application = useApplication();
  const url = notification.content[0].data;

  const [websiteMarkup, setWebsiteMarkup] = useState('');

  const { serviceKey } = useOptions();

  useEffect(
    function loadWebsiteMarkup() {
      (async () => {
        try {
          const response = await fetchWebsiteMarkup(serviceKey, url);
          setWebsiteMarkup(response);
        } catch (error) {
          console.error('Error fetching website markup:\n\n', error);
        }
      })();
    },
    [url, serviceKey],
  );

  return (
    <div data-testid="android-app-ui-url-notification">
      <NavigationBar
        title={notification.title || application.name}
        showOptions={
          hasActions(notification) &&
          !markupContainsNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="Android" width={338} height={570} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<
    VerifiedNotification,
    { type: 're.notifica.notification.URL' | 're.notifica.notification.URLResolver' }
  >;
}
