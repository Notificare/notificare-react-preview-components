import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import MapRichContent from '../../../shared-components/MapRichContent/MapRichContent';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <div data-testid="android-app-ui-map-notification">
      <NavigationBar appName={appName} showOptions={hasActions(notification)} />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="570px"
      />
    </div>
  );
}

interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
