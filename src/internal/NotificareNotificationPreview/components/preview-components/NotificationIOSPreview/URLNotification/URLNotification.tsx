import './URLNotification.css';
import { useEffect, useState } from 'react';
import { fetchWebsiteMarkup } from '../../../../helpers/fetchWebsiteMarkup';
import { markupHasNotificareOpenActionQueryParameter } from '../../../../helpers/markupHasNotificareOpenActionQueryParameter';
import { hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import { useOptions } from '../../../OptionsProvider/OptionsProvider';
import Webshot from '../../../shared-components/Webshot/Webshot';
import TitleBar from '../TitleBar/TitleBar';

export default function URLNotification({ notification, appName }: URLNotificationProps) {
  const url = notification.content[0].data;

  const [websiteMarkup, setWebsiteMarkup] = useState('');

  const { serviceKey } = useOptions().options;

  useEffect(() => {
    (async () => {
      setWebsiteMarkup(await fetchWebsiteMarkup(serviceKey, url));
    })();
  }, []);

  return (
    <div data-testid="ios-app-ui-url-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
        showOptions={
          hasActions(notification) && !markupHasNotificareOpenActionQueryParameter(websiteMarkup)
        }
      />
      <Webshot url={url} platform="iOS" width={338} height={566} />
    </div>
  );
}

interface URLNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.URL' }>;
  appName: string;
}
