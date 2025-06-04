import './MapNotification.css';
import { useApplication } from '../../../../../../context/application';
import { NotificareNotificationSchema } from '../../../../../../schemas/notificare-notification/notificare-notification-schema';
import { hasActions } from '../../../../../../utils/push-previews/notification';
import { MapRichContent } from '../../../shared/MapRichContent/MapRichContent';
import { TitleBar } from '../TitleBar/TitleBar';

export function MapNotification({ notification }: MapNotificationProps) {
  const application = useApplication();

  return (
    <div data-testid="ios-app-ui-map-notification">
      <TitleBar
        title={notification.title || application.name}
        showOptions={hasActions(notification)}
      />
      <MapRichContent notification={notification} width="100%" height="566px" />
    </div>
  );
}

export interface MapNotificationProps {
  notification: Extract<NotificareNotificationSchema, { type: 're.notifica.notification.Map' }>;
}
