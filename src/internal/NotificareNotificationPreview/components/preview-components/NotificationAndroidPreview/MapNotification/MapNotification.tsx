import './MapNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import { MapRichContent } from '../../../shared-components/MapRichContent/MapRichContent';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <div data-testid="android-app-ui-map-notification">
      <NavigationBar appName={appName} showOptions={hasActions(notification)} />
      <MapRichContent notification={notification} width="100%" height="570px" />
    </div>
  );
}

export interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
