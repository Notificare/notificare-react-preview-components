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
import { TitleBar } from '../TitleBar/TitleBar';

import './URLNotification.css';

export function URLNotification({ notification }: URLNotificationProps) {
  const url = notification.content[0].data;
  const application = useApplication();

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
    <div data-testid="ios-app-ui-url-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={
          hasActions(notification) &&
          !markupContainsNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="iOS" width={338} height={566} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.URL' }>;
}
