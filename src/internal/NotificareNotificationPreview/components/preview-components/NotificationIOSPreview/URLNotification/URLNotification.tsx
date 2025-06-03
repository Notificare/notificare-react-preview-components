import './URLNotification.css';
import { useEffect, useState } from 'react';
import { useApplication } from '../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { fetchWebsiteMarkup } from '../../../../helpers/fetchWebsiteMarkup';
import { markupHasNotificareOpenActionQueryParameter } from '../../../../helpers/markupHasNotificareOpenActionQueryParameter';
import { hasActions } from '../../../../helpers/notification-utils';
import { useOptions } from '../../../OptionsProvider/OptionsProvider';
import { Webshot } from '../../../shared-components/Webshot/Webshot';
import { TitleBar } from '../TitleBar/TitleBar';

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
          hasActions(notification) && !markupHasNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="iOS" width={338} height={566} />
    </div>
  );
}

export interface URLNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.URL' }>;
}
