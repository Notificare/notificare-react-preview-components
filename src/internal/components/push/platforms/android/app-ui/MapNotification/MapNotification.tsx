import { MapRichContent } from '~/internal/components/push/platforms/shared/MapRichContent/MapRichContent';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { NavigationBar } from '../NavigationBar/NavigationBar';

import './MapNotification.css';

export function MapNotification({ notification }: MapNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="android-app-ui-map-notification">
      <NavigationBar title={application.name} showOptions={hasActions(notification)} />
      <MapRichContent notification={notification} width="100%" height="570px" />
    </div>
  );
}

export interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
}
