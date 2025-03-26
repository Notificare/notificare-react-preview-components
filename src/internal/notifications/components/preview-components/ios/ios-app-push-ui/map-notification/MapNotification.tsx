import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import MapRichContent from '../../../../shared-components/map-rich-content/MapRichContent';
import TitleBar from '../title-bar/TitleBar';

export default function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <>
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="601px"
      />
    </>
  );
}

interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
