import './MapNotification.css';
import { NotificareNotificationSchema } from '../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../helpers/notification-utils';
import { MapRichContent } from '../../../shared-components/MapRichContent/MapRichContent';
import { TitleBar } from '../TitleBar/TitleBar';

export function MapNotification({ notification, appName }: MapNotificationProps) {
  return (
    <div data-testid="ios-app-ui-map-notification">
      <TitleBar
        appName={appName}
        title={notification.title}
        showOptions={hasActions(notification)}
      />
      <MapRichContent notification={notification} width="100%" height="566px" />
    </div>
  );
}

export interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
  appName: string;
}
