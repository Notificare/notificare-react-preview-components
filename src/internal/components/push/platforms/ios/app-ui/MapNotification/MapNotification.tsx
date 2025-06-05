import { MapRichContent } from '~/internal/components/push/platforms/shared/MapRichContent/MapRichContent';
import { useApplication } from '~/internal/context/application';
import { NotificareNotificationSchema } from '~/internal/schemas/notificare-notification';
import { hasActions } from '~/internal/utils/push-previews/notification';
import { TitleBar } from '../TitleBar/TitleBar';

import './MapNotification.css';

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
