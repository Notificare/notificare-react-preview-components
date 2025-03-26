import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import MapRichContent from '../../../../shared-components/map-rich-content/MapRichContent';
import NavigationBar from '../navigation-bar/NavigationBar';

export default function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <>
      <NavigationBar appName={appName} hasActions={hasActions(notification)} />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="580px"
      />
    </>
  );
}

interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
