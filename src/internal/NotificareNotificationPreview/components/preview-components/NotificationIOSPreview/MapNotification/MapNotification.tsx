import './MapNotification.css';
import { getMarkersFromNotification, hasActions } from '../../../../helpers/notification-utils';
import { NotificareNotificationSchema } from '../../../../schemas/notificare-notification/notificare-notification-schema';
import MapRichContent from '../../../shared-components/MapRichContent/MapRichContent';
import TitleBar from '../TitleBar/TitleBar';

export default function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <div data-testid="ios-app-ui-map-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
        hasActions={hasActions(notification)}
      />
      <MapRichContent
        markers={getMarkersFromNotification(notification)}
        width="100%"
        height="566px"
      />
    </div>
  );
}

interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
