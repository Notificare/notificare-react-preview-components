import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { MapRichContent } from '~/internal/components/push/platforms/shared/MapRichContent/MapRichContent';
import { useApplication } from '~/internal/context/application';
import { useOptions } from '~/internal/context/options';
import { VerifiedNotification } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { PUSH_TRANSLATIONS } from '~/locales/push/en';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './MapNotification.css';

export function MapNotification({ notification, onError }: MapNotificationProps) {
  const application = useApplication();
  const { googleMapsAPIKey } = useOptions();
  const intl = useIntl();

  useEffect(
    function handleMissingGoogleMapsApiKey() {
      if (!googleMapsAPIKey) {
        onError(
          intl.formatMessage({
            id: 'preview.error.provideGoogleMapsApiKey',
            defaultMessage: PUSH_TRANSLATIONS['preview.error.provideGoogleMapsApiKey'],
          }),
        );
      }
    },
    [googleMapsAPIKey],
  );

  if (!googleMapsAPIKey) {
    return <> </>;
  }

  return (
    <div data-testid="android-app-ui-map-notification">
      <NavigationBar title={application.name} showOptions={hasActions(notification)} />
      <MapRichContent notification={notification} width="100%" height="570px" />
    </div>
  );
}

export interface MapNotificationProps {
  notification: Extract<VerifiedNotification, { type: 're.notifica.notification.Map' }>;
  onError: (message: string) => void;
}
